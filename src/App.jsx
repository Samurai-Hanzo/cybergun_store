import { useState, useEffect } from "react";

import AddProduct from "./components/Product/AddProduct";
import ProductList from "./components/Product/ProductList";

import "./App.css";
import ProductItem from "./components/Product/ProductItem";
import {
    addProduct,
    addProductAsync,
    fetchProducts,
} from "./store/productSlice";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "./components/Navbar/Navbar";
import MainRoutes from "./MainRoutes";
import Footer from "./components/Footer/Footer";

function App() {
    return (
        <>
            <Navbar />
            <MainRoutes />
            <Footer />
        </>
    );
}

export default App;
