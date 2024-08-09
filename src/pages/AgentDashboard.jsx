import React from 'react';
import Button from '../components/button/Button';

const AgentDashboard = () => {
  return (
    <div className="container">
      <h1>Agent Dashboard</h1>
      <Button text="Add Property" />
      <Button text="Edit Property" />
      <Button text="Delete Property" />
    </div>
  );
};

export default AgentDashboard;