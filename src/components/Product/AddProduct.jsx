import React from "react";

export default function AddProduct({
  title,
  price,
  image,
  type,
  descr,
  setDescr,
  setImage,
  setPrice,
  setTitle,
  setType,
  handleClick,
}) {
  return (
    <label htmlFor="">
      <input
        value={title}
        type="text"
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        value={price}
        type="text"
        onChange={(e) => setPrice(e.target.value)}
      />
      <input
        value={image}
        type="text"
        onChange={(e) => setImage(e.target.value)}
      />
      <input
        value={type}
        type="text"
        onChange={(e) => setType(e.target.value)}
      />
      <input
        value={descr}
        type="text"
        onChange={(e) => setDescr(e.target.value)}
      />
      <button onClick={handleClick}>add product</button>
    </label>
  );
}
