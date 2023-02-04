import React from "react";

import "./card-book.css"
import {useNavigate} from "react-router-dom";
import {message} from "antd";
import moment from 'moment';



export default function CardBook(prop){
    const book = prop.book
    // let navigate = useNavigate();


    function handleClickBook(bookId){
        console.log(bookId)
        if(book.book_status === undefined || book.book_status === "未读"){
            message.warn(`《${book.book_name}》这本书还没有读。`,10)
            return
        }
        // navigate("/bookDetail", {state:{id:bookId}});
    }

    return (
        <div className={"card-book"}>
            <a onClick={handleClickBook.bind(this,book.id)}>
                <div className={"card-book-image"}>
                    <img src={book.coverUrl ? book.coverUrl : "http://image.asa-zhang.top/cover/default.png"} />
                    <span className={"card-book-title"}>{book.book_name}</span>
                    <span className={"posts-date"}>
                            创建时间：{moment(book.create_time, moment.ISO_8601).format("YYYY年MM月DD日")}
                        </span>
                </div>
            </a>
            <div className={"card-book-content  article-book-content"}>
                <div className={"summary-book"}>
                    {book.abstract}
                </div>
            </div>

        </div>
    )
}