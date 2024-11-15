import React from "react";
import Header from './components/Header'
import Home from './components/Home'
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Passion from "./components/Passion";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="homepages">
      
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
