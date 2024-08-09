import React from 'react';
import Button from '../components/button/Button';


const Login = ({ onLogin }) => {
  return (
    <div className="container">
      <h1>Login</h1>
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      <Button text="Login" onClick={onLogin} />
    </div>
  );
};

export default Login;