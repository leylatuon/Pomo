import React from "react";
import { Link } from 'react-router-dom'
import './home.css';

const Home = () => {
  return (
    <div className="main-content">
        <div className="welcome-card">
            <img src="./images/leaves1.jpg" alt="Nature" />
<<<<<<< HEAD
            <div class="welcome-content">
              <h1>Welcome To Pomo</h1>
              <Link to="/signup"><button class="get-started-btn">Get Started</button></Link>
            </div>
=======
            <h1>Welcome To Pomo</h1>
            <button className="get-started-btn">Get Started</button>
>>>>>>> 0234915 (login/signup functionality)
        </div>
    </div>
  );  
};

export default Home;