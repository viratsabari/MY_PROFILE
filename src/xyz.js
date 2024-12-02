<Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/passion" element={<Passion />} />
          <Route path="/projects" element={<Projects />} />
          
        </Routes>
        <Footer />
      </div>
    </Router>


    mport React from "react";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Passion from "./components/Passion";
import Projects from "./components/Projects";
import Home from "./components/Home";

import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/passion" element={<Passion />} />
          <Route path="/projects" element={<Projects />} />
          
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;