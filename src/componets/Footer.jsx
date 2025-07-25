import React from "react";
import { Row,Col } from "react-bootstrap";

export default function Footer(){
    return <div className="footer" style={{paddingTop:"7em", paddingBottom:"7em" }}>
        <Row>
          <Col>
            <h4>Info</h4>
            <ul className="links" style={{listStyle:"none"}}>
              <li><a href="#about-me">About Me</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#my-work">My Work</a></li>
              <li><a href="https://www.linkedin.com/in/godswill-uko/">Connect With Me</a></li>
              <li><a href="mailto:kobeuko@gmail.com">Email Me</a></li>
            </ul>
        </Col>
          </Row>
      </div>
        
}