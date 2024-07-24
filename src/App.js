import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Category from './components/Category';
import CartPage from './components/CartPage';
import foodData from './Data/foodData.json'; // Place file inside src/Data
import './App.css';

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (food) => {
    setCart([...cart, food]);
  };

  const removeFromCart = (id, clearAll = false) => {
    if (clearAll) {
      setCart([]);
    } else {
      setCart(cart.filter((item) => item.id !== id));
    }
  };

  const categories = [...new Set(foodData.map((food) => food.category))];

  return (
    <Router>
      <div className="app">
        <Navbar cartCount={cart.length} />
        <Routes>
          <Route path="/" element={
            categories.map((category) => (
              <Category
                key={category}
                category={category}
                foods={foodData.filter((food) => food.category === category)}
                addToCart={addToCart}
              />
            ))
          } />
          <Route path="/cart" element={<CartPage cartItems={cart} removeFromCart={removeFromCart} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
