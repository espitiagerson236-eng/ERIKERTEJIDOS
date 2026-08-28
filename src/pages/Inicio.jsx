import React from 'react';
import { Link } from 'react-router-dom';
import './Inicio.css';

// Importamos exactamente las mismas imágenes que usas en Catalogo.jsx
import getiYruana from '../assets/getiYruana.jpeg';
import gorropepas1 from '../assets/gorropepas1.jpeg';
import geti1 from '../assets/geti1.jpeg';

export function Inicio() {
  // Productos destacados tomados directamente de tu catálogo real
  const productosDestacados = [
    {
      id: 1,
      nombre: 'Ruana Tejida',
      precio: 120000,
      imagen: getiYruana,
      descripcion: 'Ruana artesanal tejida a mano, suave y térmica.'
    },
    {
      id: 2,
      nombre: 'Gorro Tejido',
      precio: 25000,
      imagen: gorropepas1,
      descripcion: 'Gorro tejido ideal para protegerte del frío.'
    },
    {
      id: 3,
      nombre: 'Saco Yeti Térmico',
      precio: 95000,
      imagen: geti1,
      descripcion: 'Prenda tipo piel de ovejo/peluche ideal para frío intenso.'
    }
  ];

  return (
    <div className="inicio-container">
      {/* 1. Hero / Banner Principal */}
      <section className="hero-section">
        <div className="hero-content">
          <h2>Tejidos Artesanales Hechos con Amor</h2>
          <p>
            Descubre colecciones únicas diseñadas a mano para brindarte comodidad, 
            calidez y estilo en cada prenda.
          </p>
          <Link to="/catalogo" className="btn-primary" style={{ textDecoration: 'none', display: 'inline-block' }}>
            Ver Catálogo
          </Link>
        </div>
      </section>

      {/* 2. Barra de Garantías */}
      <section className="guarantees-section">
        <div className="guarantees-grid">
          <div className="guarantee-item">
            <span className="icon">🚚</span>
            <div>
              <h4>Envíos a toda Colombia</h4>
              <p>Llegamos hasta la puerta de tu casa</p>
            </div>
          </div>
          <div className="guarantee-item">
            <span className="icon">🧶</span>
            <h4>100% Hecho a Mano</h4>
            <p>Dedicación y detalle en cada puntada</p>
          </div>
          <div className="guarantee-item">
            <span className="icon">💬</span>
            <h4>Atención Personalizada</h4>
            <p>Escríbenos directamente por WhatsApp</p>
          </div>
        </div>
      </section>

      {/* 3. Productos Destacados (Con tus datos reales) */}
      <section className="featured-products-section">
        <h3>Productos Destacados</h3>
        <p className="section-subtitle">Lo más pedido de nuestra colección</p>

        <div className="products-grid">
          {productosDestacados.map((prod) => (
            <div key={prod.id} className="product-card">
              <img src={prod.imagen} alt={prod.nombre} className="product-img" />
              <div className="product-info">
                <h4>{prod.nombre}</h4>
                <p className="descripcion">{prod.descripcion}</p>
                <p className="price">${prod.precio.toLocaleString('es-CO')}</p>
                <Link to="/catalogo" className="btn-secondary">
                  Ver en Catálogo
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Características */}
      <section className="features-section">
        <h3>¿Por qué elegir Eriker Tejidos?</h3>
        <div className="features-grid">
          <div className="feature-card">
            <span className="icon">🧶</span>
            <h4>100% Artesanal</h4>
            <p>Cada pieza es elaborada cuidadosamente a mano.</p>
          </div>
          <div className="feature-card">
            <span className="icon">✨</span>
            <h4>Alta Calidad</h4>
            <p>Utilizamos los mejores hilos para mayor suavidad y durabilidad.</p>
          </div>
          <div className="feature-card">
            <span className="icon">🎨</span>
            <h4>Diseños Personalizados</h4>
            <p>Creaciones únicas adaptadas a tu gusto e ideas.</p>
          </div>
        </div>
      </section>
    </div>
  );
}