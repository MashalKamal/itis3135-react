import React from "react";
import "./Instructions.css";
export default function Instructions() {
  return (
    <main id="main-doc">

      <section className="main-section" id="Introduction">
        <h2>Introduction</h2>

        <p>Welcome to the technical documentation for our project.</p>
        <p>This documentation is designed to assist you in effectively using our product.</p>
        <p>Read through each section for detailed instructions.</p>
        <p>Make sure to follow the guidelines provided here.</p>
        <p>If you encounter issues, check the FAQ section.</p>

        <code>console.log("Welcome to the Documentation!");</code>

        <p><a href="/">Go Back Home</a></p>
      </section>

      <section className="main-section" id="Getting_Started">
        <h2>Getting Started</h2>

        <p>To get started with our application, follow the steps below:</p>

        <ol>
          <li>Clone the repository.</li>
          <li>Run <code>npm install</code> to install necessary packages.</li>
          <li>Start the application using <code>npm start</code>.</li>
        </ol>

        <code>npm install</code>

        <p><a href="/">Go Back Home</a></p>
      </section>

      <section className="main-section" id="Features">
        <h2>Features</h2>

        <p>Our application includes several key features:</p>

        <ul>
          <li>User authentication</li>
          <li>Real-time data updates</li>
          <li>Cross-platform compatibility</li>
          <li>Customizable themes</li>
          <li>Responsive design</li>
        </ul>

        <p>Harness the full potential by utilizing these features.</p>

        <code>const featureCheck = () =&gt; { /* implementation */ };</code>

        <p><a href="/">Go Back Home</a></p>
      </section>

      <section className="main-section" id="Usage">
        <h2>Usage</h2>

        <p>Familiarize yourself with the following commands:</p>

        <code>npm run build</code><br />
        <code>npm test</code>

        <p>Consult our user manual for specific usage instructions.</p>
        <p>Follow best practices for optimal performance.</p>

        <p><a href="/">Go Back Home</a></p>
      </section>

      <section className="main-section" id="Conclusion">
        <h2>Conclusion</h2>

        <p>Thank you for using our application! We hope you find it valuable.</p>
        <p>If you have questions, don't hesitate to contact support.</p>

        <code>return "Documentation complete";</code>

        <p>We welcome your feedback for future improvements.</p>

        <p><a href="/">Go Back Home</a></p>
      </section>

    </main>
  );
}