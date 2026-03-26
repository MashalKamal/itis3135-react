import React, { useEffect } from 'react';

export default function About() {
  useEffect(() => {
    document.title = 'About - ITIS3135';
  }, []);

  return (
    <section>
      <h1>About</h1>
      {/* Paste the HTML introduction of the original Contract page here.
          Convert HTML -> JSX: class -> className, for -> htmlFor, self-close <img /> */}
    </section>
  );
}