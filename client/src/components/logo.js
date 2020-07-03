import React from "react";
import "../assets/styles/page.css";

import logo from "../assets/images/tacos_logo.png";

function Logo() {
    return (
        <div id="logo" className="text-center">
            <img id="logo" src={logo} alt="Logo" />
        </div>
    );
}

export default Logo;