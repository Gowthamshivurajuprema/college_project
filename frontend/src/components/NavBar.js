import React from "react";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="/">
          CAMS
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link" href="/register">
                Register
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/GetStudentByRegistrationNumber">
                Get Student By Registration Number
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/get-all-students">
                Get All Students
              </a>
            </li>
            
          </ul>
        </div>
        <div className="ml-auto">
          <button className="btn btn-outline-light mr-2">Login</button>
          <button className="btn btn-outline-light">Logout</button>
        </div>
      </div>
      <style jsx>{`
        .navbar-brand {
          font-size: 1.5rem;
          font-weight: bold;
        }

        .navbar-toggler {
          border-color: transparent;
        }

        .navbar-toggler-icon {
          background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3e%3cpath stroke='rgba(0, 0, 0, 0.5)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
        }

        .nav-link {
          color: #fff;
          font-size: 1rem;
          margin-left: 1.5rem;
        }
      `}</style>
    </nav>
  );
}

export default NavBar;