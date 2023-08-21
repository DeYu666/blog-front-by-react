import React, {useEffect, useState} from "react";
import {Col, Row} from "antd";

import TopBlog from "../../component-library/top-blog/top-blog";

import "./blog.css"

import NavPost from "../../component-library/nav-post/nav-post";
import ShowPostsList from "../blog-containers/show-posts-list/show-posts-list";

import ShowInfoSide from "../blog-containers/show-info-side/show-info-side";
import {getCategoryList} from "../../api/blog";




export default function Blog(prop) {
    const chickenSoup = "坚持走下去，天总会亮的！"

    const [postNav, setPostNav] = useState(exampleCateData)
    const [key, setKey] = useState(1)

    const [activeCateId, setActiveCateId] = useState(-1)
    const setActiveCategoryId = (id) => {
        setActiveCateId(id)
    }

    const readPostNavData = () => {
        getCategoryList().then(res=>{
            console.log(res)
            let categories_data = []
            categories_data.push({id: -1, name:"最新撰写"})
            res.data.map(t_cate=>(
                categories_data.push(t_cate)
            ))

            // console.log(categories_data)
            setPostNav(categories_data)

        }).catch(error=>{
            console.log(error)
        })
    }
    useEffect(()=>{
        readPostNavData()
    },[])

    useEffect(()=>{
        setKey(key+1)
    }, [postNav])

    return(
        <div className={"blog-container"}>
            <Row>
                <Col span={24}>
                    <TopBlog chickenSoup={chickenSoup} />
                </Col>
            </Row>

            <Row className={"blog-main"} >

                <Col className={"main-left"} xs={24} sm={19} >
                    <Row>
                        <Col className={"nav-post"} xs={0} sm={24} key={key}>
                            <NavPost cateData={postNav} setActiveCategoryId={setActiveCategoryId} />
                        </Col>
                        <Col style={{width:"100%"}}>
                            <ShowPostsList theme={prop.theme} activeCateId={activeCateId} />
                        </Col>
                    </Row>
                </Col>

                <Col className={"main-right"} xs={0}  sm={5}>
                    <ShowInfoSide theme={prop.theme} />
                </Col>
            </Row>
        </div>
    )
}



const exampleCateData = [
    {
        id: -1,
        name:"最新撰写"
    },
    {
        id: 7,
        name:"编程语言",
        cub_cate:[
            {
                name:"gradle",
                id: 3,
            },
            {
                name:"React",
                id: 7,
            }
        ]
    }
]