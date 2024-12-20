import React, { useState } from "react";
import "../Styles/Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
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
          <a href="#home" onClick={closeMenu}><li>Home</li></a>
          <a href="#about" onClick={closeMenu}><li>About</li></a>
          <a href="#skills" onClick={closeMenu}><li>Skills</li></a>
          <a href="#works" onClick={closeMenu}><li>Works</li></a>
          <a href="#contact" onClick={closeMenu}><li>Contact</li></a>
          <a href="#passion" onClick={closeMenu}><li>Passion</li></a>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
