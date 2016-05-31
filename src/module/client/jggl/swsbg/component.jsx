import React from 'react'
import {Table,Modal,Row,Col,Button,Icon,Alert} from 'antd'
import Panel from 'component/compPanel'
import req from 'reqwest';
import config from 'common/configuration'
import DetailBox from './detailbox.jsx'
import DetailBoxPT from './detailboxPT.jsx'


const API_URL = config.HOST + config.URI_API_PROJECT + '/swsbg/swsjgGet1';
const API_URL_P = config.HOST + config.URI_API_PROJECT + '/swsbg/swsjgPut1';
const API_URL_S = config.HOST + config.URI_API_PROJECT + '/swsbg/swsjgPost1';
const ToolBar = Panel.ToolBar;
const ButtonGroup = Button.Group;

const lrb = React.createClass({
    //初始化state
    getInitialState(){
        return {
            data: [],
            searchToggle: false,
            helper: false,
            entity: '',
            detailHide: true,
        }
    },
 handleSearchSubmit(value){
      this.setState({submitLoading:true});
        var ls = value;
        ls.jgid=1;
         req({
            url: API_URL_S,
            type: 'json',
            method: 'put',
            data: JSON.stringify(ls),
            contentType: 'application/json'
        }).then(resp=> {
             this.setState({submitLoading:false});
            Modal.success({
                title: '提交成功',
                content: (
                    <div>
                        <p>变更提交成功，数据已更新</p>
                    </div>  ),
                onOk() {
                          window.location.reload();
                        },
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
 handlePTSubmit(value){
    this.setState({submitLoading:true});
        var ls = value;
        ls.jgid=1;
         req({
            url: API_URL_P,
            type: 'json',
            method: 'put',
            data: JSON.stringify(ls),
            contentType: 'application/json'
        }).then(resp=> {
             this.setState({submitLoading:false});
            Modal.success({
                title: '提交成功',
                content: (
                    <div>
                        <p>变更提交成功，数据已更新</p>
                    </div>  ),
                onOk() {
                          window.location.reload();
                        },
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
    //帮助按钮
    handleHelper(){
        this.setState({helper: !this.state.helper})
    },
    //手动关闭帮助提示
    handleHelperClose(){
        this.setState({helper: false})
    },
    //通过API获取数据
    fetchData(params = {jgid: 1}){
        req({
            url: API_URL,
            type: 'json',
            method: 'get',
            data: params
        }).then(resp=> {
            this.setState({
                entity: resp,
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
        helper.push(<p key="helper-0">1)    变更备案需要审批项：单位名称、所在城市、地址、机构性质、注册资金</p>);
        helper.push(<p key="helper-1">2)    法人在变更备案页面是无法变更的</p>);

        return <div className="cwbb-lrb">
            <div className="wrap">
                {this.state.helper && <Alert message="执业人员信息变更帮助"
                                             description={helper}
                                             type="info"
                                             closable
                                             onClose={this.handleHelperClose}/>}

                <Panel title="事务所信息变更" toolbar={toolbar}>
                    <DetailBox data={this.state.entity} onSubmit={this.handleSearchSubmit}/>
                </Panel>
                <Panel >
                    <DetailBoxPT data={this.state.entity} onSubmit={this.handlePTSubmit} submitLoading={this.state.submitLoading}/>
                </Panel>
            </div>
        </div>
    }
});

module.exports = lrb;