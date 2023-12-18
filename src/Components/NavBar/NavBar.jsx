import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../NavBar/NavBar.css';
import Cart from '../Cart/Cart'

const NavBar = () => {
  const [categoriasMenuOpen, setCategoriasMenuOpen] = useState(false);

  const toggleCategoriasMenu = () => {
    setCategoriasMenuOpen(!categoriasMenuOpen);
  };

  const closeCategoriasMenu = () => {
    setCategoriasMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <NavLink exact to="/home" className="nav-link logo-link" activeClassName="active" onClick={closeCategoriasMenu}>
          Iridescent
        </NavLink>
      </div>
      <ul className="nav-links">
        <li>
          <NavLink exact to="/home" className="nav-link" activeClassName="active" onClick={closeCategoriasMenu}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/aboutUs" className="nav-link" activeClassName="active" onClick={closeCategoriasMenu}>
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink to="/shop" className="nav-link" activeClassName="active" onClick={closeCategoriasMenu}>
            Shop
          </NavLink>
        </li>
        <li>
          <Cart />
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;