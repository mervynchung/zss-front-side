import React from 'react'
import {Table, Modal, Row, Col, Button, Icon, Alert,Switch} from 'antd'
import Toolbar from 'component/toolbar'
import List from './list'
import model from './model'
import Query from './queryForm'
import config from 'common/configuration'
import {jsonCopy} from 'common/utils'
import cloneDeep from 'lodash/cloneDeep';
import './style.css'

let ButtonGroup = Button.Group;


const c = React.createClass({
    getInitialState(){
        return {
            listState: {},
            entity: {},
            helper:false,
            query:false
        }
    },

    refreshList(){
        this.refs.list.refreshCurrent();
    },

    //抓取当前list分页状态
    grabListState(state){
        this.setState({listState: state})
    },
    helperToggle(){
        this.setState({helper:!this.state.helper})
    },
    helperClose(){
        this.setState({helper:false})
    },
    queryToggle(){
        this.setState({query:!this.state.query})
    },
    refresh(){},

    handleQuery(values){
        console.log(values)
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
        const actColWidth = 100;


        /*设置列表组件的参数 */
        const listSetting = {
            //列表可滚动区间的宽度，一般使用getcolwidth计算即可
            scrollx: this.getColWidth(model) - actColWidth,
            //列表需使用的columns定义
            columns: m.columns,
            //记录list组件被切换时状态值的方法
            grabState: this.grabListState,
            //list组件重新挂载时恢复状态用的历史状态数据
            stateShot: this.state.listState,
            refreshList:this.refreshList
        };


        return <div className="zndx">
            <div className="wrap">
                <Toolbar>
                    <Button type="primary" onClick={this.new}><Icon type="message" />新信息</Button>
                    <ButtonGroup>
                        <Button  onClick={this.helperToggle}><Icon type="question"/></Button>
                        <Button  onClick={this.refresh}><Icon type="reload"/></Button>
                    </ButtonGroup>
                    <Button onClick={this.queryToggle}><Icon type="search" />查询</Button>
                </Toolbar>

                {this.state.query && <Query onQuery={this.handleQuery}/>}


                {this.state.helper && <Alert message="站内短信使用帮助"
                       description={<div>
                           <p>本功能用以向站内用户群发或点对点发送短消息提醒</p>
                           <p>点击“新信息”开始创建一条新的站内短信</p>
                       </div>}
                       type="info"
                       closable
                       onClose={this.helperClose}/>}

                    <List {...listSetting} ref="list"/>

            </div>
        </div>
    }
});

module.exports = c;