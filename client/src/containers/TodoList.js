import {connect} from 'react-redux';
import React ,{Component} from 'react';
import { Pagination } from 'antd';
import {getKeyWorldListAction,getKeyWorldByNameAction} from '../actions'
import TodoItem from './todoItem';
import {Link} from 'react-router-dom';


class TodoList extends Component {
    constructor(props){
        super(props);
        this.paginationChange = this.paginationChange.bind(this);
        this.onDoubleClickHandle = this.onDoubleClickHandle.bind(this);
    }
    paginationChange(page, pageSize){
        this.props.getTodoList({
            pageSize:pageSize,
            pageNum:page
        })
    }
    componentDidMount() {
        this.props.getTodoList();
    }
    onDoubleClickHandle(){
        this.props.queryAddTodo();
    }
    shouldComponentUpdate(nextProps){
        if(JSON.stringify(this.props.todos) === JSON.stringify(nextProps.todos) && this.props.pageCount === nextProps.pageCount){
            return false;
        }
        return true;
    }
    render(){
        let footer = null;
        if(this.props.todos && this.props.todos.length > 0){
            footer = <footer className="footer">
            <Pagination defaultCurrent={1} total={this.props.pageCount} onChange={this.paginationChange}/><button className="ant-pagination-item all-todos"><Link to="/all">全部</Link></button></footer>;
        }
        return (
            <section className="main">
                  <ul className="todo-list" >
                  {
                      this.props.todos.map((todo,index) => {
                        return ( 
                            <TodoItem todo={todo} key={todo._id}/>
                        )
                      })
                  }
                  </ul>
                  {footer}
            </section>
        )
    }
}


const mapStateToProps = (state) =>({
    todos: state.todoListObj.todos,
    pageCount:state.todoListObj.pageCount
})
const mapDispatchToProps = (dispatch) => {
    return {
      getTodoList:(params) =>{
        dispatch(getKeyWorldListAction(params))
      },
      queryAddTodo: (todo) => {
        dispatch(getKeyWorldByNameAction(todo));
    },
    }
  }
export default connect(mapStateToProps,mapDispatchToProps)(TodoList);

