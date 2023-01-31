import { Link } from "react-router-dom";
import React from "react";
import CartLogo from "../../assets/details/shopping-cart.png";

const Navbar = () => {
    return (
        <div className="container">
            <div className="navbar-wrapper">
                <div className="logo-wrapper">
                    <Link to="/" style={{ textDecoration: "none" }}>
                        <span className="logo">cybergun</span>
                    </Link>
                </div>
                <div className="menu-wrapper">
                    <Link to="/products" style={{ textDecoration: "none" }}>
                        <span>Store</span>
                    </Link>
                    <Link to="/contactus" style={{ textDecoration: "none" }}>
                        <span>Contact Us</span>
                    </Link>
                    <Link to="/auth" style={{ textDecoration: "none" }}>
                        <span>Support</span>
                    </Link>
                </div>
                <div className="login-wrapper">
                    <Link to="/auth" style={{ textDecoration: "none" }}>
                        <span>Log In</span>
                    </Link>
                    <div className="cart-icon-wrapper">
                        <Link to="/cart" style={{ textDecoration: "none" }}>
                            <img className="cart-icon" src={CartLogo} alt="" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
