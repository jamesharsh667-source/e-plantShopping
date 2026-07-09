import { useState } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import AboutUs from "./components/AboutUs";
import ProductList from "./components/ProductList";
import ShoppingCart from "./components/ShoppingCart";
import LandingPage from "./components/LandingPage";

function App() {
  const [cart, setCart] = useState([]);
  const [showLandingPage, setShowLandingPage] = useState(true);

  const addToCart = (plant) => {
    setCart((prevCart) => {
      const existingPlant = prevCart.find((item) => item.id === plant.id);

      if (existingPlant) {
        return prevCart.map((item) =>
          item.id === plant.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prevCart, { ...plant, quantity: 1 }];
    });
  };

  const removeFromCart = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
  };

  const increaseQuantity = (index) => {
    setCart((prevCart) =>
      prevCart.map((item, i) =>
        i === index ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (index) => {
    setCart((prevCart) =>
      prevCart
        .map((item, i) =>
          i === index ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const handleGetStarted = () => {
    setShowLandingPage(false);
  };

  return (
    <>
      {showLandingPage ? (
        <LandingPage
          onGetStarted={handleGetStarted}
        />
      ) : (
        <>
          <Navbar cartCount={cart.length} />
          <AboutUs />
          <ProductList addToCart={addToCart} />
          <ShoppingCart
            cart={cart}
            removeFromCart={removeFromCart}
            increaseQuantity={increaseQuantity}
            decreaseQuantity={decreaseQuantity}
          />
        </>
      )}
    </>
  );
}

export default App;
