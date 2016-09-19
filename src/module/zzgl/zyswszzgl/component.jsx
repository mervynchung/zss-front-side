import React from 'react'
import {Table, Modal, Row, Col, Button, Icon, Alert,Tabs,Switch} from 'antd'
import Swslist from './swslist'
import Jslist from './jslist'
import DialogLock from './dialogLock'
import Panel from 'component/compPanel';
import swsmodel from './swsmodel'
import jsmodel from './jsmodel'
import config from 'common/configuration'
import {jsonCopy} from 'common/utils'
import cloneDeep from 'lodash/cloneDeep';
import '../style.css'

const TabPane = Tabs.TabPane;

const c = React.createClass({
    getInitialState(){
        return {
            listState: {},
            entity: {},
            dialogLock:false
        }
    },

    refreshList(){
        this.refs.list1.refreshCurrent()
    },


    /*计算column里定义的width总和，没有定义width的列宽按100(px)计算*/
    getColWidth(model){
        let w = 0;
        model.columns.map(item=> {
            w = item.width ? w + item.width : w + 100;
        });
        return w;
    },
    //打开强制退回操作对话框
    openLock(selectedRowKeys,selectedRows){
        if(selectedRowKeys)
            this.setState({dialogLock: true})
    },
    //关闭强制退回操作对话框
    closeLock(){
        this.setState({dialogSentBack: false});
    },

    render(){
        //重新复制一个model对象，使修改不会影响原model对象，避免每次组件渲染时给原model对象累积赋值
        const swsm = cloneDeep(swsmodel);
        const jsm = cloneDeep(jsmodel);

        /*设置资质锁定对话框的参数*/
        const dialogLockSetting = {
            data: this.state.entity,
            visible:this.state.dialogSentBack,
            refreshList:this.refreshList,
            onClose:this.closeSentBack,
            apiUrl:config.HOST + config.URI_API_PROJECT + '/swszzzt/'
        };
        /*设置列表组件的参数 */
        const swsListSetting = {
            //列表可滚动区间的宽度，一般使用getcolwidth计算即可
            scrollx: this.getColWidth(swsm),
            //接收的json数据中用来充当key的字段名
            keyCol: 'id',
            //默认每页显示数量
            pageSize: 10,
            //列表需使用的columns定义
            columns: swsm.columns,
            //记录list组件被切换时状态值的方法
            grabState: this.grabListState,
            //list组件重新挂载时恢复状态用的历史状态数据
            stateShot: this.state.listState,
            //数据来源api
            apiUrl: config.HOST + config.URI_API_PROJECT + '/swszzzt',
            //初始搜索条件
            defaultWhere: {}
        };
        const jslistSetting = {
            //列表可滚动区间的宽度，一般使用getcolwidth计算即可
            scrollx: this.getColWidth(jsm),
            //接收的json数据中用来充当key的字段名
            keyCol: 'id',
            //默认每页显示数量
            pageSize: 10,
            //列表需使用的columns定义
            columns: jsm.columns,
            //记录list组件被切换时状态值的方法
            grabState: this.grabListState,
            //list组件重新挂载时恢复状态用的历史状态数据
            stateShot: this.state.listState,
            //数据来源api
            apiUrl: config.HOST + config.URI_API_PROJECT + '/jgzzsdwx',
            //初始搜索条件
            defaultWhere: {}
        };

        return <div className="zzgl jgzzgl">
            <div className="wrap">

                <Alert message="执业税务师资质管理使用帮助"
                       description={<div><p>本功能分为执业税务师列表和被锁定税务师名单两部分。</p>
                           <p>在税务师列表里可以搜索相应的税务师进行锁定操作，已被锁定的人员不能重复锁定。</p>
                       <p>在被锁定名单里可以进行解锁操作。</p></div>}
                       type="info"
                       closable
                       onClose={this.helperClose}/>
                <DialogLock {...dialogLockSetting} />
                <Panel>
                    <Tabs >
                        <TabPane key="1" tab="执业税务师列表"> <Swslist {...swsListSetting} ref="list1"/></TabPane>
                        <TabPane key="2" tab="税务师资质锁定名单"><Jslist {...jslistSetting} ref="list2"/></TabPane>
                    </Tabs>

                </Panel>
            </div>
        </div>
    }
});

module.exports = c;