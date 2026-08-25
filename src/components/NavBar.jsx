import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <ul className="nav-menu">
          <li>
            <Link to="/" className="nav-item">inicio</Link>
          </li>
          <li>
            <Link to="/nosotros" className="nav-item">nosotros</Link>
          </li>
          <li>
            <Link to="/catalogo" className="nav-item">catalogo</Link>
          </li>
        </ul>

        {/* Botón de acción rápido (Carrito o Pedido) */}
        <button className="cart-btn">
          🛒 Carrito <span className="cart-badge">0</span>
        </button>
      </div>
    </nav>
  );
};