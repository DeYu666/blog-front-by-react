import React, {useState} from "react";
import {Breadcrumb, Table, Image} from 'antd';
import {HomeOutlined, CaretRightOutlined, EyeFilled} from '@ant-design/icons';
import Player from 'griffith'
import "./index.less"


const columns = [
    {
        title: '文件名',
        dataIndex: 'name',
        sorter: {
            compare: (a, b) => a.name - b.name,
            multiple: 3,
        },
        width: "70%"
    },
    {
        title: '大小',
        dataIndex: 'size',
        sorter: {
            compare: (a, b) => a.size - b.size,
            multiple: 2,
        },
        width: "10%"
    },
    {
        title: '修改日期',
        dataIndex: 'last_modify_time',
        sorter: {
            compare: (a, b) => a.date - b.date,
            multiple: 1,
        },
        width: "12%"
    },

    {
        title: '',
        dataIndex: 'operator',
        render: (text, event) => <a onClick={handleClick.bind(this, event)}>{text}</a>,
    },
]


function handleClick (e) {

    // const type = e.name.match(/^(.*)(\.)(.{1,8})$/)[3]
    // if(type === "mp4"){
    //     this.setState({sources:{
    //             hd: {
    //                 play_url: e.download_url,
    //             },
    //             sd: {
    //                 play_url: e.download_url,
    //             },
    //         }})
    // }
    // else if (type === "png" || type === "jpg" || type === "jpeg" || type === "gif"){
    //     this.setState({
    //         img_src: e.download_url
    //     })
    // }
}

export default function ContentNetDisk(prop) {

    const [path, setPath] = useState([])
    const [data, setData] = useState(exampleData)
    const [imgSrc, setImgSrc] = useState("")
    const [sources, setSources] = useState("")

    // 点击面包屑触发的操作
    function ClickBreadCrumb(path, index) {
        if (index === undefined) {
            setSources("")
        } else if (path.length - 1 > index) {
            let tem = "/"
            for (let i = 0; i <= index; i++) {
                tem += path[i]
            }
            setSources("")
        }
    }

    // 点击某一行触发的操作
    function handleClickTD(event, record) {
        // if(event.target.tagName === "TD"){
        //     if(record.is_folder){
        //         this.props.getOneIndexList(record.path)
        //         this.setState({sources:""})
        //     }else{
        //         const aLink = document.createElement('a')
        //         aLink.download = record.name
        //         aLink.href = record.download_url
        //         aLink.dispatchEvent(new MouseEvent('click', {}))
        //     }
        // }
    }


    function hiddenImage() {
        setImgSrc("")
    }


    function onChange  (pagination, filters, sorter, extra) {
        console.log('params', pagination, filters, sorter, extra)
    }


    return (
        <div className="article_wrapper post clearfix">
            <div className="meta" style={{"textAlign": "left"}}>
                <Breadcrumb>
                    <Breadcrumb.Item onClick={ClickBreadCrumb.bind(this, "/", undefined)}>
                        <HomeOutlined/> root
                    </Breadcrumb.Item>
                    {path.length !== 0 ? path.map((d, index) => (
                        <Breadcrumb.Item key={index} onClick={ClickBreadCrumb.bind(this, path, index)}>
                            <span>{d}</span>
                        </Breadcrumb.Item>
                    )) : null}
                </Breadcrumb>
            </div>


            <div className="content-body clearfix">
                <Table onRow={record => {
                    return {
                        onClick: event => {
                            handleClickTD(event, record);
                        }, // 点击行
                    };
                }} dataSource={data} columns={columns} onChange={onChange} theme={prop.theme}/>
            </div>

            {sources !== "" ? (
                <>
                    <Player sources={sources}/>
                </>) : null
            }

            {imgSrc !== "" ? (
                <div className="zhezhao" id='zhezhao'>
                    <div className="tankuang">
                        <div id="header">
                                <span>
                                    <img src={imgSrc} alt={"加载图片失败"}/></span>
                            <div id="header-right" onClick={hiddenImage}>x</div>
                        </div>
                    </div>
                </div>
            ) : null}
            <br/>
            <br/>
        </div>
    )
}


const exampleData = [
    {
        key: '1',
        name: 'John Brown',
        size: 32,
        date: '2021年01月13日',
    },
    {
        key: '2',
        name: 'Jim Green',
        size: 42,
        date: '2021年01月13日',
    },
    {
        key: '3',
        name: 'Joe Black',
        size: 32,
        date: '2021年01月13日',
    },
    {
        key: '4',
        name: 'Disabled User',
        size: 99,
        date: '2021年01月13日',
        operator: <HomeOutlined/>
    },
]

const examplePhotoImg = [{
    src: "https://minjieliu.github.io/react-photo-view/static/media/1.f54ca634.jpg",
    name: "",
}, {
    src: "https://minjieliu.github.io/react-photo-view/static/media/2.d756724a.jpg",
    name: "",
}, {
    src: "https://minjieliu.github.io/react-photo-view/static/media/1.f54ca634.jpg",
    name: "",
}, {
    src: "https://minjieliu.github.io/react-photo-view/static/media/1.f54ca634.jpg",
    name: "",
}, {
    dir: "123"
}, {
    file: "456"
}, {
    src: "http://116.62.24.161:8181/gallery/test1.png",
    name: "",
}
]