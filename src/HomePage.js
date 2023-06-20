import React from 'react';
import { Link } from 'react-router-dom';

function HomePage({ bills }) {
  return (
    <div>
      <h1>Home</h1>
      <ul>
        {bills.map((bill, index) => (
          <li key={index}>
            <Link to={`/summary/${index}`}>Bill {index + 1}</Link>
          </li>
        ))}
      </ul>
      <Link to="/form">Add New Bill</Link>
    </div>
  );
}

export default HomePage;