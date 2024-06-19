import logo from './logo.svg';
import React, { useEffect, useState } from 'react';
import './App.css';
import LoadingPage from './components/LoadingPage';
import LoadingBar from 'react-top-loading-bar';


// const App = () => {
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     setTimeout(() => {
//       setIsLoading(false); 
//     }, 7000);
//   }, []);

//   return (
//     <div className="App">
//       {isLoading ? <LoadingPage /> : <div>Load main page here</div>}
//     </div>
//   );
// };

export default App;
