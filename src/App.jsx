import React from 'react';
import { TopNav } from './components/TopNav';
import { Header } from './components/Header';
import { Navbar } from './components/NavBar';
import { Footer } from './components/Footer';
import WhatsAppButton from './components/WhatAppButton';
import './App.css';

export default function App() {
  return (
    <div className="app-layout">
      <WhatsAppButton/>
      <TopNav />
      <Header />
      <Navbar />

      <main className="main-content">
        <h2>Bienvenido a Eriker Tejidos</h2>
      </main>

      <Footer />
    </div>
  );
}