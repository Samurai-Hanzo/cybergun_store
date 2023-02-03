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
import Modal from "./components/modal/Modal";

function App() {
  //!
  const { modal } = useSelector((store) => store.products);

  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [type, setType] = useState("");
  const [descr, setDescr] = useState("");

  const { status, error } = useSelector((store) => store.products);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  const handleClick = () => {
    dispatch(
      addProductAsync({
        type,
        image,
        descr,
        title,
        price,
      })
    );
    dispatch(fetchProducts());

    setTitle("");
    setType("");
    setDescr("");
    //! setImage(""); uncomment later
    setPrice("");
  };
  return (
    <div className="App">
      <AddProduct
        title={title}
        image={image}
        price={price}
        type={type}
        descr={descr}
        setDescr={setDescr}
        setImage={setImage}
        setPrice={setPrice}
        setTitle={setTitle}
        setType={setType}
        addProduct={addProduct}
        handleClick={handleClick}
      />

      {status === "loading" && <h2>loading...</h2>}
      {error && (
        <h2>
          {" "}
          чел у тя ошибка из за {"=>"}
          {error}
        </h2>
      )}

      <ProductList />
      {modal ? <Modal /> : ""}
    </div>
  );
}

export default App;
