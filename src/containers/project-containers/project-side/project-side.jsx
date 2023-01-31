import React from "react";
import {Menu} from 'antd';
import {AppstoreOutlined, SettingOutlined} from '@ant-design/icons';
import "./index.less"


const {SubMenu} = Menu;



export default function ProjectSide(prop) {

    function handleClick(e) {
        console.log(e)
    }


    return (
        <Menu
            onClick={handleClick}
            style={{float: "left", borderRadius: 10}}
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
            theme={prop.theme}
        >
            <SubMenu key="sub1" icon={<AppstoreOutlined/>} title={"网盘"}>

                <Menu.Item key={1} title={"oneDrive"}>{"oneDrive"}</Menu.Item>
                {/*<SubMenu key="sub3" title="不常用">*/}
                {/*    <Menu.Item key="7">七牛云</Menu.Item>*/}
                {/*    <Menu.Item key="8">其他</Menu.Item>*/}
                {/*</SubMenu>*/}
            </SubMenu>
            <SubMenu key="sub4" title={
                    <span>
                            <SettingOutlined/>
                            <span>暂未开发</span>
                    </span>
            }
            >
                <Menu.Item key="9">Option 9</Menu.Item>
                <Menu.Item key="10">Option 10</Menu.Item>
                <Menu.Item key="11">Option 11</Menu.Item>
                <Menu.Item key="12">Option 12</Menu.Item>
            </SubMenu>
        </Menu>
    )
}