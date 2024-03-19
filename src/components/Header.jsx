import Filters from "./Filters";

const Header = ({ changeFilters }) => {
  return (
    <>
      <h1 className="text-6xl text-center">Clothes Shop</h1>
      <Filters changeFilters={changeFilters} />
    </>
  );
};

export default Header;
