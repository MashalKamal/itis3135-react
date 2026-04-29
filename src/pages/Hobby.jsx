import React, { useState } from "react";
import "./Hobby.css";

export default function Hobby() {
  const [activeSection, setActiveSection] = useState("intro");

  const sections = {
    intro: {
      title: "What Afghan Cooking Means to Me",
      content: [
        "Afghan cooking is more than preparing food — it is a meaningful part of my identity, culture, and family life. I grew up in an Afghan household where the kitchen was always full of wonderful aromas, warm bread, and traditional meals.",
        "In my free time, I love cooking for my family and friends because food brings people together. Afghan dishes like Kabuli Pulao, kababs, fresh naan, and desserts represent tradition, celebration, and love.",
        "Every meal I prepare reminds me of home, family gatherings, and the beauty of Afghan hospitality."
      ],
      images: [
        { src: "/images/pic1.jpg", caption: "Traditional Afghan home kitchen cooking" },
        { src: "/images/family.jpg", caption: "Family meals shared together" },
        { src: "/images/rice.jpg", caption: "Kabuli Pulao, one of Afghanistan’s most famous dishes" }
      ]
    },

    about: {
      title: "Who I Am",
      content: [
        "I am an Afghan student who loves cooking traditional Afghan food.",
        "My passion comes from family members who taught me recipes and traditions.",
        "Cooking helps me stay connected to my roots."
      ],
      images: [
        { src: "/images/pic4.jpg", caption: "Preparing Afghan meals with care" },
        { src: "/images/family2.jpg", caption: "Family cooking traditions passed down" },
        { src: "/images/pic19.jpg", caption: "Tea and conversation are part of Afghan culture" }
      ]
    },

    what: {
      title: "What I Cook",
      content: [
        "I enjoy preparing Kabuli Pulao, kababs, desserts, and drinks.",
        "Afghan cuisine uses flavorful spices, rice, meats, and bread.",
        "Cooking allows me to preserve culture while improving my skills."
      ],
      images: [
        { src: "/images/rice.jpg", caption: "Kabuli Pulao" },
        { src: "/images/pic12.jpg", caption: "Grilled Afghan kababs" },
        { src: "/images/pic15.jpg", caption: "Traditional Afghan dessert" }
      ]
    }
  };

  return (
    <div className="hobby-page">
      <header>
        <h1>Cooking Afghani Foods</h1>
        <p>A personal journey of Afghan home cooking, family traditions, and cultural pride</p>
      </header>

      <nav>
        <button onClick={() => setActiveSection("intro")}>Home</button>
        <button onClick={() => setActiveSection("about")}>Who</button>
        <button onClick={() => setActiveSection("what")}>What</button>
      </nav>

      <main>
        <section className="active">
          <h2>{sections[activeSection].title}</h2>

          {sections[activeSection].content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}

          {sections[activeSection].images.map((image, index) => (
            <figure key={index}>
              <img src={image.src} alt={image.caption} />
              <figcaption>{image.caption}</figcaption>
            </figure>
          ))}
        </section>
      </main>

      <footer>
        <p>Designed by Mashal Gharzai | Afghan Food Blog</p>
      </footer>
    </div>
  );
}