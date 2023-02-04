import React, {useEffect, useState} from "react";
import { Carousel } from 'antd';


import CardProject from "../../../component-library/card-project/card-project";
import {Col, Row} from "antd";

import "./cv-fourth.css"

// import {getCvProject} from "../../../api/cv";

const settings = {
    dots: false,
    arrows:true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
};

export default function CvFourth()  {
    const [projects, setProjects] = useState([[]])

    // useEffect(()=>{
    //     getCvProject().then(res=>{
    //         console.log(res)


    //         let i;

    //         let temp = [];
    //         let tempRes = [];

    //         for(i in res.data){
    //             if (i !== 0 && i % 3 === 0){
    //                 tempRes.push(temp)
    //                 temp.length = 0
    //                 temp.push(res.data[i])
    //             }else if(i+1 === res.data.length) {
    //                 temp.push(res.data[i])
    //                 tempRes.push(temp)
    //                 temp.length = 0
    //             }else {
    //                 temp.push(res.data[i])
    //             }
    //             console.log(temp)
    //         }
    //         console.log(tempRes)
    //         setProjects(tempRes)


    //     }).then(error=>{
    //         console.log(error)
    //     })
    // }, [])

    return (
        <div className="cv-fourth">
            <div style={{position: "relative"}}>
            <div className={"cv-title"}>
                Latest Project Post
            </div>
            <Carousel>
                 {/* {projects.map((prs, index)=>(
                    <div className={"project-card"}>
                        <Row key={index}>
                            {prs.map((pro,index2)=>(
                                <Col xs={24} sm={8}>
                                    <CardProject post={pro} />
                                </Col>
                            ))}
                        </Row>
                    </div>
                ))}  */}

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
                </div> 
            </Carousel>
            </div>
        </div>

    )
}