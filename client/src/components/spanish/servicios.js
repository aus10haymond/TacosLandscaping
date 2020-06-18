import React from "react";

import SpanishCards from "./spanishCards";

function Servicios() {
    return (
        <div className="container" id="services">
            <h2 className="text-center">SERVICOS</h2>
            <br />
            <div className="row">
                <SpanishCards />
            </div>
        </div>
    );
}

export default Servicios;