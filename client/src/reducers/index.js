import { combineReducers } from 'redux';
import todoListObj from './todos';
import todoDetail from './querytodos';
import visible from './showModal';

const todoApp = combineReducers({
    todoListObj,
    todoDetail,
    visible
});

export default todoApp;