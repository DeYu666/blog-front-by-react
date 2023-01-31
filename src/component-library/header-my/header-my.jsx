import React, {Component, useState} from "react";
import {Col, Menu, Row, Switch} from "antd";
import { useNavigate } from "react-router-dom";

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

    let navigate = useNavigate();

    const handleClick = e => {
        prop.setPath(e.key)
        navigate(e.key)
    }

    return (
        <Col xs={24} span={20}>
            <Menu theme={prop.theme} selectedKeys={[prop.path]} onClick={handleClick} mode="horizontal" style={{backgroundColor:"rgb(240 242 245 / 0%)"}}>
                {
                    navList.map((nav, index) => (
                        <Menu.Item key={nav.path} selected={true}>
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
    let navigate = useNavigate();

    const [path, setPath] = useState("/index");
    const {theme, setTheme} = props


    const handleClickLogo = () => {
        setPath("/blog")
        navigate("/blog")
    }


    return (
        <div className={"myHeader"}>
            <Row gutter={[24, 16]}>
                <Col xs={0} md={{span:3}}>
                    <a onClick={handleClickLogo}>
                    {theme === "dark"?(
                        <img src={logoDark} alt={"logo"}/>
                    ):(
                        <img src={logoLight} alt={"logo"}/>
                    )}
                    </a>
                </Col>

                <Col md={{span:20}} xs={{span:20}}>
                    <NavTop theme={theme} path={path} setPath={setPath}/>
                </Col>

                <Col md={{span:1}} xs={{span:3}}>
                    <SwitchTheme setTheme={setTheme}/>
                </Col>
            </Row>
        </div>
    )
}