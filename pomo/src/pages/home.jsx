import React from "react";
import './home.css';

const Home = () => {
  return (
    <div class="main-content">
        <div class="welcome-card">
            <img src="./images/leaves1.jpg" alt="Nature" />
            <div class="welcome-content">
              <h1>Welcome To Pomo</h1>
              <button class="get-started-btn">Get Started</button>
            </div>
        </div>
    </div>
  );  
};

export default Home;