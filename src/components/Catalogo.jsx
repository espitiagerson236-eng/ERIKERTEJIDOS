import React from "react";
import { Navbar } from "./NavBar";
import './Catalogo.css';

export const Catalogo = () => {
    return(
        <div className="catalogo-page">
            <Navbar />
            <div className="catalogo-content">
                <h1>Coleccion de Gorros Artesanales</h1>
                <p>Aqui empezaras a maquetar tus productos</p>
            </div>
        </div>
    );
}