import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import Contact from './Component/Contact';
import Cart from './Component/Cart';
import Footer from './Component/Footer';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const productIndex = cart.findIndex((item) => item.id === product.id);
    if (productIndex >= 0) {
      const updatedCart = [...cart];
      updatedCart[productIndex].quantity += 1;
      setCart(updatedCart);
      
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };
  const handleIncrement = (index) => {
    const newCartItems = [...cart];
    newCartItems[index].quantity += 1;
    setCart(newCartItems);
  };

  const handleDecrement = (index) => {
    const newCartItems = [...cart];
    if (newCartItems[index].quantity > 1) {
      newCartItems[index].quantity -= 1;
      setCart(newCartItems);
    }
  };
  const handleRemove = (index) => {
    const newCartItems = cart.filter((_, i) => i !== index);
    setCart(newCartItems);
  };
  return (
    <Router>
      <Navbar cart={cart} />
      <Routes>
        <Route path="/" element={<Home addToCart={addToCart} />} />
        <Route path="/cart" element={<Cart cartItems={cart} onIncrement={handleIncrement} onDecrement={handleDecrement} onRemove={handleRemove} />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
