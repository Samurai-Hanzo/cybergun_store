import React from "react";
import HeaderPic from "../../assets/details/header-store.svg";
import GunPic from "../../assets/details/aboutusPic.jpg";

const AboutUs = () => {
  return (
    <div className="aboutus-content">
      <div className="aboutus-header">
        <div className="aboutus-img-wrapper">
          <img className="aboutus-img" src={HeaderPic} alt="" />
        </div>
        <div>
          <h1 className="aboutus-title">ABOUT US</h1>
          <p className="aboutus-desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum dolore,
            consectetur quo ad suscipit minima tempora tenetur temporibus nobis
            deserunt repellat, quas ullam, numquam reiciendis autem voluptates
            excepturi aspernatur rerum!
          </p>
        </div>
      </div>
      <p className="aboutus-text">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta
        obcaecati, dignissimos at doloremque eveniet dicta repudiandae eaque
        fugit aperiam tempora odio aut veniam quaerat optio ad accusamus dolor
        harum ratione eos nisi asperiores minima neque repellendus iste. Quos
        magni libero perferendis facere odio iste magnam maiores dicta. Error,
        reiciendis ipsa.
      </p>
      <div className="aboutus-gun-wrapper">
        <img className="aboutus-gun" src={GunPic} alt="" />
      </div>
      <p className="aboutus-text">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta
        obcaecati, dignissimos at doloremque eveniet dicta repudiandae eaque
        fugit aperiam tempora odio aut veniam quaerat optio ad accusamus dolor
        harum ratione eos nisi asperiores minima neque repellendus iste. Quos
        magni libero perferendis facere odio iste magnam maiores dicta. Error,
        reiciendis ipsa.
      </p>
    </div>
  );
};

export default AboutUs;
