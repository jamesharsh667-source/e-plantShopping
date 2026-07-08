import plants from "../data/plants";
import ProductCard from "./ProductCard";

function ProductList({ addToCart }) {
  return (
    <div className="product-list">
      {plants.map((plant) => (
        <ProductCard
          key={plant.id}
          plant={plant}
          addToCart={addToCart}
        />
      ))}
    </div>
  );
}

export default ProductList;