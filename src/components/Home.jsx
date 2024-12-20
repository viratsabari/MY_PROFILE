import React from "react";
import "../Styles/Home.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Home = () => {
  return (
    <div className="home" id="home">
      <h1>Hi, I am Sabarinathan</h1>
      <h3>MERN Stack Developer</h3>
      <a href="https://github.com"target="_blank" rel="noopener noreferrer" id="icon1">
        <FaGithub />
      </a>
     <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" id="icon2">
        <FaLinkedin />
      </a>
      <a href="https://drive.google.com/file/d/1gFqDv6MA0sakDNDhvC4GPafKPvypLvbt/view?usp=sharing" target="_blank" download>
        <button className="resume-btn">Download Resume</button>
      </a>
    </div>
  );
};

export default Home;
