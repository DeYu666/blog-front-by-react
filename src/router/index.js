import { createBrowserRouter, Navigate } from 'react-router-dom'
import Cv from "@/containers/cv/cv"

import Blog from "@/containers/blog/blog";
import PostDetail from "@/containers/post-detail/post-detail";
import Book from "@/containers/book/book";
import BookDetail from "@/containers/book-detail/book-detail";
import Diary from "@/containers/diary/diary";
import ProjectDetail from "@/containers/project-detail/project-detail";


// 引入Entry框架页面
import App from '@/containers/app/app'

// 全局路由
export const globalRouters = createBrowserRouter([
    {
        // 未匹配"/login"，全部进入到entry路由
        path: '/',
        element: (
                <App />
        ),
        // 定义entry二级路由
        children: [
            {
                 // 精确匹配"/home"，跳转Home页面
                path: '/home',
                element: <Cv />,
            },
            {
                 // 精确匹配"/blog"，跳转blog页面
                path: '/blog',
                element: <Blog />,
            },
            {
                 // 精确匹配"/postDetail"，跳转PostDetail页面
                path: '/postDetail/:postId',
                element: <PostDetail />,
            },
            {
                 // 精确匹配"/book"，跳转Book页面
                path: '/book',
                element: <Book />,
            },
            {
                 // 精确匹配"/bookDetail"，跳转BookDetail页面
                path: '/bookDetail/:bookId',
                element: <BookDetail />,
            },
            {
                 // 精确匹配"/diary"，跳转Diary页面
                path: '/diary',
                element: <Diary />,
            },
            {
                 // 精确匹配"/projectDetail"，跳转Account页面
                path: '/projectDetail/:projectId',
                element: <ProjectDetail />,
            },
            {
                // 如果URL没有"#路由"，跳转Home页面
                path: '/',
                element: <Navigate to="/home" />,
            },
            {
                // 未匹配，，跳转/页面
                path: '*',
                element: <Navigate to="/home" />,
            },
        ],
    },
])