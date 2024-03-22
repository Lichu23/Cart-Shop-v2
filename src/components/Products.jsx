import { useCart } from "../hooks/useCart";

const Products = ({ products }) => {
  const { addToCart, removeFromCart, cart } = useCart();

  console.log(cart);
  const checkProductInCart = (product) => {
    return cart.some((item) => item.id === product.id);
  };

  return (
    <div className="text-2xl">
      {products.map((prod) => {
        const isProductInCart = checkProductInCart(prod);
        return (
          <ul key={prod.id}>
            <div className="p-20">
              <div>{prod.title}</div>
              <div className="flex">
                <img
                  src={prod.image}
                  alt={prod.title}
                  className="h-[150px] w-[150px]"
                />
              </div>

              <div>${prod.price}</div>
              <button
                onClick={() => {
                  isProductInCart ? removeFromCart(prod) : addToCart(prod);
                }}
                className="border rounded-lg hover:bg-color-gray-400"
              >
                {isProductInCart ? "Remove from Cart" : "Add to Cart"}
              </button>
            </div>
          </ul>
        );
      })}
    </div>
  );
};

export default Products;
