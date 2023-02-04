import React, {useState,useEffect,useRef} from "react";
import Slider from "react-slick";

import "./cv.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import CvFirst from "../cv-number/cv-first/cv-first";
import CvSecond from "../cv-number/cv-second/cv-second";
import CvThird from "../cv-number/cv-third/cv-third";
import CvFourth from "../cv-number/cv-fourth/cv-fourth";


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

 
    const pages = [<CvFirst/>, <CvSecond/>, <CvThird/>, <CvFourth/>]

    return (

        <div >

            <Slider {...sliderSettings}>

                {pages.map((page, index) => (

                    <div>
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