import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <header className="navbar">

      <nav className="navbar-container">
        <ul className="nav-links">

          <li><Link to="/">Home</Link></li>
          <li><Link to="/contract">Contract</Link></li>
          <li><Link to="/survey">Survey</Link></li>
          <li><Link to="/instructions">Instructions</Link></li>
          <li><Link to="/intro-form">Intro Form</Link></li>
          <li><Link to="/inventory">Inventory</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/website-evaluation">Website Evaluations</Link></li>
          {/* CLIENT PROJECT */}
        <li><Link to="/client-project">Client Project</Link></li>

        </ul>
      </nav>

    </header>
  );
}