import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="not-found">
            <h3 className="not-found-header">
                Oops! this page was not found! (sad)
            </h3>
            <p className="error-title">404</p>
            <Link to="/">
                <button className="not-found-button">Return to Home</button>
            </Link>
        </div>
    );
};

export default NotFound;
