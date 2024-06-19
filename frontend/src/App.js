import logo from './logo.svg';
import React, { useEffect, useState } from 'react';
import './App.css';
import LoadingPage from './components/LoadingPage';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate some async operation
    setTimeout(() => {
      setIsLoading(false); // Set isLoading to false after data is loaded
    }, 3000); // Example: Wait for 3 seconds before loading data
  }, []);

  return (
    <div className="App">
      {isLoading ? <LoadingPage /> : <div>Your main content here</div>}
    </div>
  );
};

export default App;
