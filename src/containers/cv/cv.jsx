import React, {useState,useEffect,useRef} from "react";
import Slider from "react-slick";


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./cv.css"

import CvFirst from "../cv-number/cv-first/cv-first";
import CvSecond from "../cv-number/cv-second/cv-second";
import CvThird from "../cv-number/cv-third/cv-third";
import CvFourth from "../cv-number/cv-fourth/cv-fourth";

// 引入Redux
import { useSelector } from 'react-redux'

var sliderSettings = {
    vertical: true,
    infinite: false,
    verticalSwiping: true,
    slidesToShow: 1,
    slidesToScroll: 1,

    // hide the arrow of slider
    nextArrow: <HideArrow />,  
    prevArrow: <HideArrow />
};

// handle slider arrow
function HideArrow() {
    return ( <div style={{display: "none"}} /> );
}






function Cv(prop) {

    // 获取store中的主题配置
    const theme = useSelector((state) => state.theme)

    const pages = [<CvFirst theme={theme}/>, <CvSecond theme={theme}/>, <CvThird theme={theme}/>, <CvFourth theme={theme}/>]

    return (

        <div >

            <Slider {...sliderSettings}>

                {pages.map((page, index) => (

                    <div key={index}>
                        <div style={{height:"100vh", width:"100%"}}>
                            {page}
                        </div>
                        
                    </div>
                ))}

            </Slider>
        </div>
    )
}


export default Cv