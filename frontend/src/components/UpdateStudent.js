import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const UpdateStudent = () => {
  const { studentRegNo } = useParams();
  const [updatedStudent, setUpdatedStudent] = useState({
    studentRegNo: '',
    studentName: '',
    email: '',
    phoneNo: '',
    age: '',
    dateOfBirth: '',
  });
  const [updateSuccess, setUpdateSuccess] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:4000/students/${studentRegNo}`);
        if (response.status === 200) {
          const data = await response.json();
          setUpdatedStudent(data);
        } else {
          throw new Error('Student not found');
        }
      } catch (error) {
        console.error('Error fetching student:', error);
      }
    };

    fetchData();
  }, [studentRegNo]);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setUpdatedStudent(prevStudent => ({
      ...prevStudent,
      [name]: value,
    }));
  };

  const handleSubmit = async event => {
    event.preventDefault();

    try {
      const response = await fetch(`http://localhost:4000/students/${studentRegNo}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedStudent),
      });
      if (response.status === 200) {
        // Student update successful
        setUpdateSuccess(true);
      } else {
        throw new Error('Student update failed');
      }
    } catch (error) {
      console.error('Error updating student:', error);
    }
  };

  return (
    <div className="container">
      <h2 className="text-center">Update Student</h2>
      {updateSuccess && (
        <div className="alert alert-success" role="alert">
          Student details updated successfully!
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="studentRegNo">Registration Number:</label>
          <input
            type="text"
            name="studentRegNo"
            value={updatedStudent.studentRegNo}
            onChange={handleInputChange}
            className="form-control"
            readOnly
          />
        </div>
        <div className="form-group">
          <label htmlFor="studentName">Student Name:</label>
          <input
            type="text"
            name="studentName"
            value={updatedStudent.studentName}
            onChange={handleInputChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            value={updatedStudent.email}
            onChange={handleInputChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNo">Phone Number:</label>
          <input
            type="text"
            name="phoneNo"
            value={updatedStudent.phoneNo}
            onChange={handleInputChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="age">Age:</label>
          <input
            type="text"
            name="age"
            value={updatedStudent.age}
            onChange={handleInputChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="dateOfBirth">Date of Birth:</label>
          <input
            type="date"
            name="dateOfBirth"
            value={updatedStudent.dateOfBirth}
            onChange={handleInputChange}
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Update
        </button>
      </form>
    </div>
  );
};

export default UpdateStudent;