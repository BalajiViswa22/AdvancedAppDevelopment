import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Register.css';

function Register() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [role, setRole] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = {};
    if (!fullName.trim()) {
      validationErrors.fullName = 'Full Name is required';
    }
    if (!email.trim()) {
      validationErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      validationErrors.email = 'Email is invalid';
    }
    if (!password.trim()) {
      validationErrors.password = 'Password is required';
    } else if (password.length < 6) {
      validationErrors.password = 'Password must be at least 6 characters';
    }
    if (password !== confirmPassword) {
      validationErrors.confirmPassword = 'Passwords do not match';
    }
    if (!mobileNumber.trim()) {
      validationErrors.mobileNumber = 'Mobile Number is required';
    }
    if (!role) {
      validationErrors.role = 'Role is required';
    }
    setErrors(validationErrors); // Set validation errors
    if (Object.keys(validationErrors).length === 0) {
      // Here you can add your registration logic, like sending the form data to the server
      console.log('Form submitted successfully');
      // Reset form fields after submission
      setFullName('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      setMobileNumber('');
      setRole('');
      // Navigate to the link after successful submission
      // Here you can use a programmatic navigation method provided by your routing library
      // For example, with React Router, you can use useHistory hook or withRouter HOC
    }
  };

  return (
    <div className="container">
      <form className="registration-form" onSubmit={handleSubmit}>
        <h2>Registration</h2>
        <div className="form-group">
          <label htmlFor="fullName">Full Name:</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
          {errors.fullName && <span className="error">{errors.fullName}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          {errors.email && <span className="error">{errors.email}</span>}
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
          {errors.password && <span className="error">{errors.password}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          {errors.confirmPassword && <span className="error">{errors.confirmPassword}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="mobileNumber">Mobile Number:</label>
          <input
            type="text"
            id="mobileNumber"
            name="mobileNumber"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
            required
          />
          {errors.mobileNumber && <span className="error">{errors.mobileNumber}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="role">Role:</label>
          <select
            id="role"
            name="role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
          >
            <option value="">Select Role</option>
            <option value="Admin">Admin</option>
            <option value="User">User</option>
            {/* Add more roles as needed */}
          </select>
          {errors.role && <span className="error">{errors.role}</span>}
        </div>
        <div className="form-group">
          {Object.keys(errors).length === 0 && (
            <Link to="/home">
              <button type="submit">Register</button>
            </Link>
          )}
        </div>
      </form>
      <p>Already have an account? <Link to="/login">Login here</Link></p>
    </div>
  );
}

export default Register;
