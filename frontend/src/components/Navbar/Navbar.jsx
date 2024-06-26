import React from 'react';
import './navbar.css'; // Import component-specific styles

const Navbar = () => {
  // Array containing navigation items
  const navItems = [
    { id: 1, text: 'Home', link: "/"},
    { id: 2, text: 'Resources', link: "/resources" },
  ];

  return (
    <nav className='navbar'>
      {/* Logo */}
      <a href="/">
      <h1 className='logo'>Wild Waters</h1>
      </a>

      {/* Desktop Navigation */}
      <ul className='nav-links'>
        {navItems.map(item => (
          <li key={item.id} className='nav-item'>
            <a href={item.link} className='nav-link'>{item.text}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
