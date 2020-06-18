import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./pages/Home";
import Inicio from "./pages/Inicio"

function App() {
    return (
        <Router>
            <Route exact path="/" component={Home} />
            <Route exact path="/es" component={Inicio} />
        </Router>
    );
}

export default App;