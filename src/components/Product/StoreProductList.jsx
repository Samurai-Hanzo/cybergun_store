import { Pagination } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../store/productSlice";
import StoreProductItem from "./StoreProductItem";

export default function StoreProductList() {
    const products = useSelector((state) => state.products.products);
    const count = Math.ceil(products.length / 9);
    const [page, setPage] = useState(1);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    function currentData() {
        const begin = (page - 1) * 9;
        const end = begin + 9;
        return products.slice(begin, end);
    }

    return (
        <div>
            <div className="product-list">
                {products.length > 0 &&
                    currentData().map((product) => (
                        <StoreProductItem key={product.id} product={product} />
                    ))}
            </div>
            <div className="pagination">
                <Pagination
                    sx={{ margin: "0 auto" }}
                    count={count}
                    variant="outlined"
                    shape="rounded"
                    page={page}
                    onChange={(e, p) => setPage(p)}
                />
            </div>
        </div>
    );
}
