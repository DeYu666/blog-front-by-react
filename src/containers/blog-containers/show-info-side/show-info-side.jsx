import React, {useEffect, useState} from "react";
import {AliwangwangFilled} from "@ant-design/icons";

import "./show-info-side.css"

import Switch from "../../../component-library/switch-side/switch";
import InfoUser from "../../../component-library/info-user/info-user";
import LinkUser from "../../../component-library/link-user/link-user";
import TagsUser from "../../../component-library/tags-user/tags-user";
import LogsUser from "../../../component-library/logs-user/logs-user";
import LinkFriends from "../../../component-library/link-friends/link-friends";
// import {getTagsList} from "../../../api/blog";


export default function ShowInfoSide(prop) {
    const [isFirst, setIsFirst] = useState(true)
    const [userInfo, setUserInfo] = useState(exampleUserInfo)
    const [links, setLinks] = useState(exampleLinks)
    const [tags, setTags] = useState(exampleTags)
    const [logs, setLogs] = useState(exampleLogs)
    const [friends, setFriends] = useState(exampleFriends)

    const readTagsData = () => {
        // getTagsList().then(res=>{
        //     console.log(res)
        //     setTags(res.data)
        // }).then(error=>{
        //     console.log(error)
        // })
    }

    useEffect(()=>{
        readTagsData()
    },[])

    return (
        <>
            <div>
                <Switch handleSwitch={setIsFirst}/>
            </div>
            <InfoUser nickname={userInfo.nickname} description={userInfo.description} theme={prop.theme}/>
            <div className={"sider"}>
                {isFirst ? (
                    <>
                        <LinkUser links={links} theme={prop.theme}/>
                        <TagsUser tags={tags} theme={prop.theme}/>
                        {/*<NavsUser navs={navs} />*/}
                        <LogsUser logs={logs} theme={prop.theme}/>
                    </>
                ) : (
                    <LinkFriends friends={friends} theme={prop.theme}/>
                )}
            </div>
        </>
    )

}


const exampleUserInfo = {
    nickname: "Asa",
    description: "独属于我自己的个人小站",
}

const exampleLinks = [
    {
        avatar: <AliwangwangFilled/>,
        name: "新浪微博",
        url: "https://weibo.com/u/6255813599"
    }
]

const exampleTags = [
    {
        id: '1',
        name: "git"
    },
    {
        id: '2',
        name: "markdown"
    },
]

const exampleNavs = []

const exampleLogs = [
    "网站升级成功1.0",
    "网站升级成功2.0",
]

const exampleFriends = [
    {
        url: "https://panda.panda-studio.cn",
        name: "Panda",
        description: "前端博客无敌好看",
        url_logo: "https://dsm.panda-studio.cn:8282/aliyun-wordpress/uploads/sites/7/2018/01/favicon-150x150.png",
    }
]