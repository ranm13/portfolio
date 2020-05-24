import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from '../components/pages/Home';
import About from '../components/pages/About';
import Skills from '../components/pages/Skills';
import Portfolio from '../components/pages/Portfolio';
import Contact from '../components/pages/Contact';
import NavBar from "../components/menu-bar/NavBar";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <main>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/skills" component={Skills} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/contact" component={Contact} />
        </main>
      </div>
    </Router>
  );
}

export default App;
