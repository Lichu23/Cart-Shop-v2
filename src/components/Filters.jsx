import { useId } from "react";
import { useFilters } from "../hooks/useFilters";

const Filters = () => {
  const { filters, setFilters } = useFilters();

  const minPriceFilterId = useId();
  const categoryFilterId = useId();

  const handleChangePrice = (e) => {
    setFilters((prevState) => ({
      ...prevState,
      minPrice: e.target.value,
    }));
  };

  const handleChangeCategory = (e) => {
    setFilters((prevState) => ({
      ...prevState,
      category: e.target.value,
    }));
  };

  return (
    <div className="md: px-12 flex justify-between uppercase text-sm font-bold">
      <aside className="flex">
        <label htmlFor={minPriceFilterId}>Price from: </label>
        <input
          id={minPriceFilterId}
          type="range"
          min="0"
          max="600"
          onChange={handleChangePrice}
          value={filters.minPrice}
        />
        <span>${filters.minPrice}</span>
      </aside>

      <div>
        <select
          className="uppercase rounded-md"
          id={categoryFilterId}
          onChange={handleChangeCategory}
        >
          <option value="all">all</option>
          <option value="men's clothing">men clothes</option>
          <option value="jewelery">jewelery</option>
          <option value="electronics">electronics</option>
        </select>
      </div>
    </div>
  );
};

export default Filters;
