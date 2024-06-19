import logo from './logo.svg';
import './App.css';
import MapComponent from './components/MapComponent';

function App() {
  // const [data, setData] = useState(null);

  // useEffect(() => {
  //     fetch('/api/bathing-waters')
  //         .then(response => response.json())
  //         .then(data => setData(data));
  //       }, []);


  return (
    <div>
      <header>
      </header>
      <main>
        <MapComponent />
      </main>
    </div>
  );
}

export default App;
