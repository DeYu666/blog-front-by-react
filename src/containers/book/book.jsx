import React, {useEffect, useState} from "react";
import "./index.css"
import {Col, Row} from "antd";
import TopPostDetail from "../../component-library/top-post-detail/top-post-detail";
import NavPost from "../../component-library/nav-post/nav-post";
import ShowBookList from "../book-containers/show-book-list/show-book-list";

export default function Book() {
    const [activeCateId, setActiveCateId] = useState(-1)



    const setActiveCategoryId = (id) => {
        setActiveCateId(id)
    }



    return (
        <div className={"my-book"}>
            <Row>
                <Col span={24}>
                    <TopPostDetail title={"没有书籍的屋子，就像没有灵魂的躯体。——西塞罗"} category={"书单"}/>
                </Col>
            </Row>


            <Row className={"book-main"}>
                <Col span={24}>
                    <Row>
                        <Col xs={0} className={"nav-book"} sm={24}>
                            <NavPost cateData={exampleCateData} setActiveCategoryId={setActiveCategoryId}/>
                        </Col>
                        <Col style={{width:"100%"}}>
                            <ShowBookList activeCateId={activeCateId}/>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    )
}


const exampleCateData = [
    {
        id: -1,
        name: "全部书籍"
    }, {
        id: 0,
        name: "在看书籍"
    }, {
        id: 1,
        name: "已看书籍"
    }, {
        id: 2,
        name: "待看书籍"
    }
]
