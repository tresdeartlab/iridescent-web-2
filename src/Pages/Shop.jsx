import React, { useState } from 'react';
import ItemList from '../Components/ItemList/ItemList';
import ShopNavBar from '../Components/ShopNavBar/ShopNavBar';
import '../Pages/Pages.css'

const Shop = () => {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('todos');

  const handleCategoriaChange = (categoria) => {
    setCategoriaSeleccionada(categoria);
  };

  return (
    <div>
      <div className="page-container">
        <ShopNavBar onCategoriaChange={handleCategoriaChange} />
        <ItemList categoria={categoriaSeleccionada} />
      </div>
    </div>
  );
};

export default Shop;