import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <main className="home-page">

      <h2>This is my ITIS 3135 class folder. This folder contains:</h2>

      <ul>
        <li>Archives</li>
        <li>Components</li>
        <li>Projects</li>
        <li>Scripts</li>
        <li>Stuff</li>
      </ul>
      
    </main>
  );
}