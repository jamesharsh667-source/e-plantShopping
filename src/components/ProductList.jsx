import plants from "../data/plants";
import ProductCard from "./ProductCard";

function ProductList({ addToCart, cart }) {
  const indoorPlants = plants.filter(
    (plant) => plant.category === "Indoor"
  );

  const floweringPlants = plants.filter(
    (plant) => plant.category === "Flowering"
  );

  const succulentPlants = plants.filter(
    (plant) => plant.category === "Succulent"
  );

  return (
    <div className="product-list-container">

      <h2 className="category-title">Indoor Plants</h2>
      <div className="product-list">
        {indoorPlants.map((plant) => (
          <ProductCard
            key={plant.id}
            plant={plant}
            addToCart={addToCart}
            isAdded={cart.some((item) => item.id === plant.id)}
          />
        ))}
      </div>

      <h2 className="category-title">Flowering Plants</h2>
      <div className="product-list">
        {floweringPlants.map((plant) => (
          <ProductCard
            key={plant.id}
            plant={plant}
            addToCart={addToCart}
            isAdded={cart.some((item) => item.id === plant.id)}
          />
        ))}
      </div>

      <h2 className="category-title">Succulent Plants</h2>
      <div className="product-list">
        {succulentPlants.map((plant) => (
          <ProductCard
            key={plant.id}
            plant={plant}
            addToCart={addToCart}
            isAdded={cart.some((item) => item.id === plant.id)}
          />
        ))}
      </div>

    </div>
  );
}

export default ProductList;
