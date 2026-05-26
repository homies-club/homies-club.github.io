/*
 * Qué hace el archivo: Componente de navegación superior.
 * Fecha de última modificación: 2026-05-25
 * Nombre del autor: Antigravity
 */
import React from 'react';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="navbar glass">
      <div className="container nav-container">
        <a href="#" className="logo">HOMIES<span className="text-primary">CLUB</span></a>
        
        <div className={`nav-links ${isOpen ? 'open' : ''}`}>
          <a href="#hero" onClick={() => setIsOpen(false)}>Inicio</a>
          <a href="#menu" onClick={() => setIsOpen(false)}>Carta</a>
          <a href="#about" onClick={() => setIsOpen(false)}>Nosotros</a>
          <a href="#delivery" onClick={() => setIsOpen(false)}>Delivery</a>
        </div>

        <button className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
    </nav>
  );
}
