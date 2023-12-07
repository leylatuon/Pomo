import React from "react";
import { Link } from "react-router-dom";
import "./login.css";
import LoginForm from "./loginform"; // Ensure this path is correct for your project structure

const Login = () => {
  return (
    <div class="login-content">
      <div className="login-container">
        <h1>Log In</h1>
        <p>
          Not Registered Yet? <Link to="/signup">Create an account.</Link>
        </p>
        <LoginForm />
        <div className="input-group">
          <Link to="/forgot-password">Forgot your password?</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
