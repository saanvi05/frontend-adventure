import React from 'react';
import { Link } from 'react-router-dom';
import './TopNav.css';

function TopNav() {
  return (
    <nav className="top-nav">
      <div className="nav-left">
        <Link to="/" className="app-title">Front-End Adventure</Link>
      </div>
      <div className="nav-right">
        <Link to="/history" className="nav-link">History</Link>
        <Link to="/about" className="nav-link">About</Link>
      </div>
    </nav>
  );
}

export default TopNav;