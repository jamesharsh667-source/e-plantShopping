import { useState } from "react";

function ProductCard({ plant, addToCart }) {
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addToCart(plant);
    setAdded(true);
  };

  return (
    <div className="product-card">
      <img src={plant.image} alt={plant.name} />

      <h3>{plant.name}</h3>

      <p><strong>Category:</strong> {plant.category}</p>

      <p>{plant.description}</p>

      <h4>${plant.price}</h4>

      <button
        onClick={handleAdd}
        disabled={added}
      >
        {added ? "Added ✓" : "Add to Cart"}
      </button>
    </div>
  );
}

export default ProductCard;