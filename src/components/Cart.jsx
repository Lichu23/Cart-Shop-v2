import { useCart } from "../hooks/useCart";
import { SquarePlus } from "lucide-react";

function CartItem({ title, price, image, quantity, addToCart }) {
  return (
    <div className="bg-gray-400 rounded-lg py-4 items-center p-4">
      <ul className="flex flex-col justify-center items-center">
        <img src={image} className="h-[200px] w-[200px] object-cover" />
        <div className="text-xl font-bold">
          {title.split(" ").slice(0, 3).join(" ")} - ${price}
          <footer className="flex gap-2">
            <small>Qty: {quantity}</small>
            <button onClick={addToCart}>
              <SquarePlus size={20} />
            </button>
          </footer>
        </div>
      </ul>
    </div>
  );
}

const Cart = () => {
  const { cart, addToCart } = useCart();

  return (
    <>
      <aside>
        <ul>
          {cart.map((product) => (
            <CartItem
              key={product.id}
              addToCart={() => addToCart(product)}
              {...product}
            />
          ))}
        </ul>
      </aside>
    </>
  );
};

export default Cart;
