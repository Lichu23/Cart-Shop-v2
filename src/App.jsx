import { useContext, useEffect, useState } from "react";
import Products from "./components/Products";
import Header from "./components/Header";
import { FiltersContext } from "./context/useContext";

function App() {
  const PRODUCTS_API = "https://fakestoreapi.com/products?limit=10";
  const [products, setProducts] = useState([]);

  const useFilters = () => {
    const { filters, setFilters } = useContext(FiltersContext);

    const getProducts = async () => {
      const response = await fetch(PRODUCTS_API);
      const data = await response.json();
      setProducts(data);
    };

    useEffect(() => {
      getProducts();
    }, []);

    const filterProducts = (products) => {
      return products.filter((product) => {
        return (
          product.price >= filters.minPrice &&
          (filters.category === "all" || product.category === filters.category)
        );
      });
    };
    return { filterProducts, setFilters };
  };

  const { filterProducts, setFilters } = useFilters();
  const filteredProducts = filterProducts(products);

  return (
    <div className="flex content-center justify-center">
      <Header changeFilters={setFilters} />
      <Products products={filteredProducts} />
    </div>
  );
}

export default App;
