
import './App.css';

import Home from './components/Home';
import BathingWater from './components/BathingWater';
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path='/bathingwater/:eubwidNotation' element={<BathingWater/>}/>
    </Routes>
    </>
  );
}

export default App;
