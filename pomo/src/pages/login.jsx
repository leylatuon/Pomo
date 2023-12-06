import React from "react";
import { Link } from 'react-router-dom'
import "./login.css";

const Login = () => {
    return (
        <div class="login-content">
            <div class="login-container">
                <h1>Log In</h1>
                <p>Not Registered Yet? <Link to="/signup">Create an account.</Link></p>
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
                        <a href="#">Forgot your password?</a>
                    </div>
                    <div class="input-group">
                        <button type="submit">Log In</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;