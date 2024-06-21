import logo from './logo.svg';
import React, { useEffect, useState } from 'react';
import './App.css';
import LoadingPage from './components/LoadingPage';
import LoadingBar from 'react-top-loading-bar';
import MapComponent from './components/MapComponent';

function App() {

//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     setTimeout(() => {
//       setIsLoading(false); 
//     }, 7000);
//   }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {/* <div className="App">      
            {isLoading ? <LoadingPage /> : <div>Load main page here</div>}
        </div> */}
      </header>
    </div>
  );
}

export default App;
