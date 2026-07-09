import fallbackPlantImage from "../assets/hero.png";

function ProductCard({ plant, addToCart, isAdded }) {
  const handleAdd = () => {
    addToCart(plant);
  };

  const handleImageError = (event) => {
    event.currentTarget.onerror = null;
    event.currentTarget.src = fallbackPlantImage;
  };

  return (
    <div className="product-card">
      <img
        src={plant.image}
        alt={plant.name}
        onError={handleImageError}
      />

      <h3>{plant.name}</h3>

      <p><strong>Category:</strong> {plant.category}</p>

      <p>{plant.description}</p>

      <h4>${plant.price}</h4>

      <button
        onClick={handleAdd}
        disabled={isAdded}
      >
        {isAdded ? "Added to Cart" : "Add to Cart"}
      </button>
    </div>
  );
}

export default ProductCard;
