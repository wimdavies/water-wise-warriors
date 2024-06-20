import React from 'react';
import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';
import SearchBar from './components/SearchBar/SearchBar';
import Features from './components/Features/Features';
import PopularSpots from './components/PopularSpots/PopularSpots';
import Testimonials from './components/Testimonials/Testimonials';
import CTA from './components/CTA/CTA';
import Footer from './components/Footer/Footer';
import './App.css';

const App = () => {
  return (
    <div>
      <h1 className="text-3xl">
      Hello world!
    </h1>
      <Header />
      <HeroSection />
    </div>
  );
};

export default App;
