import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../store/productSlice";
import StoreProductItem from "./StoreProductItem";
import axios from "axios";

export default function StoreProductList() {
  const products = useSelector((state) => state.products.products);

  let cartArr = [];

  const [guns, setGuns] = useState("");
  const getGuns = () => {
    axios.get("http://localhost:8000/products").then((res) => {
      setGuns(res.data);
    });
  };

  useEffect(() => {
    getGuns();
  }, []);

  const [value, setValue] = useState("");
  const filteredGuns = guns.filter((gun) => {
    return gun.name.toLowerCase().includes(value.toLowerCase());
  });

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div>
      {/* <div className="form">
        <form action="">
          <input onChange={(e) => setValue(e.target.value)} type="text" />
        </form>
      </div> */}

      <div className="product-list">
        {products.length > 0 &&
          products.map((product) => (
            <StoreProductItem
              key={product.id}
              product={product}
              cartArr={cartArr}
            />
          ))}
      </div>
    </div>
  );
}
