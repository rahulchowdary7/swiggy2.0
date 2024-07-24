// src/components/Category.js
import React from 'react';
import FoodCard from './FoodCard';
import './Category.css'; // For category-specific styles

const Category = ({ category, foods, addToCart }) => {
  return (
    <div className="category">
      <h2>{category}</h2>
      <div className="food-list">
        {foods.map((food) => (
          <FoodCard key={food.id} food={food} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

export default Category;
