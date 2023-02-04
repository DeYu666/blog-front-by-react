import React, {Component} from "react";
import PropTypes from "prop-types"

import './logs-user.css'
import TitleUser from "../title-user/title-user";


export default class LogsUser extends Component{

    static propTypes = {
        logs:PropTypes.array.isRequired,
    }

    render() {
        const {logs,theme} = this.props
        return (
            <>
                <TitleUser title={"微博客"} theme={theme}/>
                <ul className="user_logs">
                    {
                        logs.map((log, index) => (
                            <li key={index}>
                                <div className="main">
                                    <p/>
                                    <p>{log}</p>
                                    <p/>
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </>

        )
    }
}