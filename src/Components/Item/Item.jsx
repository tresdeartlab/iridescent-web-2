import React, { useState } from 'react';
import Slider from 'react-slick';
import ItemCount from '../ItemCount/ItemCount';
import '../Item/Item.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Item = ({ nombre, descripcion, imagenes, precio, stock }) => {
  const [] = useState(0);

  const handleAddToCart = (quantity) => {
    console.log(`Añadir al carrito: ${quantity} unidades`);
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="item-card">
      <Slider {...sliderSettings}>
        {imagenes.map((imagen, index) => (
          <img
            key={index}
            src={imagen}
            alt={`Imagen ${index + 1}`}
            className="slider-image"
            style={{ width: '400px', height: '400px', objectFit: 'cover' }}
          />
        ))}
      </Slider>
      <div className="card-content">
        <div className="text-container">
          <h3>{nombre}</h3>
          <p>{descripcion}</p>
        </div>
        <div className="price-button-container">
          <p>Precio: ${precio.toFixed(3)}</p>
          <ItemCount stock={stock} onAdd={handleAddToCart} />
        </div>
      </div>
    </div>
  );
};

export default Item;