import React, {useEffect, useState} from "react";
import "./index.css"
import {Col, Row} from "antd";
import TopPostDetail from "../../component-library/top-post-detail/top-post-detail";
import ContentDiary from "../../component-library/content-diary/content-diary";
import {getDiary} from "../../api/diary";

export default function Diary(prop) {
    const [diaries, setDiaries] = useState(exampleDiaries)
    const [password, setPassword] = useState("")

    const readData = () => {
        getDiary(password).then(res=>{

            setDiaries(res.data)
        }).catch(error=>{
            console.log(error)
        })
    }

    useEffect(()=>{
        readData()
    }, [password])


    const getPasswd = (data) => {
        // console.log(data)
        setPassword(data)
    }

    return (
        <div className={"my-diary"}>
            <Row>
                <Col span={24}>
                    <TopPostDetail title={"记录当下，看回忆还真的挺有意思的！"} category={"日记"} isPwd={true} getPasswd={getPasswd}/>
                </Col>
            </Row>


            <Row className={"diary-main"}>
                {diaries.map((diary, index) => (
                    <Col span={24}>
                        <ContentDiary diary={diary} theme={prop.theme}/>
                    </Col>
                ))}
            </Row>
        </div>
    )
}


const exampleDiaries = [
    {
        create_time:"2021年2月9日",
        content:"今天天气真好！阳光明媚！",
    },
    {
        create_time:"2021年2月9日",
        content:"今天天气真好！阳光明媚！",
    },
    {
        create_time:"2021年2月9日",
        content:"今天天气真好！阳光明媚！",
    },
]