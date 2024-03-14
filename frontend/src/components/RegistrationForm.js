import React, { useState } from "react";

function RegistrationForm() {
  const [studentRegistrationNumber, setStudentRegistrationNumber] = useState("");
  const [studentName, setStudentName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [age, setAge] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [registrationSuccess, setRegistrationSuccess] = useState(false); // New state for success message

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      studentRegNo: studentRegistrationNumber,
      studentName,
      email,
      phoneNo: phoneNumber,
      age,
      dateOfBirth
    };

    fetch("http://localhost:4000/students", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Student registration successful:", data);
        setRegistrationSuccess(true); // Set success message to true
        // Reset form fields
        setStudentRegistrationNumber("");
        setStudentName("");
        setEmail("");
        setPhoneNumber("");
        setAge("");
        setDateOfBirth("");
      })
      .catch((error) => {
        console.error("Error registering student:", error);
      });
  };
  return (
    <div className="container">
      <h2 className="text-center">Registration Form</h2>
      {registrationSuccess && ( // Show success message if registrationSuccess is true
        <div className="alert alert-success" role="alert">
          Student details saved successfully!
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="studentRegistrationNumber">Registration Number:</label>
          <input
            type="text"
            className="form-control"
            id="studentRegistrationNumber"
            value={studentRegistrationNumber}
            onChange={(e) => setStudentRegistrationNumber(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="studentName">Student Name:</label>
          <input
            type="text"
            className="form-control"
            id="studentName"
            value={studentName}
            onChange={(e) => setStudentName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="tel"
            className="form-control"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            className="form-control"
            id="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="dateOfBirth">Date of Birth:</label>
          <input
            type="date"
            className="form-control"
            id="dateOfBirth"
            value={dateOfBirth}
            onChange={(e) => setDateOfBirth(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default RegistrationForm;