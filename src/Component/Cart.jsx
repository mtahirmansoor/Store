import React from 'react';
import './Cart.css';

function Cart({ cartItems, onIncrement, onDecrement, onRemove }) {
  const totalAmount = cartItems.reduce(
    (total, item) => total + parseFloat(item.price.substring(1)) * item.quantity,
    0
  );

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <div className="cart-header">
            <span>Product</span>
            <span>Name</span>
            <span>Price</span>
            <span>Quantity</span>
            <span>Actions</span>
          </div>
          {cartItems.map((item, index) => (
            <div key={index} className="cart-item">
              <img src={item.img} alt={item.name} className="cart-item-image" />
              <span className="cart-item-name">{item.name}</span>
              <span className="cart-item-price">{item.price}</span>
              <div className="cart-item-controls">
                <button onClick={() => onDecrement(index)} className="cart-item-button">-</button>
                <span className="cart-item-quantity">{item.quantity}</span>
                <button onClick={() => onIncrement(index)} className="cart-item-button">+</button>
              </div>
              <button 
                onClick={() => onRemove(index)} 
                className="cart-item-remove"
                title="Remove Product"
              >
                &times;
              </button>
            </div>
          ))}
          <div className="cart-total">
            <h3>Total: ${totalAmount.toFixed(2)}</h3>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
