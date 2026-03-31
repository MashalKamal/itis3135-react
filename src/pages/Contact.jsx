import React, { useEffect } from 'react';

export default function Contact() {
  useEffect(() => {
    document.title = 'Contact - ITIS3135';
  }, []);

  return (
    <main>
      <h1>Contact</h1>
      <p>Email: mashalkaml.12@gmail.com</p>
      <p>Phone: 323-988-13223</p>
      <p>Address: 23 Old House</p>
    </main>
  );
}