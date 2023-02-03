import React from "react";

export default function StoreProductItem({ product }) {
  return (
    <div class="product-list-section">
      <div class="product-card">
        <img class="card-image" src={product.image} alt="#" />
        <div class="effect">
          <i class="fa-solid fa-cart-shopping icons"></i>
          <i class="fa-solid fa-heart icons"></i>
        </div>
        <div class="info">
          <span class="card-name">{product.title}</span>
          <span class="card-descr">{product.descr}</span>
          <span class="card-price">{product.price}</span>
          <span class="card-type">{product.type}</span>
        </div>
      </div>
    </div>
  );
}
