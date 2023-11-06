import React, { useState } from 'react';
import './Navbar.css';

function CustomNavbar() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">Logo</div>
      <div className="navbar-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
      </div>
      <div className="menu-icon" onClick={toggleMenu}>
        <div className={`bar1 ${showMenu ? 'change' : ''}`}></div>
        <div className={`bar2 ${showMenu ? 'change' : ''}`}></div>
        <div className={`bar3 ${showMenu ? 'change' : ''}`}></div>
      </div>
      <div className={`${showMenu ? 'show' : 'not-show'}`}>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}

export default CustomNavbar;
