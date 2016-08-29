import React from 'react'
import {Table, Modal, Row, Col, Button, Icon, Alert} from 'antd'
import List from './list'
import Detail from './detail'
import model from './model'
import config from 'common/configuration'
import {jsonCopy} from 'common/utils'
import cloneDeep from 'lodash/cloneDeep';
import './style.css'

const c = React.createClass({
    getInitialState(){
        return {
            view:'list',
            listState:{},
            entity:{}
        }
    },

    handleViewDetail(record){
        this.setState({view:'detail',entity:record})
    },
    backToList(){
        this.setState({view:'list'})
    },
    grabListState(state){
        this.setState({listState:state})
    },

    /*计算column里定义的width总和，没有定义width的列宽按100(px)计算*/
    getColWidth(model){
        let w = 0;
        model.columns.map(item=> {
            w = item.width ? w + item.width : w + 100;
        });
        return w;
    },

    render(){
        //重新复制一个model对象，使修改不会影响原model对象，避免每次组件渲染时给原model对象累积赋值
        const m = cloneDeep(model);
        //定义列表中的操作列具体方法
        m.columns.push({
            title: '操作',
            key: 'action',
            fixed: 'right',
            width: 100,
            render:(text,record)=>{
                return <span><a onClick={()=>{this.handleViewDetail(record)}}>明细</a></span>
            }
        });

        /*设置列表组件的参数*/
        const listSetting = {
            //标题
            title: '业务报备管理',
            //帮助提示的标题
            helperTitle: '业务报备使用帮助',
            //帮助提示的具体内容
            helperDesc: <div><p>本功能主要提供本年度业务备案查询</p></div>,
            //列表可滚动区间的宽度，一般使用getcolwidth计算即可
            scrollx: this.getColWidth(model),
            //接收的json数据中用来充当key的字段名
            keyCol: 'id',
            //默认每页显示数量
            pageSize: 2,
            //列表需使用的columns定义
            columns: m.columns,
            //记录list组件被切换时状态值的方法
            grabState:this.grabListState,
            //list组件重新挂载时恢复状态用的历史状态数据
            stateShot:this.state.listState,
            //数据来源api
            apiUrl: config.HOST + config.URI_API_PROJECT + '/ywbb'
        };

        /*设置明细信息组件的参数*/
        const detailSetting = {
            //设置数据源
            data:this.state.entity,
            //设置标题
            title:'业务报备详细信息',
            //设置返回调用的方法
            onBack:this.backToList
        };

        /*通过控制state.view的值，实现页面上列表/详细信息等组件的切换*/
        const view = {
            list : <List {...listSetting}/>,
            detail: <Detail {...detailSetting}/>
        };

        return <div className="ywbbgl">
            <div className="wrap">
                {view[this.state.view]}
            </div>
        </div>
    }
});

module.exports = c;