import React from 'react';
import { NavLink, } from 'react-router-dom';
import '../ShopNavBar/ShopNavBar.css';

const ShopNavBar = ({ onCategoriaChange, categoriaSeleccionada }) => {
  const handleCategoriaChange = (categoria) => {
    onCategoriaChange(categoria);
  };

  return (
    <div className='navbarshop'>
      <ul className='navbarshop-nav-links'>
        <li>
        <NavLink exact to="/shop/todos" className="navbarshop-nav-link" activeClassName="active" onClick={() => handleCategoriaChange('todos')}>
            Todos
          </NavLink>
        </li>
        <li>
        <NavLink exact to="/shop/handmade" className="navbarshop-nav-link" activeClassName="active" onClick={() => handleCategoriaChange('handmade')}>
            Handmade
          </NavLink>
        </li>
        <li>
        <NavLink exact to="/shop/grey" className="navbarshop-nav-link" activeClassName="active" onClick={() => handleCategoriaChange('grey')}>
            Grey
          </NavLink>
        </li>
        <li>
        <NavLink exact to="/shop/tin" className="navbarshop-nav-link" activeClassName="active" onClick={() => handleCategoriaChange('tin')}>
            Tin
          </NavLink>
        </li>
        <li>
        <NavLink exact to="/shop/queen" className="navbarshop-nav-link" activeClassName="active" onClick={() => handleCategoriaChange('queen')}>
            Queen
          </NavLink>
        </li>
        <li>
        <NavLink exact to="/shop/wish" className="navbarshop-nav-link" activeClassName="active" onClick={() => handleCategoriaChange('wish')}>
            Wish
          </NavLink>
        </li>
        <li>
        <NavLink exact to="/shop/moonlight" className="navbarshop-nav-link" activeClassName="active" onClick={() => handleCategoriaChange('moonlight')}>
            Moonlight
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default ShopNavBar;