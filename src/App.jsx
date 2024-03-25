import Products from "./components/Products";
import Header from "./components/Header";
import { useFilters } from "./hooks/useFilters";
import Cart from "./components/Cart";
import { CartProvider } from "./context/CartContext";

function App() {
  const { filteredProducts } = useFilters();

  return (
    <CartProvider>
      <div className="bg-slate-400 w-full h-full">
        <Cart />
        <Header />
        <Products products={filteredProducts} />
      </div>
    </CartProvider>
  );
}

export default App;
