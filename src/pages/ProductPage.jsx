import React from "react";
import { useSelector } from "react-redux";
import StoreProductList from "../components/Product/StoreProductList";
import StoreHeader from "../components/StoreHeader/StoreHeader";

const ProductPage = () => {
    const { modal } = useSelector((store) => store.products);

    return (
        <div>
            <StoreHeader />
            <StoreProductList />
        </div>
    );
};

export default ProductPage;
