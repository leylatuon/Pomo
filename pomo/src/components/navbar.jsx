import React from 'react';
import { Link } from 'react-router-dom'
import './navbar.css'

const NavBar = () => {
    return (
        <div class="navbar">
            <div class="logo">
                <Link to="/">Pomo</Link>
            </div>
            <div class="menu">
                <Link to="/login"><button class="login-btn">Log In</button></Link>
                <Link to="/signup"><button class="signup-btn">Sign Up</button></Link>
                <Link to="/study"><button class="login-btn">Study</button></Link>
            </div>
        </div>
    )
}

export default NavBar;