import React, {useEffect, useState} from "react";
import {Affix, Col, Row} from "antd";
import {RightOutlined, LeftOutlined} from "@ant-design/icons";

import {useLocation} from "react-router-dom";
import "./project-detail.less";


import TopPostDetail from "../../../component-library/top-post-detail/top-post-detail";
import ContentPostDetail from "../../../component-library/content-post-detail/content-post-detail";
import PostDetailSide from "../../post-detail-side/post-detail-side";
import {getCvProjectById} from "../../../api/cv";


export default function ProjectDetail() {
    const [postSpan, setPostSpan] = useState(19);
    const [fullscreen, setFullscreen] = useState(false);
    const [post, setPost] = useState(examplePost);
    const [toc, setToc] = useState([]);

    let location = useLocation()

    const readData = () => {
        console.log(location)
        let projectId;
        if(location.state === null){
            projectId = -1
        }else{
            projectId = location.state.id
        }
        console.log(projectId)
        getCvProjectById(projectId).then(res=>{
            console.log(res)
            setPost(res.data)

            let toc = res.data.project_content.match(/#(.*)/g)
            console.log(toc);

            let tempToc = []

            for (let i =0; i< toc.length; i++) {
                tempToc.push({name:toc[i]})
            }
            console.log(tempToc);

            setToc(tempToc)

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
                        <Col xs={24} span={postSpan} style={{"transition": ".25s"}}>
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
                        <Col xs={0} span={24 - postSpan} style={{paddingTop: 25}}>
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
    title: "这里是标题",
    category:{
        name:"分类",
        id: 7,
    },
    create_time: "2010年10月9日",
    author: {
        username: "Asa",
    },
    content:"这里是内容",
    views: 10,
    tags:[],
}

