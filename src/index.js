import App from "./App";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./components/AboutUs/aboutus.css";
import "./components/Header/Header.css";
import "./components/StoreHeader/StoreHeader.css";
import "./components/Auth/auth.css";
import "./components/Review/Rewiev.css";
import "./components/Footer/footer.css";
import "./components/Product/product_css/storeProductList.css";
import "./components/Cart/cart.css";
import "./components/ContactUs/contactus.css";
import "./components/Footer/footer.css";
import "./components/Navbar/navbar.css";
import "./components/NotFound/notfound.css";
import "./components/Support/Support.css";
import "./components/Drawer/Drawer.css";
import "./components/Product/product_css/addProduct.css";
import "./components/Product/product_css/editProduct.css";
import "./components/Product/product_css/productCard.css";
import "./components/Product/product_css/productDetails.css";
import "./components/Product/product_css/productList.css";
import "./components/modal/modal.css";
import { BrowserRouter } from "react-router-dom";
import AuthContextProvider from "./contexts/AuthContextProvider";
import { Provider } from "react-redux";
import store from "./store/";
import ProductContextProvider from "./contexts/ProductContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
        <AuthContextProvider>
            <Provider store={store}>
                <ProductContextProvider>
                    <App />
                </ProductContextProvider>
            </Provider>
        </AuthContextProvider>
    </BrowserRouter>
);
