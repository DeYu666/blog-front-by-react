import http from "../http"



/**
 * 获取简历经历
 */
function getCvExperience(){
    return new Promise((resolve, reject) => {
        http("get",'/cv/getCvExperience').then(res => {
            resolve (res);
        },error => {
            console.log("网络异常~",error);
            reject(error)
        })
    })
}




/**
 * 获取简历技能
 */
function getCvSkill(){
    return new Promise((resolve, reject) => {
        http("get",'/cv/getCvSkill').then(res => {
            resolve (res);
        },error => {
            console.log("网络异常~",error);
            reject(error)
        })
    })
}






/**
 * 获取简历项目
 */
function getCvProject(){
    return new Promise((resolve, reject) => {
        http("get",'/cv/getCvProject').then(res => {
            resolve (res);
        },error => {
            console.log("网络异常~",error);
            reject(error)
        })
    })
}


function getCvProjectById(id) {
    return new Promise((resolve, reject) => {
        http("get",'/cv/getCvProjectById/'+id).then(res => {
            resolve (res);
        },error => {
            console.log("网络异常~",error);
            reject(error)
        })
    })
}




export {
    getCvExperience,
    getCvSkill,

    getCvProject,
    getCvProjectById,
}