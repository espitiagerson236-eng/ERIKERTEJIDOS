import React from 'react';
import './Navbar.css';

export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <ul className="nav-menu">
          <li>
            <a href="/" className="nav-item active">Inicio</a>
          </li>
          <li>
            <a href="/nosotros" className="nav-item">Nosotros</a>
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