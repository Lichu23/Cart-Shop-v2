import Products from "./components/Products";
import Header from "./components/Header";
import { useFilters } from "./hooks/useFilters";
import Cart from "./components/Cart";
import { CartProvider } from "./context/CartContext";

function App() {
  const { filteredProducts } = useFilters();

  return (
    <CartProvider>
      <Header />
      <Cart />
      <Products products={filteredProducts} />
    </CartProvider>
  );
}

export default App;
