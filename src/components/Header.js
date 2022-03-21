import React from "react";
import Logo from "./Icons/Logo";
import Burger from "./Icons/Burger";
import CartWidget from "./CartWidget";
import avatar from "../images/image-avatar.png";

export const Header = ({ setShowNav, setShowCart }) => {
  return (
    <header>
      <div className="container">
        <div onClick={() => setShowNav(true)}>
          <Burger />
        </div>
        <Logo />
      </div>
      <div className="container">
        <div onClick={() => setShowCart(true)}>
          <CartWidget />
        </div>
        <img
          src={avatar}
          style={{ height: "25px", width: "25px", marginLeft: "20px" }}
        />
      </div>
    </header>
  );
};
