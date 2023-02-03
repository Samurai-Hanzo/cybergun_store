import React, { useEffect } from "react";
import ProductItem from "./ProductItem";
import { fetchProducts } from "../../store/productSlice";

import { useDispatch, useSelector } from "react-redux";

export default function ProductList() {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products.products);
    useEffect(() => {
        dispatch(fetchProducts());
    }, []);

    return (
        <div className="product-list">
            {products.length > 0 &&
                products.map((product) => (
                    <ProductItem key={product.id} product={product} />
                ))}
        </div>
    );
}
