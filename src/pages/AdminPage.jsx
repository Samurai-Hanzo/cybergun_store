import { Modal } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
// import AdminTable from "../components/AdminTable/AdminTable";
import AddProduct from "../components/Product/AddProduct";

const AdminPage = () => {
  const { modal } = useSelector((store) => store.products);
  return (
    <div>
      <AddProduct />
      {modal ? <Modal /> : ""}
    </div>
  );
};

export default AdminPage;
