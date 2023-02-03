import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editProductAsync, showModal } from "../../store/productSlice";

export default function Modal() {
  const [prodEdit, setProdEdit] = useState({});

  const { oneProduct } = useSelector((store) => store.products);
  const { modal } = useSelector((store) => store.products);
  const dispatch = useDispatch();

  useEffect(() => {
    setProdEdit(oneProduct);
  }, [oneProduct]);

  const handleChange = (e) => {
    let obj = {
      ...prodEdit,
      [e.target.name]: e.target.value,
    };
    console.log(prodEdit, 1);
    setProdEdit(obj);
    console.log(prodEdit, 2);

    console.log(obj, 3);
    dispatch(editProductAsync(obj.id));
  };

  const handleClick = () => {
    dispatch(showModal(!modal));
  };

  return (
    <div>
      <input
        onChange={(e) => handleChange(e)}
        type="text"
        value={prodEdit.title}
        name="title"
      />
      <input
        onChange={(e) => handleChange(e)}
        type="text"
        value={prodEdit.descr}
        name="descr"
      />
      <input
        onChange={(e) => handleChange(e)}
        type="text"
        value={prodEdit.image}
        name="iamge"
      />
      <input
        onChange={(e) => handleChange(e)}
        type="text"
        value={prodEdit.type}
        name="type"
      />
      <input
        onChange={(e) => handleChange(e)}
        type="text"
        value={prodEdit.price}
        name="price"
      />

      <button onClick={() => handleClick(prodEdit.id)}>save edit</button>
    </div>
  );
}
