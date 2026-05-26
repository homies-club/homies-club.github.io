/*
 * Qué hace el archivo: Componente raíz que ensambla toda la landing page.
 * Fecha de última modificación: 2026-05-25
 * Nombre del autor: Antigravity
 */
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Menu from './components/Menu';
import About from './components/About';
import Delivery from './components/Delivery';
import Footer from './components/Footer';
import Cart from './components/Cart';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const removeFromCart = (indexToRemove) => {
    setCartItems(cartItems.filter((_, index) => index !== indexToRemove));
  };

  return (
    <>
      <Navbar />
      <Hero />
      <Menu addToCart={addToCart} />
      <About />
      <Delivery />
      <Footer />
      <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
    </>
  );
}

export default App;
