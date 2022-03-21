import React, { Component, useState } from "react";
import { AddToCartButton } from "./AddToCartButton";
import { Carrousel } from "./Carrousel";
import { Counter } from "./Counter";
import { useCart } from "../contexts/CartContext";

export const ProductDetail = () => {
  const [count, setCount] = useState(0);
  const {addItem} = useCart()
  return (
    <div>
      <Carrousel />
      <div className="description">
      <b className="brand">SNEAKER COMPANY</b>
      <h2 className="productTitle">Fall Limited Edition Sneakers</h2>
      <p className="productDescription">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>
      <div className="priceContainer">
        <div className="container">
          <b className="productPrice">$125.00</b>
          <div className="discount">50%</div>
        </div>
        <div className="productRegularPrice">$250.00</div>
      </div>
      </div>
      <Counter count={count} setCount={setCount} />
      <AddToCartButton count={count} addItem={addItem} setCount={setCount}/>
    </div>
  );
};
