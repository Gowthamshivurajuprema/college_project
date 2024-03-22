import React from 'react';
import { Carousel } from 'react-bootstrap';

function AboutUs() {
  return (
    <div className="container">
      <h2 className="display-4">About Us</h2>
      <div className="row">
        <div className="col-md-6">
          
        <Carousel>
            <Carousel.Item>
              <img className="img-fluid" src="/images/clg_pic.jpg"alt="Slide 1" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="img-fluid" src="/images/clg1.jpg" alt="Slide 2" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="img-fluid" src="/images/clg2.jpg" alt="Slide 3" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="img-fluid" src="/images/clg3.jpg" alt="Slide 3" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="img-fluid" src="/images/clg4.jpg" alt="Slide 3" />
            </Carousel.Item>
          </Carousel>
        </div>
        <div className="col-md-6">
          <p>Welcome to our college/institute! We provide high-quality education and a supportive learning environment. With experienced faculty and state-of-the-art facilities, we empower students with the knowledge and skills they need to succeed.</p>
          <p>Our college/institute offers a wide range of programs and courses designed to meet diverse needs and interests. Whether you're interested in engineering, business, arts, or any other discipline, we have a program that can help you achieve your goals.</p>
          <p>In addition to academic excellence, we focus on holistic development. We encourage students to participate in extracurricular activities, clubs, and community service initiatives to enhance personal growth and foster a well-rounded education.</p>
         
        
        </div>
      </div>
      
    </div>
  );
}

export default AboutUs;