import React, { useState } from 'react';
import '../ItemCount/ItemCount.css';

const ItemCount = ({ stock, onAdd }) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const handleAdd = () => {
    if (count > 0) {
      onAdd(count);
    }
  };

  return (
    <div className="item-count">
      <div className="quantity-display">
        <button className="quantity-button" onClick={decrement} disabled={count === 0}>
          -
        </button>
        <p> {count} </p>
        <button className="quantity-button" onClick={increment} disabled={count === stock}>
          +
        </button>
        <button className="add-to-cart-button" onClick={handleAdd} disabled={count === 0 || count > stock}>
        Add
      </button>
      </div>

    </div>
  );
};

export default ItemCount;