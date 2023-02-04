import { Link } from "react-router-dom";
import React, { useState } from "react";
import CartLogo from "../../assets/details/shopping-cart.png";
import { useAuth } from "../../contexts/AuthContextProvider";
import { Button } from "@mui/material";
import Drawer from "../Drawer/Drawer";

const Navbar = () => {
  const { user, handleLogOut } = useAuth();
  const [showCart, setShowCart] = useState(false);
  return (
    <div className="container">
      {showCart ? <Drawer setShowCart={setShowCart} /> : null}
      <div className="navbar-wrapper">
        <div className="logo-wrapper">
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            <span className="logo">cybergun</span>
          </Link>
        </div>
        <div className="menu-wrapper">
          <Link
            to="/products"
            style={{ textDecoration: "none", color: "black" }}
          >
            <span>Store</span>
          </Link>
          <Link
            to="/aboutus"
            style={{ textDecoration: "none", color: "black" }}
          >
            <span>About Us</span>
          </Link>
          <Link to="/admin" style={{ textDecoration: "none", color: "black" }}>
            <span>Admin</span>
          </Link>
        </div>
        <div className="login-wrapper">
          {user?.email ? (
            <span onClick={handleLogOut}>Log out</span>
          ) : (
            <Link to="/auth" style={{ textDecoration: "none", color: "black" }}>
              <span>Log In</span>
            </Link>
          )}

          <div className="cart-icon-wrapper">
            <Button
              onClick={() => setShowCart(true)}
              style={{ textDecoration: "none", color: "black" }}
            >
              <img className="cart-icon" src={CartLogo} alt="" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
