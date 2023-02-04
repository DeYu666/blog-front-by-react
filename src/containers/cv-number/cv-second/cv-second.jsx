import React, {useEffect, useState} from "react";
import {Col, Row} from "antd";

import "./index.css"


import "../../../component-library/logo-skill/logo-skill"
import LogoSkill from "../../../component-library/logo-skill/logo-skill";
import ContentSkill from "../../../component-library/content-skill/content-skill";
// import {getCvSkill} from "../../../api/cv";

export default function CvSecond() {

    const [skillArr, setSkillArr] = useState([])


    // useEffect(()=>{
    //     getCvSkill().then(res=>{
    //         console.log(res)
    //         setSkillArr(res.data)
    //     }).catch(error=>{
    //         console.log(error)
    //     })
    // }, [])

    return (
        <div className="cv-second">
            <div style={{top: "25%", position: "relative"}}>
                <Row>
                    <Col  span={12} className={"cv-second-left"}>
                        <div  style={{float: "right", marginRight:"9rem"}}>
                            <LogoSkill />
                        </div>
                    </Col>

                    <Col  span={12} className={"cv-second-right"}>
                        <div style={{float: "left", minWidth:"70%"}}>
                            <ContentSkill skillArr={skillArr}/>
                        </div>
                    </Col>
                </Row>

            </div>
        </div>
    )
}
