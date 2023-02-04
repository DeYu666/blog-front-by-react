import React, {useEffect, useState} from "react";
import {Col, Row} from "antd";
import CardPost from "../../../component-library/card-post/card-post";
import PaginationMy from "../../../component-library/pagination-my/pagination-my";
// import {getPostListByPage} from "../../../api/blog";

const examplePosts = [
    {
        id: 1,
        coverUrl: "",
        create_time: "2020年11月10日",
        category: {id: 7, name: "category",},
        abstract: "这里是摘要",
        title: "这里写标题",
        tags: [
            {id: 0, name: "标签1"},
            {id: 1, name: "标签2"},
        ]
    },
    {
        id: 2,
        coverUrl: "",
        create_time: "2020年11月10日",
        category: {id: 7, name: "category",},
        abstract: "这里是摘要2",
        title: "这里写标题2",
        tags: [
            {id: 0, name: "标签1"},
            {id: 1, name: "标签2"},
        ]
    },
    {
        id: 2,
        coverUrl: "",
        create_time: "2020年11月10日",
        category: {id: 7, name: "category",},
        abstract: "这里是摘要2",
        title: "这里写标题2",
        tags: [
            {id: 0, name: "标签1"},
            {id: 1, name: "标签2"},
        ]
    },
    {
        id: 2,
        coverUrl: "",
        create_time: "2020年11月10日",
        category: {id: 7, name: "category",},
        abstract: "这里是摘要2",
        title: "这里写标题2",
        tags: [
            {id: 0, name: "标签1"},
            {id: 1, name: "标签2"},
        ]
    },
    {
        id: 2,
        coverUrl: "",
        create_time: "2020年11月10日",
        category: {id: 7, name: "category",},
        abstract: "这里是摘要2",
        title: "这里写标题2",
        tags: [
            {id: 0, name: "标签1"},
            {id: 1, name: "标签2"},
        ]
    },
]

export default function ShowPostsList(prop) {
    const [posts, setPosts] = useState(examplePosts)
    const [cateId, setCateId] = useState(-1)
    const [pageNum, setPageNum] = useState(1)
    const [pageTotal, setPageTotal] = useState(1)

    useEffect(()=>{
        setCateId(prop.activeCateId)
    }, [prop.activeCateId])


    const getPageNum = (num) => {
        setPageNum(num)
    }

    useEffect(()=>{
        // getPostListByPage(cateId, pageNum).then(res=>{
        //     console.log(res)
        //     setPosts(res.data.postContent)
        //     setPageTotal(res.data.pagesNum)
        // }).catch(error=>{
        //     console.log(error)
        // })
    }, [cateId, pageNum])

    return (
        <>
            <Row gutter={[32, 24]}>
                {posts.map((post, index) => (
                    <Col xs={24} sm={6} key={index}>
                        <CardPost post={post}/>
                    </Col>
                ))}
                <Col span={24}>
                    <PaginationMy current={pageNum} total={pageTotal}  getPageNum={getPageNum}/>
                </Col>
            </Row>
        </>
    )
}