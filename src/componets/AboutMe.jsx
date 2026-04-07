import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import Reveal from "./Reveal";

export default function AboutMe() {
  return (
    <Container fluid className="page-section">
      <Reveal>
        <h2 className="section-title">About Me</h2>
      </Reveal>
      <Row className="g-4 align-items-stretch">
        <Reveal as={Col} xs={12} md={5} lg={4} delay={40}>
          <Image
            className="about-photo"
            src="https://github.com/kuko798/KobeUko/blob/main/Screenshot%202025-01-05%20020653.png?raw=true"
            alt="Kobe Uko"
            rounded
          />
        </Reveal>
        <Reveal as={Col} xs={12} md={7} lg={8} delay={120}>
          <div className="about-card h-100">
            <ul className="about-list">
              <li>
                <strong>Name:</strong> Kobe Uko
              </li>
              <li>
                <strong>School:</strong> University of Wisconsin–Madison
              </li>
              <li>
                <strong>Major:</strong> Computer Science
              </li>
              <li>
                <strong>Year:</strong> Senior
              </li>
              <li>
                <strong>Hometown:</strong> St. Louis, Missouri
              </li>
              <li>
                <strong>Membership:</strong> Omega Psi Phi Fraternity, Inc.; ColorStack;
                National Society of Black Engineers (NSBE)
              </li>
            </ul>
          </div>
        </Reveal>
      </Row>
    </Container>
  );
}
