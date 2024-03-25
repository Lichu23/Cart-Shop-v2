import { createContext, useReducer } from "react";
import { cartInitialState, cartReducer } from "../reducers/cartReducer";
export const CartContext = createContext();

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, cartInitialState);

  const addToCart = (product) =>
    dispatch({
      type: "ADD_TO_CART",
      payload: product,
    });

  const removeFromCart = (product) =>
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: product,
    });
  const cleanCart = () => {
    dispatch({ type: "CLEAN_CART" });
  };

  return (
    <CartContext.Provider
      value={{ cart: state, addToCart, removeFromCart, cleanCart }}
    >
      {children}
    </CartContext.Provider>
  );
}
