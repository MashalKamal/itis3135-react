import { useState } from "react";
import "./client.css";

export default function ClientCart() {
  const [cartItems, setCartItems] = useState([]);

  function addToCart(item) {
    setCartItems((prev) => {
      const existing = prev.find((i) => i.id === item.id);

      if (existing) {
        return prev.map((i) =>
          i.id === item.id
            ? { ...i, qty: i.qty + item.qty }
            : i
        );
      }

      return [...prev, item];
    });
  }

  function removeItem(id) {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  }

  function clearCart() {
    setCartItems([]);
  }

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  return (
    <main>
      {/* HERO */}
      <section className="hero">
        <h1>Your Shopping Cart</h1>
        <p>Review your selected items</p>
      </section>

      {/* CART */}
      <section className="products">
        <h2>Cart Items</h2>

        {cartItems.length === 0 ? (
          <p style={{ textAlign: "center" }}>
            No items in cart yet.
          </p>
        ) : (
          <div className="layout">
            {cartItems.map((item) => (
              <div className="card" key={item.id}>
                <img src={item.img} alt={item.name} />

                <h3>{item.name}</h3>

                <p>Price: ${item.price}</p>
                <p>Qty: {item.qty}</p>

                <p>Total: ${item.price * item.qty}</p>

                <button onClick={() => removeItem(item.id)}>
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}

        {/* TOTAL */}
        <div className="cart-total">
          <h3>Total Price: ${total}</h3>
        </div>

        {/* ACTIONS */}
        <div className="cart-actions">
          <button onClick={clearCart}>
            Clear Cart
          </button>
        </div>
      </section>
    </main>
  );
}