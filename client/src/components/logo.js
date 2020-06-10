import React from "react";
import "../assets/styles/logo.css";

import logo from "../assets/images/logo.png";

function Logo() {
    return (
        <div id="logo" className="text-center">
            <img src={logo} className="rounded" alt="Logo" />
        </div>
    );
}

export default Logo;