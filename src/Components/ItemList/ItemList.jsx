import React from 'react';
import ItemCard from '../Item/Item';
import ArrayProducts from '../../Json/ArrayProducts.json';
import './ItemList.css';

const ItemList = ({ categoria }) => {
  const productos = (!categoria || categoria.toLowerCase() === 'todos')
    ? ArrayProducts
    : ArrayProducts.filter((producto) => producto.categoria.toLowerCase() === categoria.toLowerCase());

  return (
    <div className="item-list-container">
      {productos.length === 0 ? (
        <p>No hay productos disponibles en esta categoría.</p>
      ) : (
        productos.map((producto) => (
          <ItemCard key={producto.id} {...producto} />
        ))
      )}
    </div>
  );
};

export default ItemList;