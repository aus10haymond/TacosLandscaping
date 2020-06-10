import React from "react";

function NavBar() {
    return (
        <nav id="navbar" className="navbar navbar-expand-lg sticky-top justify-content-center">
            {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon justify-content-center"></span>
            </button> */}
            <div className="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
            <div className="navbar-nav justify-content-center">
                <a id="navLink" className="nav-item nav-link js-scroll-trigger" href="#about">ABOUT</a>
                <a id="navLink" className="nav-item nav-link js-scroll-trigger" href="#services">SERVICES</a>
                <a id="navLink" className="nav-item nav-link js-scroll-trigger" href="#gallery">GALLERY</a>
                <a id="navLink" className="nav-item nav-link js-scroll-trigger" href="#contact">CONTACT</a>
            </div>
            </div>
        </nav>
    );
}

export default NavBar;