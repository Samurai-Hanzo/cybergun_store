import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import closeIcon from "../../assets/details/free-icon-cancel-151850.png";
import Gun from "../../assets/guns/3a7a4b6a82d2dbe7283ea4d050fd36bd.jpg";
const Drawer = ({ setShowCart }) => {
  return (
    <div className="overlay overlayVisible">
      <div className="drawer-content">
        <h2 className="drawer-title">
          Drawer{" "}
          <img
            onClick={() => setShowCart(false)}
            className="drawer-close-btn"
            src={closeIcon}
            alt=""
          />
        </h2>
        <div className="drawer-product">
          <div className="product-info">
            <img className="gun-pic" src={Gun} alt="" />
            <h3>product name</h3>
          </div>
          <div className="product-price-wrapper">
            <p className="product-price">price</p>
            <button className="remove-btn">remove</button>
          </div>
        </div>

        <div className="cartTotalBlock">
          <ul>
            <li>
              <span>Total:</span>
              <div></div>
            </li>
          </ul>
          <Link to="/pay" className="blydskaya-btn">
            <Button
              onClick={() => setShowCart(false)}
              className="blydskaya-btn-hover"
              sx={{
                maxWidth: "400px",
                width: "100%",
                backgroundColor: "black",
                color: "white",
              }}
            >
              Checkout
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
