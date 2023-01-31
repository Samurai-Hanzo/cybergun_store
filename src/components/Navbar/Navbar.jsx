import React from "react";
import CartLogo from "../../assets/details/shopping-cart.png";

const Navbar = () => {
  return (
    <div className="container">
      <div className="navbar-wrapper">
        <div className="logo-wrapper">
          <span className="logo">cybergun</span>
        </div>
        <div className="menu-wrapper">
          <select className="select">
            <option value="small">Store</option>
            <option value="family">All</option>
            <option value="lux">New</option>
          </select>
          <span>Contact Us</span>
          <span>Support</span>
        </div>
        <div className="login-wrapper">
          <span>Log In</span>
          <div className="cart-icon-wrapper">
            <img className="cart-icon" src={CartLogo} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
