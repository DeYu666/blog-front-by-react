import React, {useState} from "react";
import {Col, Menu, Row, Switch, theme} from "antd";
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
    // {
    //     path: '/project',
    //     text: '项目',
    // },
    {
        path: '/diary',
        text: '日记',
    }]

const { useToken } = theme


function NavTop(prop) {
    let navigate = useNavigate();
    const { token } = useToken()

    const handleClick = e => {
        navigate(e.key)
    }

    return (
        <Col xs={24} span={20}>
            <Menu selectedKeys={[prop.path]} onClick={handleClick} mode="horizontal">
                {
                    navList.map((nav, index) => (
                        <Menu.Item key={nav.path} selected={true} style={{color:token.colorText}}  className="nav-title-my">
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
                    {theme.dark ? <img src={logoDark} alt={"logo"}/> : <img src={logoLight} alt={"logo"}/>}
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