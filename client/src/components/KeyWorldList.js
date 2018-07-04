import React,{Component}from 'react';
import {getKeyWorldListAction} from '../actions'
import {connect} from 'react-redux';

import { Table} from 'antd';
import Error from '../components/error';

class  KeyWorldList extends Component {
    constructor(props){
        super(props);
        this.state = {
            todos:[]
        }
    }
    componentDidMount(){
        this.props.getTodoList({type:'all'}).then(res => {
            this.setState({todos:res.keyWorldList})
        })
    }
    render() {
        const columns = [{
            title: '中文名称',
            dataIndex: 'chinaName',
            key: 'chinaName',
            render: text => <a href="javascript:;">{text}</a>,
          }, {
            title: '英文名称',
            dataIndex: 'englishName',
            key: 'englishName',
            render: text => <a href="javascript:;">{text}</a>,

          }, {
            title: '备注',
            dataIndex: 'remark',
            key: 'remark',
            render: text => <a href="javascript:;">{text}</a>,
          },
          {
            title: '简称',
            dataIndex: 'simpleName',
            key: 'simpleName',
            render: text => <a href="javascript:;">{text}</a>,
          },
          {
            title: '数据库名称',
            dataIndex: 'sqlName',
            key: 'sqlName',
            render: text => <a href="javascript:;">{text}</a>,
          }];
          //配置分页
          let pagination = {
            showSizeChanger: true,
          };
          let textObj = [
              "风陵渡口初相遇，",
              "一见杨过误终身。",
              "只恨我生君已老，",
              "断肠崖前忆故人。"
          ]
        return (
            <div className="table-list">
            <Error title="活死人墓" textObj={textObj}/>
                <Table columns={columns} rowKey="_id" dataSource={this.state.todos} pagination={pagination}/>
            </div>
        )
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
      getTodoList:(params) =>{
        return dispatch(getKeyWorldListAction(params))
      }
    }
}
export default connect(null,mapDispatchToProps)(KeyWorldList);
