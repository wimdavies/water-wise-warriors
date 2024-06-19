import React from 'react';
import './LoadingPage.css'; // Create this file for styling

const LoadingPage = () => {
  return (
    <div className="loading-page">
      <img src={`${process.env.PUBLIC_URL}/swimmer.gif`} alt="Loading..." />
    </div>
  );
};

export default LoadingPage;
