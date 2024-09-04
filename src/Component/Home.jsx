// Home.js
import React,{useState} from 'react';
import image1 from "../assets/1.jpeg";
import image2 from "../assets/2.jpeg";
import image3 from "../assets/3.jpeg";
import image4 from "../assets/4.jpeg";
import image5 from "../assets/5.jpeg";
import image6 from "../assets/6.jpeg";
import image7 from "../assets/7.jpeg";
import image8 from "../assets/8.jpeg";
import image9 from "../assets/9.jpeg";

import Product from './Product';
import "./Home.css";
const products = [
  {
    id: 1,
    name: 'Product 1',
    img: image1,
    price: '$20',
    description: 'This is the description for product 1.'
  },
  {
    id: 2,
    name: 'Product 2',
    img: image2,
    price: '$39.99',
    description: 'This is the description for product 2.'
  },
  {
    id: 3,
    name: 'Product 3',
    img: image3,
    price: '$49.99',
    description: 'This is the description for product 3.'
  },
  {
    id: 4,
    name: 'Product 1',
    img: image4,
    price: '$20',
    description: 'This is the description for product 1.'
  },
  {
    id: 5,
    name: 'Product 2',
    img: image5,
    price: '$40',
    description: 'This is the description for product 2.'
  },
  {
    id: 6,
    name: 'Product 3',
    img: image6,
    price: '$49.99',
    description: 'This is the description for product 3.'
  },
  {
    id: 7,
    name: 'Product 1',
    img: image7,
    price: '$20',
    description: 'This is the description for product 1.'
  },
  {
    id: 8,
    name: 'Product 2',
    img: image8,
    price: '$40',
    description: 'This is the description for product 2.'
  },
  {
    id: 9,
    name: 'Product 3',
    img: image9,
    price: '$49.99',
    description: 'This is the description for product 3.'
  },
  {
    id: 10,
    name: 'Product 2',
    img: image5,
    price: '$40',
    description: 'This is the description for product 2.'
  },
  {
    id: 11,
    name: 'Product 3',
    img: image6,
    price: '$49.99',
    description: 'This is the description for product 3.'
  },
  {
    id: 12,
    name: 'Product 1',
    img: image7,
    price: '$20',
    description: 'This is the description for product 1.'
  },
  {
    id: 13,
    name: 'Product 2',
    img: image8,
    price: '$39.99',
    description: 'This is the description for product 2.'
  },
  {
    id: 14,
    name: 'Product 3',
    img: image9,
    price: '$49.99',
    description: 'This is the description for product 3.'
  }
];

function Home({ addToCart }) {

  return (
    <div className="product-list">
      {products.map(product => (
        <Product
          key={product.id}
          id={product.id}
          name={product.name}
          img={product.img}
          price={product.price}
          description={product.description}
          addToCart={addToCart}
        />
      ))}
    </div>
  );
}

export default Home;
