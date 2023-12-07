import React from 'react';
import { Link } from 'react-router-dom'
import './navbar.css'

const NavBar = () => {
    return (
<<<<<<< HEAD
        <div class="navbar">
            <div class="logo">
                <h2><Link to="/">Pomo</Link></h2>
            </div>
            <div class="menu">
                <Link to="/login"><button class="login-btn">Log In</button></Link>
                <Link to="/signup"><button class="signup-btn">Sign Up</button></Link>
                <Link to="/study"><button class="study-btn">Study</button></Link>
=======
        <div className="navbar">
            <div className="logo">
                <Link to="/">Pomo</Link>
            </div>
            <div className="menu">
                <Link to="/login"><button className="login-btn">Log In</button></Link>
                <Link to="/signup"><button className="signup-btn">Sign Up</button></Link>
                <Link to="/study"><button className="login-btn">Study</button></Link>
>>>>>>> 0234915 (login/signup functionality)
            </div>
        </div>
    )
}

export default NavBar;