import React, { useEffect } from 'react';

export default function Contract() {
  useEffect(() => {
    document.title = 'Contract - ITIS3135';
  }, []);

  return (
    <section>
      <h1>Contract</h1>
      {/* Paste the HTML content of the original Contract page here.
          Convert HTML -> JSX: class -> className, for -> htmlFor, self-close <img /> */}
    </section>
  );
}