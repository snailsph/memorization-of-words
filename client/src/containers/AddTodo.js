import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getKeyWorldByNameAction,getKeyWorldListAction} from '../actions';
import ShowModal from './ShowModal';


class AddTodo extends Component {
    constructor(props,context){
        super(props,context);
        this.onInputChange = this.onInputChange.bind(this);
        this.handleNewTodoKeyDown = this.handleNewTodoKeyDown.bind(this);
        this.fuzzySearchClick = this.fuzzySearchClick.bind(this);
        this.state = {
            value:'',
        };
    }
    onInputChange(event) {
        this.setState({ value: event.target.value});
    }
    handleNewTodoKeyDown(ev){
        ev.preventDefault();
        if (ev.keyCode+'' === "13") {
            let inputValue = this.state.value;
            if(inputValue.trim()){
                this.props.queryAddTodo({chinaName:inputValue});
                this.setState({value:''});
            }
        }
    }
    fuzzySearchClick(){
        this.props.getTodoList({
            chinaName: this.state.value
        })
    }
    // shouldComponentUpdate(nextProps,nextState){
    //     if(nextState.value === this.state.value){
    //         return false;
    //     }
    //     return true;
    // }
    render(){
        let modal = null;
        if(this.props.todoDetail.chinaName){
            modal = <ShowModal />;
        }      
        return (
            <header className="header">
                <input 
                className="new-todo" 
                placeholder="What are you going to do?" 
                onChange={this.onInputChange} 
                value={this.state.value}
                onKeyUp={this.handleNewTodoKeyDown}
                autoFocus={true}
                />
                <button className="search" onClick={this.fuzzySearchClick}>模糊搜索</button>
                {modal}
            </header>
        )
    }
}

const mapDisptchToProps = (dispatch) => {
    return {
        queryAddTodo: (todo) => {
            dispatch(getKeyWorldByNameAction(todo));
        },
        getTodoList:(params) =>{
            dispatch(getKeyWorldListAction(params))
        }
    }
}

const mapStateToProps = (state) => {
    return {
        todoDetail: state.todoDetail,
    }
}
export default connect(mapStateToProps,mapDisptchToProps)(AddTodo);