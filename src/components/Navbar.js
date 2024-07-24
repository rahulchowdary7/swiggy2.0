// src/components/Navbar.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingCart, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

const Navbar = ({ cartCount, onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    if (typeof onSearch === 'function') {
      onSearch(term); // Call the onSearch function passed from parent
    } else {
      console.error('onSearch is not a function');
    }
  };

  const handleCartClick = () => {
    navigate('/cart');
  };

  return (
    <div className="navbar">
      <div className="navbar-brand">ARFOOD'S</div>
      <div className="navbar-search">
        <input 
          type="text" 
          placeholder="Search..." 
          value={searchTerm} 
          onChange={handleSearchChange} 
        />
        <FontAwesomeIcon icon={faSearch} className="search-icon" />
      </div>
      <div className="navbar-cart" onClick={handleCartClick}>
        <FontAwesomeIcon icon={faShoppingCart} />
        <span className="cart-count">{cartCount}</span>
      </div>
      <div className="navbar-logout">
        <FontAwesomeIcon icon={faSignOutAlt} />
      </div>
    </div>
  );
};

export default Navbar;
