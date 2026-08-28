// Nosotros.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Nosotros.css';

export function Nosotros() {
  return (
    <div className="nosotros-container">
      {/* Banner Principal con efecto parallax */}
      <section className="nosotros-hero">
        <div className="hero-overlay"></div>
        <div className="nosotros-hero-content">
          <div className="hero-badge">✨ Artesanía con alma</div>
          <h2>Sobre Eriker Tejidos</h2>
          <p>Pasión, tradición y calor en cada una de nuestras prendas hechas a mano.</p>
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">+15</span>
              <span className="stat-label">Años de experiencia</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">+500</span>
              <span className="stat-label">Prendas tejidas</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">100%</span>
              <span className="stat-label">Hecho a mano</span>
            </div>
          </div>
        </div>
      </section>

      {/* Historia con diseño de tarjeta lateral */}
      <section className="historia-section">
        <div className="historia-container">
          <div className="historia-content">
            <div className="historia-imagen">
              <div className="imagen-placeholder">
                <span>🧶</span>
              </div>
            </div>
            <div className="historia-texto">
              <div className="historia-tag">Nuestra Historia</div>
              <h3>Tejiendo sueños desde el corazón</h3>
              <p>
                Eriker Tejidos nació del amor por la artesanía y el deseo de ofrecer prendas 
                únicas que abriguen con estilo. Cada ruana, gorro, cuellero y prenda térmica 
                es elaborada meticulosamente a mano, seleccionando los mejores hilos para garantizar 
                suavidad, durabilidad y máxima comodidad.
              </p>
              <p>
                Creemos firmemente en el valor de lo hecho a mano y en la importancia de cuidar 
                cada detalle para que recibas un producto de la más alta calidad en la puerta de tu casa.
              </p>
              <div className="historia-firma">
                <span>— Eriker Tejidos</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Valores con diseño de tarjetas modernas */}
      <section className="valores-section">
        <div className="valores-header">
          <span className="valores-tag">Nuestros Pilares</span>
          <h3>Lo Que Nos Mueve</h3>
          <p>Principios que guían cada puntada y cada creación</p>
        </div>
        <div className="valores-grid">
          <div className="valor-card">
            <div className="valor-icon">🧶</div>
            <h4>Tradición Artesanal</h4>
            <p>Mantenemos viva la técnica del tejido a mano, dando valor al tiempo y al detalle.</p>
            <div className="valor-line"></div>
          </div>
          <div className="valor-card">
            <div className="valor-icon">❤️</div>
            <h4>Amor por el Detalle</h4>
            <p>Cada pieza se teje pensando en quien la va a usar, buscando siempre la perfección.</p>
            <div className="valor-line"></div>
          </div>
          <div className="valor-card">
            <div className="valor-icon">⭐</div>
            <h4>Calidad Garantizada</h4>
            <p>Utilizamos materiales seleccionados para ofrecer comodidad, calidez y durabilidad.</p>
            <div className="valor-line"></div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="testimonial-section">
        <div className="testimonial-content">
          <div className="testimonial-quote">"</div>
          <blockquote>
            Cada prenda cuenta una historia, y en Eriker Tejidos nos aseguramos de que sea una historia de calidad, calidez y dedicación.
          </blockquote>
          <div className="testimonial-author">
            <span className="author-name">Leonardo Trujillo</span>
            <span className="author-role">Fundador & Tejedor</span>
          </div>
        </div>
      </section>

      {/* CTA con diseño mejorado */}
      <section className="nosotros-cta">
        <div className="cta-content">
          <span className="cta-tag">Descubre nuestra colección</span>
          <h3>¿Listo para encontrar tu prenda ideal?</h3>
          <p>Explora nuestro catálogo y déjate envolver por el calor de lo artesanal.</p>
          <Link to="/catalogo" className="btn-primary">
            Ver Catálogo
            <span className="btn-arrow">→</span>
          </Link>
        </div>
      </section>
    </div>
  );
}