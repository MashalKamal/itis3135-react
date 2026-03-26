import React, { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    document.title = 'Home - ITIS3135';
  }, []);

  return (
    <section>
      <h1>Mashal Gharzai's React</h1>
      <h2>Homepage</h2>
      <p>This is my react page</p>
    </section>
  );
}