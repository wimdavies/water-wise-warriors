import React from 'react';
import Navbar from '../../navbar/navbar';
import './Header.css'


const Header = () => {
  return (
    <header>
        <div className="container">
        <div className="logo">Cold Water Swimmers</div>
        <Navbar />
        </div>
    </header>
  );
};

export default Header;
