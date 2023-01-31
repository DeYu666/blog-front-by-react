import React, {useState} from "react";
import Switch from "./switch";

import "./cv.less"
import CvFirst from "../cv-number/cv-first/cv-first";
import CvSecond from "../cv-number/cv-second/cv-second";
import CvThird from "../cv-number/cv-third/cv-third";
import CvFourth from "../cv-number/cv-fourth/cv-fourth";


function Cv(prop) {

    const {theme} = prop
    const pages = [<CvFirst theme={theme}/>, <CvSecond/>, <CvThird/>, <CvFourth/>]
    const [active, setActive] = useState(0)

    const getPage = (index, newTheme) => {
        if (index === 0) {
            return <CvFirst theme={newTheme}/>
        }
        if (index === 1) {
            return <CvSecond theme={newTheme}/>
        }
        if (index === 2) {
            return <CvThird theme={newTheme}/>
        }
        if (index === 3) {
            return <CvFourth theme={newTheme}/>
        }
    }


    return (
        <>
            <Switch pages={pages} active={active} setActive={(index) => (setActive(index))}/>

            <div className={"pagepiling"}>
                {pages.map((page, index) => (
                    <div className={"pp-scrollable pp-easing section" + index} style={active > index ? {
                        transform: "translate3d(0px, -100%, 0px)",
                        zIndex: pages.length - index
                    } : {transform: "translate3d(0px, 0px, 0px)", zIndex: pages.length - index}}>
                        {getPage(index, theme)}
                    </div>
                ))}
            </div>
        </>
    )
}


export default Cv