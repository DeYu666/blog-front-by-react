import React, {useEffect, useState} from "react";
import { Carousel } from 'antd';


import CardProject from "../../../component-library/card-project/card-project";
import {Col, Row} from "antd";

import "./cv-fourth.css"

import {getCvProject} from "../../../api/cv";


export default function CvFourth(prop)  {
    const [projects, setProjects] = useState([[]])

    const {theme} = prop

    useEffect(()=>{
        getCvProject().then(res=>{
            console.log(res)


            let i, j;
            i = 0
            
            let tempRes = [];
            tempRes[i] = [];

            for(j in res.data){    
               if (j != 0 && j % 3 == 0) {
                    i++;
                    tempRes[i] = [];
               }
               tempRes[i][j%3] = res.data[j];
            }
            console.log(tempRes)
            setProjects(tempRes)


        }).then(error=>{
            console.log(error)
        })
    }, [])

    return (
        <div className={theme.dark?"cv-fourth cv-fourth-dark":"cv-fourth"}>
            <div style={{position: "relative"}}>
            <div className={"cv-title"}>
                Latest Project Post
            </div>
            <Carousel>
                 {projects.map((prs, index)=>(
                    <div className={"project-card"}>
                        <Row key={index}>
                            {prs.map((pro,index2)=>(
                                <Col xs={24} sm={8}>
                                    <CardProject post={pro} />
                                </Col>
                            ))}
                        </Row>
                    </div>
                ))} 

                 {/* <div className={"project-card"}>
                    <Row>
                        <Col span={8}>
                            <CardProject />
                        </Col>
                        <Col span={8}>
                            <CardProject />
                        </Col>
                        <Col span={8}>
                            <CardProject />
                        </Col>
                    </Row>
                </div>
                <div className={"project-card"}>
                    <Row>
                        <Col span={8}>
                            <CardProject />
                        </Col>
                        <Col span={8}>
                            <CardProject />
                        </Col>
                        <Col span={8}>
                            <CardProject />
                        </Col>
                    </Row>
                </div>  */}
            </Carousel>
            </div>
        </div>

    )
}