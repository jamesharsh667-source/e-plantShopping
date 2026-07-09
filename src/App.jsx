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
    setCart([...cart, plant]);
  };

  const removeFromCart = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
  };

 return (
  <>
    {showLandingPage ? (
      <LandingPage
        onGetStarted={() => setShowLandingPage(false)}
      />
    ) : (
      <>
        <Navbar />
        <AboutUs />
        <ProductList addToCart={addToCart} />
        <ShoppingCart
          cart={cart}
          removeFromCart={removeFromCart}
        />
      </>
    )}
  </>
);
}

export default App;