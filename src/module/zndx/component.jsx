import React from 'react'
import {Table, Modal, Row, Col, Button, Icon, Alert,Switch} from 'antd'
import Toolbar from 'component/toolbar'
import List from './list'
import model from './model'
import Search from './searchForm'
import config from 'common/configuration'
import {jsonCopy} from 'common/utils'
import cloneDeep from 'lodash/cloneDeep';
import './style.css'

let ButtonGroup = Button.Group;


const c = React.createClass({
    getInitialState(){
        return {
            listState: {},
            entity: {}
        }
    },

    refreshList(){
        this.refs.list.refreshCurrent();
    },

    //抓取当前list分页状态
    grabListState(state){
        this.setState({listState: state})
    },
    helperToggle(){},
    refresh(){},


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
        const actColWidth = 100;

        //定义列表中的操作列具体方法
        m.columns.push({
            title: '锁定状态',
            key: 'yxbz',
            dataIndex: 'yxbz',
            width: 100,
            render(text, record){
                return <span style={{fontSize:'16px',color:'#2db7f5'}}><Icon type="lock"/></span>
            }
        });


        /*设置列表组件的参数 */
        const listSetting = {
            //列表可滚动区间的宽度，一般使用getcolwidth计算即可
            scrollx: this.getColWidth(model) - actColWidth,
            //接收的json数据中用来充当key的字段名
            keyCol: 'id',
            //默认每页显示数量
            pageSize: 10,
            //列表需使用的columns定义
            columns: m.columns,
            //记录list组件被切换时状态值的方法
            grabState: this.grabListState,
            //list组件重新挂载时恢复状态用的历史状态数据
            stateShot: this.state.listState,
            //数据来源api
            apiUrl: config.HOST + config.URI_API_PROJECT + '/jgzzsd',
            //初始搜索条件
            defaultWhere: {},
            refreshList:this.refreshList
        };


        return <div className="zndx">
            <div className="wrap">
                <Toolbar>
                    <ButtonGroup>
                        <Button type="primary" onClick={this.new}><Icon type="message" />新信息</Button>
                    </ButtonGroup>
                    <ButtonGroup>
                        <Button  onClick={this.helperToggle}><Icon type="question"/></Button>
                        <Button  onClick={this.refresh}><Icon type="reload"/></Button>
                    </ButtonGroup>

                </Toolbar>


                <Alert message="资质管理使用帮助"
                       description={<div><p>本功能分为有效锁定记录和已解锁记录两部分。有效锁定记录显示当前正被锁定的事务所及其原因，解锁记录显示已进行了解锁操作的事务所。</p>
                       <p>在有效锁定记录页面可以对事务所进行解锁操作。在解锁记录页面可以对事务所重新锁定。</p></div>}
                       type="info"
                       closable
                       onClose={this.helperClose}/>

                    <List {...listSetting} ref="list"/>

            </div>
        </div>
    }
});

module.exports = c;