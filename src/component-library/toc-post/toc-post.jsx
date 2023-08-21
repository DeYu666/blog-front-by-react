import React, {Component} from "react";
import PropTypes from "prop-types"

import TitleUser from "../title-user/title-user";
import "./toc-post.css"

export default class TocPost extends Component{
    static propTypes = {
        toc: PropTypes.array.isRequired,
    }

    scrollToAnchor = (anchor) => {
        const element = document.getElementById(anchor);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
        console.log(anchor)
     };

    render() {
        const {toc} = this.props
        console.log(toc)
        return (
            <div>
                <TitleUser title={"目录"} />
                <ul className="user_toc">
                    {
                        toc.map((t, index) => (
                            <li key={index}><a onClick={this.scrollToAnchor.bind(this,t.title)} target="_self">{t.title}</a></li>
                        ))
                    }
                </ul>
            </div>
        )
    }
}