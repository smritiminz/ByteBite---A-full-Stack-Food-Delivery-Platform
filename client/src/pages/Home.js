import React from 'react';
import FoodItemCard from '../components/FoodItemCard';

const Home = () => {
  // Mock data for food items
  const foodItems = [
    {
      id: 1,
      name: "Classic Burger",
      price: 12.99,
      description: "Juicy beef patty with fresh lettuce, tomato, and our special sauce",
      image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400&h=300&fit=crop",
      rating: 4.8,
      deliveryTime: "25-35 min",
      restaurant: "Burger Palace"
    },
    {
      id: 2,
      name: "Margherita Pizza",
      price: 15.99,
      description: "Fresh mozzarella, tomato sauce, and basil on crispy crust",
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=300&fit=crop",
      rating: 4.6,
      deliveryTime: "30-40 min",
      restaurant: "Mario's Pizzeria"
    },
    {
      id: 3,
      name: "Sushi Combo",
      price: 24.99,
      description: "Fresh salmon, tuna, and vegetarian rolls with wasabi and ginger",
      image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=400&h=300&fit=crop",
      rating: 4.7,
      deliveryTime: "20-30 min",
      restaurant: "Sushi Express"
    },
    {
      id: 4,
      name: "Chicken Tacos",
      price: 9.99,
      description: "Grilled chicken with fresh salsa, avocado, and lime",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop",
      rating: 4.5,
      deliveryTime: "15-25 min",
      restaurant: "Taco Fiesta"
    },
    {
      id: 5,
      name: "Caesar Salad",
      price: 8.99,
      description: "Fresh romaine lettuce, parmesan cheese, croutons, and caesar dressing",
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop",
      rating: 4.4,
      deliveryTime: "25-35 min",
      restaurant: "Green Garden"
    },
    {
      id: 6,
      name: "Iced Coffee",
      price: 4.99,
      description: "Cold brew coffee with your choice of milk and sweetener",
      image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=400&h=300&fit=crop",
      rating: 4.9,
      deliveryTime: "10-20 min",
      restaurant: "Coffee Corner"
    }
  ];

  const categories = [
    { name: "Pizza", icon: "fas fa-pizza-slice" },
    { name: "Burgers", icon: "fas fa-hamburger" },
    { name: "Sushi", icon: "fas fa-fish" },
    { name: "Tacos", icon: "fas fa-pepper-hot" },
    { name: "Salads", icon: "fas fa-leaf" },
    { name: "Coffee", icon: "fas fa-coffee" }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1>Delicious food, delivered fast</h1>
          <p>Order from your favorite restaurants and get fresh, hot meals delivered right to your door</p>
          
          <div className="hero-search">
            <input 
              type="text" 
              placeholder="Enter your delivery address..."
            />
            <button>
              <i className="fas fa-search"></i> Find Food
            </button>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories">
        <div className="container">
          <h2 className="section-title">Browse by Category</h2>
          <div className="categories-grid">
            {categories.map((category, index) => (
              <div key={index} className="category-card">
                <div className="category-icon">
                  <i className={category.icon}></i>
                </div>
                <h3>{category.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Food Items Section */}
      <section className="food-items">
        <div className="container">
          <h2 className="section-title">Popular Dishes</h2>
          <div className="food-grid">
            {foodItems.map(item => (
              <FoodItemCard key={item.id} {...item} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
