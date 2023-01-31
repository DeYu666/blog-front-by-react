import React, {Component} from "react";
import PropTypes from "prop-types"

import './navs-user.less'
import TitleUser from "../title-user/title-user";


export default class NavsUser extends Component {

    static propTypes = {
        navs: PropTypes.array.isRequired,
    }

    handleClick = id => {
        console.log(id)
    }

    render() {
        const {navs} = this.props
        return (
            <>
                <TitleUser title={"导航"}/>
                <ul className="user_navs">
                    {
                        navs.map((nav, index) => (
                            <li key={index}><a onClick={this.handleClick.bind(this, nav.id)}
                                               target="_self">{nav.name}</a></li>
                        ))
                    }
                </ul>
            </>

        )
    }
}

