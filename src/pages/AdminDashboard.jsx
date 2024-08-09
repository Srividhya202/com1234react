import React from 'react';
import Button from '../components/button/Button';

const AdminDashboard = () => {
  return (
    <div className="container">
      <h1>Admin Dashboard</h1>
      <Button text="Add User" />
      <Button text="Edit User" />
      <Button text="Delete User" />
    </div>
  );
};

export default AdminDashboard;