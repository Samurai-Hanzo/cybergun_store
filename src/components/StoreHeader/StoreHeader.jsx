import React from "react";
import HeaderPic from "../../assets/details/header-store.svg";

const StoreHeader = () => {
    return (
        <div class="header">
            <div class="header-image">
                <img src={HeaderPic} alt="" />
            </div>
            <div class="header-description">
                <div class="description-title-1">
                    <h2>STORE</h2>
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

export default StoreHeader;
