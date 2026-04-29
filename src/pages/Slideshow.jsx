import React, { useState, useEffect, useRef } from "react";
import "./Slideshow.css";

export default function Slideshow() {
  const [images, setImages] = useState([]);
  const [index, setIndex] = useState(0);
  const timerRef = useRef(null);

  // ✅ FETCH CAT API IMAGES
  useEffect(() => {
    fetch("https://api.thecatapi.com/v1/images/search?limit=10")
      .then((res) => res.json())
      .then((data) => {
        setImages(data);
        setIndex(0);
      })
      .catch((err) => console.error(err));
  }, []);

  // NEXT
  const next = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  // PREVIOUS
  const prev = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // FIRST
  const first = () => setIndex(0);

  // LAST
  const last = () => setIndex(images.length - 1);

  // PLAY
  const play = () => {
    if (timerRef.current) return;

    timerRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);
  };

  // STOP
  const stop = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
  };

  // loading check
  if (images.length === 0) return <p>Loading slideshow...</p>;

  return (
    <div className="slideshow">
      <h2>Slideshow (API Project)</h2>

      {/* ✅ IMPORTANT: cat API uses "url" */}
      <img
        src={images[index].url}
        alt="cat"
        className="slide-image"
      />

      {/* ❌ DO NOT use title/name */}
      <p>Image {index + 1} of {images.length}</p>

      <div className="buttons">
        <button onClick={first}>First</button>
        <button onClick={prev}>Previous</button>
        <button onClick={next}>Next</button>
        <button onClick={last}>End</button>
        <button onClick={play}>Play</button>
        <button onClick={stop}>Stop</button>
      </div>
    </div>
  );
}