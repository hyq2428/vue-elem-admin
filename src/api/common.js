import service from "@/utils/request";

export function GetCode(data) {
    return service.request({
        method: "post",
        url: "/getCode/",
        data
    })
}
export function ErrorHttp(data) {
    return service.request({
        method: "post",
        url: "/news/detail",
        data
    })
}
export function UploadFile(data) {
    return service.request({
        method: "post",
        url: "/upload",
        data
    })
}
// export function Register(data) {
//     return service.request({
//         method: "post",
//         url: "/register/",
//         data
//     })
// }

// export function Login(data = {}) {
//     return service.request({
//         method: "post",
//         url: "/login/",
//         data
//     })
// }