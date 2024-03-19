import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; 
import logosvg from '../assets/logoipsum-299.svg';


const pages = ['Dashboard', 'All Events', 'My Bookings', 'My Payments'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function Navbar() {
  const [isUserMenuOpen, setUserMenuOpen] = useState(false);

  const toggleUserMenu = () => {
    setUserMenuOpen(!isUserMenuOpen);
  };

  const closeUserMenu = () => {
    setUserMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/" className="logo-link"><img src={logosvg} alt="logo" className='llogo'></img>
        </Link>
      </div>
      <div className="navbar-links">
        <ul className="menu">
          {pages.map((page) => (
            <li key={page}>
              <Link to={`/${page.replace(/\s+/g, '').toLowerCase()}`} className="menu-item">{page}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="user-profile">
        <button className="user-toggle" onClick={toggleUserMenu}>
          User
        </button>
        <ul className={`user-menu ${isUserMenuOpen ? 'open' : ''}`}>
          {settings.map((setting) => (
            <li key={setting} onClick={closeUserMenu}>
              <Link to={`/${setting.toLowerCase()}`} className="user-menu-item">{setting}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
