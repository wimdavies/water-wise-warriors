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
      <footer>
        <div style={{margin:"auto"}}>
          <p style={{textAlign:"center"}}>
            Contains public sector information from the <a href='https://environment.data.gov.uk/bwq/'>Environment Agency's Bathing Water Quality API</a>, licensed under the Open Government Licence v3.0.
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;
