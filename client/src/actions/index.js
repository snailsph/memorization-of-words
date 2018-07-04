import {QUERY_ADD_TODO,GET_TODO_LIST,SHOW_MODAL} from './ActionTypes';
import { getKeyWorldList,getKeyWorldByName,saveKeyWorld} from '../api';
import {SHOW_MODAL_CONSTANT,HIDE_MODAL_CONSTANT} from '../constants';


//新增
// export const addTodo = (todo) => {
//     return {
//         type: ADD_TODO,
//         todo
//     }
// }
//enter 回车 查询数据库是否有数据，有数据就弹框展示，无数据就新增创建
export const queryAddTodo = (todo) => {
    return {
        type: QUERY_ADD_TODO,
        todo
    }
}
//state todos action
export const  getTodoList = (todos,pageCount,page) => {
    return {
        type:GET_TODO_LIST,
        todos:todos,
        pageCount,
        page
    }
}
//显示新增弹框
export const showModal = (visible) =>{
    return {
        type:SHOW_MODAL,
        visible:visible
    }
}

//异步获取list action
export const getKeyWorldListAction = (params)=>{
    return async (dispatch) => {
        let data = await getKeyWorldList(params);
        if(data.success){
            dispatch(getTodoList(data.keyWorldList,data.pageCount,data.page));
            return Promise.resolve(data);
        }else{
            return Promise.reject(data);
        }
        
    }
}

//根据name异步查询关键字
export const getKeyWorldByNameAction = ({chinaName}) => {
    return async (dispatch) => {
        let todo = {chinaName};
        let data = await getKeyWorldByName({chinaName});
        if(data.success){
            todo = data.keyWorld;
        }
        dispatch(queryAddTodo(todo));
        dispatch(showModal(SHOW_MODAL_CONSTANT));
    }
}

//异步action保存数据

export const saveKeyWorldAction =  (todo,page) => {
    return async (dispatch) => {
        let data = await saveKeyWorld(todo);
        if(data.success){
            dispatch(showModal(HIDE_MODAL_CONSTANT));
            dispatch(queryAddTodo({}));
            dispatch(getKeyWorldListAction({pageNum:page}));
            return Promise.resolve(data);
        }else{
            return Promise.reject(data);
        }
         
    }
}