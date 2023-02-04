import React, {Component} from "react";
import PropTypes from "prop-types"
import {WechatFilled} from "@ant-design/icons";
import { Modal } from 'antd';

import './link-user.css'
import TitleUser from "../title-user/title-user";

export default class LinkUser extends Component{

    static propTypes = {
        links:PropTypes.array.isRequired,
    }
    state={
        isModalVisible:false,
    }

    showModal = () => {
        this.setState({isModalVisible:true});
    }
    handleOk = () => {
        this.setState({isModalVisible:false});
    }

    render() {
        
        const {links, theme} = this.props

        return (
            <>
                <TitleUser title={"关注我"} theme={theme} />
                <ul className={theme === "dark"? ("user_link-dark user_link"):("user_link")}>
                    {
                        links.map((link, index) => (
                            <li key={index}>
                                <a href={link.url}> {link.avatar} {link.name}</a>
                            </li>
                        ))
                    }
                    <li key="99">
                        <a onClick={this.showModal}> <WechatFilled /> 微信公众号</a>
                    </li>
                </ul>
                <Modal title="公众号二维码" cancelText onOk={this.handleOk}  onCancel={this.handleOk} visible={this.state.isModalVisible}>
                    <img src={"http://image.asa-zhang.top/qrcode_for_gh.jpg"} style={{width:"100%"}}/>
                </Modal>
            </>

        )
    }
}