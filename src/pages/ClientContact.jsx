import "./client.css";

export default function ClientContact() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <h1>Contact Us</h1>
        <p>Give feedback and help us improve — and get rewarded!</p>
      </section>

      {/* CONTENT */}
      <section className="products">
        <div className="layout">

          {/* CONTACT INFO */}
          <div className="card">
            <h3>Contact Information</h3>
            <p>
              Email:{" "}
              <a href="mailto:Mehr21@gmail.com">
                Mehr21@gmail.com
              </a>
            </p>
            <p>Phone: (123) 456-7890</p>
          </div>

          {/* FEEDBACK FORM */}
          <div className="card">
            <h3>Give Feedback</h3>
            <p>Share your experience with Mehr Shop. Your opinion matters!</p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Feedback sent! Thank you ❤️");
              }}
            >
              <label>Name:</label>
              <br />
              <input type="text" required />

              <br /><br />

              <label>Your Feedback:</label>
              <br />
              <textarea rows="4" required />

              <br /><br />

              <button type="submit">Send Feedback</button>
            </form>
          </div>

          {/* REWARDS */}
          <div className="card">
            <h3>Get Rewards 🎁</h3>
            <p>
              Leave feedback and receive exclusive discount codes for your next order!
            </p>
            <p>
              Loyal customers may also receive special offers and early access to new collections.
            </p>
          </div>

        </div>
      </section>
    </>
  );
}