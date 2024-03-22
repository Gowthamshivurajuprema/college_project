
import React, { useState } from "react";

function GetStudentByRegistrationNumber() {
    const [registrationNumber, setRegistrationNumber] = useState("");
    const [student, setStudent] = useState(null);
  
    const handleRegistrationNumberChange = (event) => {
      setRegistrationNumber(event.target.value);
    };
  
    // Make an API call to retrieve the student by registration number
const handleSubmit = (event) => {
  event.preventDefault();
  // Make an API call to retrieve the student by registration number
  fetch(`http://localhost:4000/students/${registrationNumber}`)
    .then((response) => response.json())
    .then((data) => {
      setStudent(data);
    })
    .catch((error) => {
      console.log('Error:', error);
    });
};
    return (
      <div>
        <h2>Get Student By Registration Number</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="registrationNumber">Registration Number:</label>
            <input
              type="text"
              id="registrationNumber"
              className="form-control"
              value={registrationNumber}
              onChange={handleRegistrationNumberChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Get Student
          </button>
        </form>
        {student && (
          <div>
            <h3>Student Details</h3>
            <p>Registration Number: {student.studentRegNo}</p>
            <p>Name: {student.studentName}</p>
            <p>Email: {student.email}</p>
            <p>Phone Number: {student.phoneNo}</p>
            <p>Age: {student.age}</p>
            <p>Date of Birth: {student.dateOfBirth}</p>
          </div>
        )}
      </div>
    );
  }
  export default GetStudentByRegistrationNumber;