import React from "react";
import Header from './components/Header'
import Home from './components/Home'
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Passion from "./components/Passion";
import Footer from "./components/Footer";
import { loadFull } from "tsparticles";
import { Particles } from "@tsparticles/react";
import Particle from "./components/Particle"
function App() {
  return (
    <div className="homepages">
      <Particle/>
      <Header/>
      <Home/>
      <AboutMe/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Passion/>
      <Footer/>
    </div>
  );
}

export default App;
