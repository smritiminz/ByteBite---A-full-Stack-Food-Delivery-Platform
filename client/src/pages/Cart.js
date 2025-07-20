import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Cart = () => {
  // Mock cart data
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Classic Burger",
      price: 12.99,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400&h=300&fit=crop",
      restaurant: "Burger Palace"
    },
    {
      id: 2,
      name: "Margherita Pizza",
      price: 15.99,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=300&fit=crop",
      restaurant: "Mario's Pizzeria"
    }
  ]);

  const updateQuantity = (id, change) => {
    setCartItems(cartItems.map(item => {
      if (item.id === id) {
        const newQuantity = item.quantity + change;
        return newQuantity > 0 ? { ...item, quantity: newQuantity } : null;
      }
      return item;
    }).filter(Boolean));
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
  };

  const deliveryFee = 3.99;
  const tax = (calculateTotal() * 0.08).toFixed(2);
  const finalTotal = (parseFloat(calculateTotal()) + deliveryFee + parseFloat(tax)).toFixed(2);

  if (cartItems.length === 0) {
    return (
      <div className="cart-container">
        <div className="container">
          <div style={{ textAlign: 'center', padding: '4rem 0' }}>
            <div style={{ fontSize: '4rem', color: '#ccc', marginBottom: '1rem' }}>
              <i className="fas fa-shopping-cart"></i>
            </div>
            <h2>Your cart is empty</h2>
            <p style={{ color: '#666', marginBottom: '2rem' }}>
              Add some delicious items to get started!
            </p>
            <Link to="/" className="nav-btn" style={{ textDecoration: 'none' }}>
              <i className="fas fa-arrow-left"></i> Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <div className="container">
        <h1 style={{ marginBottom: '2rem', fontSize: '2.5rem', fontWeight: '700' }}>
          <i className="fas fa-shopping-cart"></i> Your Cart
        </h1>
        
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem' }}>
          {/* Cart Items */}
          <div>
            {cartItems.map(item => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} />
                
                <div className="cart-item-info">
                  <h3 className="cart-item-name">{item.name}</h3>
                  <p style={{ color: '#666', fontSize: '0.9rem' }}>{item.restaurant}</p>
                  <p className="cart-item-price">${item.price}</p>
                </div>
                
                <div className="quantity-controls">
                  <button 
                    className="quantity-btn"
                    onClick={() => updateQuantity(item.id, -1)}
                  >
                    <i className="fas fa-minus"></i>
                  </button>
                  <span style={{ margin: '0 10px', fontWeight: '600' }}>
                    {item.quantity}
                  </span>
                  <button 
                    className="quantity-btn"
                    onClick={() => updateQuantity(item.id, 1)}
                  >
                    <i className="fas fa-plus"></i>
                  </button>
                </div>
                
                <button 
                  onClick={() => removeItem(item.id)}
                  style={{ 
                    background: 'none', 
                    border: 'none', 
                    color: '#dc2626', 
                    cursor: 'pointer',
                    fontSize: '1.2rem'
                  }}
                >
                  <i className="fas fa-trash"></i>
                </button>
              </div>
            ))}
          </div>
          
          {/* Order Summary */}
          <div className="cart-summary">
            <h3 style={{ marginBottom: '1.5rem', fontSize: '1.5rem' }}>Order Summary</h3>
            
            <div style={{ marginBottom: '1rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <span>Subtotal:</span>
                <span>${calculateTotal()}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <span>Delivery Fee:</span>
                <span>${deliveryFee}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                <span>Tax:</span>
                <span>${tax}</span>
              </div>
              <hr style={{ margin: '1rem 0' }} />
              <div className="total">
                Total: ${finalTotal}
              </div>
            </div>
            
            <button className="checkout-btn">
              <i className="fas fa-credit-card"></i> Proceed to Checkout
            </button>
            
            <Link 
              to="/" 
              style={{ 
                display: 'block', 
                textAlign: 'center', 
                marginTop: '1rem', 
                color: '#ff6b35',
                textDecoration: 'none'
              }}
            >
              <i className="fas fa-arrow-left"></i> Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
