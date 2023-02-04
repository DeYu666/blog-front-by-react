import React, {useState} from "react";
import {Col, Menu, Row, Switch} from "antd";
import { useNavigate } from "react-router-dom";

import "./header-my.css"

import logoDark from "./logo-dark.svg"
import logoLight from "./logo-light.svg"

const navList = [
    {
        path: '/index',
        text: '首页',
    },
    {
        path: '/blog',
        text: '博客',
    },
    {
        path: '/book',
        text: '书籍',
    },
    {
        path: '/project',
        text: '项目',
    },
    {
        path: '/diary',
        text: '日记',
    }]




function NavTop(prop) {

    return (
        <Col xs={24} span={20}>
            <Menu theme={prop.theme} mode="horizontal">
                {
                    navList.map((nav, index) => (
                        <Menu.Item key={nav.path} selected={true} className="nav-title-my">
                            {nav.text}
                        </Menu.Item>
                    ))
                }
            </Menu>
        </Col>
    )
}


const SwitchTheme = (prop) => {
    return (
        <>
            <Switch onChange={prop.setTheme} checkedChildren="亮" unCheckedChildren="暗" defaultChecked/>
        </>
    )
}




export default function HeaderMy(props) {

    const {theme, setTheme} = props

    return (
        <div className={"myHeader"}>
            <Row gutter={[24, 16]}>
                <Col xs={0} md={{span:3}}>
                    <img src={logoLight} alt={"logo"}/>
                </Col>

                <Col md={{span:20}} xs={{span:20}}>
                    {/* <NavTop theme={theme} path={path} setPath={setPath}/> */}
                    <NavTop theme={theme}/>
                </Col>

                <Col md={{span:1}} xs={{span:3}}>
                    <SwitchTheme setTheme={setTheme}/>
                </Col>
            </Row>
        </div>
    )
}