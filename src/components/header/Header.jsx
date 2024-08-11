import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ isAuthenticated, onLogout }) => {
  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        {isAuthenticated ? (
          <>
            <button onClick={onLogout}>Logout</button>
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