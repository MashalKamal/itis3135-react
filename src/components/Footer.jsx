import React from 'react';
import './Footer.css'; // optional

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <p>Design by Mashal Gharzai</p>
        <p>&copy; {new Date().getFullYear()} ITIS3135.io
          {' '}
          <a href="https://PLACEHOLDER.vercel.app" target="_blank" rel="noopener noreferrer">
            ITIS3135@Vercel
          </a>
        </p>
      </div>
    </footer>
  );
}