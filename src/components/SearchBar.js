import React from 'react';
import '../styles/styles.css';
import searchIcon from '../assets/images/search-icon.png';

const SearchBar = () => {
  return (
    <div className="search-bar">
      <img src={searchIcon} alt="Search" className="search-icon" />
      <input type="text" placeholder="Search..." aria-label="Search" />
    </div>
  );
};

export default SearchBar;
