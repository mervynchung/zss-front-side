import React from 'react'
import {Table,Modal,Row,Col,Button,Icon,Alert,Spin} from 'antd'
import { Router, Route, Link } from 'react-router'
import Panel from 'component/compPanel'
import auth from 'common/auth'
import req from 'reqwest';
import config from 'common/configuration'


const API_URL = config.HOST + config.URI_API_PROJECT + '/spapi/wspcx';
const API_URL_XX= config.HOST + config.URI_API_PROJECT + '/spapi/cklc';
const ToolBar = Panel.ToolBar;
const ButtonGroup = Button.Group;

const wspcx = React.createClass({
    //初始化state
    getInitialState(){
            return {
                helper: true,
                entity: '',
                dl: '',
                lcxx:[],
                titlemc:'',
                titlebz:'',
                bzxx:[],
                bzxxhider:false,
                sloading:false,
            }
        },

    handleCKLC(para,mc,e){
        this.setState({sloading: true});
         req({
                url: API_URL_XX,
                type: 'json',
                method: 'get',
                data: {lid:para},
                contentType: 'application/json',
                headers:{'x-auth-token':auth.getToken()}
            }).then(resp=> {
                this.setState({sloading:false,lcxx: resp,titlemc:mc});
            }).fail(err=> {
                Modal.error({
                    title: '数据获取错误',
                    content: (
                        <div>
                            <p>无法从服务器返回数据，需检查应用服务工作情况</p>
                            <p>Status: {err.status}</p>
                        </div>  )
                });
            });
            this.setState({visible: true});
        },
    handleCancel() {
    this.setState({ visible: false,bzxxhider:false,lcxx: [],titlemc:'' });
     },
     handleLCBZ(bzxx,bzmc){
        this.setState({bzxx: bzxx,titlebz:bzmc,bzxxhider:true});
     },
        //帮助按钮
    handleHelper(){
        this.setState({helper: !this.state.helper})
    },

    //手动关闭帮助提示
    handleHelperClose(){
        this.setState({helper: false})
    },
    
    //通过API获取数据
    fetchData(){
        this.setState({sloading1: true});
        req({
            url: API_URL,
            type: 'json',
            method: 'get',
            headers:{'x-auth-token':auth.getToken()}
        }).then(resp=> {
            this.setState({
                entity: resp.ls,
                dl:resp.dl,
                sloading1:false,
            });
        }).fail(err=> {
            Modal.error({
                title: '数据获取错误',
                content: (
                    <div>
                        <p>无法从服务器返回数据，需检查应用服务工作情况</p>
                        <p>Status: {err.status}</p>
                    </div>  )
            });
        })
    },

    componentDidMount(){
        this.fetchData();
    },

    render(){
        //定义工具栏内容
        
        let toolbar = <ToolBar>
            <ButtonGroup>
                <Button type="primary" onClick={this.handleHelper}><Icon type="question"/></Button>
            </ButtonGroup>
        </ToolBar>;

        //定义提示内容
        let helper = [];
        helper.push(<p key="helper-0">1）显示当前用户待审核事项，其中事项性质分为两种：由事务所发起或管理中心发起；</p>);
        helper.push(<p key="helper-1">2)   可进行审批操作和具体审批流程查看</p>);

        var ls = this.state.entity;
        var dl = this.state.dl;
        var tr = [];
        let lx =0;
        let lx2 =0;
        for (var i = 0,j=0;i<ls.length; i++) {
            if (ls[i].lx!=lx) {
                 lx=ls[i].lx;
                 let len =0;
                 switch (lx) {
                    case 32: len = 4; break;
                    case 33: len = 8;break;
                    case 34:len = 6; break;
                    case 35:len = 2;break;
                    case 40:len = 4;break;
                 }
                  tr.push(
                    <tr key={"dlxm"+j}>
                    <td rowSpan={len+1}><b>{dl[j]}</b></td>
                    </tr>  );
                  j++;
            };
            if (ls[i].wss>0) {
                 tr.push(<tr key={ls[i].lid}>
                    <td><b>{ls[i].wsxm}</b></td>
                    <td>
                        <span style={{'color':'red'}}>{ls[i].wss}项</span>
                        <Link style={{float:'right'}} to={"spsh/module/"+ls[i].lid}>[处理事项]</Link>
                    </td>
                    <td><a onClick={this.handleCKLC.bind(this,ls[i].lid,ls[i].wsxm)}>[查看流程]</a></td>
                    </tr> );
            } else{
            tr.push(<tr key={ls[i].lid}>
                    <td><b>{ls[i].wsxm}</b></td>
                    <td>{ls[i].wss}项</td>
                    <td><a onClick={this.handleCKLC.bind(this,ls[i].lid,ls[i].wsxm)}>[查看流程]</a></td>
                    </tr> );
            };
        };
        const obj = this.state.lcxx;
        const lcxxOptions = obj.map(lc => <tr key={lc.lcmc} style={{textAlign:'center'}}>
                    <td>{lc.lcmc}</td>
                    <td >{lc.lcms}</td>
                    <td ><a  onClick={this.handleLCBZ.bind(this,lc.xxlc,lc.lcmc)}>[查看步骤]</a></td>
                 </tr>);
        const objbz = this.state.bzxx;
        const lcbzOptions = objbz.map(lcbz => <tr key={lcbz.lcbz} style={{textAlign:'center'}}>
                    <td>{lcbz.lcbz}</td>
                    <td >{lcbz.js}</td>
                    <td >{lcbz.tjbz}</td>
                    <td >{lcbz.bhbz}</td>
                    <td >{lcbz.sfhq}</td>
                 </tr>);

        return <div className="zjsh-wspxm">
            <div className="wrap">
                {this.state.helper && <Alert message="待审核事项帮助" description={helper} type="info" closable onClose={this.handleHelperClose}/>}
            <Panel title="待审核事项" toolbar={toolbar}>
                    <Spin spinning={this.state.sloading1}><div className="h-scroll-table" >
                        <div className="fix-table table-bordered table-striped">
                                  <table >
                                        <tbody>
                                             {tr}
                                        </tbody>
                                 </table>
                                <Modal  title={this.state.titlemc+"审批流程"} visible={this.state.visible} closable={false} width="50%" 
                                footer={[<Button key="back" type="ghost" size="large" onClick={this.handleCancel}>关 闭</Button>]}>
                                        <Spin spinning={this.state.sloading}><div className="h-scroll-table" >
                                            <div className="fix-table table-bordered table-striped">
                                                      <table >
                                                            <tbody>
                                                                <tr style={{textAlign:'center'}}>
                                                                    <th><b>审批流程名称</b></th>
                                                                    <th><b>说明</b></th>
                                                                    <th><b>详细步骤</b></th>
                                                                </tr>
                                                                {lcxxOptions}
                                                            </tbody>
                                                     </table> 
                                                {this.state.bzxxhider && <Panel  style={{fontSize:'x-small'}}>
                                                        <Row><Col span="16"><h3>{this.state.titlebz+"步骤"}</h3></Col></Row>
                                                                <table >
                                                                        <tbody>
                                                                                 <tr style={{textAlign:'center'}}>
                                                                                    <th><b>步骤</b></th>
                                                                                    <th><b>角色</b></th>
                                                                                    <th><b>是否提交步骤</b></th>
                                                                                    <th><b>是否驳回步骤</b></th>
                                                                                    <th><b>是否会签</b></th>
                                                                                </tr>
                                                                                {lcbzOptions}
                                                                        </tbody>
                                                                </table>
                                                    </Panel> 
                                                }
                                            </div>
                                        </div>
                                    </Spin>
                                </Modal>
                            </div>
                        </div>
                    </Spin>
                </Panel>
            </div>
        </div>
    }
});

module.exports = wspcx;