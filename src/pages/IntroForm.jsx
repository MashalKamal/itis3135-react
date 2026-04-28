import React, { useState } from "react";
import "./IntroForm.css";

export default function IntroForm() {
  const [form, setForm] = useState({
    firstName: "Mashal",
    middle: "",
    lastName: "Gharzai",
    preferred: "",
    divider: "|",
    mascotAdj: "Mango",
    mascotAnimal: "Gorilla",
    quote: "Every sunrise is a reminder that you have another chance to be better",
    quoteAuthor: "",
    imageCaption: "My cookies at Christmas",
    personalStatement:
      "I’m currently studying Computer Science at UNC Charlotte, focusing on Software Engineering and Web/Mobile App Development."
  });

  const [output, setOutput] = useState("");
  const [showForm, setShowForm] = useState(true);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const generateHTML = () => {
    const html = `
<h2>Introduction HTML</h2>

<h3>${form.firstName} ${form.middle} ${form.lastName} ${form.divider} ${form.mascotAdj} ${form.mascotAnimal}</h3>

<section>
  <h3>Personal Statement</h3>
  <p>${form.personalStatement}</p>
</section>

<section>
  <h3>Quote</h3>
  <p>"${form.quote}" - ${form.quoteAuthor}</p>
</section>
`;
    setOutput(html);
    setShowForm(false);
  };

  const generateJSON = () => {
    const json = {
      first_name: form.firstName,
      middle_name: form.middle,
      last_name: form.lastName,
      preferred_name: form.preferred,
      mascot_adjective: form.mascotAdj,
      mascot_animal: form.mascotAnimal,
      divider: form.divider,
      image_caption: form.imageCaption,
      personal_statement: form.personalStatement,
      quote: form.quote,
      quote_author: form.quoteAuthor
    };

    setOutput(JSON.stringify(json, null, 2));
    setShowForm(false);
  };

  const resetForm = () => {
    setForm({
      firstName: "",
      middle: "",
      lastName: "",
      preferred: "",
      divider: "|",
      mascotAdj: "",
      mascotAnimal: "",
      quote: "",
      quoteAuthor: "",
      imageCaption: "",
      personalStatement: ""
    });

    setOutput("");
    setShowForm(true);
  };

  if (!showForm) {
    return (
      <div className="intro-page">
        <h2>Output</h2>
        <pre>{output}</pre>
        <button onClick={() => setShowForm(true)}>Back to Form</button>
      </div>
    );
  }

  return (
    <main className="intro-page">

      <h2>Introduction Form</h2>

      {/* BASIC INFO */}
      <fieldset>
        <legend>Basic Information</legend>

        <label>First Name</label>
        <input name="firstName" value={form.firstName} onChange={handleChange} />

        <label>Middle Initial</label>
        <input name="middle" value={form.middle} onChange={handleChange} />

        <label>Last Name</label>
        <input name="lastName" value={form.lastName} onChange={handleChange} />

        <label>Preferred Name</label>
        <input name="preferred" value={form.preferred} onChange={handleChange} />

        <label>Divider</label>
        <input name="divider" value={form.divider} onChange={handleChange} />

        <label>Mascot Adjective</label>
        <input name="mascotAdj" value={form.mascotAdj} onChange={handleChange} />

        <label>Mascot Animal</label>
        <input name="mascotAnimal" value={form.mascotAnimal} onChange={handleChange} />
      </fieldset>

      {/* STATEMENT */}
      <fieldset>
        <legend>Personal Statement</legend>
        <textarea
          name="personalStatement"
          value={form.personalStatement}
          onChange={handleChange}
        />
      </fieldset>

      {/* QUOTE */}
      <fieldset>
        <legend>Quote</legend>

        <label>Quote</label>
        <input name="quote" value={form.quote} onChange={handleChange} />

        <label>Author</label>
        <input name="quoteAuthor" value={form.quoteAuthor} onChange={handleChange} />
      </fieldset>

      {/* BUTTONS */}
      <div className="button-group">
        <button onClick={generateHTML}>Generate HTML</button>
        <button onClick={generateJSON}>Generate JSON</button>
        <button onClick={resetForm}>Reset</button>
      </div>

    </main>
  );
}