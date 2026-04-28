import React from "react";
import "./Inventory.css";

export default function Inventory() {
  return (
    <main className="inventory-page">

      <h1>Book Inventory</h1>

      {/* Go Back Home */}
      <ul>
        <li><a href="/">Go Back Home</a></li>
      </ul>

      <table className="inventory-table">
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
          <tr className="read">
            <td>AAAA</td>
            <td>AAAA</td>
            <td>AAAA</td>
            <td><span className="status">Read</span></td>
            <td>
              <span className="rate three">
                <span></span><span></span><span></span>
              </span>
            </td>
          </tr>

          <tr className="read">
            <td>BBB</td>
            <td>BBB</td>
            <td>BBB</td>
            <td><span className="status">Read</span></td>
            <td>
              <span className="rate two">
                <span></span><span></span><span></span>
              </span>
            </td>
          </tr>

          <tr className="in-progress">
            <td>CCC</td>
            <td>CCC</td>
            <td>CCC</td>
            <td><span className="status">In Progress</span></td>
            <td>
              <span className="rate">
                <span></span><span></span><span></span>
              </span>
            </td>
          </tr>

          <tr className="to-read">
            <td>DDD</td>
            <td>DDD</td>
            <td>DDD</td>
            <td><span className="status">To Read</span></td>
            <td>
              <span className="rate">
                <span></span><span></span><span></span>
              </span>
            </td>
          </tr>
        </tbody>
      </table>

    </main>
  );
}