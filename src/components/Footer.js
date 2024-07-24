

// src/components/FoodCard.js
import React from 'react';
import { Link } from 'react-router-dom'; // Correct import
import './FoodCard.css';

const FoodCard = ({ foodItem }) => {
  return (
    <div className="food-card">
      <img src={foodItem.image} alt={foodItem.name} />
      <h2>{foodItem.name}</h2>
      <p>{foodItem.description}</p>
      <p>${foodItem.price}</p>
      <Link to={`/food/${foodItem.id}`}>View Details</Link>
    </div>
  );
};

export default FoodCard;
