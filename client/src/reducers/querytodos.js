import {QUERY_ADD_TODO} from '../actions/ActionTypes';

const queryTodo = (state = {},action) => {
    switch (action.type) {
        case QUERY_ADD_TODO: 
        return action.todo;
        default: 
            return state;
    }
}

export default queryTodo;