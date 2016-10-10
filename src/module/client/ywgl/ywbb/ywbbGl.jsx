import React from 'react'
import {Table, Modal, Row, Col, Button, Icon, Alert} from 'antd'
import List from './list'
import Detail from './detail'
import DialogSF from './dialogSF'
import DialogBB from './dialogBB'
import DialogTH from './dialogTH'
import DialogCX from './dialogCX'
import DialogQY from './dialogQY'
import Edit from './editYwbb'
import model from './model'
import config from 'common/configuration'
import {jsonCopy} from 'common/utils'
import cloneDeep from 'lodash/cloneDeep';
import auth from 'common/auth'


const c = React.createClass({
    getInitialState(){
        return {
            view: 'list',
            listState: {},
            entity: {},
            dialogSF: false,
            dialogBB:false,
            dialogTH:false,
            dialogCX:false,
            dialogQY:false
        }
    },

    //打开明细信息视图
    handleViewDetail(record){
        this.setState({view: 'detail', entity: record})
    },
    //打开编辑视图
    handleViewEdit(record){
        this.setState({view: 'edit',entity: record})
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
    //打开收费操作对话框
    openSF(record){
        if(record.id){
            this.setState({dialogSF: true,entity:record})
        }else{
            this.setState({dialogSF: true})
        }
    },
    closeSF(){
        this.setState({dialogSF: false});
    },
    //打开退回操作对话框
    openTH(record){
        if(record.id){
            this.setState({dialogTH: true,entity:record})
        }else{
            this.setState({dialogTH: true})
        }
    },
    closeTH(){
        this.setState({dialogTH: false});
    },
    //打开启用操作对话框
    openQY(record){
        if(record.id){
            this.setState({dialogQY: true,entity:record})
        }else{
            this.setState({dialogQY: true})
        }
    },
    closeQY(){
        this.setState({dialogQY: false});
    },

    //打开报备对话框
    openDiaBB(record){
        if(record.id){
            this.setState({dialogBB:true,entity:record})
        }else{
            this.setState({dialogBB: true})
        }
    },
    closeDiaBB(){
        this.setState({dialogBB:false})
    },
    //打开撤销对话框
    openCX(record){
        if(record.id){
            this.setState({dialogCX:true,entity:record})
        }else{
            this.setState({dialogCX: true})
        }
    },
    closeCX(){
        this.setState({dialogCX:false})
    },
    printCover(record){
        let query = JSON.stringify({
            wtdw:record.wtdw,
            ywlx:record.ywlx,
            sstarttime:record.sstarttime,
            sendtime:record.sendtime,
            jtxm:record.jtxm,
            bbhm:record.bbhm,
            bgwh:record.bgwh,
            wtdwnsrsbh:record.wtdwnsrsbh,
            zgswjg:record.zgswjg,
            swsmc:record.swsmc,
            bgrq:record.bgrq,
            bbrq:record.bbrq,
            qzsws:record.qzsws,
            swsdh:record.swsdh,
            swsdzyj:record.swsdzyj,
            swswz:record.swswz,
            swscz:record.swscz,
            txdz:record.txdz
        });
        query = encodeURIComponent(query);
        window.open('#/print/ywbbcover?data='+query);
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
        const jgId = auth.getJgid();
        //重新复制一个model对象，使修改不会影响原model对象，避免每次组件渲染时给原model对象累积赋值
        const m = cloneDeep(model);

        //定义列表中的操作列具体方法
        m.columns.push({
            title: '操作',
            key: 'action',
            fixed: 'right',
            width: 180,
            render: (text, record)=> {
                let actGroup = <span className="act-group">
                    <a onClick={()=>{this.handleViewDetail(record)}}>明细</a>
                    {record.ywzt_dm == 0 ?
                      <a onClick={()=>{this.handleViewEdit(record)}}>修改</a>:null}
                    {record.ywzt_dm == 0 ?
                        <a onClick={()=>{this.openDiaBB(record)}}>报备</a>:null}
                    {record.ywzt_dm == 1 ?
                      <a onClick={()=>{this.openSF(record)}}>收费</a>:null}
                    {record.ywzt_dm == 1 ?
                        <a onClick={()=>{this.printCover(record)}}>打印</a>:null}
                    {record.ywzt_dm == 1 ?
                      <a onClick={()=>{this.openTH(record)}}>退回</a>:null}
                    {record.ywzt_dm == 1 ?
                      <a onClick={()=>{this.openCX(record)}}>撤销</a>:null}
                    {record.ywzt_dm == 5 ?
                        <a onClick={()=>{this.openQY(record)}}>启用</a>:null}
                </span>;
                return actGroup
            }
        });
        const fixColWidth = 120;

        /*设置列表组件的参数 */
        const listSetting = {
             //列表可滚动区间的宽度，一般使用getcolwidth计算即可
            scrollx: this.getColWidth(model)+fixColWidth,
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
            apiUrl: config.HOST + config.URI_API_PROJECT + `/jgyw/${jgId}`,
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
            printCover:null
        };
        /*设置编辑组件的参数*/
        const editSetting = {
            //设置返回主视图调用的方法
            id:this.state.entity.id,
            onBack: this.backToList,
            refreshList:this.refreshList
        };

        /*设置收费操作对话框的参数*/
        const dialogSFSetting = {
            data: this.state.entity,
            visible:this.state.dialogSF,
            refreshList:this.refreshList,
            onClose:this.closeSF,
            apiUrl:config.HOST + config.URI_API_PROJECT + '/ywbb/'
        };

        /*设置提交报备对话框的参数*/
        const diaBBSetting = {
            data: this.state.entity,
            visible:this.state.dialogBB,
            refreshList:this.refreshList,
            onClose:this.closeDiaBB,
            apiUrl:config.HOST + config.URI_API_PROJECT + '/ywbb/'
        };
        /*设置退回申请对话框的参数*/
        const diaTHSetting = {
            data: this.state.entity,
            visible:this.state.dialogTH,
            refreshList:this.refreshList,
            onClose:this.closeTH,
            apiUrl:config.HOST + config.URI_API_PROJECT + '/ywbb/'
        };
        /*设置撤销申请对话框的参数*/
        const diaCXSetting = {
            data: this.state.entity,
            visible:this.state.dialogCX,
            refreshList:this.refreshList,
            onClose:this.closeCX,
            apiUrl:config.HOST + config.URI_API_PROJECT + '/ywbb/'
        };
        /*设置启用申请对话框的参数*/
        const diaQYSetting = {
            data: this.state.entity,
            visible:this.state.dialogQY,
            refreshList:this.refreshList,
            onClose:this.closeQY,
            apiUrl:config.HOST + config.URI_API_PROJECT + '/ywbb/'
        };

        /*通过控制state.view的值，实现页面上列表/详细信息等组件的切换*/
        const view = {
            list: <List {...listSetting} ref="list" />,
            detail: <Detail {...detailSetting}/>,
            edit:<Edit {...editSetting}/>
        };


        return <div className="ywbbgl">
                <DialogSF {...dialogSFSetting}  />
                <DialogBB {...diaBBSetting}  />
                <DialogTH {...diaTHSetting}  />
                <DialogCX {...diaCXSetting}  />
                <DialogQY {...diaQYSetting}  />
                {view[this.state.view]}
            </div>
    }
});

module.exports = c;