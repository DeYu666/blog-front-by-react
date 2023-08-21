import React, {useEffect, useState} from "react";
import PropTypes from "prop-types"
import {Button, Input} from 'antd';

import "./top-post-detail.css"

export default function TopPostDetail(props) {
    const {category, title, isPwd} = props
    const [pwd, setPWD] = useState("")

    const handleOk = () => {
        console.log("pwd")
        props.getPasswd(pwd)
    }

    return (
        <div className="detail-page" style={{backgroundColor: "#666666"}}>
            <div className="container flex-row-middle">
                <div className="detail-content flex-column-middle">
                    <div className="category">{category}</div>
                    <h1>{title}</h1>
                    {isPwd === true ? (
                        <>
                            <Input  className={"pwd"} defaultValue={pwd} placeholder="输入解密密码" onChange={(data)=>(setPWD(data.target.value))}/>
                            <Button onClick={handleOk}> 完成 </Button>
                        </>
                    ) : (<></>)}
                </div>
            </div>
        </div>
    )
}