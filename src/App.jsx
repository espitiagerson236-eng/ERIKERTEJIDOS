import React from 'react';
import { TopNav } from './components/TopNav';
import { Header } from './components/Header';
import { Navbar } from './components/NavBar';
import { Footer } from './components/Footer';
import { Inicio } from './components/inicio';
import WhatsAppButton from './components/WhatAppButton';
import './App.css';

export default function App() {
  return (
    <div className="app-layout">
      <WhatsAppButton />
      <TopNav />
      <Header />
      <Navbar />

      <main className="main-content">
        <Inicio />
      </main>

      <Footer />
    </div>
  );
}