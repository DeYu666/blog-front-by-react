import React from "react";

import IntroductionCv from "../../../component-library/introduction-cv/introduction-cv";
import {Col, Row} from "antd";
import CVLogo from "./CVLogo.svg"
import "./index.less"

export default function CvFirst(prop) {

    const {theme} = prop

    return (
        <div style={{top: "25%", position: "relative"}}>
            <Row>
                <Col md={{span:12}} xs={{span:24}}>
                    {/*<div style={{position: "absolute", top: "35%", left: "54%"}}>*/}
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
    )
}