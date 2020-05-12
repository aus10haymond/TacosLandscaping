import React from "react";

import Title from "../components/title";
import Logo from "../components/logo";
import NavBar from "../components/navbar";

function Home() {
    return (
        <div>
            <Title />
                <br />
            <Logo />
                <br />
            <NavBar />
            <div className="container">

            </div>
        </div>
    );
}

export default Home;