import { useState } from "react";
import ClientNavbar from "../components/ClientNavbar";
import ClientFooter from "../components/ClientFooter";
import "./client.css";

export default function ClientGallery() {
  const products = [
    {
      id: "outfit1",
      name: "Indian Salwar Kameez",
      price: 140,
      img: "/images/outfit1.png",
      desc: "Elegant traditional outfit with soft fabric and detailed embroidery."
    },
    {
      id: "outfit2",
      name: "Lehenga",
      price: 150,
      img: "/images/outfit2.png",
      desc: "Beautiful lehenga designed for weddings and festive occasions."
    },
    {
      id: "outfit3",
      name: "Modern Ethnic Outfit",
      price: 120,
      img: "/images/outfit3.png",
      desc: "Stylish blend of modern and traditional cultural fashion."
    },
    {
      id: "outfit4",
      name: "Royal Scarlet Anarkali",
      price: 110,
      img: "/images/outfit4.png",
      desc: "Luxury scarlet Anarkali designed for elegant celebrations."
    },
    {
      id: "outfit5",
      name: "Maroon Anarkali",
      price: 140,
      img: "/images/outfit5.png",
      desc: "Elegant maroon outfit with traditional embroidery details."
    },
    {
      id: "outfit6",
      name: "Lavender Suit",
      price: 120,
      img: "/images/outfit6.png",
      desc: "Soft lavender outfit perfect for light festive occasions."
    },
    {
      id: "outfit7",
      name: "Anarkali Suit",
      price: 130,
      img: "/images/outfit7.png",
      desc: "Classic Anarkali suit with modern tailoring design."
    },
    {
      id: "outfit8",
      name: "Traditional Lehenga",
      price: 140,
      img: "/images/outfit8.png",
      desc: "Premium lehenga designed for weddings and cultural events."
    }
  ];

  // Quantity state
  const [qty, setQty] = useState({});

  // Image modal state
  const [selectedImage, setSelectedImage] = useState(null);

  function changeQty(id, amount) {
    setQty((prev) => {
      const current = prev[id] || 1;
      const updated = Math.max(1, current + amount);

      return {
        ...prev,
        [id]: updated
      };
    });
  }

  function addToCart(product) {
    const quantity = qty[product.id] || 1;

    alert(`${product.name} added to cart (${quantity})`);
  }

  function openImage(img) {
    setSelectedImage(img);
  }

  function closeImage() {
    setSelectedImage(null);
  }

  return (
    <>
      {/* NAVBAR */}
      <ClientNavbar />

      <main>
        {/* HERO */}
        <section className="hero">
          <h1>Shop Our Collection</h1>
          <p>Explore our latest designs</p>
        </section>

        {/* PRODUCTS */}
        <section className="products">
          <h2>Our Collection</h2>

          <div className="layout">
            {products.map((item) => (
              <div className="card" key={item.id}>
                {/* PRODUCT IMAGE */}
                <img
                  src={item.img}
                  alt={item.name}
                  onClick={() => openImage(item.img)}
                  style={{ cursor: "pointer" }}
                />

                <h3>{item.name}</h3>

                <p className="desc">{item.desc}</p>

                {/* SIZE */}
                <select defaultValue="M">
                  <option>S</option>
                  <option>M</option>
                  <option>L</option>
                </select>

                {/* QUANTITY */}
                <div className="qty-controls">
                  <button onClick={() => changeQty(item.id, -1)}>
                    -
                  </button>

                  <span>{qty[item.id] || 1}</span>

                  <button onClick={() => changeQty(item.id, 1)}>
                    +
                  </button>
                </div>

                {/* ADD TO CART */}
                <button onClick={() => addToCart(item)}>
                  Add to Cart
                </button>

                <p>${item.price}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* IMAGE MODAL */}
      {selectedImage && (
        <div className="image-modal" onClick={closeImage}>
          <img src={selectedImage} alt="Expanded View" />
        </div>
      )}

      {/* FOOTER */}
      <ClientFooter />
    </>
  );
}