import React, {useEffect, useState} from "react";
import {Col, Row, message} from "antd";

import "./index.css"


import "../../../component-library/logo-skill/logo-skill"
import LogoSkill from "../../../component-library/logo-skill/logo-skill";
import ContentSkill from "../../../component-library/content-skill/content-skill";
import {getCvSkill} from "../../../api/cv";

export default function CvSecond(prop) {

    const [skillArr, setSkillArr] = useState([])
    const {theme} = prop
    const [messageApi, contextHolder] = message.useMessage();


    useEffect(()=>{
        getCvSkill().then(res=>{
            // console.log(res)
            setSkillArr(res.data)
        }).catch(error=>{
            messageApi.open({
                type: 'error',
                content: '获取数据失败, error: '+error,
              });
            console.log(error)
        })
    }, [])

    return (
        <div  className={theme.dark?"cv-second cv-second-dark":"cv-second"}>
            {contextHolder}
            <div style={{top: "25%", position: "relative"}}>
                <Row>
                    <Col md={{span:12}} xs={{span:24}} className={"cv-second-left"}>
                        <div  style={{float: "right", marginRight:"9rem"}}>
                            <LogoSkill />
                        </div>
                    </Col>

                    <Col md={{span:12}} xs={{span:24}} className={"cv-second-right"}>
                        <div style={{float: "left", minWidth:"70%"}}>
                            <ContentSkill skillArr={skillArr}/>
                        </div>
                    </Col>
                </Row>

            </div>
        </div>
    )
}
