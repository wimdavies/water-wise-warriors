import MapComponent from "./MapComponent";
import HeroSection from "../sections/HeroSection"

const Home = () =>{
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
    )
}

export default Home;