import http from "../http";


/**
 * 获取书籍
 */
function getBooksListByCateId(categoryId, pageNum){
    return new Promise((resolve, reject) => {
        http("get",'/book/getBooksListByCateId',{categoryId:categoryId, pageNum:pageNum}).then(res => {
            resolve (res);
        },error => {
            console.log("网络异常~",error);
            reject(error)
        })
    })
}









/**
 * 获取书籍内容
 */
function getBookContent(bookId){
    return new Promise((resolve, reject) => {
        http("get",'/book/getBookContentByBookId/'+bookId).then(res => {
            resolve (res);
        },error => {
            console.log("网络异常~",error);
            reject(error)
        })
    })
}


export {
    getBooksListByCateId,
    getBookContent,
}