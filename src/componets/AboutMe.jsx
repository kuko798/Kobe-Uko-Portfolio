import React from "react";
import {Image, Row, Col } from "react-bootstrap";

export default function AboutMe(){
    return <div>
                <h1 style={{textAlign:"center"}}>About Me</h1>
                <Row>
                    <Col>
                        <Image style={{width:"100%", height:"100%", borderRadius:"5%"}} src={'https://github.com/kuko798/KobeUko/blob/main/Screenshot%202025-01-05%20020653.png?raw=true'}/>
                    </Col>
                    <Col>
                        <ul style={{listStyle:"none", marginTop:"10px", textAlign:"left"}}>
           
                            <li>Name: Kobe Uko</li>
                            <li>School: University of Wiscosnin Madison</li>
                            <li>Major: Computer Science</li>
                            <li>Year: Senior</li>
                            <li>Hometown: Saint Louis, Missouri</li>
                            <li>Membership: Omega Psi Phi Fraternity, Inc, ColorStack, National Society of Black Engineers(NSBE)</li>
                        </ul>
                    </Col>
                </Row>
                
            </div>
}