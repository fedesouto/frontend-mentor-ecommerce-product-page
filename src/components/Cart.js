import React from "react";
import { useCart } from "../contexts/CartContext";
import CartItem from "./CartItem";

const Cart = ({ showCart, setShowCart }) => {
  const { cart, emptyCart } = useCart();
  return (
    <div
      tabIndex={1}
      className={showCart ? "cartContainer" : "hide"}
      onBlur={() => setShowCart(false)}
    >
      <h3>Cart</h3>
      <hr className="separator" />
      <div className="cart">
        {cart ? <div><CartItem quantity={cart} /> <button className="addToCart">Checkout</button></div> : <b>Your cart is empty.</b>}
      </div>
    </div>
  );
};

export default Cart;
