import { Link } from "react-router-dom";
import React from "react";
import CartLogo from "../../assets/details/shopping-cart.png";
import { useAuth } from "../../contexts/AuthContextProvider";

const Navbar = () => {
    const { user, handleLogOut } = useAuth();
    return (
        <div className="container">
            <div className="navbar-wrapper">
                <div className="logo-wrapper">
                    <Link
                        to="/"
                        style={{ textDecoration: "none", color: "black" }}
                    >
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
                    <Link
                        to="/admin"
                        style={{ textDecoration: "none", color: "black" }}
                    >
                        <span>Admin</span>
                    </Link>
                </div>
                <div className="login-wrapper">
                    {user?.email ? (
                        <span onClick={handleLogOut}>Log out</span>
                    ) : (
                        <Link
                            to="/auth"
                            style={{ textDecoration: "none", color: "black" }}
                        >
                            <span>Log In</span>
                        </Link>
                    )}

                    <div className="cart-icon-wrapper">
                        <Link
                            to="/cart"
                            style={{ textDecoration: "none", color: "black" }}
                        >
                            <img className="cart-icon" src={CartLogo} alt="" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
