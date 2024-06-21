import logo from './logo.svg';
import './App.css';
import MapComponent from './components/MapComponent';
import HeroSection from './sections/HeroSection';


function App() {
  

  return (
    <div>
      <header>
      </header>
      <main>
        
        <div className='MapComponent'>
        <HeroSection />
        <MapComponent />
        </div>
      </main>
    </div>
  );
}

export default App;
