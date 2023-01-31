import React, {Component} from "react";
import PropTypes from "prop-types"

import TitleUser from "../title-user/title-user";
import "./toc-post.less"

export default class TocPost extends Component{
    static propTypes = {
        toc: PropTypes.array.isRequired,
    }

    handleClick = name => {
        console.log(name)
    }

    render() {
        const {toc} = this.props
        return (
            <div>
                <TitleUser title={"目录"} />
                <ul className="user_toc">
                    {
                        toc.map((t, index) => (
                            <li key={index}><a href={t.name.replace(" ","")} target="_self">{t.name.replaceAll("#","").replace(" ","")}</a></li>
                        ))
                    }
                </ul>
            </div>
        )
    }
}