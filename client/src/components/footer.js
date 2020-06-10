import React from "react";

function Footer() {
    return (
        <div id="navbar" className="text-center">
           <nav className="navbar justify-content-center sticky-bottom">
                <span id="footerText" className="navbar-text">powered by:</span>
                <a id="portfolio" className="nav-item nav-link active" href="https://aus10haymond.herokuapp.com/" target="_blank" rel="noopener noreferrer">austenhaymond</a>
            </nav>
        </div>
    );
}

export default Footer;