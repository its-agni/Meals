import React, { useState } from "react";
import Header from "./components/Layout/Header";
import MealSummary from "./components/Meals/MealSummary";
import AvailableMeals from "./components/Meals/AvailableMeals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartDisplay, setCartDisplay] = useState(false);

  const displayHandler = () => {
    setCartDisplay(true);
  };
  const hideHandler = () => {
    setCartDisplay(false);
  };
  return (
    <CartProvider>
      {cartDisplay && <Cart onClose={hideHandler} />}
      <Header onCartClick={displayHandler} />
      <main>
        <MealSummary />
        <AvailableMeals />
      </main>
    </CartProvider>
  );
}

export default App;
