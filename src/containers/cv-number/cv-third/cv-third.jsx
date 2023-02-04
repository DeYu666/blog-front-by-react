import React, {useEffect, useState} from "react";
import { Carousel } from 'antd';


import "./cv-third.css"

import ContentExperience from "../../../component-library/content-exprience/content-experience";
// import {getCvExperience} from "../../../api/cv";




export default function CvThird() {

    const [experience, setExperience] = useState([[]])

    // useEffect(()=>{
    //     getCvExperience().then(res=>{
    //         console.log(res)
    //         let i;

    //         let temp = [];
    //         let tempRes = [];

    //         for(i in res.data){
    //             if (i !== 0 && i % 2 === 0){
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
    //         setExperience(tempRes)
    //     }).catch(error=>{
    //         console.log(error)
    //     })
    // }, [])

    return (
        <div className="cv-third">
        <div style={{position: "relative"}}>
            <div className={"cv-title"}>
                教育经历与工作经历
            </div>
            <Carousel effect="fade">
                {/* {experience.map((exs, index)=>(
                    <div className={"edu-content"} key={index}>
                        {exs.map((ex, index2)=>(
                            <ContentExperience content={ex} />
                        ))}
                    </div>
                ))} */}
                <div className={"edu-content"}>
                   {/* <ContentExperience /> */}
                   <ContentExperience />
                   <ContentExperience />
                </div>
                <div className={"edu-content"}>
                   <ContentExperience />
                   <ContentExperience />
                </div>
            </Carousel>
        </div>
        </div>
    )
}