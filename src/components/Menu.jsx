/*
 * Qué hace el archivo: Componente de la carta/menú interactivo (expansión en sitio).
 * Fecha de última modificación: 2026-05-26
 * Nombre del autor: Antigravity
 */
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Plus } from 'lucide-react';
import { menuData } from '../data';
import './Menu.css';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const MenuSection = ({ title, items, isDrinkOrExtra, onItemClick, selectedItem, onAddToCart, onWhatsAppOrder }) => (
  <div className="menu-category">
    <h3 className="category-title">{title}</h3>
    <motion.div 
      className={`menu-grid ${isDrinkOrExtra ? 'grid-small' : ''}`}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {items.map((item, index) => {
        const isSelected = selectedItem?.name === item.name;
        return (
          <motion.div 
            key={index} 
            className={`card menu-card ${isSelected ? 'card-expanded' : ''}`}
            variants={itemVariants}
            onClick={() => isSelected ? onItemClick(null) : onItemClick(item)}
            style={{ cursor: 'pointer' }}
          >
            {!isDrinkOrExtra && item.image && (
              <div className="card-image-container">
                <img src={item.image} alt={item.name} className="card-image" loading="lazy" />
              </div>
            )}
            <div className="card-content">
              <div className="card-header">
                <h4 className="item-name">{item.name}</h4>
                <span className="item-price">{item.price ? `S/.${item.price}` : '-'}</span>
              </div>
              {item.description && <p className="item-desc">{item.description}</p>}
              
              <AnimatePresence>
                {isSelected && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="expanded-actions"
                  >
                    <button className="btn btn-outline modal-btn" onClick={(e) => { e.stopPropagation(); onAddToCart(item); }}>
                      <Plus size={18} /> Añadir a la lista
                    </button>
                    <button className="btn btn-primary modal-btn" onClick={(e) => { e.stopPropagation(); onWhatsAppOrder(item); }}>
                      <MessageCircle size={18} /> Pedir por WA
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  </div>
);

export default function Menu({ addToCart }) {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleWhatsAppSingleOrder = (item) => {
    const phoneNumber = "51940150056"; 
    const message = encodeURIComponent(`Hola Homies Food! Quiero pedir: ${item.name} - S/.${item.price || "0"}`);
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  const handleAddToCart = (item) => {
    addToCart(item);
    setSelectedItem(null);
  };

  return (
    <section id="menu" className="section menu-section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Nuestra <span className="text-primary">Carta</span>
        </motion.h2>
        
        <MenuSection title="Hamburguesas" items={menuData.hamburguesas} onItemClick={setSelectedItem} selectedItem={selectedItem} onAddToCart={handleAddToCart} onWhatsAppOrder={handleWhatsAppSingleOrder} />
        <MenuSection title="Wok" items={menuData.wok} onItemClick={setSelectedItem} selectedItem={selectedItem} onAddToCart={handleAddToCart} onWhatsAppOrder={handleWhatsAppSingleOrder} />
        <MenuSection title="Alitas" items={menuData.alitas} onItemClick={setSelectedItem} selectedItem={selectedItem} onAddToCart={handleAddToCart} onWhatsAppOrder={handleWhatsAppSingleOrder} />
        <MenuSection title="De la Casa" items={menuData.de_la_casa} onItemClick={setSelectedItem} selectedItem={selectedItem} onAddToCart={handleAddToCart} onWhatsAppOrder={handleWhatsAppSingleOrder} />
        
        <div className="menu-grid-2-cols">
          <MenuSection title="Perk Drinks" items={menuData.perk_drinks} isDrinkOrExtra={true} onItemClick={setSelectedItem} selectedItem={selectedItem} onAddToCart={handleAddToCart} onWhatsAppOrder={handleWhatsAppSingleOrder} />
          <MenuSection title="Gacelas" items={menuData.gacelas} isDrinkOrExtra={true} onItemClick={setSelectedItem} selectedItem={selectedItem} onAddToCart={handleAddToCart} onWhatsAppOrder={handleWhatsAppSingleOrder} />
        </div>
        
        <MenuSection title="Xtras" items={menuData.xtras} isDrinkOrExtra={true} onItemClick={setSelectedItem} selectedItem={selectedItem} onAddToCart={handleAddToCart} onWhatsAppOrder={handleWhatsAppSingleOrder} />
      </div>

      <AnimatePresence>
        {selectedItem && (
          <motion.div 
            className="item-modal-overlay" 
            onClick={() => setSelectedItem(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
