// Error404.jsx

import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import './Error404.css';
import ErrorImage from '../assets/404.png'; // Import the PNG image
import Navbar from '../Components/Navbar';

const Error404 = () => {
  return (
    
    <div className="error-content">
      <img src={ErrorImage} alt="404 Error" className="error-image" />
      <h1>404 Error</h1>
      <p>Oops! The page you're looking for cannot be found.</p>
      {/* Use Link component instead of anchor tag */}
      <Link to="/home">Go to Homepage</Link>
    </div>
  );
}

export default Error404;
