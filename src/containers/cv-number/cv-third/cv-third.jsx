import React, {useEffect, useState} from "react";
import { Carousel, theme, message } from 'antd';


import "./cv-third.css"

import ContentExperience from "../../../component-library/content-exprience/content-experience";
import {getCvExperience} from "../../../api/cv";

const { useToken } = theme



export default function CvThird(prop) {
    const [experience, setExperience] = useState([[]])
    const { token } = useToken()
    const {theme} = prop

    const [messageApi, contextHolder] = message.useMessage();


    useEffect(()=>{
        getCvExperience().then(res=>{
            console.log(res)
            let i, j;
            i = 0
            
            let tempRes = [];
            tempRes[i] = [];

            for(j in res.data.reverse()){    
               if (j != 0 && j % 2 == 0) {
                    i++;
                    tempRes[i] = [];
               }
               tempRes[i][j%2] = res.data[j];
            }
            // console.log(tempRes)
            setExperience(tempRes)
        }).catch(error=>{

            messageApi.open({
                type: 'error',
                content: '获取数据失败, error: '+error,
              });

            console.log(error)
        })
    }, [])

    return (
        <div className={theme.dark?"cv-third cv-third-dark":"cv-third"}>
            {contextHolder}
        <div style={{position: "relative"}}>
            <div className={"cv-title"} style={{color:token.colorText}}>
                教育经历与工作经历
            </div>
            <Carousel effect="fade">
                {experience.map((exs, index)=>(
                    <div className={"edu-content"} key={index}>
                        {exs.map((ex, index2)=>(
                            <ContentExperience content={ex} />
                        ))}
                    </div>
                ))}


                {/* <div className={"edu-content"}>
                   <ContentExperience />
                   <ContentExperience />
                </div>
                <div className={"edu-content"}>
                   <ContentExperience />
                   <ContentExperience />
                </div> */}
            </Carousel>
        </div>
        </div>
    )
}