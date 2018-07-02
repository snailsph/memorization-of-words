import React, { Component } from 'react';
import './App.css';
import Mao from './components/mao';
import Mao1 from './components/mao1';
import AddTodo from './containers/AddTodo';
import TodoList from './containers/TodoList';

class App extends Component {
  constructor(props){
    super(props);
    this.drawCanvas = this.drawCanvas.bind(this);
    this.onWindowResize = this.onWindowResize.bind(this);
  }
  //背景效果
  componentDidMount() {
    this.drawCanvas();
    window.addEventListener('resize', this.onWindowResize);
    // this.props.getTodoList();//初始化数据
  }
  //画背景
  drawCanvas(){
    let q = document.querySelector('#q');
    let s = document.body;
    let width = q.width = s.offsetWidth;
    let height = q.height = s.offsetHeight;
    let letters = Array(256).join(1).split('');
    let arr = [0,1];
    let draw = function () {
      q.getContext('2d').fillStyle='rgba(0,0,0,.05)';
      q.getContext('2d').fillRect(0,0,width,height)
      q.getContext('2d').fillStyle='#fff';
      letters.forEach((y_pos, index) => {
        let text = arr[Math.floor(Math.random()*arr.length)];
        let x_pos = index * 10;
        q.getContext('2d').fillText(text, x_pos, y_pos);
        letters[index] = (y_pos > 758 + Math.random() * 1e4) ? 0 : y_pos + 10;
      });
    };
    this.time = setInterval(draw, 34);
  }
  //监听窗口变化
  onWindowResize(){
    if(this.time){
      clearInterval(this.time);
      this.drawCanvas();
    }
  }
  render() {
    let arr = [0,1];
    let text = arr[Math.floor(Math.random()*arr.length)];
    let mao = text === 0 ? <Mao/> : <Mao1 />;
    return (
      <div className="main-container">
      <canvas id="q" className="bg-canvas"></canvas>
        <div className="root">
          {mao}
          <div className="todoapp">
            <AddTodo />
            <TodoList/>
          </div>
        </div>
      </div>
    );
  }

  componentWillUnmount() {
      window.removeEventListener('resize', this.onWindowResize);
      clearInterval(this.time);
  }
 
}

export default App;
