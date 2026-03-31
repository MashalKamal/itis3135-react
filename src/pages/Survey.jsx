import React from 'react';

export default function Survey() {
  return (
    <main>
      <h2>Welcome to the Mango Gorilla Survey!</h2>
      <p>We’d love your feedback about Mango Gorilla, our mascot for your project!</p>

      {/* Survey Section */}
      <section id="mango-gorilla-survey">
        <h3>Mango Gorilla Survey</h3>
        <form action="#" method="post">
          {/* Favorite Feature */}
          <label htmlFor="favorite-feature">What is your favorite feature of Mango Gorilla?</label><br />
          <select id="favorite-feature" name="favorite-feature">
            <option value="strength">Strength</option>
            <option value="playfulness">Playfulness</option>
            <option value="color">Color</option>
            <option value="intelligence">Intelligence</option>
          </select><br /><br />

          {/* Rating */}
          <label>How would you rate Mango Gorilla?</label><br />
          <input type="radio" id="excellent" name="rating" value="excellent" />
          <label htmlFor="excellent">Excellent</label><br />
          <input type="radio" id="good" name="rating" value="good" />
          <label htmlFor="good">Good</label><br />
          <input type="radio" id="average" name="rating" value="average" />
          <label htmlFor="average">Average</label><br />
          <input type="radio" id="poor" name="rating" value="poor" />
          <label htmlFor="poor">Poor</label><br /><br />

          {/* Suggestions */}
          <label htmlFor="suggestions">Any suggestions for Mango Gorilla?</label><br />
          <textarea
            id="suggestions"
            name="suggestions"
            rows="4"
            cols="50"
            placeholder="Your feedback..."
          ></textarea><br /><br />

          <button type="submit">Submit</button>
        </form>
      </section>
    </main>
  );
}