import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';

function MedicalBillSummary({ bills }) {
  const { id } = useParams();
  const billIndex = parseInt(id, 10);
  const bill = bills && bills[billIndex];

  const navigate = useNavigate();

  const handleEdit = () => {
    // navigate to edit form page
    navigate(`/edit/${billIndex}`, { state: { index: billIndex } });
  };

  return (
    <div>
      <h1>Medical Bill Summary</h1>
      {bill ? (
        <div>
          <p>
            Patient Name: {bill.patientName}
            <br />
            Address: {bill.address}
            <br />
            Hospital Name: {bill.hospitalName}
            <br />
            Date of Service: {bill.dateOfService}
            <br />
            Bill Amount: {bill.billAmount}
          </p>
          <button onClick={handleEdit}>Edit Information</button>
        </div>
      ) : (
        <div>No bill information available.</div>
      )}
      <Link to="/">Go Back</Link>
    </div>
  );
}

export default MedicalBillSummary;