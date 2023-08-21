import React from "react";
import TitleUser from "../title-user/title-user";
import "./index.css"
import moment from "moment";


export default function ContentBook(prop) {
    const {book, theme} = prop
    return (
        <div className={theme === "dark" ? ("content-diary content-diary-dark"):("content-diary")}>
            <div className={"diary-title"}>
                <TitleUser title={moment(book.create_time, moment.ISO_8601).format("YYYY年MM月DD日")} theme={theme} />
            </div>
            <div className={"diary-content"}>
                {book.book_content}
            </div>
        </div>
    )
}