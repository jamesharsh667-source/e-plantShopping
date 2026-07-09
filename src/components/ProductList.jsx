import plants from "../data/plants";
import ProductCard from "./ProductCard";

function ProductList({ addToCart }) {
  const categories = [...new Set(plants.map((plant) => plant.category))];

  return (
    <div className="product-list-container">
      {categories.map((category) => (
        <div key={category}>
          <h2 className="category-title">{category} Plants</h2>

          <div className="product-list">
            {plants
              .filter((plant) => plant.category === category)
              .map((plant) => (
                <ProductCard
                  key={plant.id}
                  plant={plant}
                  addToCart={addToCart}
                />
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;