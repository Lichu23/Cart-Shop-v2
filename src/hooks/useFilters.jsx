import { useContext, useEffect, useState } from "react";
import { FiltersContext } from "../context/useContext";

export const useFilters = () => {
  const PRODUCTS_API = "https://fakestoreapi.com/products?limit=10";

  const [products, setProducts] = useState([]);

  const { filters, setFilters } = useContext(FiltersContext);

  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch(PRODUCTS_API);
      const data = await response.json();
      setProducts(data);
    };
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
  const filteredProducts = filterProducts(products);

  return { filterProducts, filteredProducts, setFilters, filters };
};
