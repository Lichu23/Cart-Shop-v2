import Products from "./components/Products";
import Header from "./components/Header";
import { useFilters } from "./hooks/useFilters";
import { CartProvider } from "./context/CartContext";
import Modal from "./components/CartModal";

function App() {
  const { filteredProducts } = useFilters();

  return (
    <CartProvider>
      <div className="bg-slate-400 w-full h-screen">
        <Modal />
        <Header />
        <Products products={filteredProducts} />
      </div>
    </CartProvider>
  );
}

export default App;
