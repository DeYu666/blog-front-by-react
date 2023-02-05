import React, {Component} from "react";

import './footer.css'

export default class FooterMy extends Component{
    render() {
        return (
            <div className="container" style={{ 'textAlign':'center'}}>
                <div className="copyright silver-color">
                    <a target="_blank" href={"http://asa-zhang.top"}>版权所有 © 2022 Asa blog | Asa All Rights Reserved </a>
                </div>
                <div className="beian">
                    <a  href="http://www.beian.miit.gov.cn" target="_blank"><span>晋ICP备19012660号</span></a>
                </div>
            </div>
        )
    }
}