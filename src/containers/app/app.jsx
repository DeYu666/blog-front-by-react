import React, {Component, useState} from "react";
import {Layout} from 'antd';

import HeaderMy from "../../component-library/header-my/header-my";
import "./app.less"
import Cv from "../cv/cv";
import Blog from "../blog/blog";
import PostDetail from "../post-detail/post-detail";
import Book from "../book/book";
import Diary from "../diary/diary";
import Project from "../project/project";
import {Route, Routes} from "react-router-dom";
import BookDetail from "../book-detail/book-detail";
import FooterMy from "../../component-library/footer-my/footer";
import ProjectDetail from "../cv-number/project-detail/project-detail";



const {Header, Footer, Content} = Layout;


function App() {

    const [theme, setTheme] = useState("dark")

    const switchTheme = () => {
        if (theme === "light") {
            setTheme("dark")
        } else {
            setTheme("light")
        }
    }

    return (
        <>
            <Layout className={
                theme === 'light' ? "layout-light" : "layout-dark"
            }>
                <Header className={
                    theme === 'light' ? "header-light" : "header-dark"
                }>
                    <HeaderMy theme={theme} setTheme={switchTheme}/>
                </Header>


                <Content>
                    <Routes>
                        <Route path={"/index"} element={<Cv theme={"dark"} />} />
                        <Route path={"/blog"} element={<Blog theme={theme} />} />
                        <Route path={"/postDetail"} element={<PostDetail theme={theme} />} />
                        <Route path={"/book"} element={<Book theme={theme} />} />
                        <Route path={"/bookDetail"} element={<BookDetail theme={theme} />} />
                        <Route path={"/project"} element={<Project theme={theme} />} />
                        <Route path={"/diary"} element={<Diary theme={theme} />} />
                        <Route path={"/projectDetail"} element={<ProjectDetail theme={theme} />} />
                        <Route path={"/"} element={<Cv theme={"dark"} />} />
                    </Routes>
                </Content>



                <Footer className={
                    theme === 'light' ? "footer-light" : "footer-dark"
                }>
                    <FooterMy />
                </Footer>
            </Layout>
        </>
    )
}


export default App;