/*
 * Qué hace el archivo: Componente del pie de página.
 * Fecha de última modificación: 2026-05-25
 * Nombre del autor: Antigravity
 */
import React from 'react';
import { MapPin, Clock } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-container">
        
        <div className="footer-col brand-col">
          <h2 className="footer-logo">HOMIES<span className="text-primary">CLUB</span></h2>
          <p className="footer-slogan">Sabor callejero con estilo propio.</p>
        </div>

        <div className="footer-col">
          <h3>Ubícanos</h3>
          <div className="footer-info">
            <MapPin size={18} className="text-primary" />
            <span>Calle Falsa 123, Ciudad, País <br/> </span>
          </div>
        </div>

        <div className="footer-col">
          <h3>Horarios</h3>
          <div className="footer-info">
            <Clock size={18} className="text-primary" />
            <span>
              Mar - Dom: 6:00 PM - 11:30 PM <br/>
              Lunes: Cerrado <br/>
              (Nota: Actualizar horarios)
            </span>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>HOMIES CLUB — STREET FOOD EXPERIENCE &copy; {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}
