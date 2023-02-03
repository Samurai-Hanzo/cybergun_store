import React from "react";
import ProductList from "../components/Product/ProductList";
import StoreHeader from "../components/StoreHeader/StoreHeader";

const ProductPage = () => {
    return (
        <div>
            <StoreHeader />
            <ProductList />
        </div>
    );
};

export default ProductPage;
