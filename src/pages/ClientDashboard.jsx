import React from 'react';
import Button from '../components/button/Button';

const ClientDashboard = () => {
  return (
    <div className="container">
      <h1>Client Dashboard</h1>
      
      <h2>Property Search</h2>
      <form>
        <input type="text" placeholder="Search by Name or Location" />
        <Button text="Search" />
      </form>

      <h2>Property Search Results</h2>
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
            <td><Button text="View" /></td>
          </tr>
          {/* More rows... */}
        </tbody>
      </table>
    </div>
  );
};

export default ClientDashboard;