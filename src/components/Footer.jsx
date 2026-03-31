import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <p className="footer-text">Design by Mashal Gharzai</p>

        <p className="footer-text">
          &copy; {new Date().getFullYear()} ITIS3135.io{' '}
          <a
            href="https://PLACEHOLDER.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            ITIS3135@Vercel
          </a>
        </p>

        <hr className="footer-divider" />

        <p className="footer-links">
          <a href="https://mashalkamal.github.io/" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          {' | '}
          <a href="https://webpages.charlotte.edu/mgharzai/" target="_blank" rel="noopener noreferrer">
            School
          </a>
          {' | '}
          <a href="https://www.linkedin.com/in/mashal-gharzai/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </p>
      </div>
    </footer>
  );
}