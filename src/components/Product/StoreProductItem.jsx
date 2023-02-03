import React from "react";

export default function StoreProductItem({ product }) {
    console.log("isken");
    return (
        <div className="product-list-section">
            <div className="product-card">
                <img className="card-image" src={product.image} alt="#" />
                <div className="effect">
                    <i className="fa-solid fa-cart-shopping icons"></i>
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
