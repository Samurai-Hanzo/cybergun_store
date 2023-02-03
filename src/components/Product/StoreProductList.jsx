import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../store/productSlice";
import StoreProductItem from "./StoreProductItem";

export default function StoreProductList() {
    const products = useSelector((state) => state.products.products);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    return (
        <div className="product-list">
            {products.length > 0 &&
                products.map((product) => (
                    <StoreProductItem key={product.id} product={product} />
                ))}
        </div>
    );
}
