import React, {Component} from "react";
import PropTypes from "prop-types"

import "./link-friends.css"
import TitleUser from "../title-user/title-user";

export default class LinkFriends extends Component{

    static propTypes = {
        friends:PropTypes.array.isRequired,
    }

    render() {
        const {friends,theme} = this.props
        return (
            <>
                <TitleUser title={"友情链接"} theme={theme} />
                <ul className="friends_links">
                    {
                        friends.map((f, index) => (
                            <li key={index}>
                                <div className="friend_card">
                                    <a className={"site_icon"} href={f.url} style={{backgroundImage: `url(${f.url_logo})`}} />
                                    <div className="metas">
                                        <div className="background reverse"
                                             style={{backgroundImage:"linear-gradient(#FFFFFF,var(--white_default))"}} />
                                        <a href={f.url} target="_blank" className="title">{f.name}</a>
                                        <div className="description" title={f.description}>{f.description}</div>
                                    </div>
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </>
        )
    }
}