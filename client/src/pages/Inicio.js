import React from "react";

import Logo from "../components/logo";
import SpanishNavBar from "../components/spanish/spanishNav";
import SpanishAbout from "../components/spanish/spanishAbout";
import Servicios from "../components/spanish/servicios";
import Fotos from "../components/spanish/fotos";
import Contacto from "../components/spanish/contacto";
import Footer from "../components/footer";

import "../assets/styles/page.css";

function Inicio() {
    return (
        <div id="body">
            <Logo />
            <SpanishNavBar />
            <div className="container">
                <br />
                <SpanishAbout />
                <br />
                <Servicios />
                <br />
                <Fotos />
                <br />
                <Contacto />
                <br />
            </div>
            <Footer />
        </div>
    );
}

export default Inicio;