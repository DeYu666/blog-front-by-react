import React from "react";

import "./index.less"

import {Row, Col} from "antd"
import ProjectSide from "../project-containers/project-side/project-side";
import ContentNetDisk from "../../component-library/content-net-disk/content-net-disk";

export default function Project(prop){
    const {theme} = prop
    return (
        <div className={"my-projects"}>
            <Row>
                <Col span={4} style={{"marginTop":35}}>
                    <ProjectSide theme={theme} />
                </Col>
                <Col  span={20} style={{ "transition": ".25s"}}>
                    <ContentNetDisk theme={theme} />
                </Col>
            </Row>
        </div>
    )
}