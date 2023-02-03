import { Modal } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
// import AdminTable from "../components/AdminTable/AdminTable";
import AddProduct from "../components/Product/AddProduct";
import ProductList from "../components/Product/ProductList";

const AdminPage = () => {
    const { modal } = useSelector((store) => store.products);
    return (
        <div>
            <AddProduct />
            <ProductList />
            {modal ? <Modal /> : ""}
        </div>
    );
};

export default AdminPage;
