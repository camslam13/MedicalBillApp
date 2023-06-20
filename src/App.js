import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes, useLocation, useHistory } from 'react-router-dom';

import MedicalBillForm from './MedicalBillForm';
import MedicalBillSummary from './MedicalBillSummary';
import HomePage from './HomePage';

function App() {
  const [bills, setBills] = useState([]);

  const handleFormSubmit = (billInfo) => {
    const billIndex = billInfo.index;

    if (billIndex !== undefined && billIndex >= 0 && billIndex < bills.length) {
      // Update bill
      setBills((prevBills) => {
        const updatedBills = [...prevBills];
        updatedBills[billIndex] = billInfo;
        return updatedBills;
      });
    } else {
      // Check if the bill already exists
      const existingBillIndex = bills.findIndex(
        (bill) => bill.patientName === billInfo.patientName && bill.address === billInfo.address
      );

      if (existingBillIndex !== -1) {
        // Replace the existing bill 
        setBills((prevBills) => {
          const updatedBills = [...prevBills];
          updatedBills[existingBillIndex] = billInfo;
          return updatedBills;
        });
      } else {
        // Add new bill
        setBills((prevBills) => [...prevBills, billInfo]);
      }
    }
  };

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<HomePage bills={bills} />} />
          <Route path="/form" element={<MedicalBillForm bills={bills} onSubmit={handleFormSubmit} />} />
          <Route path="/summary/:id" element={<MedicalBillSummary bills={bills} />} />
          <Route path="/edit/:id" element={<MedicalBillForm bills={bills} onSubmit={handleFormSubmit} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


