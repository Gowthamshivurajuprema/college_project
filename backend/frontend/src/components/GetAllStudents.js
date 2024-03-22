import React, { useState, useEffect } from "react";

function GetAllStudents() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/getAllStudents")
      .then((response) => response.json())
      .then((data) => {
        setStudents(data);
      })
      .catch((error) => {
        console.error("Error fetching students:", error);
      });
  }, []);

  const handleDelete = (studentRegNo) => {
    fetch(`http://localhost:4000/students/${studentRegNo}`, {
      method: "DELETE"
    })
      .then((response) => {
        if (response.status === 200) {
          setStudents((prevStudents) =>
            prevStudents.filter((student) => student.studentRegNo !== studentRegNo)
          );
        } else {
          throw new Error("Student deletion failed");
        }
      })
      .catch((error) => {
        console.error("Error deleting student:", error);
      });
  };

  const handleUpdate = (studentRegNo) => {
    window.location.href = `/update-student/${studentRegNo}`;
  };

  return (
    <div className="container">
      <h2 className="text-center">All Students</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Registration Number</th>
            <th>Student Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Age</th>
            <th>Date of Birth</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(students) && students.map((student) => (
            <tr key={student.studentRegNo}>
              <td>{student.studentRegNo}</td>
              <td>{student.studentName}</td>
              <td>{student.email}</td>
              <td>{student.phoneNo}</td>
              <td>{student.age}</td>
              <td>{student.dateOfBirth}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(student.studentRegNo)}
                >
                  Delete
                </button>
                <button
                  className="btn btn-primary ml-2"
                  onClick={() => handleUpdate(student.studentRegNo)}
                >
                  Update
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default GetAllStudents;