import { useState } from "react";
import { Link } from "react-router-dom";
import ClientNavbar from "../components/ClientNavbar";
import ClientFooter from "../components/ClientFooter";
import "./client.css";

export default function ClientHome() {
  const images = [
    "/images/outfit1.png",
    "/images/outfit2.png",
    "/images/outfit3.png",
    "/images/outfit4.png",
    "/images/outfit5.png",
    "/images/outfit6.png",
    "/images/outfit7.png",
    "/images/outfit8.png",
  ];

  const [index, setIndex] = useState(0);

  function nextSlide() {
    setIndex((prev) => (prev + 1) % images.length);
  }

  function prevSlide() {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  }

  return (
    <>
      {/* NAVBAR */}
      <ClientNavbar />

      {/* MAIN PAGE */}
      <main>

        {/* HERO SECTION */}
        <section className="hero">
          <h1>Luxury Ethnic Wear</h1>

          <p>
            Mehr Shop is a luxury ethnic fashion store offering elegant handmade cultural outfits inspired by tradition and modern style.
          </p>

          <p>Discover elegance & style.</p>

          {/* SLIDESHOW */}
          <div className="hero-slideshow">
            <button onClick={prevSlide}>⬅</button>

            <img
              src={images[index]}
              alt={`Slide ${index + 1}`}
            />

            <button onClick={nextSlide}>➡</button>
          </div>

          {/* SHOP BUTTON */}
          <Link to="/client-project/gallery" className="shop-btn">
            Shop Now
          </Link>
        </section>

        {/* FEATURES SECTION */}
        <section className="products">
          <h2>Why Choose Mehr Shop?</h2>

          <div className="layout">

            <div className="card">
              <h3>High Quality</h3>
              <p>Premium fabrics with detailed embroidery.</p>
            </div>

            <div className="card">
              <h3>Elegant Designs</h3>
              <p>Traditional and modern fashion styles.</p>
            </div>

            <div className="card">
              <h3>Cultural Beauty</h3>
              <p>Inspired by rich heritage.</p>
            </div>

          </div>
        </section>

      </main>

      {/* FOOTER */}
      <ClientFooter />
    </>
  );
}