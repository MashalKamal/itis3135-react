import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <main className="home-page">

      <h2>This is my ITIS 3135 class folder. This folder contains:</h2>

      <ul>
        <li><Link to="/contract">Contract</Link></li>
        <li><Link to="/survey">Survey</Link></li>
        <li><Link to="/instructions">Instructions</Link></li>
        <li><Link to="/intro-form">Intro Form</Link></li>
        <li><Link to="/inventory">Inventory</Link></li>
        <li><Link to="/website-evaluation">Website Evaluations</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>

    </main>
  );
}