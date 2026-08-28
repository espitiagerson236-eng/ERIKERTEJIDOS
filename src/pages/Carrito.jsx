import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../Context/CartContext';
import './Carrito.css';

export function Carrito() {
  const { carrito: items, cambiarCantidad, eliminarProducto, vaciarCarrito } = useCart();
  const [pedidoCompletado, setPedidoCompletado] = useState(false);

  const total = items.reduce((acc, item) => acc + item.precio * item.cantidad, 0);

  const procesarPedido = () => {
    // 1. Armar el mensaje de recibo
    let mensaje = "🧾 *RECIBO DE COMPRA - ERIKER TEJIDOS*\n";
    mensaje += "--------------------------------------\n\n";
    
    items.forEach((item) => {
      mensaje += `• ${item.nombre} (x${item.cantidad}) - $${(item.precio * item.cantidad).toLocaleString('es-CO')}\n`;
    });

    mensaje += `\n--------------------------------------\n`;
    mensaje += `*Total Pagado:* $${total.toLocaleString('es-CO')}\n\n`;
    mensaje += "¡Gracias por tu compra!";

    // 2. Abrir WhatsApp con el recibo listo
    const telefono = "573147888890"; // Tu número con código de país
    const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');

    // 3. Mostrar pantalla de éxito y vaciar el carrito local
    setPedidoCompletado(true);
    vaciarCarrito();
  };

  if (pedidoCompletado) {
    return (
      <div className="carrito-container">
        <div className="mensaje-exito">
          <h2>¡Pedido Realizado con Éxito! 🎉</h2>
          <p>Tu recibo ha sido enviado por WhatsApp y tu compra fue procesada correctamente.</p>
          <Link to="/catalogo" className="btn-primary" onClick={() => setPedidoCompletado(false)}>
            Volver al Catálogo
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="carrito-container">
      <h2>Tu Carrito de Compras</h2>

      {items.length === 0 ? (
        <div className="carrito-vacio">
          <p>Tu carrito está vacío.</p>
          <Link to="/catalogo" className="btn-primary">Ir al Catálogo</Link>
        </div>
      ) : (
        <div className="carrito-content">
          <div className="carrito-lista">
            {items.map((item) => (
              <div key={item.id} className="carrito-item">
                <img src={item.imagen} alt={item.nombre} className="item-img" />
                
                <div className="item-detalles">
                  <h4>{item.nombre}</h4>
                  <p className="item-precio">${item.precio.toLocaleString('es-CO')}</p>
                </div>

                <div className="item-controles">
                  <button onClick={() => cambiarCantidad(item.id, -1)}>-</button>
                  <span>{item.cantidad}</span>
                  <button onClick={() => cambiarCantidad(item.id, 1)}>+</button>
                </div>

                <div className="item-subtotal">
                  ${(item.precio * item.cantidad).toLocaleString('es-CO')}
                </div>

                <button className="btn-eliminar" onClick={() => eliminarProducto(item.id)}>
                  ✕
                </button>
              </div>
            ))}
          </div>

          <div className="carrito-resumen">
            <h3>Resumen del Pedido</h3>
            <div className="resumen-linea">
              <span>Subtotal:</span>
              <span>${total.toLocaleString('es-CO')}</span>
            </div>
            <div className="resumen-linea">
              <span>Envío:</span>
              <span>Por acordar</span>
            </div>
            <hr />
            <div className="resumen-linea total">
              <span>Total:</span>
              <span>${total.toLocaleString('es-CO')}</span>
            </div>

            <button className="btn-checkout" onClick={procesarPedido}>
              Finalizar y Enviar Recibo
            </button>
          </div>
        </div>
      )}
    </div>
  );
}