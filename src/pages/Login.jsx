import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/button/Button';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    if (response.ok) {
      const role = await response.text();
      onLogin({ role });
      if (role === 'admin') {
        navigate('/admin-dashboard');
      } else if (role === 'agent') {
        navigate('/agent-dashboard');
      } else if (role === 'client') {
        navigate('/client-dashboard');
      }
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button text="Login" />
      </form>
    </div>
  );
};

export default Login;