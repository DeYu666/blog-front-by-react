import {Col, Row} from "antd";
import CardBook from "../../../component-library/card-book/card-book";
import PaginationMy from "../../../component-library/pagination-my/pagination-my";
import React, {useEffect, useState} from "react";
// import {getPostListByPage} from "../../../api/blog";
// import {getBooksListByCateId} from "../../../api/book";


export default function ShowBookList(prop) {
    const [books, setBooks] = useState(exampleBooks)
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
        // getBooksListByCateId(cateId, pageNum).then(res=>{
        //     console.log(res)
        //     setBooks(res.data.booksContent)
        //     setPageTotal(res.data.pagesNum)
        // }).catch(error=>{
        //     console.log(error)
        // })
    }, [cateId, pageNum])

    return (
        <Row gutter={[40, 24]}>
            {books.map((book, index) => (
                <Col xs={24} sm={6} key={index}>
                    <CardBook book={book}/>
                </Col>
            ))}
            <Col span={24}>
                <PaginationMy current={pageNum} total={pageTotal}  getPageNum={getPageNum}/>
            </Col>
        </Row>
    )
}



const exampleBooks = [
    {
        id: 5,
        book_name:"书籍名称", // book_name
        create_time: "2022-01-07T23:44:01+08:00",  // modified_time: "2022-01-07T23:44:01+08:00"
        state: 2,   // book_status: "未读"
        book_status: "已读",
        abstract: "自己的推荐语、吐槽语，等等1。。。",
    },
    {
        id: 4,
        book_name:"书籍名称",
        completion: "90%",
        state: 1,
        abstract: "自己的推荐语、吐槽语，等等2。。。",
    },
    {
        book_name:"书籍名称",
        completion: "90%",
        state: 1,
        abstract: "自己的推荐语、吐槽语，等等3。。。",
    },
    {
        book_name:"书籍名称",
        completion: "90%",
        state: 1,
        abstract: "自己的推荐语、吐槽语，等等4。。。",
    },
    {
        book_name:"书籍名称",
        completion: "90%",
        state: 1,
        abstract: "自己的推荐语、吐槽语，等等5。。。",
    },
]