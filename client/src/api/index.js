import http from './public';
const baseUrl = '/api';

//关键字列表
export const getKeyWorldList = (params) =>{
    return http.fetchPost(`${baseUrl}/getKeyWorldList`,params);
}
//单个关键字详情
export const getKeyWorldByName = (params) => {
    return http.fetchPost(`${baseUrl}/getKeyWorldByName`,params);
}

export const  saveKeyWorld = (params) => {
    return http.fetchPost(`${baseUrl}/saveKeyWorld`,params);
}