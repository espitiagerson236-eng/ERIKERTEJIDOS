import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <ul className="nav-menu">
          <li>
            <a href="/" className="nav-item">inicio</a>
          </li>
          <li>
            <a href="/nosotros" className="nav-item">nosotros</a>
          </li>
          <li>
            <a href="/catalogo" className="nav-item">catalogo</a>
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