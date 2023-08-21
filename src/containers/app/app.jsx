import React, { useState} from "react";
import {Layout} from 'antd';
import "./app.css"

import HeaderMy from "../../component-library/header-my/header-my";
import FooterMy from "../../component-library/footer-my/footer";
import {Outlet, useLocation} from "react-router-dom";
// 引入Redux
import { useSelector, useDispatch } from 'react-redux'
// 从主题换肤store分库引入setDark方法
import { setDark } from '@/store/slices/theme'


import { ConfigProvider, theme } from 'antd'

const {Header, Footer, Content} = Layout;
const { darkAlgorithm, defaultAlgorithm } = theme

function App() {
    let location = useLocation()

    // 获取redux派发钩子
    const dispatch = useDispatch()

    // 获取store中的主题配置
    const theme = useSelector((state) => state.theme)



    let antdTheme = {
        // 亮色/暗色配置
        algorithm: theme.dark ? darkAlgorithm : defaultAlgorithm,
    }




    // 切换主题
    const changeTheme = () => {
        let checked = !theme.dark
        dispatch(setDark(checked))
    }


    return (
        <ConfigProvider theme={antdTheme}>
        
            <Layout>
                <Header>
                    <HeaderMy theme={theme} setTheme={changeTheme} />
                </Header>

                <Content>
                    <Outlet/>
                </Content>

                {/* The cv interface does not display footer */}

                {location.pathname != '/home' && location.pathname != '/' ?(
                    <Footer>
                        <FooterMy />
                    </Footer>
                ):(
                    <></>
                )}

            </Layout>
        </ConfigProvider>
    )
}


export default App;