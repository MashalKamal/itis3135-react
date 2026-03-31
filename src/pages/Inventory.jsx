import React from "react";
import "./Inventory.css"; // Make sure to create this CSS file

const books = [
  { title: "The Hobbit", author: "J.R.R. Tolkien", category: "Fantasy", status: "Read", rate: 3 },
  { title: "1984", author: "George Orwell", category: "Dystopian", status: "Read", rate: 2 },
  { title: "Clean Code", author: "Robert C. Martin", category: "Programming", status: "In Progress", rate: 1 },
  { title: "Atomic Habits", author: "James Clear", category: "Self-help", status: "To Read", rate: 0 },
];

export default function Inventory() {
  return (
    <main className="inventory-container">
      <ul>
        <li><a href="/">Go Back Home</a></li>
      </ul>

      <h1>Book Inventory</h1>

      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Category</th>
            <th>Status</th>
            <th>Rate</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book, idx) => (
            <tr key={idx} className={book.status.toLowerCase().replace(" ", "-")}>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.category}</td>
              <td><span className="status">{book.status}</span></td>
              <td>
                <span className="rate">
                  {[1, 2, 3].map((n) => (
                    <span key={n} className={n <= book.rate ? "filled" : ""}></span>
                  ))}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}