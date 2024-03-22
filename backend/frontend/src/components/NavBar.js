import React from "react";

function NavBar() {
  return (
    <div>
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
              <li className="nav-item">
                <a className="nav-link" href="/about-us">
                  About Us
                </a>
              </li>
            </ul>
          </div>
          <div className="ml-auto">
            <button className="btn btn-outline-light mr-5">Login</button>
            <button className="btn btn-outline-light mr-3">Logout</button>
          </div>
        </div>
      </nav>
      <div className="fixed-bottom card-body bg-transparent text-left" style={{ paddingLeft: '20px' }}>
     
        <hr width="100%" style={{ color: 'white' }} />
        <p align="center"><b>XYZ college  &copy; 2023</b></p>
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
        .ml-auto button {
          margin-right: 0.5rem; /* Adjust the margin value as needed */
        }
      `}</style>
    </div>
  );
}

export default NavBar;