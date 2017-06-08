import React from 'react'
import List from './list'
import Detail from 'component/msgDetail'
import model from './model'
import NewMsg from './newMsg'
import {jsonCopy} from 'common/utils'
import cloneDeep from 'lodash/cloneDeep';
import './style.css'


const c = React.createClass({
    getInitialState(){
        return {
            listState: {},
            entity: {},
            query: false,
            view:'list',
            detail:false
        }
    },

     //抓取当前list分页状态
    grabListState(state){
        this.setState({listState: state})
    },
    //刷新列表
    refreshList(){
        this.refs.list.refreshCurrent()
    },
    //返回list视图
    async backToList(){
        await this.setState({view: 'list'});
        await this.refreshList()
    },
    //打开详情信息视图
    openDetail(record){
        this.setState({detail: true, entity: record})
    },
    //关闭详情视图
    closeDetail(){
        this.setState({detail:false});
        this.refreshList()
    },

    newMsg(){
        this.setState({view:'newMsg'})
    },

    /*计算column里定义的width总和，没有定义width的列宽按100(px)计算*/
    getColWidth(model){
        let w = 0;
        model.columns.map(item => {
            w = item.width ? w + item.width : w + 100;
        });
        return w;
    },

    render(){
        //重新复制一个model对象，使修改不会影响原model对象，避免每次组件渲染时给原model对象累积赋值
        const m = cloneDeep(model);
        const actColWidth = 100;

        m.setfunc(this.openDetail);


        /*设置列表组件的参数 */
        const listSetting = {
            //列表可滚动区间的宽度，一般使用getcolwidth计算即可
            scrollx: this.getColWidth(model) - actColWidth,
            //列表需使用的columns定义
            columns: m.columns,
            //记录list组件被切换时状态值的方法
            grabState: this.grabListState,
            //list组件重新挂载时恢复状态用的历史状态数据
            stateShot: this.state.listState
        };
        /* 设置新建信息组件参数*/
        const newMsgSetting = {
            onBack:this.backToList
        };
        /*设置明细信息组件的参数*/
        const detailSetting = {
            //设置数据源
            id: this.state.entity.textid,
            //设置已读
            setRead:this.state.entity.id,
            visible:this.state.detail,
            //设置返回主视图调用的方法
            onClose: this.closeDetail
        };

        const view = {
            list:<List {...listSetting} ref="list"/>,
            newMsg:<NewMsg {...newMsgSetting} />
        };


        return <div className="client-zndx">
            <div className="wrap">
                <Detail {...detailSetting}/>
                {view[this.state.view]}


            </div>
        </div>
    }
});

module.exports = c;