// src/components/FoodCard.js
import React from 'react';

const FoodCard = ({ food, addToCart }) => {
  return (
    <div className="food-card">
      <img src={food.image} alt={food.name} />
      <h3>{food.name}</h3>
      <p>{food.description}</p>
      <p>${food.price.toFixed(2)}</p>
      <button onClick={() => addToCart(food)}>Add to Cart</button>
    </div>
  );
};

export default FoodCard;
