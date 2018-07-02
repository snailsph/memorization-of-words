import {GET_TODO_LIST} from '../actions/ActionTypes';


const todos = (state={todos:[]},action) => {
    switch (action.type) {
        // case ADD_TODO: 
        //     return  {
        //         todos: [action.todo,...state.todos],
        //         pageCount: (state.pageCount ? state.pageCount: 1),
        //         page: (state.page ? state.page: 1)
        //     }
        case GET_TODO_LIST: 
            return {
                todos: action.todos,
                pageCount: action.pageCount,
                page: action.page
            }
        default: 
            return state;
    }
}

export default todos;