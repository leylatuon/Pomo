import React from "react";
import { Link } from 'react-router-dom'
import './home.css';

const Home = () => {
  return (
    <div className="main-content">
        <div className="welcome-card">
            <img src="./images/leaves1.jpg" alt="Nature" />
            <h1>Welcome To Pomo</h1>
            <button className="get-started-btn">Get Started</button>
        </div>
    </div>
  );  
};

export default Home;