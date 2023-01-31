

import React from "react";
import "./index.less"
import lovePng from "./img/love.svg"



const param = {
    position:"absolute",
    left:"86px",
    top:"107px"
}

export default function Love() {

    return (
            <div className={"love-container"}  style={param}>
                <div>
                    <img src={lovePng} alt={"爱"}/>
                </div>
                <div>
                    <p>
                        第 1 天
                    </p>
                </div>
            </div>

    )
}