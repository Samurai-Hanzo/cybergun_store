import React from "react";
import { useDispatch, useSelector } from "react-redux";
import StoreProductItem from "./StoreProductItem";

export default function storeProductList() {
  const { products } = useSelector((store) => store.products);

  return (
    <ul>
      {products.length > 0 &&
        products.map((product) => (
          <StoreProductItem key={product.id} product={product} />
        ))}
    </ul>
  );
}
