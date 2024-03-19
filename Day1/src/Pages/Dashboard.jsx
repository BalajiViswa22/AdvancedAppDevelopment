// Dashboard.jsx

import React from 'react';
import './Dashboard.css';
import Navbar from '../Components/Navbar';

function Dashboard() {
  return (
    <div>
    <Navbar />
    <div className="dashboard">
      <div className="sidebar">
        <ul>
          <li>Dashboard</li>
          <li>Events</li>
          <li>Attendees</li>
          <li>Settings</li>
          {/* Add more sidebar items as needed */}
        </ul>
      </div>
      <div className="main-content">
        <div className="header">
          <h1>Event Management Dashboard</h1>
        </div>
        <div className="statistics">
          <h2>Statistics</h2>
          <p>Total Events: 10</p>
          <p>Total Attendees: 100</p>
          <p>Total Revenue: $10000</p>
          {/* Add more statistics as needed */}
        </div>
        <div className="upcoming-events">
          <h2>Upcoming Events</h2>
          <ul>
            <li>Event 1 - Date</li>
            <li>Event 2 - Date</li>
            {/* Add more upcoming events as needed */}
          </ul>
        </div>

        <div className="tasks">
          <h2>Tasks</h2>
          <ul>
            <li>Task 1</li>
            <li>Task 2</li>
            {/* Add more tasks as needed */}
          </ul>
        </div>
        {/* Add more sections as needed */}
      </div>
    </div>
    </div>
  );
}

export default Dashboard;
