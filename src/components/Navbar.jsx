import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="navbar">
      <nav className="navbar-container">
        <button className="menu-btn" onClick={() => setOpen(!open)}>Menu</button>

        <ul className={`nav-links ${open ? 'open' : ''}`}>
          <li><NavLink to="/" end onClick={closeMenu}>Home</NavLink></li>
          <li><NavLink to="/contract" onClick={closeMenu}>Contract</NavLink></li>
          <li><NavLink to="/fcc-cert" onClick={closeMenu}>FCC Cert</NavLink></li>
          <li><NavLink to="/survey" onClick={closeMenu}>Survey</NavLink></li>
          <li><NavLink to="/inventory" onClick={closeMenu}>Inventory</NavLink></li>
          <li><NavLink to="/intro-form" onClick={closeMenu}>Intro Form</NavLink></li>
          <li><NavLink to="/instructions" onClick={closeMenu}>Instructions</NavLink></li>
          <li><NavLink to="/website-evaluation" onClick={closeMenu}>Evaluations</NavLink></li>
        </ul>
      </nav>
    </header>
  );
}