const Products = ({ products }) => {
  return (
    <div className="text-2xl">
      {products.map((prod) => (
        <ul key={prod.id}>
          <div className="p-20">
            <div>{prod.title}</div>
            <div className="flex">
              <img
                src={prod.image}
                alt={prod.title}
                className="h-[150px] w-[150px]"
              />
            </div>

            <div>${prod.price}</div>
            <button className="border rounded-lg hover:bg-color-gray-400">
              Add to Cart
            </button>
          </div>
        </ul>
      ))}
    </div>
  );
};

export default Products;
