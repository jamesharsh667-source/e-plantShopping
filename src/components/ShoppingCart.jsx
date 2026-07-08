function ShoppingCart({ cart, removeFromCart }) {
  return (
    <div className="shopping-cart">
      <h2>🛒 Shopping Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map((plant, index) => (
          <div key={index} className="cart-item">

            <h4>{plant.name}</h4>

            <p>${plant.price}</p>

            <button onClick={() => removeFromCart(index)}>
              Remove
            </button>

          </div>
        ))
      )}
    </div>
  );
}

export default ShoppingCart;