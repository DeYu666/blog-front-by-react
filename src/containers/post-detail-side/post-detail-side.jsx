import React, {useEffect, useState} from "react";
import {AliwangwangFilled} from "@ant-design/icons";
import Switch from "../../component-library/switch-side/switch";
import InfoUser from "../../component-library/info-user/info-user";
import LinkUser from "../../component-library/link-user/link-user";
import TagsUser from "../../component-library/tags-user/tags-user";
import LogsUser from "../../component-library/logs-user/logs-user";
import TocPost from "../../component-library/toc-post/toc-post";
// import NavsUser from "../../component-library/navs-user/navs-user";

import {getTagsList} from "../../api/blog";


export default function PostDetailSide(prop) {
    const [isFirst, setIsFirst] = useState(true)
    const [userInfo, setUserInfo] = useState(exampleUserInfo)
    const [links, setLinks] = useState(exampleLinks)
    const [tags, setTags] = useState(exampleTags)
    const [logs, setLogs] = useState(exampleLogs)
    // const [navs, setNavs] = useState(exampleNavs)
    const [toc, setToc] = useState(exampleToc)

    const readTagsData = () => {
        getTagsList().then(res=>{
            // console.log(res)
            setTags(res.data)
        }).then(error=>{
            console.log(error)
        })
    }

    useEffect(()=>{
        readTagsData()
    },[])


    useEffect(()=>{
        // console.log(prop.toc)
        setToc(prop.toc)
    },[prop.toc])

    return (
        <>
            <div>
                <Switch handleSwitch={setIsFirst}/>
            </div>
            <InfoUser nickname={userInfo.nickname} description={userInfo.description}/>
            <div className={"sider"} style={{height: '100%'}}>
                {isFirst ? (
                    <TocPost toc={toc}/>
                ) : (
                    <>
                        <LinkUser links={links}/>
                        <TagsUser tags={tags}/>
                        {/*<NavsUser navs={navs}/>*/}
                        <LogsUser logs={logs}/>
                    </>
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

const exampleNavs = [
    {
        id:'1',
        name:"区块链"
    },
    {
        id:'2',
        name:"Gradle"
    },
]

const exampleLogs = [
    "网站升级成功1.0",
    "网站升级成功2.0",
]

const exampleToc = [
    {
        name:"标题 1"
    },
    {
        name:"END"
    },
]

