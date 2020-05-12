import React from "react";

function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light sticky-top bg-light justify-content-center">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon justify-content-center"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
            <div className="navbar-nav justify-content-center">
                <a className="nav-item nav-link" href="#">ABOUT</a>
                <a className="nav-item nav-link" href="#">SERVICES</a>
                <a className="nav-item nav-link" href="#">GALLERY</a>
                <a className="nav-item nav-link" href="#">CONTACT</a>
            </div>
            </div>
        </nav>
    );
}

export default NavBar;