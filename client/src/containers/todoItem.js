import React ,{Component} from 'react';
import {getKeyWorldByNameAction} from '../actions'
import {connect} from 'react-redux';

class TodoItem extends Component {
    constructor(props){
        super(props);
        this.onDoubleClickHandle = this.onDoubleClickHandle.bind(this);
    }
    onDoubleClickHandle(){
        this.props.queryAddTodo({chinaName:this.props.todo.chinaName});
    }
    shouldComponentUpdate(nextProps){
        if(JSON.stringify(this.props.todo) === JSON.stringify(nextProps.todo)){
            return false;
        }
        return true;
    }
    render(){
        return ( 
            <li key={this.props.todo._id} onDoubleClick={this.onDoubleClickHandle}>
                <div className="view">
                    <label >
                    {this.props.todo.chinaName}
                    </label>
                    {/* <button className="destroy" ></button> */}
                </div>
            </li>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
      queryAddTodo: (todo) => {
        dispatch(getKeyWorldByNameAction(todo));
    },
    }
  }
export default connect(null,mapDispatchToProps)(TodoItem);

