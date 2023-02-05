import React, { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import Modal from "../modal/Modal";

import { fetchProducts } from "../../store/productSlice";

import { useDispatch, useSelector } from "react-redux";
import { Pagination } from "@mui/material";

export default function ProductList() {
    const { modal } = useSelector((store) => store.products);
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products.products);
    const count = Math.ceil(products.length / 9);
    const [page, setPage] = useState(1);

    useEffect(() => {
        dispatch(fetchProducts());
    }, []);

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
                        <ProductItem key={product.id} product={product} />
                    ))}
                {modal ? <Modal /> : ""}
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
