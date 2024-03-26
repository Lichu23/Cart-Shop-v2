export const cartInitialState =
  JSON.parse(window.localStorage.getItem("cart")) || [];

export const updateLocalStorage = (state) => {
  window.localStorage.setItem("cart", JSON.stringify(state));
};

//transformar el state a partir del action para devolver un state nuevo o viejo
export const cartReducer = (state, action) => {
  //El type le pasamos el string para identificar la accion q tiene q hacer
  //El payload le pasamos todo el objeto q necesitamos para actualizar el estado
  const { type: actionType, payload: actionPayload } = action;

  switch (actionType) {
    case "ADD_TO_CART": {
      const { id } = actionPayload;
      const productInCartIndex = state.findIndex((item) => item.id === id);

      if (productInCartIndex >= 0) {
        const newCart = structuredClone(state);
        newCart[productInCartIndex].quantity += 1;
        return newCart;
      }

      const newState = [
        ...state,
        {
          ...actionPayload, //product
          quantity: 1,
        },
      ];
      updateLocalStorage(newState);
      return newState;
    }

    case "REMOVE_FROM_CART": {
      const { id } = actionPayload;
      const newState = state.filter((item) => item.id !== id);
      updateLocalStorage(newState);
      return newState;
    }

    case "CLEAN_CART": {
      updateLocalStorage(cartInitialState);

      return cartInitialState;
    }
  }
  return state;
};
