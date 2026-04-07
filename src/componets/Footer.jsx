import React from "react";
import { Col, Container, Row } from "react-bootstrap";

export default function Footer() {
  return (
    <footer className="footer">
      <Container fluid className="footer-inner">
        <Row>
          <Col xs={12} md={6} lg={4}>
            <h4>Info</h4>
            <ul className="links" style={{ listStyle: "none", padding: 0, margin: 0 }}>
              <li>
                <a href="#about-me">About Me</a>
              </li>
              <li>
                <a href="#experience">Experience</a>
              </li>
              <li>
                <a href="#my-work">My Work</a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/godswill-uko/" target="_blank" rel="noopener noreferrer">
                  Connect With Me
                </a>
              </li>
              <li>
                <a href="mailto:kobeuko@gmail.com">Email Me</a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
