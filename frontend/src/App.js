import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import RegistrationForm from "./components/RegistrationForm";
import GetAllStudents from "./components/GetAllStudents";
import UpdateStudent from "./components/UpdateStudent";
import GetStudentByRegistrationNumber from "./components/GetStudentByRegistrationNumber ";// Import the GetStudentByRegistrationNumber component

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegistrationForm />} />
          <Route path="/get-all-students" element={<GetAllStudents />} />
          <Route
            path="/update-student/:studentRegNo"
            element={<UpdateStudent />}
          />
        <Route
          path="/GetStudentByRegistrationNumber"
            element={<GetStudentByRegistrationNumber />}

          />
          {/* Add more routes for other pages */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;