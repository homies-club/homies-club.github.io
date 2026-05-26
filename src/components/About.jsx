/*
 * Qué hace el archivo: Componente Sobre Nosotros.
 * Fecha de última modificación: 2026-05-25
 * Nombre del autor: Antigravity
 */
import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

export default function About() {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <div className="about-content-wrapper">
          <motion.div 
            className="about-text-col"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title" style={{textAlign: 'left'}}>
              Sobre <span className="text-primary">Nosotros</span>
            </h2>
            <p className="about-desc">
              En <strong>HOMIES CLUB</strong> combinamos sabor intenso, comida callejera y calidad premium para crear una experiencia única. Somos el point perfecto para los amantes de las hamburguesas, alitas y comida urbana a un precio accesible.
            </p>
          </motion.div>
          
          <motion.div 
            className="about-img-col"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="Ambiente Urbano Homies club" 
              className="about-image"
            />
            <div className="about-img-overlay"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
