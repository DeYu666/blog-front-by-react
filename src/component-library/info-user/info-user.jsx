import React, {Component} from "react";
import PropTypes from "prop-types"
import {Avatar} from "antd";

import './info-user.css'
import head_img from "./img/head_img.jpg";


export default class InfoUser extends Component{

    static propTypes = {
        nickname: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
    }

    render() {
        const {nickname, description, theme} = this.props
        return (
            <div className={theme === "dark"? ("user_info user_info-dark"):("user_info")} style={{"marginTop": 10, "display": "flex"}}>
                <Avatar className="authorImg" shape="square" size={64} src={head_img}  style={{"float":'left'}} />
                <div className="meta" style={{"float":'left'}}>
                    <div className="name">
                        {nickname}
                    </div>
                    <div className="description">
                        {description}
                    </div>
                </div>
            </div>
        )
    }
}