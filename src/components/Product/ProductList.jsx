import React from "react";
import ProductItem from "./ProductItem";
import { useSelector } from "react-redux";

export default function ProductList() {
  const products = useSelector((state) => state.products.products);
  return (
    <ul>
      {products.length > 0 &&
        products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
    </ul>
  );
}
