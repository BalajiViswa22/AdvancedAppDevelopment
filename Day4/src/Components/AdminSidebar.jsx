import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './AdminSidebar.css';

function AdminSidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`sidebar ${isOpen ? 'show' : ''}`}>
      <div className="hamburger-menu" onClick={toggleSidebar}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <Link to="/hh">Home</Link>
      <Link to="/event">Events</Link>
      <Link to="/users">Users</Link>
    </div>
  );
}

export default AdminSidebar;
