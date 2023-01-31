import React, {useEffect, useState} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./cv-third.less"
import ContentExperience from "../../../component-library/content-exprience/content-experience";
import {getCvExperience} from "../../../api/cv";


const settings = {
    dots: false,
    arrows:true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
};


export default function CvThird() {

    const [experience, setExperience] = useState([[]])

    useEffect(()=>{
        getCvExperience().then(res=>{
            console.log(res)
            let i;

            let temp = [];
            let tempRes = [];

            for(i in res.data){
                if (i !== 0 && i % 2 === 0){
                    tempRes.push(temp)
                    temp.length = 0
                    temp.push(res.data[i])
                }else if(i+1 === res.data.length) {
                    temp.push(res.data[i])
                    tempRes.push(temp)
                    temp.length = 0
                }else {
                    temp.push(res.data[i])
                }
                console.log(temp)
            }
            console.log(tempRes)
            setExperience(tempRes)
        }).catch(error=>{
            console.log(error)
        })
    }, [])

    return (
        <div style={{height:"100%"}}>
            <div className={"cv-title"}>
                教育经历与工作经历
            </div>
            <Slider {...settings}>
                {experience.map((exs, index)=>(
                    <div className={"edu-content"} key={index}>
                        {exs.map((ex, index2)=>(
                            <ContentExperience content={ex} />
                        ))}
                    </div>
                ))}
                {/*<div className={"edu-content"}>*/}
                {/*    <ContentExperience />*/}
                {/*    <ContentExperience />*/}
                {/*</div>*/}
                {/*<div className={"edu-content"}>*/}
                {/*    <ContentExperience />*/}
                {/*    <ContentExperience />*/}
                {/*</div>*/}
            </Slider>
        </div>

    )
}