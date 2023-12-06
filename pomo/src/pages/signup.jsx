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
        </div>
    );
};

export default SignUp;