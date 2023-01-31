import React from "react";

import "./introduction-cv.less"


export default function IntroductionCv(prop) {

    const {theme} = prop

    return (
        <div className={"introduction"}>
            <div className={"intrYear"}>
                2012
            </div>

            <div className={"intrName"}>
                {theme !== "dark" ? (
                    <span style={{color: " #6A7687"}}>Asa`s</span>
                ) : (
                    <span style={{color: " #FFFFFF"}}>Asa`s</span>
                )}


                <span style={{color: " #B92448"}}>Blog</span>
            </div>

            <div className={theme !== "dark" ? "intrContent intrContent-light" : "intrContent intrContent-dark"}>
                后台开发程序员
            </div>
        </div>
    )
}