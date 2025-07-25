import React from "react";
import { Col, Image, Row } from "react-bootstrap";

export default function MyWork(){
    const work = [
        {img:"https://github.com/kuko798/KobeUko/blob/main/Screenshot%202025-01-05%20024015.png?raw=true",
            url:"https://kuko798.github.io/EpsilonTheta1969/"},
             
        {img:"https://github.com/kuko798/KobeUko/blob/main/Screenshot%202023-12-28%20012130.png?raw=true", 
            url:"https://developersmeet.com/"},
                
        {img:"https://github.com/kuko798/KobeUko/blob/main/Screenshot%202023-12-29%20111940.png?raw=true",
            url:"https://thurldetailz.com/"}
                    
                    ]
    return<div style={{textAlign:"center", paddingBottom:"10em"}}>
        <h1 >My Work</h1>
      <Row>{work.map((item, index) => 
           <Col key={index} xs={12} sm={12} md={6} lg={4} xl={4} style={{paddingBottom:"1em"}}> <a href={item.url}>
            <Image  style={{height: "200px", width:"100%",borderRadius:"5%"}}src={item.img} alt="image of work"/> </a>
           </Col>) }</Row>
        </div>
}