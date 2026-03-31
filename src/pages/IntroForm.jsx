import React, { useState } from "react";

export default function IntroForm() {
  const [formData, setFormData] = useState({
    firstName: "Mashal",
    lastName: "Gharzai",
    mascotAdj: "Curious",
    mascotAnimal: "Falcon",
    divider: "~",
    imageFile: null,
    imageCaption: "Studying on computer",
    personalStatement: "I am from Afghanistan and studying IT.",
    bullets: [
      "Personal Background: From Afghanistan.",
      "Academic Background: IT degree.",
      "Transferred to UNCC.",
      "Subject Background: IT.",
      "Primary Computer: Laptop.",
      "Hobbies: Reading.",
      "Goals: Graduate.",
    ],
    courses: [],
    quote: "Learning never stops.",
    quoteAuthor: "Mashal",
  });

  const [imagePreview, setImagePreview] = useState(
    "https://img.freepik.com/premium-vector/cute-girl-study-with-computer-vector-illustration-white_835895-6032.jpg"
  );

  const handleChange = (e) => {
    const { id, value, files } = e.target;
    if (id === "imageFile" && files.length > 0) {
      setFormData({ ...formData, imageFile: files[0] });
      setImagePreview(URL.createObjectURL(files[0]));
    } else if (id.startsWith("bullet")) {
      const index = parseInt(id.replace("bullet", ""), 10) - 1;
      const newBullets = [...formData.bullets];
      newBullets[index] = value;
      setFormData({ ...formData, bullets: newBullets });
    } else {
      setFormData({ ...formData, [id]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <main>
      <h2>Introduction Form</h2>
      <h3>Please submit the form below.</h3>

      <form onSubmit={handleSubmit}>
        <label>First Name</label>
        <input id="firstName" value={formData.firstName} onChange={handleChange} required />

        <label>Last Name</label>
        <input id="lastName" value={formData.lastName} onChange={handleChange} required />

        <label>Mascot Adjective</label>
        <input id="mascotAdj" value={formData.mascotAdj} onChange={handleChange} required />

        <label>Mascot Animal</label>
        <input id="mascotAnimal" value={formData.mascotAnimal} onChange={handleChange} required />

        <label>Divider</label>
        <input id="divider" value={formData.divider} onChange={handleChange} required />

        <label>Image</label>
        <input type="file" id="imageFile" onChange={handleChange} />

        <img src={imagePreview} width="200" alt="Current" />

        <label>Caption</label>
        <input id="imageCaption" value={formData.imageCaption} onChange={handleChange} />

        <label>Personal Statement</label>
        <textarea
          id="personalStatement"
          value={formData.personalStatement}
          onChange={handleChange}
        />

        <h3>Bullets</h3>
        {formData.bullets.map((bullet, i) => (
          <input
            key={i}
            id={`bullet${i + 1}`}
            value={bullet}
            onChange={handleChange}
          />
        ))}

        <label>Quote</label>
        <input id="quote" value={formData.quote} onChange={handleChange} />

        <label>Author</label>
        <input id="quoteAuthor" value={formData.quoteAuthor} onChange={handleChange} />

        <br /><br />
        <button type="submit">Submit</button>
        <button type="reset" onClick={() => window.location.reload()}>
          Reset
        </button>
      </form>
    </main>
  );
}