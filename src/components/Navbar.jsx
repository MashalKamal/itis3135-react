import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'; // optional: create this if you want component-specific styles

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="ITIS3135 Webpage">
      <nav className="Welcom">
        <button className="Afghan Brand" onClick={() => setOpen(o => !o)}>
          Menu
        </button>

        <ul className={`primary-menu ${open ? 'open' : ''}`}>
          <li><NavLink to="/" end>Home</NavLink></li>
          <li><NavLink to="/contract">Contract</NavLink></li>
          <li><NavLink to="/fcc-cert">FCC Cert</NavLink></li>
          {/* add other links exactly like your original site */}
        </ul>
      </nav>
    </header>
  );
}