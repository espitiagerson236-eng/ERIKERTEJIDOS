import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../Context/CartContext';
import { useAuth } from '../Context/AuthContext'; // 👈 Importar Auth
import './Navbar.css';

export const Navbar = () => {
  const { totalItems } = useCart();
  const { usuario, cerrarSesion } = useAuth(); // 👈 Obtener el estado del usuario

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

                <div className="nav-actions">
          {usuario ? (
            <div className="usuario-badge">
              <span className="usuario-nombre">
                👤 <strong>{usuario.nombre}</strong>
              </span>
              <button onClick={cerrarSesion} className="btn-logout">
                Salir
              </button>
            </div>
          ) : (
            <Link to="/login" className="btn-login-nav">
              👤 Ingresar
            </Link>
          )}

          <Link to="/carrito" className="cart-btn" style={{ textDecoration: 'none' }}>
            🛒 Carrito <span className="cart-badge">{totalItems}</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};