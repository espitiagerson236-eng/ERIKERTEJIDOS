import React from 'react';
import './Header.css';

export const Header = () => {
  return (
    <header className="main-header">
      <div className="header-container">
        <a href="/" className="brand-logo">
          ERIKER <span className="highlight">TEJIDOS</span>
        </a>
        <p className="brand-tagline">Gorros artesanales hechos a mano</p>
      </div>
    </header>
  );
};