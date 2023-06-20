import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function MedicalBillForm({ bills, onSubmit }) {
  const location = useLocation();
  const { index } = location.state || {};

  const [billInfo, setBillInfo] = useState(() => {
    if (index !== undefined && index >= 0 && index < bills.length) {
      // Edit existing bill
      return bills[index];
    }

    // Add new bill
    return {
      patientName: '',
      address: '',
      hospitalName: '',
      dateOfService: '',
      billAmount: '',
      billImage: null, // Upload image 
    };
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBillInfo((prevBillInfo) => ({ ...prevBillInfo, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setBillInfo((prevBillInfo) => ({ ...prevBillInfo, billImage: file }));
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(billInfo);
    setBillInfo({
      patientName: '',
      address: '',
      hospitalName: '',
      dateOfService: '',
      billAmount: '',
      billImage: null,
    });

    // Navigate to the home page after you click submit
    navigate('/');
  };

  return (
    <div>
      <h1>Medical Bill Form</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Patient Name:
          <input
            type="text"
            name="patientName"
            value={billInfo.patientName}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Address:
          <input
            type="text"
            name="address"
            value={billInfo.address}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Hospital Name:
          <input
            type="text"
            name="hospitalName"
            value={billInfo.hospitalName}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Date of Service:
          <input
            type="date"
            name="dateOfService"
            value={billInfo.dateOfService}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Bill Amount:
          <input
            type="number"
            name="billAmount"
            value={billInfo.billAmount}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Bill Image:
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default MedicalBillForm;


