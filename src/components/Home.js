// src/components/Home.js
import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <header className="home-header">
        <h1>Welcome to Swiggy2.0</h1>
        <p>Your favorite food, just a few clicks away.</p>
      </header>
      <section className="home-features">
        <div className="feature-card">
          <i className="fas fa-utensils feature-icon"></i>
          <h2>Delicious Meals</h2>
          <p>Choose from a variety of dishes and enjoy the best meals.</p>
        </div>
        <div className="feature-card">
          <i className="fas fa-clock feature-icon"></i>
          <h2>Quick Delivery</h2>
          <p>Get your food delivered fast and fresh, right to your door.</p>
        </div>
        <div className="feature-card">
          <i className="fas fa-tags feature-icon"></i>
          <h2>Great Deals</h2>
          <p>Enjoy exclusive offers and discounts on your favorite dishes.</p>
        </div>
      </section>
      <section className="home-categories">
        <h2>Explore Categories</h2>
        <div className="category-card biryani">
          <i className="fas fa-bowl-rice category-icon"></i>
          <h3>Biryani</h3>
          <p>Delicious biryanis for every taste.</p>
        </div>
        <div className="category-card veg-dishes">
          <i className="fas fa-leaf category-icon"></i>
          <h3>Veg Dishes</h3>
          <p>Fresh and tasty vegetarian options.</p>
        </div>
        <div className="category-card chicken-items">
          <i className="fas fa-drumstick-bite category-icon"></i>
          <h3>Chicken Items</h3>
          <p>Juicy and flavorful chicken dishes.</p>
        </div>
      </section>
      <footer className="home-footer">
        <p>&copy; 2024 Swiggy2.0. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
