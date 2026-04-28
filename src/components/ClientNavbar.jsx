import { Link } from "react-router-dom";

export default function ClientNavbar() {
  return (
    <header className="client-header">

      {/* LOGO */}
      <div className="logo">MEHR</div>

      {/* NAVIGATION */}
      <nav>
        <Link to="/client-home">Home</Link>
        <Link to="/client-gallery">Gallery Shop</Link>
        <Link to="/client-contact">Contact</Link>
        <Link to="/client-overview">Project Overview</Link>

        {/* CART */}
        <Link to="/client-cart">
          Cart (0)
        </Link>
      </nav>

    </header>
  );
}