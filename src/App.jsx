import Products from "./components/Products";
import Header from "./components/Header";
import { useFilters } from "./hooks/useFilters";

function App() {
  const { filteredProducts } = useFilters();

  return (
    <div className="flex content-center justify-center">
      <Header />
      <Products products={filteredProducts} />
    </div>
  );
}

export default App;
