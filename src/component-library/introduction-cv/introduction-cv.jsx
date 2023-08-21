import React from "react";
import { theme } from "antd";

import "./introduction-cv.css"

const { useToken } = theme

export default function IntroductionCv(prop) {

    const {theme} = prop
    const { token } = useToken()


    return (
        <div className={"introduction"}>
            <div className={"intrYear"}>
                2012
            </div>

            <div className={"intrName"}>
                {/* <span style={{color: " #6A7687"}}>Asa`s</span> */}
                <span style={{color: token.colorText}}>Asa`s</span>
                <span style={{color: " #B92448"}}>Blog</span>
            </div>

            <div className={"intrContent"}>
                后台开发程序员
            </div>
        </div>
    )
}