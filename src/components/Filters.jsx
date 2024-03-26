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
    <div className="flex justify-between content-center items-center p-10 font-bold">
      <aside className="flex flex-col">
        <label htmlFor={minPriceFilterId}>Price from: </label>
        <div className="flex">
          <input
            id={minPriceFilterId}
            type="range"
            min="0"
            max="600"
            onChange={handleChangePrice}
            value={filters.minPrice}
          />

          <span>${filters.minPrice}</span>
        </div>
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
