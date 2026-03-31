import React from 'react';

export default function Instructions() {
  return (
    <main id="main-doc">
      {/* Navigation */}
      <nav id="navbar">
        <header>
          <h2>Navigation</h2>
        </header>
        <ul>
          <li><a href="#Introduction" className="nav-link">Introduction</a></li>
          <li><a href="#Getting_Started" className="nav-link">Getting Started</a></li>
          <li><a href="#Features" className="nav-link">Features</a></li>
          <li><a href="#Usage" className="nav-link">Usage</a></li>
          <li><a href="#Conclusion" className="nav-link">Conclusion</a></li>
          <li><a href="../index.html">Go Back Home</a></li>
        </ul>
      </nav>

      {/* Sections */}
      <section className="main-section" id="Introduction">
        <header><h2>Introduction</h2></header>
        <p>Welcome to the technical documentation for our project.</p>
        <p>This documentation is designed to assist you in effectively using our product.</p>
        <p>Read through each section for detailed instructions.</p>
        <p>Make sure to follow the guidelines provided here.</p>
        <p>If you encounter issues, check the FAQ section.</p>
        <code>console.log("Welcome to the Documentation!");</code>
        <p><a href="../index.html">Go Back Home</a></p>
      </section>

      <section className="main-section" id="Getting_Started">
        <header><h2>Getting Started</h2></header>
        <p>To get started with our application, follow the steps below:</p>
        <ol>
          <li>Clone the repository.</li>
          <li>Run <code>npm install</code> to install necessary packages.</li>
          <li>Start the application using <code>npm start</code>.</li>
        </ol>
        <p>Ensure that all dependencies are installed properly.</p>
        <code>npm install</code>
        <p><a href="../index.html">Go Back Home</a></p>
      </section>

      <section className="main-section" id="Features">
        <header><h2>Features</h2></header>
        <p>Our application includes several key features:</p>
        <ul>
          <li>User authentication</li>
          <li>Real-time data updates</li>
          <li>Cross-platform compatibility</li>
          <li>Customizable themes</li>
          <li>Responsive design</li>
        </ul>
        <p>Harness the full potential by utilizing these features.</p>
        <code>const featureCheck = ()  { /* implementation */ };</code>
        <p><a href="../index.html">Go Back Home</a></p>
      </section>

      <section className="main-section" id="Usage">
        <header><h2>Usage</h2></header>
        <p>Familiarize yourself with the following commands:</p>
        <code>npm run build</code><br />
        <code>npm test</code>
        <p>Consult our user manual for specific usage instructions.</p>
        <p>Follow best practices for optimal performance.</p>
        <p><a href="../index.html">Go Back Home</a></p>
      </section>

      <section className="main-section" id="Conclusion">
        <header><h2>Conclusion</h2></header>
        <p>Thank you for using our application! We hope you find it valuable.</p>
        <p>If you have questions, don't hesitate to contact support.</p>
        <code>return "Documentation complete";</code>
        <p>We welcome your feedback for future improvements.</p>
        <p><a href="../index.html">Go Back Home</a></p>
      </section>
    </main>
  );
}