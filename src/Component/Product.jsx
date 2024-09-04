import React from 'react';
import { FaShoppingCart } from 'react-icons/fa'; // Importing the cart icon from react-icons
import './Product.css';

function Product({ id, name, img, price, description, addToCart }) {
    const handleAddToCart = () => {
      const product = { id, name, price, img }; // Ensure id is part of the product object
      console.log('Product:', product); // Log to ensure id is present
      addToCart(product);
    };
  return (
    <div className="product-card">
      <img src={img} alt={name} className="product-image" />
      <h3>{name}</h3>
      <p>{description}</p>
      <p className="price">{price}</p>
      <button className="add-to-cart" onClick={handleAddToCart}>
        <FaShoppingCart />
      </button>
    </div>
  );
}

export default Product;
