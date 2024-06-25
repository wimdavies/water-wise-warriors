
import './App.css';

import Home from './components/Home';
import BathingWater from './components/BathingWater';
import { Routes, Route, Navigate } from "react-router-dom";
import Resources from './components/Resources';
import Navbar from './components/Navbar/Navbar';

function App() {
  
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path='/bathingwater/:eubwidNotation' element={<BathingWater/>}/>
      <Route path='/resources' element={<Resources />}/>
    </Routes>
    </>
  );
}

export default App;
