import React from "react";
import HeaderPic from "../../assets/details/header-store.svg";

const StoreHeader = () => {
  return (
    <div className="header-wrapper container">
      <div className="header-pic-wrapper">
        <img className="header-pic" src={HeaderPic} alt="" />
      </div>
      <div>
        <h1 className="header-title">STORE</h1>
        <p className="header-desc">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima
          dolore ad, atque tenetur illo tempore maxime quo quam eligendi,
          corrupti saepe necessitatibus provident voluptate illum iusto!
          Accusamus, suscipit. Sint, veniam?
        </p>
      </div>
    </div>
  );
};

export default StoreHeader;
