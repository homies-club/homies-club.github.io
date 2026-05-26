/*
 * Qué hace el archivo: Componente Hero de la landing page.
 * Fecha de última modificación: 2026-05-25
 * Nombre del autor: Antigravity
 */
import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-overlay"></div>
      <div className="container hero-content">
        <motion.h1 
          className="hero-title"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          HOMIES <span className="text-primary">CLUB</span>
        </motion.h1>
        
        <motion.p 
          className="hero-subtitle"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Sabor callejero con estilo propio
        </motion.p>
        
        <motion.div 
          className="hero-buttons"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <a href="#menu" className="btn btn-primary">Ver Carta</a>
          <a href="#delivery" className="btn btn-outline">Pedir Ahora</a>
        </motion.div>
      </div>
    </section>
  );
}
