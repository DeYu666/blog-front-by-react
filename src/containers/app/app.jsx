import React, { useState} from "react";
import {Layout} from 'antd';
import "./app.css"

import HeaderMy from "../../component-library/header-my/header-my";
import Cv from "../cv/cv";

import Blog from "../blog/blog";
import PostDetail from "../post-detail/post-detail";

import Book from "../book/book";
import BookDetail from "../book-detail/book-detail";

import Diary from "../diary/diary";
// import Project from "../project/project";
// import {Route, Routes} from "react-router-dom";
import FooterMy from "../../component-library/footer-my/footer";
import ProjectDetail from "../project-detail/project-detail";


import {Route, Routes, useLocation} from "react-router-dom";




const {Header, Footer, Content} = Layout;


function App() {
    let location = useLocation()

    console.log(location.pathname)

    return (
        <>
        
            <Layout>
                <Header>
                    <HeaderMy/>
                </Header>


                <Content>
                    <Routes>
                        <Route path={"/index"} element={<Cv/>} />
                        <Route path={"/blog"} element={<Blog/>} />
                        <Route path={"/postDetail/:postId"} element={<PostDetail/>} />
                        <Route path={"/book"} element={<Book/>} />
                        <Route path={"/bookDetail/:bookId"} element={<BookDetail/>} />
                        <Route path={"/diary"} element={<Diary/>} />
                        <Route path={"/projectDetail/:projectId"} element={<ProjectDetail/>} />
                        <Route path={"/"} element={<Cv/>} />
                    </Routes>
                </Content>



                {/* The cv interface does not display footer */}

                {location.pathname != '/index' && location.pathname != '/' ?(
                    <Footer>
                        <FooterMy />
                    </Footer>
                ):(
                    <></>
                )}

            </Layout>
        </>
    )
}


export default App;