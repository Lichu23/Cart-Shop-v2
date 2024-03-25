import { useCart } from "../hooks/useCart";

const Products = ({ products }) => {
  const { addToCart, removeFromCart, cart } = useCart();

  const checkProductInCart = (product) => {
    return cart.some((item) => item.id === product.id);
  };

  return (
    <div className="grid justify-center items-center  md:flex flex-wrap">
      {products.map((prod) => {
        const isProductInCart = checkProductInCart(prod);

        return (
          <ul key={prod.id}>
            <div className="mt-5 mx-5 grid justify-center items-center uppercase font-bold bg-slate-50 rounded-lg h-[260px] w-[260px]">
              <div>{prod.title.split(" ").slice(0, 3).join(" ")}</div>
              <img
                src={prod.image}
                alt={prod.title}
                className="rounded-lg object-cover h-[150px] w-[150px]"
              />

              <div className="w-full flex justify-between">
                <div>${prod.price}</div>

                <button
                  onClick={() => {
                    isProductInCart ? removeFromCart(prod) : addToCart(prod);
                  }}
                  className="border rounded-lg hover:bg-color-gray-400"
                >
                  {isProductInCart ? "Remove" : "Add"}
                </button>
              </div>
            </div>
          </ul>
        );
      })}
    </div>
  );
};

export default Products;
