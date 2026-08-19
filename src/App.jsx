import React from 'react';
import { TopNav } from './components/TopNav';
import { Header } from './components/Header';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import './App.css';

export default function App() {
  return (
    <div className="app-layout">
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