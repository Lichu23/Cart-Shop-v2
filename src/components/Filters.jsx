import { useState, useId } from "react";

const Filters = ({ changeFilters }) => {
  const [minPrice, setMinPrice] = useState(0);

  const minPriceFilterId = useId();
  const categoryFilterId = useId();

  const handleChangePrice = (e) => {
    setMinPrice(e.target.value);
    changeFilters((prevState) => ({
      ...prevState,
      minPrice: e.target.value,
    }));
  };

  const handleChangeCategory = (e) => {
    changeFilters((prevState) => ({
      ...prevState,
      category: e.target.value,
    }));
  };

  return (
    <div>
      <aside>
        <label htmlFor={minPriceFilterId}>Price from: </label>
        <input
          id={minPriceFilterId}
          type="range"
          min="0"
          max="600"
          onChange={handleChangePrice}
        />
        <span>${minPrice}</span>
      </aside>

      <div>
        <label htmlFor={categoryFilterId}>Category</label>
        <select id={categoryFilterId} onChange={handleChangeCategory}>
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
