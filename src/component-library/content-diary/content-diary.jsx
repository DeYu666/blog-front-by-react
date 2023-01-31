import React from "react";
import TitleUser from "../title-user/title-user";
import "./index.less"
import moment from "moment";


export default function ContentDiary(prop) {
    const {diary, theme} = prop
    return (
        <div className={theme === "dark" ? ("content-diary content-diary-dark"):("content-diary")}>
            <div className={"diary-title"}>
                <TitleUser title={moment(diary.create_time, moment.ISO_8601).format("YYYY年MM月DD日")} theme={theme} />
            </div>
            <div className={"diary-content"}>
                {diary.content.replaceAll("·", "")}
            </div>
        </div>
    )
}