import React from 'react';

const Home = ({ isAuthenticated }) => {
  return (
    <div  className="container">
      <h1>Home Page</h1>
      {isAuthenticated ? (
        <p>Welcome back! You are logged in.</p>
      ) : (
        <p>Please log in or register to access more features.</p>
      )}
    </div>
  );
};

export default Home;