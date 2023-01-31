import http from "../http";


/**
 * 获取日记
 */
function getDiary(password){
    return new Promise((resolve, reject) => {
        http("get",'/diary/getDiary', {diaryPassword: password}).then(res => {
            resolve (res);
        },error => {
            console.log("网络异常~",error);
            reject(error)
        })
    })
}

export {
    getDiary,
}