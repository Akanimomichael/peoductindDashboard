// OrderForm.js
import React, { useState } from 'react';

function OrderForm({ onSubmit }) {
  const [order, setOrder] = useState({
    OrderID: '',
    CustomerName: '',
    TotalAmount: '',
    OrderItems: '',
    Location: '',
    Status: 'active',
    StatusBg: '#03C9D7',
    ProductImage: 'product3',
  });

    const handleImageChange = (e) => {
      const file = e.target.files[0];
      setOrder({ ...order, ProductImage: file });
    };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setOrder({
      ...order,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(order);
    // localStorage.setItem('orders', JSON.stringify([...order, order]))
    setOrder({
      OrderID: '',
      CustomerName: '',
      TotalAmount: '$' + ' ',
      OrderItems: '',
      Location: '',
      Status: 'active',
      StatusBg: '#03C9D7',
      ProductImage: null,
    });
    console.log(order)
  };


  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Order ID:</label>
          <input
            type="text"
            name="OrderID"
            value={order.OrderID}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Customer Name:</label>
          <input
            type="text"
            name="CustomerName"
            value={order.CustomerName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Total Amount:</label>
          <input
            type="number"
            name="TotalAmount"
            value={order.TotalAmount}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Order Items:</label>
          <input
            type="text"
            name="OrderItems"
            value={order.OrderItems}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Location:</label>
          <input
            type="text"
            name="Location"
            value={order.Location}
            onChange={handleChange}
            required
          />
          <strong>Product Image:</strong>
          <input
            type="file"
            name="ProductImage"
            // value={order.ProductImage}
            accept=".jpg, .jpeg, .png, .gif"
            onChange={handleImageChange}
          />
        </div>
        <button type="submit">Add Order</button>
      </form>
    </>
  );
}

export default OrderForm;
