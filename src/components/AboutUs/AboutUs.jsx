import React from "react";
import HeaderPic from "../../assets/details/about_us_pic.png";
import GunPic from "../../assets/details/aboutusPic.jpg";

const AboutUs = () => {
    return (
        <div className="aboutus-content">
            <div className="aboutus-header">
                <div class="header-image">
                    <img src={HeaderPic} alt="" />
                </div>
                <div class="header-description">
                    <div class="description-title-1">
                        <h2>ABOUT US</h2>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Minima dolore ad, atque tenetur illo tempore
                            maxime quo quam eligendi, corrupti saepe
                            necessitatibus provident voluptate illum iusto!
                            Accusamus, suscipit. Sint, veniam?
                        </p>
                    </div>
                </div>
            </div>
            <p className="aboutus-text">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta
                obcaecati, dignissimos at doloremque eveniet dicta repudiandae
                eaque fugit aperiam tempora odio aut veniam quaerat optio ad
                accusamus dolor harum ratione eos nisi asperiores minima neque
                repellendus iste. Quos magni libero perferendis facere odio iste
                magnam maiores dicta. Error, reiciendis ipsa.
            </p>
            <div className="aboutus-gun-wrapper">
                <img className="aboutus-gun" src={GunPic} alt="" />
            </div>
            <p className="aboutus-text">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta
                obcaecati, dignissimos at doloremque eveniet dicta repudiandae
                eaque fugit aperiam tempora odio aut veniam quaerat optio ad
                accusamus dolor harum ratione eos nisi asperiores minima neque
                repellendus iste. Quos magni libero perferendis facere odio iste
                magnam maiores dicta. Error, reiciendis ipsa.
            </p>
        </div>
    );
};

export default AboutUs;
