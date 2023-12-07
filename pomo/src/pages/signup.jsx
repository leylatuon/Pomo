<<<<<<< HEAD
import React from "react";
import { Link } from 'react-router-dom'
import './login.css';

const SignUp = () => {
    return(
        <div class="login-content">
            <div class="login-container">
                <h1>Sign Up</h1>
                <p>Already a member? <Link to="/login">Log In.</Link></p>
                <form id="login-form">
                    <div class="input-group">
                        <input
                            type="text"
                            id="username"
                            name="username"
                            placeholder="Username"
                            required
                        />
                    </div>
                    <div class="input-group">
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Password"
                            required
                        />
                    </div>
                    <div class="input-group">
                        <button type="submit">Sign Up</button>
                    </div>
                </form>
            </div>
=======
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault(); 

        const response = await fetch("http://localhost:3001/auth/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password }),
        });
        
        const data = await response.json();
        if (response.ok) {
            alert('User registered successfully');
            navigate('/login'); 
        } else {
            alert(`Failed to register user: ${data.message}`);
        }
    };

    return (
        <div className="login-container">
            <h1>Sign Up</h1>
            <p>Already a member? <a href="/login">Log In</a></p> 
            <form id="login-form" onSubmit={handleSubmit}>
                <div className="input-group">
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Username"
                        required
                    />
                </div>
                <div className="input-group">
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        required
                    />
                </div>
                <div className="input-group">
                    <button type="submit">Sign Up</button>
                </div>
            </form>
>>>>>>> 0234915 (login/signup functionality)
        </div>
    );
};

export default SignUp;
