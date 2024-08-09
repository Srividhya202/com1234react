import React from 'react';
import Button from '../components/button/Button';

const ClientDashboard = () => {
  return (
    <div className="container">
      <h1>Client Dashboard</h1>
      <Button text="Add Client" />
      <Button text="Edit Client" />
      <Button text="Delete Client" />
    </div>
  );
};

export default ClientDashboard;