import CartItem from "./CartItem";

function ShoppingCart({ cart, removeFromCart }) {
  return (
    <div className="shopping-cart">
      <h2>🛒 Shopping Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map((plant, index) => (
          <CartItem
            key={index}
            plant={plant}
            index={index}
            removeFromCart={removeFromCart}
          />
        ))
      )}
    </div>
  );
}

export default ShoppingCart;