import React from "react";
import HeaderPic from "../../assets/details/IMAGE 2023-01-30 17:39:45.jpg";

const Header = () => {
  return (
    <div className="header-wrapper container">
      <div className="header-pic-wrapper">
        <img className="header-pic" src={HeaderPic} alt="" />
      </div>
      <div className="header-text-wrapper">
        <div className="header-text-top">
          <h2 className="header-title">ABOUT US</h2>
          <p className="header-desc">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima
            dolore ad, atque tenetur illo tempore maxime quo quam eligendi,
            corrupti saepe necessitatibus provident voluptate illum iusto!
            Accusamus, suscipit. Sint, veniam?
          </p>
        </div>
        <div className="header-text-bottom">
          <h2 className="header-title">PROJECT GOALS</h2>
          <p className="header-desc">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima
            dolore ad, atque tenetur illo tempore maxime quo quam eligendi,
            corrupti saepe necessitatibus provident voluptate illum iusto!
            Accusamus, suscipit. Sint, veniam?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
