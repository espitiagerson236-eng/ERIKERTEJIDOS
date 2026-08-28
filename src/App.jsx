import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Componentes Reutilizables
import { TopNav } from './components/TopNav';
import { Header } from './components/Header';
import { Navbar } from './components/NavBar';
import { Footer } from './components/Footer';
import WhatsAppButton from './components/WhatAppButton';

// Páginas
import { Inicio } from './pages/Inicio';
import { Nosotros } from './pages/Nosotros';
import { Catalogo } from './pages/Catalogo'; 
import { Login } from './pages/Login';
import { Carrito } from './pages/Carrito';

import './App.css';

export default function App() {
  return (
    <div className="app-layout">
      <WhatsAppButton />
      <TopNav />
      <Header />
      <Navbar />

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/nosotros" element={<Nosotros />} /> {/* 👈 ESTA ES LA LÍNEA QUE TE FALTA */}
          <Route path="/catalogo" element={<Catalogo />} />
          <Route path="/login" element={<Login />} />
          <Route path="/carrito" element={<Carrito />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}