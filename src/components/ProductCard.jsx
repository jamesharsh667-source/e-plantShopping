function ProductCard({ plant, addToCart, isAdded }) {
  const handleAdd = () => {
    addToCart(plant);
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
        disabled={isAdded}
      >
        {isAdded ? "Added to Cart" : "Add to Cart"}
      </button>
    </div>
  );
}

export default ProductCard;
