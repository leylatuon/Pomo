import React from "react";
import { Link } from 'react-router-dom'
import './home.css';

const Home = () => {
  return (
    <div class="main-content">
        <div class="welcome-card">
            <img src="./images/leaves1.jpg" alt="Nature" />
            <div class="welcome-content">
              <h1>Welcome To Pomo</h1>
              <Link to="/signup"><button class="get-started-btn">Get Started</button></Link>
            </div>
        </div>
    </div>
  );  
};

export default Home;