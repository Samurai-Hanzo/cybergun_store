import React from "react";
import { useDispatch } from "react-redux";
import { removeProduct } from "../../store/productSlice";

export default function ProductItem({ product }) {
  const dispatch = useDispatch();
  return (
    <div class="product-list-section">
      <div class="product-card">
        <img class="card-image" src={product.image} alt="#" />
        <div class="effect">
          <i class="fa-solid fa-cart-shopping icons"></i>
          <i
            class="fa-solid fa-heart icons"
            onClick={() => dispatch(removeProduct(product.id))} //! если че исправить
          ></i>
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
