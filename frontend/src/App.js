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
        <section className="xl:padding-l wide:padding-r padding-b">
        <HeroSection />
        <section className="padding"></section>
        <Features /> {/*Added in features as this is where MapComponent will go*/}
        </section>
        
    
    </div>
    );
};

export default App;
