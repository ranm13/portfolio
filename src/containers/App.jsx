import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import Home from '../components/pages/Home';
import About from '../components/pages/About';
import Skills from '../components/pages/Skills';
import Portfolio from '../components/pages/Portfolio';
import Contact from '../components/pages/Contact';
import NavBar from "../components/NavBar/NavBar";
import "./App.css";
import 'react-toastify/dist/ReactToastify.css';

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
          <Route exact path="/contact"  render={() => <Contact toast={toast}/>}/>

          <ToastContainer
            position="bottom-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            />

          <ToastContainer />
        </main>
      </div>
    </Router>
  );
}

export default App;
