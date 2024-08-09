import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ isAuthenticated }) => {
  return (
    
    <header>
       <h1 style={{color:"black"}}>Real Estate Mnagement System</h1>
      <nav>
        <Link to="/">Home</Link>
        {isAuthenticated ? (
          <>
            <Link to="/admin-dashboard">Admin Dashboard</Link>
            <Link to="/agent-dashboard">Agent Dashboard</Link>
            <Link to="/client-dashboard">Client Dashboard</Link>
            <Link to="/logout">Logout</Link>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;