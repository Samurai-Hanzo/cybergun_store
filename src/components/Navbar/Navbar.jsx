import React from "react";

const Navbar = () => {
  return (
    <div>
      <div className="logo-wrapper">
        <span>cuberpank</span>
      </div>
      <div>
        <select className="select">
          <option value="small">Small</option>
          <option value="family">Family Sedan</option>
          <option value="lux">Luxury</option>
        </select>
        <span>Contact Us</span>
        <span>Support</span>
      </div>
      <div>
        <span>Log In</span>
        <div className="cart-icon-wrapper">
          <img
            className="cart-icon"
            src="../../../assets/details/shopping-cart.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
