import React from "react";

// import Title from "../components/title";
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
            {/* <Title /> */}
            <br />
            <Logo />
            <br />
            <NavBar />
            <div className="container">
                <br />
                <About />
                <br />
                <Services />
                <br />
                <Gallery />
                <br />
                <Contact />
                <br />
            </div>
            <Footer />
        </div>
    );
}

export default Home;