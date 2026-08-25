import React from 'react';
import './Header.css';
import logoImg from '../assets/logo.jpeg';

export const Header = () => {
  return (
    <header className="main-header">
      <div className="header-container">
        <img src={logoImg}alt="logo" className='logo' />
        <a href="/" className="brand-logo">
          ERIKER <span className="highlight">TEJIDOS</span>
        </a>
        <p className="brand-tagline">Gorros artesanales </p>
      </div>
    </header>
  );
};