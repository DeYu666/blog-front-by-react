import {Component, useState} from "react";
import moment from "moment";
import "./card-project.less"
import {useNavigate} from "react-router-dom";


export default function CardProject(prop) {
    let navigate = useNavigate();

    const examplePost = {
        project_img_src: "",
        publish_time: "2010-02-28",
        project_name: "这里写标题，一直一直一直可以写两行标题",
        abstract: "这里写简介，描述项目的大致内容",
    }

    const [post, setPost] = useState(prop.post)


    const handleClickPost = id => {
        console.log(id)
        navigate("/projectDetail", {state:{id:id}});
        // this.props.getDetail(id)
        // this.props.history.push(`/detail/${id}`)
    }


    // const {post} = this.state

    return (
        <div className={"card-project"}>
            <div className={"card-image-project"}>
                <img src={post.project_img_src1 ? post.project_img_src : "http://image.asa-zhang.top/cover/default.png"}
                     alt={"图标"}/>
            </div>
            <div className={"card-content-project  article-content"}>
                <span className={"card-title"}>{post.project_name}</span>
                <div className={"summary-project"}>
                    {post.abstract}
                </div>
            </div>
            <div className={"card-action-project"}>
                <div className={"read-more"}>
                    <a onClick={handleClickPost.bind(this,post.id)}>
                        阅读更多
                    </a>

                </div>

                <div className={"project-year"}>
                    {moment(post.publish_time, moment.ISO_8601).format("YYYY年MM月DD日")}
                </div>
            </div>
        </div>
    )
}