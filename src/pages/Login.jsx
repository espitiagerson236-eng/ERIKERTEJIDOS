import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext'; // 👈 Importar Hook de Auth
import './Login.css';

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { usuario, iniciarSesion, cerrarSesion } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    iniciarSesion(email); // Guardar datos del usuario
    navigate('/catalogo');
  };

  // Si ya hay sesión iniciada, mostrar estado actual y opción de salir
  if (usuario) {
    return (
      <div className="login-container">
        <div className="login-card">
          <h2>Sesión Iniciada ✅</h2>
          <p>Has ingresado como: <strong>{usuario.email}</strong></p>
          <button className="btn-login" onClick={cerrarSesion}>
            Cerrar Sesión
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Iniciar Sesión</h2>
        <p>Accede a tu cuenta de Eriker Tejidos</p>

        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="email">Correo Electrónico</label>
            <input
              type="email"
              id="email"
              placeholder="tuemail@ejemplo.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              id="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn-login">
            Ingresar
          </button>
        </form>
      </div>
    </div>
  );
}