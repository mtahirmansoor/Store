// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaReact } from 'react-icons/fa';
import './Navbar.css';

const Navbar = ({cart}) => {
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0); 
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <FaReact size={30} />
        <h1>MyLogo</h1>
      </div>
      <ul className="navbar-links">
      <Link to="/">Home</Link>
      <Link to="/cart">Cart ({totalItems})</Link>
      <Link to="/contact">Contact</Link>
      </ul>
    </nav>
  );
};

export default Navbar;

