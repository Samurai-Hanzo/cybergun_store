import React from "react";
import HeaderPic from "../../assets/details/header_pic.png";

const Header = () => {
    return (
        <div class="header">
            <div class="header-image">
                <img src={HeaderPic} alt="" />
            </div>
            <div class="header-description">
                <div class="description-title-1">
                    <h2>ABOUT US</h2>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Minima dolore ad, atque tenetur illo tempore
                        maxime quo quam eligendi, corrupti saepe necessitatibus
                        provident voluptate illum iusto! Accusamus, suscipit.
                        Sint, veniam?
                    </p>
                </div>
                <div class="description-title-2">
                    <h2>PROJECT GOALS</h2>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Minima dolore ad, atque tenetur illo tempore
                        maxime quo quam eligendi, corrupti saepe necessitatibus
                        provident voluptate illum iusto! Accusamus, suscipit.
                        Sint, veniam?
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Header;
