import React, { useState, useRef, useEffect } from "react";
import "./Slideshow.css";

export default function Slideshow() {
  // Images from /public/images folder
  const images = [
    { url: "/images/pic1.jpg", title: "Afghan Cooking 1" },
    { url: "/images/rice.jpg", title: "Kabuli Pulao" },
    { url: "/images/pic2.jpg", title: "Afghan Food" },
    { url: "/images/pic3.jpg", title: "Traditional Dish" },
    { url: "/images/pic4.jpg", title: "Kabab" },
    { url: "/images/pic7.jpg", title: "Afghan Meal" },
    { url: "/images/pic12.jpg", title: "Grilled Kabab" },
    { url: "/images/pic15.jpg", title: "Dessert" },
    { url: "/images/pic16.jpg", title: "Sweet Dish" }
  ];

  const [index, setIndex] = useState(0);
  const timerRef = useRef(null);

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

  // PLAY (auto every 5 seconds)
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

  // AUTO START WHEN PAGE LOADS
  useEffect(() => {
    play();

    return () => stop(); // cleanup when leaving page
  }, []);

  return (
    <div className="slideshow">
      <h2>Afghan Food Slideshow</h2>

      <img
        src={images[index].url}
        alt={images[index].title}
        className="slide-image"
      />

      <p>{images[index].title}</p>

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