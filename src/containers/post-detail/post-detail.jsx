import React, {useEffect, useState} from "react";
import {Affix, Col, Row} from "antd";
import {RightOutlined, LeftOutlined} from "@ant-design/icons";

import {useParams} from "react-router-dom";
import { Remarkable } from "remarkable";

import TopPostDetail from "../../component-library/top-post-detail/top-post-detail";
import ContentPostDetail from "../../component-library/content-post-detail/content-post-detail";
import PostDetailSide from "../post-detail-side/post-detail-side";
import {getDetailById} from "../../api/blog";

import "./post-detail.css";

export default function PostDetail() {
    const [postSpan, setPostSpan] = useState(19);
    const [fullscreen, setFullscreen] = useState(false);
    const [post, setPost] = useState(examplePost);
    const [toc, setToc] = useState([]);

    let param = useParams ()

    const readData = () => {
        let postId = param.postId;

        getDetailById(postId).then(res=>{
            // console.log(res)
            setPost(res.data)

            // let toc = res.data.content.match(/#(.*)/g)
            // let tempToc = []
            // for (let i =0; i< toc.length; i++) {
            //     tempToc.push({name:toc[i]})
            // }
            // console.log(tempToc);

           

            // 使用 Remarkable 解析 Markdown 文本
            const md = new Remarkable();
            const html = md.render(res.data.content);

            // 解析 HTML 并提取标题
            const tempDiv = document.createElement("div");
            tempDiv.innerHTML = html;
            const headings = tempDiv.querySelectorAll("h1, h2");

            const tocData = Array.from(headings).map((heading) => ({
                level: Number(heading.tagName[1]), // 标题的级别
                title: heading.textContent, // 标题文本
            }));
            // console.log(tocData);

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
        <div className={"post-detail"}>
            {post.category === undefined ? (
                <>

                </>
            ) : (
                <>
                    <Row>
                        <Col span={24}>
                            <TopPostDetail title={post.title} category={post.category.name}/>
                        </Col>
                    </Row>

                    <Row>
                        <Col span={postSpan} style={{"transition": ".25s"}}>
                            <div className="toggle_sidebar" onClick={handleClick}>
                                {fullscreen ? (
                                    <LeftOutlined/>
                                ) : (
                                    <RightOutlined/>
                                )}
                            </div>
                            <ContentPostDetail create_time={post.create_time} author={post.author.username}
                                         content={post.content} see_num={post.views} tags={post.tags}/>
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
    title: "这里是标题",
    category:{
        name:"分类",
        id: 7,
    },
    create_time: "2010年10月9日",
    author: {
        username: "Asa",
    },
    content:"# 这里是内容",
    views: 10,
    tags:[],
}

