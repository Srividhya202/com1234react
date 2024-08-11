import React from 'react';
import Button from '../components/button/Button';

const AgentDashboard = () => {
  return (
    <div className="container">
      <h1>Agent Dashboard</h1>
      
      <h2>Property Management</h2>
      <form>
        <input type="text" placeholder="Property Name" />
        <input type="text" placeholder="Location" />
        <input type="number" placeholder="Price" />
        <Button text="Add Property" />
        <Button text="Edit Property" />
        <Button text="Delete Property" />
      </form>

      <h2>Property Management Table</h2>
      <table>
        <thead>
          <tr>
            <th>Property Name</th>
            <th>Location</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Luxury Villa</td>
            <td>Beverly Hills</td>
            <td>$5,000,000</td>
            <td><Button text="Edit" /><Button text="Delete" /></td>
          </tr>
          {/* More rows... */}
        </tbody>
      </table>
      
      <h2>Client Management Table</h2>
      <table>
        <thead>
          <tr>
            <th>Client Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Jane Doe</td>
            <td>jane@example.com</td>
            <td>+1234567890</td>
            <td><Button text="Edit" /><Button text="Delete" /></td>
          </tr>
          {/* More rows... */}
        </tbody>
      </table>
    </div>
  );
};

export default AgentDashboard;