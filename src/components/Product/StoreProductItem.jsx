import React, { useEffect, useState } from "react";

export default function StoreProductItem({ product, cartArr }) {
  const handleClick = () => {
    if (!localStorage.getItem("product")) {
      localStorage.setItem("product", JSON.stringify([]));
    }

    let match = false;

    let currentProduct = JSON.parse(localStorage.getItem("product"));
    if (currentProduct) {
      currentProduct.map((item) => {
        if (item.id === product.id) {
          match = !match;
        }
      });
    }

    if (!match) {
      cartArr.push(product);
      localStorage.setItem("product", JSON.stringify(cartArr));
    }

    console.log(cartArr);
  };
  return (
    <div className="product-list-section">
      <div className="product-card">
        <img className="card-image" src={product.image} alt="#" />
        <div className="effect">
          <i
            className="fa-solid fa-cart-shopping icons"
            onClick={() => handleClick()}
          ></i>
          <i
            className="fa-solid fa-heart icons"
            onClick={() => console.log("isken")}
          ></i>
        </div>
        <div className="info">
          <span className="card-name">{product.title}</span>
          <span className="card-descr">{product.descr}</span>
          <span className="card-price">{product.price}</span>
          <span className="card-type">{product.type}</span>
        </div>
      </div>
    </div>
  );
}
