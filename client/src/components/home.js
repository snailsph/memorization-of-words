import React,{Component}from 'react';
import Mao from './mao';
import Mao1 from './mao1';
import AddTodo from '../containers/AddTodo';
import TodoList from '../containers/TodoList';

class Home extends Component{
    render(){
        let arr = [0,1];
        let text = arr[Math.floor(Math.random()*arr.length)];
        let mao = text === 0 ? <Mao/> : <Mao1 />;
        return (
            <div className="root">
              {mao}
              <div className="todoapp">
                <AddTodo />
                <TodoList/>
              </div>
            </div>
        );
    }
}
export default Home;
