import React, { createContext, useContext } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { fetchProducts } from "../store/productSlice";

export const productContext = createContext();
export const useProduct = () => useContext(productContext);

const ProductContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const fetchByParams = async (query, value) => {
    const search = new URLSearchParams(location.search);
    // https://github.com/typicode/json-server/?q
    if (value === "all") {
      search.delete(query);
    } else {
      search.set(query, value);
    }
    const url = `${location.pathname}?${search.toString()}`;
    navigate(url);
    dispatch(fetchProducts());
  };
  let value = {
    fetchByParams,
  };
  return (
    <productContext.Provider value={value}>{children}</productContext.Provider>
  );
};

export default ProductContextProvider;
