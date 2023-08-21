import React from "react";

import "./index.css"


import IntroductionCv from "../../../component-library/introduction-cv/introduction-cv";
import {Col, Row} from "antd";
import CVLogo from "./image/CVLogo.svg"

export default function CvFirst(prop) {

    let {theme} = prop




    return (
        <div className={theme.dark?"cv-frist cv-frist-dark":"cv-frist"}>
            <div style={{top: "25%", position: "relative", width:"100%"}}>
                <Row>
                    <Col md={{span:12}} xs={{span:24}}>
                        <div className={"introductionContainer"}>
                            <IntroductionCv theme={theme}/>
                        </div>
                    </Col>

                    <Col md={{span:12}} xs={{span:24}}>
                        <div className={"introductionLogo"}>
                            <img src={CVLogo} alt={"CVLogo"}/>
                        </div>
                    </Col>
                </Row>

            </div>
        </div>
    )
}