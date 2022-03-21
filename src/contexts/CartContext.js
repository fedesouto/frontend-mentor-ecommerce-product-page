import React, { createContext, useContext, useState } from "react";

export const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(0);
  const addItem = (quantity) => {
    setCart(cart + quantity);
  };
  const emptyCart = () => {
    setCart(0);
  };
  return (
    <CartContext.Provider value={{ cart, setCart, addItem, emptyCart }}>
      {children}
    </CartContext.Provider>
  );
};
