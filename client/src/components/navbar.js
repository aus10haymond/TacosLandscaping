import React from "react";

function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light sticky-top bg-light">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
                <a className="nav-item nav-link active" href="#">ABOUT</a>
                <a className="nav-item nav-link" href="#">SERVICES</a>
                <a className="nav-item nav-link" href="#">GALLERY</a>
                <a className="nav-item nav-link" href="#">CONTACT</a>
            </div>
            </div>
        </nav>
    );
}

export default NavBar;