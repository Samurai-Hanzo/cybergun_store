import React from "react";
import "./Footer.scss";

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="footerWrapper">
                    <div>
                        <p className="fw600">Company</p>
                        <p>About</p>
                        <p>Blog</p>
                        <p>Careers</p>
                        <p>Contact Us</p>
                    </div>
                    <div>
                        <p className="fw600">Support</p>
                        <p>Help Center</p>
                        <p>Safety Center</p>
                        <p>Community</p>
                    </div>
                    <div>
                        <p className="fw600">Legal</p>
                        <p>Cookies Policy</p>
                        <p>Privacy Policy</p>
                        <p>CTerms of Service</p>
                    </div>
                    <div>
                        <p className="fw600"> US</p>
                        <div className="linksWrapper">
                            <div>
                                <i class="fa-brands fa-facebook"></i>
                            </div>
                            <div>
                                <i class="fa-brands fa-twitter"></i>
                            </div>
                            <div>
                                <i class="fa-brands fa-youtube"></i>
                            </div>
                            <div>
                                <i class="fa-brands fa-instagram"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
