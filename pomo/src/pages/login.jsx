import React, { useState } from 'react';
import { useNavigate, Link } from "react-router-dom";
import "./login.css";

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); 

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch("http://localhost:3001/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    })
    .then((response) => response.json())
    .then((data) => {
      if (data.token) {
        localStorage.setItem("accessToken", data.token);
        localStorage.setItem("username", username); 
        navigate('/study');
      } else {
        alert("Login failed: " + data.message);
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
  };

  return (
    <div className="login-content"> {/* Corrected class attribute */}
      <div className="login-container">
        <h1>Log In</h1>
        <p>
          Not Registered Yet? <Link to="/signup">Create an account.</Link>
        </p>
        <form onSubmit={handleSubmit}>
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
            <button type="submit">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

