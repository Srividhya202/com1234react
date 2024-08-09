import React from 'react';
import Button from '../components/button/Button';

const Register = () => {
  return (
    <div className="container">
      <h1>Register</h1>
      <input type="text" placeholder="Full Name" />
      <br></br>
      <input type="email" placeholder="Email" /><br></br>
      <input type="password" placeholder="Password" /><br></br>
      <input type="password" placeholder="Confirm Password" />
       <label>Role: </label>
       <select>
       <option>admin</option>
       <option>client</option>
       <option>agent</option>
       </select>
       <br></br>
       <br></br>
      
      
      <Button text="Register" />
    </div>
  );
};

export default Register;