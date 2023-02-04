import React from "react";
import TitleUser from "../title-user/title-user";
import "./index.css"


export default function ContentBook(prop) {
    const {book, theme} = prop
    return (
        <div className={theme === "dark" ? ("content-diary content-diary-dark"):("content-diary")}>
            <div className={"diary-title"}>
                <TitleUser title={book.create_time} theme={theme} />
            </div>
            <div className={"diary-content"}>
                {book.book_content}
            </div>
        </div>
    )
}