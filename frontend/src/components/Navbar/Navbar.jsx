import React from 'react';
import './navbar.css'; // Import component-specific styles

const Navbar = () => {
  // Array containing navigation items
  const navItems = [
    { id: 1, text: 'Home', link: "/"},
    { id: 2, text: 'Resources', link: "/resources" },
  ];

  return (
    <>
      {/* Logo */}
      <div style={{display: 'flex', alignItems: 'center', /* Vertically align items */ justifyContent: 'space-between'}}>
      <a href="/">
        <h1 style={{fontFamily: 'Zapfino', fontSize: '40px', color: '#22258F', padding: '1.5em', marginTop: '30px'}}>Wild Waters</h1>
      </a>
      

      {/* Desktop Navigation */}
      <nav className='navbar' >
      <ul className='nav-links'>
        {navItems.map(item => (
          <li key={item.id} className='nav-item'>
            <a href={item.link} style={{fontSize: '25px'}}>{item.text}</a>
          </li>
        
        ))}
      </ul>
    </nav>
    </div>
    </>
  );
};

export default Navbar;
