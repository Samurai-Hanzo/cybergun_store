import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footerWrapper">
          <div>
            <p className="footer-text fw600">Company</p>
            <p className="footer-text">About</p>
            <p className="footer-text">Blog</p>
            <p className="footer-text">Careers</p>
            <p className="footer-text">Contact Us</p>
          </div>
          <div>
            <p className="footer-text fw600">Support</p>
            <p className="footer-text">Help Center</p>
            <p className="footer-text">Safety Center</p>
            <p className="footer-text">Community</p>
          </div>
          <div>
            <p className="footer-text fw600">Legal</p>
            <p className="footer-text">Cookies Policy</p>
            <p className="footer-text">Privacy Policy</p>
            <p className="footer-text">CTerms of Service</p>
          </div>
          <div>
            <p className="footer-text fw600"> US</p>
            <div className="linksWrapper">
              <div>
                <img src="" alt="network" />
              </div>
              <div>
                <img src="" alt="twitter" />
              </div>
              <div>
                <img src="" alt="youtube" />
              </div>
              <div>
                <img src="" alt="instagram" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
