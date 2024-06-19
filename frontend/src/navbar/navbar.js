import React from 'react';
import SearchBar from '../components/SearchBar/SearchBar';


const Navbar = () => (
  <nav className="flex items-center justify-between p-4 bg-white shadow-md">
    <div className='flex space-x-4'>
    <a href="#features" className="text-gray-700 hover:text-blue-500">Features</a>
    <a href="#search" className="text-gray-700 hover:text-blue-500">Placeholder for map</a>
    <a href="#popular-spots" className="text-gray-700 hover:text-blue-500">Popular Spots</a>
    <a href="#testimonials" className="text-gray-700 hover:text-blue-500">Testimonials</a>
    <SearchBar />
    </div>
   
  </nav>
);

export default Navbar;
