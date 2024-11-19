import React, { useState } from "react";
import "../Styles/Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-left">
        <h1>Sabarinathan S</h1>
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>

      <nav className={`header-right ${isMenuOpen ? "open" : ""}`}>
        <ul>
          <a href="#home"><li>Home</li></a>
          <a href="#about"><li>About</li></a>
          <a href="#skills"><li>Skills</li></a>
          <a href="#works"><li>works</li></a>
          <a href="#contact"><li>Contact</li></a>
          <a href="#passion"><li>Passion</li></a>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
