/*
 * Qué hace el archivo: Componente flotante para el carrito de compras.
 * Fecha de última modificación: 2026-05-26
 * Nombre del autor: Antigravity
 */
import React, { useState } from 'react';
import { ShoppingBag, X, Trash2, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './Cart.css';

export default function Cart({ cartItems, removeFromCart }) {
  const [isOpen, setIsOpen] = useState(false);

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      const price = parseFloat(item.price) || 0;
      return total + price;
    }, 0);
  };

  const getOrderMessage = () => {
    let message = "Hola Homies Food! Quería hacer el siguiente pedido:\n\n";
    cartItems.forEach((item, index) => {
      message += `${index + 1}. ${item.name} - S/.${item.price || "0"}\n`;
    });
    message += `\nTotal estimado: S/.${calculateTotal().toFixed(2)}\n\nEspero su confirmación, ¡gracias!`;
    return encodeURIComponent(message);
  };

  const handleWhatsAppOrder = () => {
    const phoneNumber = "51940150056"; // Cambiar por número real
    window.open(`https://wa.me/${phoneNumber}?text=${getOrderMessage()}`, '_blank');
  };

  const handleInstagramOrder = () => {
    const message = decodeURIComponent(getOrderMessage());
    navigator.clipboard.writeText(message).then(() => {
      alert("¡Tu pedido ha sido copiado al portapapeles! Pégalo en el chat de Instagram.");
      window.open('https://ig.me/m/homies._club', '_blank');
    }).catch(err => {
      console.error('Error al copiar:', err);
      window.open('https://ig.me/m/homies._club', '_blank');
    });
  };

  if (cartItems.length === 0) return null;

  return (
    <>
      <button className="cart-floating-btn" onClick={() => setIsOpen(true)}>
        <ShoppingBag size={24} />
        <span className="cart-badge">{cartItems.length}</span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div 
              className="cart-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />
            <motion.div 
              className="cart-panel"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
            >
              <div className="cart-header">
                <h2>Tu Pedido</h2>
                <button className="cart-close-btn" onClick={() => setIsOpen(false)}>
                  <X size={24} />
                </button>
              </div>

              <div className="cart-items">
                {cartItems.map((item, index) => (
                  <div key={index} className="cart-item">
                    <div className="cart-item-info">
                      <h4>{item.name}</h4>
                      <span className="cart-item-price">S/.{item.price || "0"}</span>
                    </div>
                    <button className="cart-item-remove" onClick={() => removeFromCart(index)}>
                      <Trash2 size={18} />
                    </button>
                  </div>
                ))}
              </div>

              <div className="cart-footer">
                <div className="cart-total">
                  <span>Total estimado:</span>
                  <span>S/.{calculateTotal().toFixed(2)}</span>
                </div>
                <button className="btn btn-primary cart-order-btn" onClick={handleWhatsAppOrder}>
                  <MessageCircle size={20} /> Pedir por WhatsApp
                </button>
                <button className="btn btn-outline cart-order-btn ig-btn" onClick={handleInstagramOrder}>
                  Ir a Instagram
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
