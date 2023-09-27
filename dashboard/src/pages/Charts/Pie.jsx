// App.js
import React, { useState } from "react";
import OrderForm from "../../data/OrderForm.js";

function App() {
  const [orders, setOrders] = useState([]);

  const addOrder = (newOrder) => {
    setOrders([...orders, newOrder]);
    console.log(`from addorder ${orders}`);
  };
  console.log(`from pie ${orders}`);
  return (
    <div>
      <h1>Order Management System</h1>
      <OrderForm onSubmit={addOrder} />

      {/* Inside the App component */}
      <div>
        <h2>Orders</h2>
        <ul>
          {orders.map((order, index) => (
            <li key={index}>
              {console.log(
                "Image URL:",
                URL.createObjectURL(order.ProductImage)
              )}
              {/* {console.log(
                `TRY LOOL KER ${URL.createObjectURL(order.ProductImage)}`
              )} */}
              <strong>Order ID:</strong> {order.OrderID}
              <br />
              <strong>Customer Name:</strong> {order.CustomerName}
              <br />
              <strong>Total Amount:</strong> {order.TotalAmount}
              <br />
              <strong>Order Items:</strong> {order.OrderItems}
              <br />
              <strong>Location:</strong> {order.Location}
              <br />
              <br />
              <strong>Location:</strong>{" "}
              <img
                src={URL.createObjectURL(order.ProductImage)}
                alt="imgthht"
              />
              <br />
              {/* Add more fields as needed */}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
