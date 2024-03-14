import React from "react";

function HomePage() {
  return (
    <div className="container">
      <div className="jumbotron">
        <h1 className="display-4">Welcome to XYZ College</h1>
        <p className="lead">Experience excellence in education</p>
      </div>
      <div className="row">
        <div className="col-md-6">
          <img className="img-fluid" src="college-image.jpg" alt="College" />
        </div>
        <div className="col-md-6">
          <p>
            At XYZ College, we are committed to providing top-quality education
            and fostering a supportive learning environment for our students.
            With a team of experienced faculty members and state-of-the-art
            facilities, we strive to empower our students with the knowledge and
            skills they need to succeed in their chosen fields.
          </p>
          <p>
            Our college offers a wide range of degree programs, including
            Engineering, Business Administration, Arts, and Sciences. We believe
            in a holistic approach to education, combining academic learning
            with practical experiences and extracurricular activities.
          </p>
          <p>
            Explore our website to learn more about our programs, admission
            process, campus life, and success stories of our alumni. We invite
            you to join our vibrant community and embark on a transformative
            educational journey at XYZ College.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HomePage;