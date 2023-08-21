import http from "../http";


/**
 * 获取书籍
 */
function getBooksListByCateId(categoryId, offset, limit){
    return new Promise((resolve, reject) => {
        http("get",'/books_list',{categoryId:categoryId, offset:offset, limit:limit}).then(res => {
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
        http("get",'/book_content/'+bookId).then(res => {
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