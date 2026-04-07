import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

export default function Experience() {
  const experiences = [
    {
      comp: "DevHeads",
      desc: "A company a friend from back home and I started that grew into something much larger. What began as building websites for small businesses led to the Connect platform. Early on, I helped build the platform, which at the time hosted 300+ users.",
    },
    {
      comp: "DevelopersMeet",
      desc: "I asked myself: what if we could make a Tinder-style app for developers? DevelopersMeet was a platform I created in 2023 so people could find collaborators for projects—without the hassle of cold outreach in open source—and with a better chance to vet potential partners.",
    },
    {
      comp: "Rockwell Automation",
      desc: "I built automation scripts in Python and Groovy to speed up engineering tasks. I integrated Python into Jenkins and cut setup time from about a week to seven hours. I also built a file parser and script integrator to improve file handling.",
    },
    {
      comp: "Enterprise Mobility",
      desc: "I worked on the Gameplan fleet management app. I tested API endpoints using Python, requests, and pytest, verified data with SQL against a test dataset, and my testing surfaced bugs that led to database updates. I also built a Scala logging tool to flag slow requests. Lastly, I pitched a new product in an intern idea jam with a team of four.",
    },
    {
      comp: "IBM",
      desc: "Incoming AI Customer Success Engineer, starting in June 2026",
    },
  ];

  return (
    <Container fluid className="page-section">
      <h2 className="section-title">My Corporate Journey</h2>
      <Row className="g-4">
        {experiences.map((experience, index) => (
          <Col key={index} xs={12} md={6} xl={4}>
            <Card className="experience-card">
              <Card.Body>
                <Card.Title as="h3">{experience.comp}</Card.Title>
                <Card.Text>{experience.desc}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
