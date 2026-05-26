/*
 * Qué hace el archivo: Componente de la sección Delivery.
 * Fecha de última modificación: 2026-05-25
 * Nombre del autor: Antigravity
 */
import React from 'react';
import { motion } from 'framer-motion';
import { Truck, Clock, Phone } from 'lucide-react';
import './Delivery.css';

export default function Delivery() {
  return (
    <section id="delivery" className="section delivery-section">
      <div className="container">
        <motion.div 
          className="delivery-card card"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="delivery-icon-wrapper">
            <Truck size={48} className="text-primary" />
          </div>
          <h2 className="delivery-title">Pedidos Rápidos y Delivery Disponible </h2>
          <p className="delivery-subtitle">Disfruta de la mejor experiencia street food sin salir de casa.</p>
          
          <div className="delivery-features">
            <div className="feature">
              <Clock size={24} className="text-primary" />
              <span>Entregas al toque</span>
            </div>
            <div className="feature">
              <Phone size={24} className="text-primary" />
              <span>Atención rápida</span>
            </div>
          </div>

          <a 
            href="https://wa.me/51940150056?text=Hola,%20quiero%20hacer%20un%20pedido%20en%20Homies%20Food" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-primary whatsapp-btn"
          >
            Pedir por WhatsApp
          </a>
         
        </motion.div>
      </div>
    </section>
  );
}
