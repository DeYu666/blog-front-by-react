import React from "react";
import { useNavigate } from "react-router-dom";

import "./card-post.css"
import moment from "moment";


// export default class CardPost extends Component{
export default function CardPost(props) {
    // let navigate = useNavigate();

    const handleClickTag = id => {
        // this.props.history.push(`/tag/${id}`)
    }
    const handleClickPost = id => {
        // navigate("/postDetail", {state:{id:id}});
        // this.props.history.push(`/detail/${id}`)
    }

    const {post, theme} = props
    return (
        <div className={theme === "dark" ? ("card") : ("card card-light")}>
            <a onClick={handleClickPost.bind(this, post.id)}>
                <div className={"card-image"}>
                    <img src={post.coverUrl ? post.coverUrl : "http://image.asa-zhang.top/cover/default.png"}/>
                    <span className={"card-title"}>{post.title}</span>
                    <span className={"posts-date"}>
                            {moment(post.create_time, moment.ISO_8601).format("YYYY年MM月DD日")}&nbsp;&nbsp;·&nbsp;&nbsp;{post.category.name}
                        </span>
                </div>
            </a>
            <div className={"card-content  article-content"}>
                <div className={"summary"}>
                    {post.abstract}
                </div>
            </div>
            <div className={"card-action article-tags"}>
                {post.tags.map((tag, index) => (
                    <a key={index} onClick={handleClickTag.bind(this, tag.id)}> <span
                        className={"chip tag-color"}> {tag.name} </span> </a>
                ))}
                {post.tags.length === 0 ? (<a> <span className={"chip tag-color"}>暂无标签</span> </a>) : null}
            </div>
        </div>
    )

}

// export default connect(
//     state => ({state: state}),
//     {getDetail}
// )(withRouter(CardPost))


