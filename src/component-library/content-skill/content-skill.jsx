import {Component} from "react";
import {notification, Progress} from "antd";

import "./content-skill.less"

export default class ContentSkill extends Component {

    state = {
        skillArr : [{
            skill_name: "Golang",
            skill_mastery: 90,
            skill_intro: <span>1. 了解 Golang 基本的数据结构的底层实现。<br/>2. 了解 Golang 的并发调度模型和垃圾回收‍机制。</span>,
        },{
            skill_name: "SEO",
            skill_mastery: 50,
            skill_intro:"",
        },{
            skill_name: "数据结构",
            skill_mastery: 10,
            skill_intro:"",
        },{
            skill_name: "数据结构",
            skill_mastery: 10,
            skill_intro:"",
        },{
            skill_name: "数据结构",
            skill_mastery: 10,
            skill_intro:"",
        },]
    }

    showSkillContent = (description) => {
        notification.open({
            message: '技能描述',
            description: description,
        });
    }

    render() {
        const {skillArr} = this.props
        console.log(this.props)
        return(
            <div className={"skill-content-dark skill-content"}>
                {skillArr.map((skill, index)=>(
                    <div className={"skill-data"} key={index}>
                        <div onClick={this.showSkillContent.bind(this,skill.skill_intro)} style={{cursor: "default"}}>{skill.skill_name}   </div>
                        <Progress percent={skill.skill_mastery} status="active" strokeColor={"red"} />
                    </div>
                ))}
            </div>
        )
    }
}