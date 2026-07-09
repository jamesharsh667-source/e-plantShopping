import CartItem from "./CartItem";

function ShoppingCart({
  cart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
}) {
  const grandTotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="shopping-cart">
      <h2>🛒 Shopping Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map((plant, index) => (
            <CartItem
              key={index}
              plant={plant}
              index={index}
              removeFromCart={removeFromCart}
              increaseQuantity={increaseQuantity}
              decreaseQuantity={decreaseQuantity}
            />
          ))}

          <hr />

          <h2>
            Grand Total: ${grandTotal}
          </h2>

          <button>
            Continue Shopping
          </button>

          <button
            style={{
              marginLeft: "15px",
            }}
          >
            Checkout
          </button>
        </>
      )}
    </div>
  );
}

export default ShoppingCart;
