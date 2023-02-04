import React, { useState} from "react";
import {Layout} from 'antd';
import "./app.css"

import HeaderMy from "../../component-library/header-my/header-my";
import Cv from "../cv/cv";

// import Blog from "../blog/blog";
// import PostDetail from "../post-detail/post-detail";
// import Book from "../book/book";
// import Diary from "../diary/diary";
// import Project from "../project/project";
// import {Route, Routes} from "react-router-dom";
// import BookDetail from "../book-detail/book-detail";
import FooterMy from "../../component-library/footer-my/footer";
// import ProjectDetail from "../cv-number/project-detail/project-detail";



const {Header, Footer, Content} = Layout;


function App() {

    return (
        <>
        
            <Layout>
                <Header>
                    <HeaderMy/>
                </Header>


                <Content>
                    <Cv />
                </Content>



                {/* The cv interface does not display footer */}
                <Footer>
                    {/* <FooterMy /> */}
                </Footer>
            </Layout>
        </>
    )
}


export default App;