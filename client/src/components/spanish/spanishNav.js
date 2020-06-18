import React from "react";

function SpanishNavBar() {
    return (
        <nav id="navbar" className="navbar navbar-expand-lg sticky-top justify-content-center">
            {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon justify-content-center"></span>
            </button> */}
            <div className="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
            <div className="navbar-nav justify-content-center">
                <a id="navLink" className="nav-item nav-link js-scroll-trigger" href="#about">SOBRE NOSOTROS</a>
                <a id="navLink" className="nav-item nav-link js-scroll-trigger" href="#services">SERVICIOS</a>
                <a id="navLink" className="nav-item nav-link js-scroll-trigger" href="#gallery">FOTOS</a>
                <a id="navLink" className="nav-item nav-link js-scroll-trigger" href="#contact">CONTACTO</a>
                <a id="navLink" className="nav-item nav-link" href="/">ENGLISH</a>
            </div>
            </div>
        </nav>
    );
}

export default SpanishNavBar;