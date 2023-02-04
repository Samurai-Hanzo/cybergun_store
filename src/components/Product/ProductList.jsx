import React, { useEffect } from "react";
import ProductItem from "./ProductItem";
import Modal from "../modal/Modal";

import { fetchProducts } from "../../store/productSlice";

import { useDispatch, useSelector } from "react-redux";

export default function ProductList() {
  const { modal } = useSelector((store) => store.products);
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
      {modal ? <Modal /> : ""}
    </div>
  );
}
