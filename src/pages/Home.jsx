import React, { useEffect } from "react";
import "./Home.css";

export default function Home() {
  useEffect(() => {
    document.title = "Home - ITIS3135";
  }, []);

  return (
    <div className="home-page">
      <h1>Welcome to ITIS3135 - React</h1>
      <h2>My React Website</h2>
    </div>
  );
}