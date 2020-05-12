import React from "react";

import Title from "../components/title";
import Logo from "../components/logo";
import NavBar from "../components/navbar";
import About from "../components/about";
import Services from "../components/services";
import Gallery from "../components/gallery";
import Contact from "../components/contact";
import Footer from "../components/footer";

import "../assets/styles/page.css";

function Home() {
    return (
        <div id="body">
            <Title />
            <Logo />
            <NavBar />
            <div className="container">
                <About />
                <Services />
                <Gallery />
                <Contact />
            </div>
            <Footer />
        </div>
    );
}

export default Home;