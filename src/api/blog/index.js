import http from "../http";


function getCategoryList(){
    return new Promise((resolve, reject) => {
        http("get",'blog/general_cate').then(res => {
            resolve (res);
        },error => {
            console.log("网络异常~",error);
            reject(error)
        })
    })
}


/*
    通过类别 id 检索文章列表， -1 为无分类标签，按时间排序
    categoryId: 分类ID
    pageNum: 分页数

    返回值：
        pagesNum : 总页数
        pagesContent： 当前页的文章列表
 */

function getPostListByPage(categoryId, offset, limit){
    return new Promise((resolve, reject) => {
        http("get",'blog/post',{categoryId:categoryId, offset:offset, limit:limit}).then(res => {
            resolve (res);
        },error => {
            console.log("网络异常~",error);
            reject(error)
        })
    })
}



function getDetailById(postId){
    return new Promise((resolve, reject) => {
        http("get",`/blog/post/${postId}`).then(res => {
            resolve (res);
        },error => {
            console.log("网络异常~",error);
            reject(error)
        })
    })
}




function getTagListById(tagId){
    return new Promise((resolve, reject) => {
        http("get",'/tagListById',{tagId:tagId}).then(res => {
            resolve (res);
        },error => {
            console.log("网络异常~",error);
            reject(error)
        })
    })
}


function getPostListsByTagID(id){
    return new Promise((resolve, reject) => {
        http("get",`blog/getPostListsByTagID/${id}`).then(res => {
            resolve (res);
        },error => {
            console.log("网络异常~",error);
            reject(error)
        })
    })
}


function getTagsList(){
    return new Promise((resolve, reject) => {
        http("get",'blog/getTags').then(res => {
            resolve (res);
        },error => {
            console.log("网络异常~",error);
            reject(error)
        })
    })
}


function getChickenSoup(){
    return new Promise((resolve, reject) => {
        http("get",'blog/chicken_soup').then(res => {
            resolve (res);
        },error => {
            console.log("网络异常~",error);
            reject(error)
        })
    })
}


export {
    getCategoryList,
    getPostListByPage,
    getTagsList,
    getDetailById,
    getChickenSoup,
}