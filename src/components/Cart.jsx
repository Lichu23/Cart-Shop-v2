import { useCart } from "../hooks/useCart";

function CartItem({ title, price, image, quantity, addToCart }) {
  return (
    <>
      <li>
        <img src={image} className="h-[120px] w-[200px]" />
        <div>
          {title} - ${price}
        </div>
        <footer>
          <small>quantity:{quantity}</small>
          <button onClick={addToCart}>+</button>
        </footer>
      </li>
    </>
  );
}

const Cart = () => {
  const { cart, addToCart, cleanCart } = useCart();

  return (
    <>
      <label>CartIcon</label>
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
        <button onClick={cleanCart}>Clean Cart</button>
      </aside>
    </>
  );
};

export default Cart;
