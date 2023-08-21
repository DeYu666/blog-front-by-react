import React, {Component} from "react";
import PropTypes from "prop-types";
import {withRouter} from "react-router-dom";

import './tags-user.css'
import TitleUser from "../title-user/title-user";


class TagsUser extends Component{

    static propTypes = {
        tags:PropTypes.array.isRequired,
    }

    handleClick = id => {
        console.log(id)
        // this.props.history.push(`/tag/${id}`)
    }

    render() {
        const {tags, theme} = this.props
        return (
            <>
                <TitleUser title={"标签"} theme={theme}/>
                <ul className="user_tags">
                    {
                        tags.map((tag, index) => (
                            <li key={index}><a target="_self" onClick={this.handleClick.bind(this,tag.id)}>{tag.name}</a></li>
                        ))
                    }
                </ul>
            </>
        )
    }
}

export default (TagsUser)