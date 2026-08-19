import React from 'react';
import './Footer.css';

export const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="footer-content">
        <h3 className="footer-brand">ERIKER <span>TEJIDOS</span></h3>
        <p className="footer-desc">
          Gorros tejidos a mano elaborados con hilo y lana de alta calidad.
        </p>
        <div className="footer-divider"></div>
        <p className="footer-copyright">
          © 2026 Eriker Tejidos. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};