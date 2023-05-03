import React from "react";
import HeaderPic from "../../assets/details/header_pic.png";

const Header = () => {
  return (
    <div className="header">
      <div className="header-image">
        <img src={HeaderPic} alt="" />
      </div>
      <div className="header-description">
        <div className="description-title-1">
          <h2>ABOUT US</h2>
          <p>
            Impact Guns also matches prices- if you find the item you want
            elsewhere at a lower price, just let us know, we'll try our best to
            'meet it or beat it'.
          </p>
        </div>
        <div className="description-title-2">
          <h2>PROJECT GOALS</h2>
          <p>
            We pioneered the 'Lifetime Guarantee' for any new gun we sell, and
            continue to stand behind every firearm- providing an extra level of
            confidence, and another reason to consider purchasing with us.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
