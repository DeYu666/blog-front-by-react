import {Component} from "react";
import { Row, Col } from 'antd';

import  "./content-experience.css"
import moment from "moment";


export default class ContentExperience extends Component {


    
    render() {
        const {content} = this.props

        return (
            <div className={"review-row"}>
                <Row>
                    <Col span={9}>
                        <div className={"review-company"}>
                            <div className={"company-year"}>
                                {/* 2015-2019 */}
                                {moment(content.work_year, moment.ISO_8601).format("YYYY年MM月DD日")}
                            </div>
                            <div className={"company-name"}>
                                {/* 中北大学 */}
                                {content.enterprise_name}
                            </div>
                        </div>
                    </Col>

                    <Col span={5}>
                        <div className={"review-position"}>
                            {/* 学士学位 */}
                            {content.work_name}
                        </div>
                    </Col>

                    <Col span={10}>
                        <div className={"review-content"}>
                            {/* 就读于软件工程专业，在校学习了C、JAVA、PYTHON 等语言，以及计算机相关的基础知识。
                            在校参加了华硕合伙人社团，担任了校区市调负责人，组织过多次活动，获得了多个奖项。 */}
                            {content.work_info}
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}