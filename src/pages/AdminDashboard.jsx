import React from 'react';
import Button from '../components/button/Button';

const AdminDashboard = () => {
  return (
    <div className="container">
      <h1>Admin Dashboard</h1>
      
      <h2>User Management</h2>
      <form>
        <input type="text" placeholder="User Name" />
        <input type="email" placeholder="User Email" />
        <select>
          <option value="admin">Admin</option>
          <option value="agent">Agent</option>
          <option value="client">Client</option>
        </select>
        <Button text="Add User" />
        <Button text="Edit User" />
        <Button text="Delete User" />
      </form>
      
      <h2>User Management Table</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>John Doe</td>
            <td>john@example.com</td>
            <td>Admin</td>
            <td><Button text="Edit" /><Button text="Delete" /></td>
          </tr>
          {/* More rows... */}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDashboard;