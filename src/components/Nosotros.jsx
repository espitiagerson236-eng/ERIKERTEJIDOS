import React from 'react';
import { Link } from 'react-router-dom';
import 'Nosotros.css';

export function Nosotros() {
  return (
    <div className="nosotros-container">
      {/* Banner Principal */}
      <section className="nosotros-hero">
        <div className="nosotros-hero-content">
          <h2>Sobre Eriker Tejidos</h2>
          <p>Pasión, tradición y calor en cada una de nuestras prendas hechas a mano.</p>
        </div>
      </section>

      {/* Historia */}
      <section className="historia-section">
        <div className="historia-container">
          <div className="historia-texto">
            <h3>Nuestra Historia</h3>
            <p>
              Eriker Tejidos nació del amor por la artesanía y el deseo de ofrecer prendas 
              únicas que abriguen con estilo. Cada ruanas, gorro, cuellero y prenda térmica 
              es elaborada meticulosamente a mano, seleccionando los mejores hilos para garantizar 
              suavidad, durabilidad y máxima comodidad.
            </p>
            <p>
              Creemos firmemente en el valor de lo hecho a mano y en la importancia de cuidar 
              cada detalle para que recibas un producto de la más alta calidad en la puerta de tu casa.
            </p>
          </div>
        </div>
      </section>

      {/* Valores / Pilares */}
      <section className="valores-section">
        <h3>Lo Que Nos Mueve</h3>
        <div className="valores-grid">
          <div className="valor-card">
            <span className="icon">🧶</span>
            <h4>Tradición Artesanal</h4>
            <p>Mantenemos viva la técnica del tejido a mano, dando valor al tiempo y al detalle.</p>
          </div>
          <div className="valor-card">
            <span className="icon">❤️</span>
            <h4>Amor por el Detalle</h4>
            <p>Cada pieza se teje pensando en quien la va a usar, buscando siempre la perfección.</p>
          </div>
          <div className="valor-card">
            <span className="icon">⭐</span>
            <h4>Calidad Garantizada</h4>
            <p>Utilizamos materiales seleccionados para ofrecer comodidad, calidez y durabilidad.</p>
          </div>
        </div>
      </section>

      {/* Llamado a la acción */}
      <section className="nosotros-cta">
        <h3>¿Quieres conocer nuestras prendas?</h3>
        <p>Explora nuestro catálogo y descubre el tejido ideal para ti.</p>
        <Link to="/catalogo" className="btn-primary" style={{ textDecoration: 'none', display: 'inline-block' }}>
          Ver Catálogo
        </Link>
      </section>
    </div>
  );
}