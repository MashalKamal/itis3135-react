import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <hr />

      <p>Connect with Afghan Brands:</p>

      <ul className="footer-links">
        <li>
          <a href="mailto:mashalgharzai0@gmail.com">Email</a>
        </li>

        <li>
          <a href="tel:9802920909">Phone: 980-292-0909</a>
        </li>

        <li>
          <a
            href="https://mashalkamal.github.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            My GitHub Page
          </a>
        </li>

        <li>
          <a
            href="https://www.linkedin.com/in/mashal-gharzai/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </li>

        <li>
          <a
            href="https://www.freecodecamp.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            FreeCodeCamp
          </a>
        </li>

        <li>
          <a
            href="https://itis3135-react-site.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            ITIS3135 React Site
          </a>
        </li>
      </ul>

      <p>Designed by Mashal Gharzai - Afghan Brands</p>
    </footer>
  );
}