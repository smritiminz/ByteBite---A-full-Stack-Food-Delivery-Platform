import React from 'react';

const FoodItemCard = ({ 
  id,
  name, 
  price, 
  description, 
  image, 
  rating, 
  deliveryTime,
  restaurant 
}) => {
  const handleAddToCart = () => {
    // Add to cart logic here
    console.log(`Added ${name} to cart`);
  };

  return (
    <div className="food-card">
      <img 
        src={image} 
        alt={name}
        className="food-image"
      />
      
      <div className="food-info">
        <div className="food-header">
          <h3 className="food-name">{name}</h3>
          <span className="food-price">${price}</span>
        </div>
        
        <p className="food-description">{description}</p>
        
        <div className="food-meta">
          <div className="rating">
            <i className="fas fa-star"></i>
            <span>{rating}</span>
          </div>
          <div className="delivery-time">
            <i className="fas fa-clock"></i>
            <span> {deliveryTime}</span>
          </div>
        </div>
        
        {restaurant && (
          <div className="restaurant-name">
            <i className="fas fa-store"></i>
            <span> {restaurant}</span>
          </div>
        )}
        
        <button 
          className="add-to-cart"
          onClick={handleAddToCart}
        >
          <i className="fas fa-plus"></i> Add to Cart
        </button>
      </div>
    </div>
  );
};

export default FoodItemCard;
