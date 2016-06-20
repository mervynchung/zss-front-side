import React from 'react'
import {Table,Modal,Row,Col,Button,Icon,Alert} from 'antd'
import { Router, Route, Link } from 'react-router'
import Panel from 'component/compPanel'
import auth from 'common/auth'
import req from 'reqwest';
import config from 'common/configuration'


const API_URL = config.HOST + config.URI_API_PROJECT + '/zjsh/wspcx1';
const API_URL_XX= config.HOST + config.URI_API_PROJECT + '/zjsh/cklc1';
const ToolBar = Panel.ToolBar;
const ButtonGroup = Button.Group;

const wspcx = React.createClass({
    //初始化props
    getDefaultProps(){
        return {
            onSubmit: {},
             entity: '',
                dl: '',
                lcxx:[],
                titlemc:'',
                titlebz:'',
                bzxx:[],
                bzxxhider:false,
        }
    },
    getInitialState(){
            return {
                entity: '',
                dl: '',
                lcxx:[],
                titlemc:'',
                titlebz:'',
                bzxx:[],
                bzxxhider:false,
            }
        },

    handleCKLC(para,mc,e){
         req({
                url: API_URL_XX,
                type: 'json',
                method: 'get',
                data: {lid:para},
                contentType: 'application/json',
            }).then(resp=> {
                this.setState({lcxx: resp,titlemc:mc});
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
    this.setState({ visible: false,bzxxhider:false });
     },
     handleLCBZ(bzxx,bzmc){
        this.setState({bzxx: bzxx,titlebz:bzmc,bzxxhider:true});
     },
    

    render(){
        var ls = this.props.entity;
        var dl = this.props.dl;
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
        const obj = this.props.lcxx;
        const lcxxOptions = obj.map(lc => <tr key={lc.lcmc} style={{textAlign:'center'}}>
                    <td>{lc.lcmc}</td>
                    <td >{lc.lcms}</td>
                    <td ><a  onClick={this.handleLCBZ.bind(this,lc.xxlc,lc.lcmc)}>[查看步骤]</a></td>
                 </tr>);
        const objbz = this.props.bzxx;
        const lcbzOptions = objbz.map(lcbz => <tr key={lcbz.lcbz} style={{textAlign:'center'}}>
                    <td>{lcbz.lcbz}</td>
                    <td >{lcbz.js}</td>
                    <td >{lcbz.tjbz}</td>
                    <td >{lcbz.bhbz}</td>
                    <td >{lcbz.sfhq}</td>
                 </tr>);

        return 
                    <div className="h-scroll-table" >
                        <div className="fix-table table-bordered table-striped">
                                  <table >
                                        <tbody>
                                             {tr}
                                        </tbody>
                                </table>
                                <Modal  title={this.props.titlemc+"审批流程"} visible={this.props.visible} closable={false} width="50%" footer={[
                                    <Button key="back" type="ghost" size="large" onClick={this.handleCancel}>关 闭</Button>]}>
                                        <div className="h-scroll-table" >
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
                                            {this.props.bzxxhider && <Panel  style={{fontSize:'x-small'}}>
                                                    <Row><Col span="16"><h3>{this.props.titlebz+"步骤"}</h3></Col></Row>
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
                                                </Panel> }
                                            </div>
                                        </div>
                                </Modal>
                            </div>
                        </div>
              
    }
});

module.exports = wspcx;