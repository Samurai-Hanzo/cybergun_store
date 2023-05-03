import React from "react";
import HeaderPic from "../../assets/details/about_us_pic.png";
import GunPic from "../../assets/details/aboutusPic.jpg";

const AboutUs = () => {
  return (
    <div className="aboutus-content">
      <div className="aboutus-header">
        <div className="aboutus-image">
          <img src={HeaderPic} alt="" />
        </div>
        <div className="aboutus-description">
          <div className="description-title-1">
            <h2>ABOUT US</h2>
            <p>
              One of the first online firearms sellers and a major force in the
              market, Impact Guns was founded in 1997 by 3 avid shooters. We saw
              (and still see) the need to provide access to the best and latest
              gear at the best prices to anyone anywhere with access to a
              computer or phone.
            </p>
          </div>
        </div>
      </div>
      <p className="aboutus-text">
        Our focus on firearms and shooting related equipment allows us to buy in
        large quantities, and pass the savings to you. Everyone who works at
        Impact, from the owners to the shipping crew, are shooters first. We
        absolutely love what we do!
      </p>
      <div className="aboutus-gun-wrapper">
        <img className="aboutus-gun" src={GunPic} alt="" />
      </div>
      <p className="aboutus-text">
        A dedicated crew reviews and adds new items when found to perform as
        advertised. If feedback indicates a product is not up to expectations,
        we pull it.
      </p>
    </div>
  );
};

export default AboutUs;
