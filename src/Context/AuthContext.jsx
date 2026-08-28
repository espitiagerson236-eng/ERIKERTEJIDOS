import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // Inicialmente no hay usuario autenticado
  const [usuario, setUsuario] = useState(null);

  const iniciarSesion = (email) => {
    // Extraemos un nombre legible del correo (por ejemplo: "juan" si es "juan@gmail.com")
    const nombreUsuario = email.split('@')[0];
    setUsuario({ email, nombre: nombreUsuario });
  };

  const cerrarSesion = () => {
    setUsuario(null);
  };

  return (
    <AuthContext.Provider value={{ usuario, iniciarSesion, cerrarSesion }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth debe usarse dentro de un AuthProvider');
  }
  return context;
};