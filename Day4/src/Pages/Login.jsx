import React, { useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can add your login logic, like sending the username and password to the server for validation
    console.log('Username:', username);
    console.log('Password:', password);
    // Reset form fields after submission

  };

  return (
    <div className="container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
        <Link to="/home">
          <button type="submit">Login</button>
          </Link>
        </div>
        <div className="back">
        <Link to="/">
        <button>Back to Registration</button>
        </Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
