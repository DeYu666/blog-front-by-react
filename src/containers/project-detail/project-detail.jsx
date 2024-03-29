import React, {useEffect, useState} from "react";
import {Affix, Col, Row} from "antd";
import {RightOutlined, LeftOutlined} from "@ant-design/icons";

import {useParams } from "react-router-dom";
import "./project-detail.css";
import { Remarkable } from "remarkable";

import TopPostDetail from "../../component-library/top-post-detail/top-post-detail";
import ContentPostDetail from "../../component-library/content-post-detail/content-post-detail";
import PostDetailSide from "../post-detail-side/post-detail-side";
import {getCvProjectById} from "../../api/cv";


export default function ProjectDetail() {
    const [postSpan, setPostSpan] = useState(19);
    const [fullscreen, setFullscreen] = useState(false);
    const [post, setPost] = useState(examplePost);
    const [toc, setToc] = useState([]);

    let param = useParams ()

    const readData = () => {

        let projectId = param.projectId

       
        getCvProjectById(projectId).then(res=>{
            console.log(res)
            
            let data;

            if (res.data == null) {
                data = examplePost
            } else {
                data = res.data
            }

            setPost(data)
            

            // 使用 Remarkable 解析 Markdown 文本
            const md = new Remarkable();
            const html = md.render(res.data.project_content);

            // 解析 HTML 并提取标题
            const tempDiv = document.createElement("div");
            tempDiv.innerHTML = html;
            const headings = tempDiv.querySelectorAll("h1, h2");

            const tocData = Array.from(headings).map((heading) => ({
                level: Number(heading.tagName[1]), // 标题的级别
                title: heading.textContent, // 标题文本
            }));

            console.log(tocData);

            setToc(tocData)

        }).catch(error=>{
            console.log(error)
        })
    }

    useEffect(()=>{
        readData()
    },[])
    function handleClick() {
        if (fullscreen === false) {
            setPostSpan(24)
            setFullscreen(true)
        } else {
            setPostSpan(19)
            setFullscreen(false)
        }
    }

    return (
        <div className={"project-detail"}>
            {post.project_name === undefined ? (
                <>

                </>
            ) : (
                <>
                    <Row>
                        <Col span={24}>
                            <TopPostDetail title={post.project_name} category={"项目"}/>
                        </Col>
                    </Row>

                    <Row>
                        <Col  span={postSpan} style={{"transition": ".25s"}}>
                            <div className="toggle_sidebar" onClick={handleClick}>
                                {fullscreen ? (
                                    <LeftOutlined/>
                                ) : (
                                    <RightOutlined/>
                                )}
                            </div>
                            <ContentPostDetail create_time={post.publish_time} author={"Asa"}
                                         content={post.project_content} see_num={"保密"} tags={[]}/>
                        </Col>
                        <Col  span={24 - postSpan} style={{paddingTop: 25}}>
                            <Affix offsetTop={10}>
                                <PostDetailSide toc={toc}/>
                            </Affix>
                        </Col>
                    </Row>
                </>
            )}

        </div>
    )
}


const examplePost = {
    project_name: "无人区",
    category:{
        name:"分类",
        id: 7,
    },
    publish_time: "1997-12-31T06:20:04Z",
    author: {
        username: "Asa",
    },
    project_content:"亲~，这里是**无人区**哦~，请赶快远离",
    views: 10,
    tags:[],
}

