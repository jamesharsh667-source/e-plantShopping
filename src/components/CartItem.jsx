import { useState } from "react";

function CartItem({ plant, index, removeFromCart }) {
  const [quantity, setQuantity] = useState(1);

  const increase = () => {
    setQuantity(quantity + 1);
  };

  const decrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

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
        <button onClick={decrease}>-</button>

        <span style={{ margin: "0 15px" }}>
          {quantity}
        </span>

        <button onClick={increase}>+</button>
      </div>

      <p>
        Total: <strong>${plant.price * quantity}</strong>
      </p>

      <button onClick={() => removeFromCart(index)}>
        Remove
      </button>
    </div>
  );
}

export default CartItem;