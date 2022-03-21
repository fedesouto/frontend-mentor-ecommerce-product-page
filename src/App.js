import React, { useState } from "react";
import { Header } from "./components/Header";
import { ProductDetail } from "./components/ProductDetail";
import { MobileNavBar } from "./components/NavBar/MobileNavBar";
import { CartProvider } from "./contexts/CartContext";
import Cart from "./components/Cart";
import OutsideClickHandler from "react-outside-click-handler";

const App = () => {
  const [showNav, setShowNav] = useState(false);
  const [showCart, setShowCart] = useState(false);
  return (
    <div>
      <CartProvider>
        <Header setShowNav={setShowNav} setShowCart={setShowCart} />
        <MobileNavBar showNav={showNav} setShowNav={setShowNav} />
        <OutsideClickHandler onOutsideClick={() => setShowCart(false)}>
          <Cart showCart={showCart} setShowCart={setShowCart} />
        </OutsideClickHandler>
        <ProductDetail />
      </CartProvider>
    </div>
  );
};

export default App;
