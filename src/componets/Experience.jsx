import React from "react"
import { Card, Col, Image, Row} from "react-bootstrap"
import { ImLocation2 } from "react-icons/im";

export default function Experience(){
    const experiences = [{comp:"DevHeads",
                             desc:"A company started by me and friend from back home which turned into something big. What went from creating website for small businesses spawned into something big! The creation of the Connect platform. In the early stages I was able to help in the creation of the platform which at the time hosted 300+ users",
                            img:""},
                            {comp:"DevlopersMeet",
                             desc: "I thought to myself... what if we could make a tinder for developers. Developers meet was a platform I created back in 2023 with the sole aim of being a platform where you can find developers for projects you want to do. Without the hassel of open source it gives you the chance of vetting out people.",
                             img:""  
                            },
                            {comp: "Rockwell Automation",
                                desc:"I built automation scripts using Python and Groovy to speed up engineering tasks. I integrated Python into Jenkins to cut setup time from a week to seven hours. I also created a file parser and script integrator for better file handling.",
                                img:""
                            },
                            {
                              comp:"Enterprise Mobility",
                              desc:"I worked on the Gameplan fleet management app. I tested API endpoints using Python, requests, and pytest. I verified data with SQL queries on a test dataset. My work found bugs and led to updates in the database. I also built a Scala logging tool to flag slow requests. Lastly, I pitched a new product in an intern idea jam with a team of four.",
                              img:"" 
                            },

                            {
                                comp:"Coming Soon",
                                desc:"We'll see where the wind takes me! Maybe I'll make an actual tinder for developers.",
                                img:""
                            }
                            ]
    return <div>
        <h1 style={{textAlign:"center"}}>My Corperate Journey</h1>
       <Row>{experiences.map((experience, index) => <Col xs={12} sm={12} md={6} lg={4} xl={3} key={index}><Card style={{alignItems:"center", margin:"auto", padding:"1em", height:"100px", width:"100px"}} ><ImLocation2 /></Card><h2 style={{textAlign:'center'}}>{experience.comp}</h2> <p style={{textAlign:'center'}}>{experience.desc}</p></Col>)}</Row> 
           </div>
}