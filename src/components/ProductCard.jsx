function ProductCard({ plant, addToCart }) {
  return (
    <div className="product-card">
      <img src={plant.image} alt={plant.name} />

      <h3>{plant.name}</h3>

      <p>Category: {plant.category}</p>

      <h4>${plant.price}</h4>

      <button onClick={() => addToCart(plant)}>
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;