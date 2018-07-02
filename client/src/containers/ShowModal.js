import React ,{Component}from 'react';
import { Modal,Input,message} from 'antd';
import {connect} from 'react-redux';
import {showModal,queryAddTodo,saveKeyWorldAction} from '../actions';
import {HIDE_MODAL_CONSTANT} from '../constants';


class ShowModal extends Component{
    constructor(props){
        super(props);
        this.hideModal = this.hideModal.bind(this);
        this.chinaNameChange = this.chinaNameChange.bind(this);
        this.englishNameChange = this.englishNameChange.bind(this);
        this.simpleNameChange = this.simpleNameChange.bind(this);
        this.remarkChange = this.remarkChange.bind(this);
        this.sqlNameChange = this.sqlNameChange.bind(this);
        this.saveData = this.saveData.bind(this);
        this.state = {
            chinaName: this.props.todoDetail.chinaName,
            englishName: this.props.todoDetail.englishName ? this.props.todoDetail.englishName : '',
            simpleName: this.props.todoDetail.simpleName ? this.props.todoDetail.simpleName : '',
            remark: this.props.todoDetail.remark ? this.props.todoDetail.remark : '',
            sqlName: this.props.todoDetail.sqlName ? this.props.todoDetail.sqlName : '',
            _id: this.props.todoDetail._id ? this.props.todoDetail._id : ''
        };
    }
    hideModal(){
        this.props.showModal(HIDE_MODAL_CONSTANT);
        this.props.queryAddTodo({});
    }
    chinaNameChange(events){
        events.preventDefault();
        this.setState({chinaName:events.target.value});
    }
    englishNameChange(events){
        events.preventDefault();
        this.setState({englishName:events.target.value});
    }
    simpleNameChange(events){
        events.preventDefault();
        this.setState({simpleName:events.target.value});
    }
    remarkChange(events){
        events.preventDefault();
        this.setState({remark:events.target.value});
    }
    sqlNameChange(events){
        events.preventDefault();
        this.setState({sqlName:events.target.value});
    }
    saveData(){
        this.props.addTodo(this.state,this.props.page).then(res => {
        },err => {
            message.error(err.message);
        });
    }
    shouldComponentUpdate(nextProps, nextState){
        if(nextProps.visible === this.props.visible && JSON.stringify(this.state) === JSON.stringify(nextState) ){
            return false;
        }else{
            return true;
        }
    }
    render() {
        return (
            <Modal
                title="Modal"
                visible={this.props.visible}
                okText="保存"
                onOk={this.saveData}
                onCancel={this.hideModal}
                cancelText="取消"
            >
                <Input placeholder="中文名称" 
                    defaultValue={this.state.chinaName} 
                    onChange={this.chinaNameChange}/>
                <Input placeholder="英文名称" 
                    defaultValue={this.state.englishName} 
                    onChange={this.englishNameChange}/>
                <Input placeholder="简称" 
                    defaultValue={this.state.simpleName} 
                    onChange={this.simpleNameChange}
                />
                <Input placeholder="备注" 
                    defaultValue={this.state.remark} 
                    onChange={this.remarkChange}
                />
                <Input placeholder="数据库字段" 
                    defaultValue={this.state.sqlName}
                    onChange={this.sqlNameChange}
                />
            </Modal>
        )
    }
}
const mapDisptchToProps = (dispatch) => {
    return {
        showModal: (visible) => {
            dispatch(showModal(visible));
        },
        addTodo: (todo,page) => {
            return dispatch(saveKeyWorldAction(todo,page));
        },
        queryAddTodo: (todo) => {
            dispatch(queryAddTodo(todo));
        }
    }
}
const mapStateToProps = (state) => {
    return {
        visible: state.visible,
        todoDetail: state.todoDetail,
        page:state.todoListObj.page
    }
}
export default connect(mapStateToProps,mapDisptchToProps)(ShowModal);