import React from "react";
import './login.css';

const SignUp = () => {
    return(
        <div class="login-container">
            <h1>Sign Up</h1>
            <p>Already a member? <a href="login.html">Log In.</a></p>
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
    );
};

export default SignUp;