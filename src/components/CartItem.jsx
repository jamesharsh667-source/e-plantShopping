function CartItem({ plant, index, removeFromCart }) {
  return (
    <div className="cart-item">
      <h4>{plant.name}</h4>

      <p>${plant.price}</p>

      <button onClick={() => removeFromCart(index)}>
        Remove
      </button>
    </div>
  );
}

export default CartItem;