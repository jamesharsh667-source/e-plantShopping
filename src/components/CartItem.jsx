function CartItem({
  plant,
  index,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
}) {
  return (
    <div className="cart-item">
      <h3>{plant.name}</h3>

      <img
        src={plant.image}
        alt={plant.name}
        width="120"
      />

      <p>Price: ${plant.price}</p>

      <div>
        <button onClick={() => decreaseQuantity(index)}>-</button>

        <span style={{ margin: "0 15px" }}>
          {plant.quantity}
        </span>

        <button onClick={() => increaseQuantity(index)}>+</button>
      </div>

      <p>
        Total: <strong>${plant.price * plant.quantity}</strong>
      </p>

      <button onClick={() => removeFromCart(index)}>
        Remove
      </button>
    </div>
  );
}

export default CartItem;
