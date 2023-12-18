import React, { useState } from 'react';
import './Cart.css';

const Cart = () => {
  const [numItems, setNumItems] = useState(0);

  const handleIncrement = () => {
    setNumItems(numItems + 1);
  };

  return (
    <div className="cart">
      <button className="cart-button" onClick={handleIncrement}>
        🛒: {numItems} items
      </button>
    </div>
  );
};

export default Cart;