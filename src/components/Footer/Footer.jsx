import React from "react";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-part">
                <p className="part-header">Company</p>
                <a href="#" className="part-link">
                    About
                </a>
                <a href="#" className="part-link">
                    Blog
                </a>
                <a href="#" className="part-link">
                    Careers
                </a>
                <a href="#" className="part-link">
                    Contact us
                </a>
            </div>
            <div className="footer-part">
                <p className="part-header">Support</p>
                <a href="#" className="part-link">
                    Help center
                </a>
                <a href="#" className="part-link">
                    Safety center
                </a>
                <a href="#" className="part-link">
                    Our Community
                </a>
            </div>
            <div className="footer-part">
                <p className="part-header">Legal</p>
                <a href="#" className="part-link">
                    Cookies Policy
                </a>
                <a href="#" className="part-link">
                    Privacy Policy
                </a>
                <a href="#" className="part-link">
                    Terms of Service
                </a>
            </div>
            <div className="footer-part">
                <p className="part-header">Our media</p>
                <div>
                    <i class="fa-brands fa-twitter part-link"></i>
                </div>
                <div>
                    <i class="fa-brands fa-facebook part-link"></i>
                </div>
                <div>
                    <i class="fa-brands fa-youtube part-link"></i>
                </div>
                <div>
                    <i class="fa-brands fa-instagram part-link"></i>
                </div>
            </div>
        </div>
    );
};

export default Footer;
