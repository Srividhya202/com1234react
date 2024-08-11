import React, { useState } from 'react';
import Button from '../components/button/Button';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('client'); // Default role

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('/api/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password, role }),
    });

    if (response.ok) {
      alert('User registered successfully');
    } else {
      alert('Registration failed');
    }
  };

  return (
    <div className="container">
      <h1>Register</h1>
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
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="client">Client</option>
          <option value="agent">Agent</option>
          <option value="admin">Admin</option>
        </select>
        <Button text="Register" />
      </form>
    </div>
  );
};

export default Register;