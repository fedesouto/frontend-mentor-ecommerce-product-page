import React from "react";
import CloseIcon from "../Icons/CloseIcon";

export const MobileNavBar = ({showNav, setShowNav}) => {
  if(showNav){
  return (
    <div className="mobileNavBarContainer">
      <div className="mobileNavBar">
        <div onClick={() => setShowNav(false)}>
        <CloseIcon />
        </div>
        <ul>
          <li className="navLink">Collections</li>
          <li className="navLink">Men</li>
          <li className="navLink">Women</li>
          <li className="navLink">About</li>
          <li className="navLink">Contact</li>
        </ul>
      </div>
    </div>
  )}
  else return null;
};
