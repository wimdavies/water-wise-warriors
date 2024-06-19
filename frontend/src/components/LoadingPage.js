import React, { useEffect, useState, useRef } from 'react';
import './LoadingPage.css';
import LoadingBar from 'react-top-loading-bar';

const LoadingPage = () => {
    const [progress, setProgress] = useState(0);
    const loadingBar = useRef(null);

    useEffect(() => {
        loadingBar.current.continuousStart();
        const interval = setInterval(() => {
            setProgress(prevProgress => {
                if (prevProgress >= 100) {
                    clearInterval(interval);
                    loadingBar.current.complete();
                    return 100;
                }
                return prevProgress + 10;
            });
        }, 1000);
    }, []);

    return (
        <div className="loading-page">
            <img src={`${process.env.PUBLIC_URL}/swimmer.gif`} alt="Loading..." className="loading-gif" />
            <LoadingBar color="#040273" ref={loadingBar} className="loading-bar" />
        </div>
    );
};

export default LoadingPage;
