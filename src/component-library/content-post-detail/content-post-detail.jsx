import React from "react";
import ReactMarkdown from "react-markdown";
import {TagsOutlined, EyeOutlined} from "@ant-design/icons";

import "./content-post-detail.less"
import moment from "moment";

export default function ContentPostDetail(props) {
    const {author, create_time, tags, see_num, content} = props

    const Heading = ({level, children}) => {
        return (
            <div className="title_style">
                <h2 id={children[0].props.value}> {children} </h2>
            </div>
        )
    }
    return (
        <div className="article_wrapper post clearfix" style={{minHeight:"29vw"}}>
            <div className="meta post-detail-content">
                    <span className="inline-block">
                      {author} · {moment(create_time, moment.ISO_8601).format("YYYY年MM月DD日")}
                    </span>

                <TagsOutlined/>
                {tags.map((tag, index) => (
                    <span className="inline-block" key={index}>
                            <a href="#"> {tag.name} </a>
                        </span>
                ))}
                <EyeOutlined/>
                <span className="inline-block">
                      阅读人数 {see_num}
                    </span>
            </div>
            <div className="markdown-body clearfix">
                <ReactMarkdown source={content} skipHtml={true} renderers={{heading: Heading}}/>
            </div>
        </div>
    )
}