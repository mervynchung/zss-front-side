import React from 'react'
import {Table, Modal, Row, Col, Button, Icon, Alert,Tabs,Switch} from 'antd'
import List from './list'
import Panel from 'component/compPanel';
import model from './model'
import config from 'common/configuration'
import {jsonCopy} from 'common/utils'
import cloneDeep from 'lodash/cloneDeep';
import '../style.css'

const TabPane = Tabs.TabPane;

const c = React.createClass({
    getInitialState(){
        return {
            view: 'list',
            listState: {},
            entity: {},
            dialogSentBack: false,
            dialogSpQY:false,
            dialogSpCX:false,
            dialogSpTH:false
        }
    },

    //打开明细信息视图
    handleViewDetail(record){
        this.setState({view: 'detail', entity: record})
    },
    //返回list视图
    backToList(){
        this.setState({view: 'list'})
    },
    //抓取当前list分页状态
    grabListState(state){
        this.setState({listState: state})
    },
    refreshList(){
        this.refs.list.refreshCurrent()
    },
    //打开强制退回操作对话框
    openSentBack(record){
        if(record.id){
            this.setState({dialogSentBack: true,entity:record})
        }else{
            this.setState({dialogSentBack: true})
        }
    },
    //关闭强制退回操作对话框
    closeSentBack(){
        this.setState({dialogSentBack: false});
    },
    //打开申请撤销审批
    openSpCX(record){
        if(record.id){
            this.setState({dialogSpCX: true,entity:record})
        }else{
            this.setState({dialogSpCX: true})
        }
    },
    closeSpCX(){
        this.setState({dialogSpCX:false})
    },
    //打开申请启用审批
    openSpQY(record){
        if(record.id){
            this.setState({dialogSpQY: true,entity:record})
        }else{
            this.setState({dialogSpQY: true})
        }
    },
    closeSpQY(){
        this.setState({dialogSpQY:false})
    },
    //打开申请退回审批
    openSpTH(record){
        if(record.id){
            this.setState({dialogSpTH: true,entity:record})
        }else{
            this.setState({dialogSpTH: true})
        }
    },
    closeSpTH(){
        this.setState({dialogSpTH:false})
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

        //定义列表中的操作列具体方法
        m.columns.push({
            title: '解锁操作',
            dataIndex:'yxbz',
            key: 'yxbz',
            fixed: 'right', //设定了右侧列固定后，需要去掉columns最后一列的width定义，让其自由拉伸
            width: actColWidth,
            render: (text, record)=> {
                let actGroup = <span className="act-group">
                    <Switch defaultChecked={!record.yxbz} checkedChildren="开" unCheckedChildren="锁"/>
                </span>;
                return actGroup
            }
        });

        /*设置列表组件的参数 */
        const listSetting = {
            //帮助提示的标题
            helperTitle: '业务报备使用帮助',
            //帮助提示的具体内容
            helperDesc: <div><p>本功能主要提供本年度业务备案查询</p></div>,
            //列表可滚动区间的宽度，一般使用getcolwidth计算即可
            scrollx: this.getColWidth(model)-actColWidth,
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
            defaultWhere:{}
        };

        /*设置明细信息组件的参数*/
        const detailSetting = {
            //设置数据源
            data: this.state.entity,
            //设置标题
            title: '业务报备详细信息',
            //设置返回主视图调用的方法
            onBack: this.backToList,
            sentBack: this.openSentBack,
            printCover:null,
            spCX:null,
            spQY:null,
            spTH:null
        };


        /*通过控制state.view的值，实现页面上列表/详细信息等组件的切换*/
        const view = {
            list: <List {...listSetting} ref="list" />
        };


        return <div className="zzgl jgzzgl">
            <div className="wrap">
                <Panel>
                    <Tabs >
                        <TabPane key="1" tab="当前有效锁定记录"> {view[this.state.view]}</TabPane>
                        <TabPane key="2" tab="已解锁记录">解锁记录</TabPane>
                    </Tabs>

                </Panel>
            </div>
        </div>
    }
});

module.exports = c;