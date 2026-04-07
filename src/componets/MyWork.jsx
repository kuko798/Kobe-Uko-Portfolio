import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";

export default function MyWork() {
  const work = [
    {
      img: "https://github.com/kuko798/KobeUko/blob/main/Screenshot%202025-01-05%20024015.png?raw=true",
      url: "https://kuko798.github.io/EpsilonTheta1969/",
      label: "Epsilon Theta chapter site",
    },
    {
      img: "https://github.com/kuko798/KobeUko/blob/main/Screenshot%202023-12-28%20012130.png?raw=true",
      url: "https://developersmeet.com/",
      label: "DevelopersMeet",
    },
    {
      img: "https://github.com/kuko798/KobeUko/blob/main/Screenshot%202023-12-29%20111940.png?raw=true",
      url: "https://thurldetailz.com/",
      label: "Thurl Detailz",
    },
  ];

  return (
    <Container fluid className="page-section" style={{ paddingBottom: "4rem" }}>
      <h2 className="section-title">My Work</h2>
      <Row className="g-4 justify-content-center">
        {work.map((item, index) => (
          <Col key={index} xs={12} sm={6} lg={4}>
            <a href={item.url} className="work-card text-decoration-none" target="_blank" rel="noopener noreferrer">
              <Image src={item.img} alt={item.label} fluid />
              <div className="work-card-caption">{item.label}</div>
            </a>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
