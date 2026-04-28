import "./client.css";

export default function ClientOverview() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <h1>Project Overview</h1>
      </section>

      {/* CONTENT */}
      <section className="products">
        <div className="layout">

          <div className="card">
            <h3>Project Overview</h3>
            <p>
              This project is a web application for a Middle Eastern clothing boutique called Mehr Shop.
              It allows users to explore cultural fashion, view clothing items, and interact with products online.
            </p>
          </div>

          <div className="card">
            <h3>Purpose</h3>
            <p>
              The purpose of this website is to promote Middle Eastern fashion and provide users with an
              easy and engaging online shopping experience.
            </p>
          </div>

          <div className="card">
            <h3>Users</h3>
            <ul>
              <li>Online shoppers looking for cultural clothing</li>
              <li>People interested in Middle Eastern fashion</li>
              <li>Customers searching for traditional and modern outfits</li>
              <li>General visitors exploring fashion styles</li>
            </ul>
          </div>

          <div className="card">
            <h3>Website Content</h3>
            <p>
              The website includes product images, prices, clothing categories, an about page,
              a contact form, and a project documentation page.
            </p>
          </div>

          <div className="card">
            <h3>Website Pages</h3>

            <ul>
              <li>Home (ClientHome.jsx)</li>
              <li>About Page</li>
              <li>Gallery Page (ClientGallery.jsx)</li>
              <li>Contact Page</li>
              <li>Project Overview Page</li>
            </ul>

            <p>All pages are connected through React Router navigation.</p>
          </div>

          <div className="card">
            <h3>Client Information</h3>
            <p>
              Name: Hila Nikzad <br />
              Business: Mehr Shop <br />
              Email: HilaNikzad@gmail.com <br />
              Phone: 9802299069
            </p>
          </div>

          <div className="card">
            <h3>Wireframe</h3>

            <figure>
              <img
                src="/images/Wireframe.png"
                alt="Wireframe"
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "contain",
                }}
              />
              <figcaption>Homepage wireframe created using draw.io</figcaption>
            </figure>

            <p>The wireframe shows the layout structure before development.</p>
          </div>

          <div className="card">
            <h3>Site Map</h3>

            <figure>
              <img
                src="/images/Sitemap.png"
                alt="Site Map"
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "contain",
                }}
              />
              <figcaption>Website navigation structure</figcaption>
            </figure>
          </div>

          <div className="card">
            <h3>Page Design</h3>

            <h4>Home</h4>
            <p>Introduce Mehr Shop and featured products.</p>

            <h4>Gallery</h4>
            <p>Displays products with Add to Cart functionality.</p>

            <h4>About</h4>
            <p>Explains brand story and mission.</p>

            <h4>Contact</h4>
            <p>Contact form with validation.</p>

            <h4>Overview</h4>
            <p>Project documentation for instructor.</p>
          </div>

          <div className="card">
            <h3>Dynamic Functionality</h3>

            <ul>
              <li>Add to Cart system using React state</li>
              <li>Product filtering by category</li>
              <li>Contact form validation</li>
              <li>Image gallery interactions</li>
              <li>Interactive UI components</li>
            </ul>
          </div>

        </div>
      </section>
    </>
  );
}