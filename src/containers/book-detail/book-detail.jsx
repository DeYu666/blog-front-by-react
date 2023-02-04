import React, {useEffect, useState} from "react";
import "./index.css"
import {Col, Row} from "antd";
import TopPostDetail from "../../component-library/top-post-detail/top-post-detail";
import {useLocation} from "react-router-dom";
import ContentBook from "../../component-library/content-book/content-book";


// import {getBookContent} from "../../api/book";


export default function BookDetail(prop) {
    const [bookDetail, setBookDetail] = useState(exampleDiaries)

    // let location = useLocation()

    const readData = () => {
        // console.log(location)
        // let bookId;
        // if(location.state === null){
        //     bookId = -1
        // }else{
        //     bookId = location.state.id
        // }
        // console.log(bookId)
        // getBookContent(bookId).then(res=>{
        //     // console.log(res)
        //     setBookDetail(res.data)
        // }).catch(error=>{
        //     console.log(error)
        // })
    }

    useEffect(()=>{
        readData()
    },[])


    return (
        <div className={"my-diary"}>
            <Row>
                <Col span={24}>
                    <TopPostDetail title={"记录当下，看回忆还真的挺有意思的！"} category={"书籍"}/>
                </Col>
            </Row>


            <Row className={"diary-main"}>
                {bookDetail.map((detail, index) => (
                    <Col span={24} key={index}>
                        <ContentBook book={detail} theme={prop.theme}/>
                    </Col>
                ))}
            </Row>
        </div>
    )
}


const exampleDiaries = [
    {
        create_time:"2021年2月9日",
        book_content:"今天天气真好！阳光明媚！",
    },
    {
        create_time:"2021年2月9日",
        book_content:"今天天气真好！阳光明媚！",
    },
    {
        create_time:"2021年2月9日",
        book_content:"今天天气真好！阳光明媚！",
    },
]