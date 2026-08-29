import React, { useState, useEffect } from "react";
import { useCart } from '../Context/CartContext';
import './Catalogo.css';

import bufanda1 from '../assets/bufanda1.jpeg';
import bufanda2 from '../assets/bufanda2.jpeg';
import cuelleros from '../assets/cuelleros.jpeg';
import geti1 from '../assets/geti1.jpeg';
import getiYruana from '../assets/getiYruana.jpeg';
import getiYruana2 from '../assets/getiYruana2.jpeg';
import gorropepas1 from '../assets/gorropepas1.jpeg';
import gorropepas2 from '../assets/gorrospepas2.jpeg';
import pasamontaña from '../assets/pasamontaña.jpeg';

// DICCIONARIO: Conecta las palabras clave de MongoDB con tus imágenes locales de assets
const mapaImágenes = {
  "getiYruana": getiYruana,
  "getiYruana2": getiYruana2,
  "gorropepas1": gorropepas1,
  "gorropepas2": gorropepas2,
  "geti1": geti1,
  "pasamontaña": pasamontaña,
  "cuelleros": cuelleros,
  "bufanda1": bufanda1,
  "bufanda2": bufanda2
};

// Productos locales por defecto (por si la base de datos llega a fallar)
const productosBasicos = [
  {
    id: 1,
    nombre: 'Ruana Tejida',
    categoria: 'ruanas',
    precio: 120000,
    imagenes: [getiYruana, getiYruana2],
    descripcion: 'Ruana artesanal tejida a mano, suave y térmica.'
  },
  {
    id: 2,
    nombre: 'Gorro Tejido',
    categoria: 'gorros',
    precio: 25000,
    imagenes: [gorropepas1, gorropepas2],
    descripcion: 'Gorro tejido ideal para protegerte del frío.'
  },
  {
    id: 3,
    nombre: 'Saco Yeti Térmico',
    categoria: 'yetis',
    precio: 95000,
    imagenes: [geti1],
    descripcion: 'Prenda tipo piel de ovejo/peluche ideal para frío intenso.'
  },
  {
    id: 4,
    nombre: 'Pasamontañas Tejido',
    categoria: 'pasamontanas',
    precio: 35000,
    imagenes: [pasamontaña],
    descripcion: 'Protección completa para el rostro y cuello.'
  },
  {
    id: 5,
    nombre: 'Cuellero Térmico',
    categoria: 'cuelleros',
    precio: 20000,
    imagenes: [cuelleros],
    descripcion: 'Cuellero suave para mantener la calidez en el cuello.'
  }
];

// Componente individual para cada producto con carrusel de imágenes
const TarjetaProducto = ({ producto }) => {
  const [indiceImagen, setIndiceImagen] = useState(0);
  const { agregarAlCarrito } = useCart();

  const listaImagenes = producto.imagenes && producto.imagenes.length > 0 
    ? producto.imagenes 
    : [bufanda1];

  const siguienteImagen = () => {
    setIndiceImagen((prev) => (prev + 1) % listaImagenes.length);
  };

  const anteriorImagen = () => {
    setIndiceImagen((prev) => 
      prev === 0 ? listaImagenes.length - 1 : prev - 1
    );
  };

  return (
    <div className="producto-card">
      <div className="carrusel-container">
        <img 
          src={listaImagenes[indiceImagen]} 
          alt={producto.nombre} 
          className="producto-imagen" 
        />

        {listaImagenes.length > 1 && (
          <>
            <button className="flecha flecha-izquierda" onClick={anteriorImagen}>
              &#10094;
            </button>
            <button className="flecha flecha-derecha" onClick={siguienteImagen}>
              &#10095;
            </button>
            <div className="puntos-indicadores">
              {listaImagenes.map((_, idx) => (
                <span 
                  key={idx} 
                  className={`punto ${idx === indiceImagen ? 'activo' : ''}`}
                  onClick={() => setIndiceImagen(idx)}
                />
              ))}
            </div>
          </>
        )}
      </div>

      <div className="producto-info">
        <h3>{producto.nombre}</h3>
        <p className="descripcion">{producto.descripcion}</p>
        <p className="precio">${producto.precio?.toLocaleString('es-CO')}</p>
        
        <button 
          className="btn-agregar"
          onClick={() => agregarAlCarrito(producto)}
        >
          Añadir al Carrito
        </button>
      </div>
    </div>
  );
};

export const Catalogo = () => {
  const [productos, setProductos] = useState(productosBasicos);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('todos');
  const [cargando, setCargando] = useState(true);

  // Obtiene los productos desde MongoDB Atlas y traduce sus imágenes usando el mapa
  useEffect(() => {
    fetch('http://localhost:5000/api/productos')
      .then(res => res.json())
      .then(data => {
        if (data && data.length > 0) {
          const productosFormateados = data.map(item => ({
            id: item._id || item.id,
            nombre: item.nombre,
            categoria: item.categoria || 'todos',
            precio: item.precio,
            descripcion: item.descripcion || 'Sin descripción',
            // Traduce los nombres de texto que vienen de MongoDB a las variables de tus imágenes locales
            imagenes: item.imagenes && item.imagenes.length > 0 
              ? item.imagenes.map(imgKey => mapaImágenes[imgKey] || bufanda1) 
              : [bufanda1]
          }));
          setProductos(productosFormateados);
        }
        setCargando(false);
      })
      .catch(err => {
        console.error("No se pudo conectar al backend, usando productos locales:", err);
        setCargando(false);
      });
  }, []);

  const productosFiltrados = categoriaSeleccionada === 'todos'
    ? productos
    : productos.filter(p => p.categoria === categoriaSeleccionada);

  const categorias = [
    { key: 'todos', label: 'Todos' },
    { key: 'ruanas', label: 'Ruanas' },
    { key: 'gorros', label: 'Gorros' },
    { key: 'yetis', label: 'Yetis' },
    { key: 'pasamontanas', label: 'Pasamontañas' },
    { key: 'cuelleros', label: 'Cuelleros' }
  ];

  return (
    <div className="catalogo-page">
      <div className="catalogo-content">
        <h1>Coleccion de ERIKER-TEJIDOS</h1>
        <p>Empieza a comprar tus productos aqui</p>

        {/* Botones de filtro por categoría */}
        <div className="filtros-categoria">
          {categorias.map(cat => (
            <button
              key={cat.key}
              className={categoriaSeleccionada === cat.key ? 'btn-filtro activo' : 'btn-filtro'}
              onClick={() => setCategoriaSeleccionada(cat.key)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Malla de Productos */}
        <div className="productos-grid">
          {cargando ? (
            <p style={{ gridColumn: '1 / -1', textAlign: 'center' }}>Cargando catálogo...</p>
          ) : productosFiltrados.length === 0 ? (
            <p style={{ gridColumn: '1 / -1', textAlign: 'center' }}>No hay productos en esta categoría.</p>
          ) : (
            productosFiltrados.map((producto) => (
              <TarjetaProducto key={producto.id || producto._id} producto={producto} />
            ))
          )}
        </div>

      </div>
    </div>
  );
};