import React, { useState } from "react";
import "./Survey.css";

export default function Survey() {
  const [form, setForm] = useState({
    feature: "strength",
    rating: "",
    suggestions: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Survey submitted! Thank you 👍");
  };

  return (
    <main className="survey-page">

      <h2>Mango Gorilla Survey</h2>

      <p>
        We’d love your feedback about Mango Gorilla, our mascot for your project!
      </p>

      <h3>Mango Gorilla Survey</h3>

      {/* Go Back Home */}
      <div className="back-home">
        <a href="/">Go Back Home</a>
      </div>

      <form className="survey-form" onSubmit={handleSubmit}>

        {/* Favorite Feature */}
        <label>What is your favorite feature of Mango Gorilla?</label>

        <select
          name="feature"
          value={form.feature}
          onChange={handleChange}
        >
          <option value="strength">Strength</option>
          <option value="playfulness">Playfulness</option>
          <option value="color">Color</option>
          <option value="intelligence">Intelligence</option>
        </select>

        {/* Rating */}
        <label>How would you rate Mango Gorilla?</label>

        <div className="radio-group">
          <label>
            <input
              type="radio"
              name="rating"
              value="excellent"
              onChange={handleChange}
            />
            Excellent
          </label>

          <label>
            <input
              type="radio"
              name="rating"
              value="good"
              onChange={handleChange}
            />
            Good
          </label>

          <label>
            <input
              type="radio"
              name="rating"
              value="average"
              onChange={handleChange}
            />
            Average
          </label>

          <label>
            <input
              type="radio"
              name="rating"
              value="poor"
              onChange={handleChange}
            />
            Poor
          </label>
        </div>

        {/* Suggestions */}
        <label>Any suggestions for Mango Gorilla?</label>

        <textarea
          name="suggestions"
          rows="4"
          value={form.suggestions}
          onChange={handleChange}
          placeholder="Your feedback..."
        />

        <button type="submit">Submit</button>

      </form>
    </main>
  );
}