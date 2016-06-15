import './style.css'
import React from 'react'
import {Table,Col,Row,Tree,Tabs,Modal,Button,Spin} from 'antd'
import Panel from 'component/compPanel'
import config from 'common/configuration'
import model from './model.jsx'
import req from 'reqwest'
import TreeView from 'component/treeView'

const TabPane = Tabs.TabPane;
const ROLE_URL = config.HOST + config.URI_API_FRAMEWORK + '/roles';
const MENU_URL = config.HOST + config.URI_API_FRAMEWORK + '/asidemenu';
const Privileges_URL = config.HOST + config.URI_API_FRAMEWORK + '/privileges';

const isParent = (nodeId, nodeList)=> {
    for (let i = 0; i < nodeList.length; i++) {
        if (nodeList[i].pid == nodeId) {
            return true
        }
    }
    return false
};

//权限管理
const qxgl = React.createClass({
    getInitialState(){
        return {
            roles: [],
            center: [],
            client: [],
            currentIndex: '',
            currentEntity: '',
            privileges: [],
            privilegesLoading: false,
            pageLoading: true
        }
    },

    componentDidMount(){
        this.fetchData().then(resp=> {
            this.setState({
                pageLoading: false,
                roles: resp.roles,
                center: resp.center,
                client: resp.client
            })
        }).catch(e=> {
            this.setState({pageLoading: false});
            Modal.error({
                title: '数据获取错误',
                content: (
                    <div>
                        <p>无法从服务器返回数据，需检查应用服务工作情况</p>
                        <p>Status: {e.status}</p>
                    </div>  )
            });
        })
    },
    //处理角色列表点击
    handleRowClick(record){
        req({
            url: Privileges_URL + '/' + record.id,
            type: 'json',
            method: 'get'
        }).then(resp=> {
            let privileges = [];
            for (let i = 0; i < resp.length; i++) {
                if (!isParent(resp[i].menuId, this.state.center) && !isParent(resp[i].menuId, this.state.client)) {
                    privileges.push(resp[i].menuId + '');
                }
            }
            this.setState({privileges: privileges})
        });
        this.setState({currentIndex: record.id, currentEntity: record})
    },
    //处理树节点勾选
    handleTreeCheck(checkedKeys){
        console.log(checkedKeys);
        this.setState({
            privileges: checkedKeys
        });
    },
    //权限修改提交
    handleTreeSubmit(){
        this.setState({privilegesLoading: true});
        let param = {
            roleId: this.state.currentIndex,
            privileges: this.state.privileges
        };
        req({
            url: Privileges_URL,
            type: 'json',
            method: 'put',
            contentType: 'application/json',
            data: JSON.stringify(param)
        }).then(resp=> {
            this.setState({privilegesLoading: false})
        }).fail(e=> {
            this.setState({privilegesLoading: false});
            Modal.error({
                title: '更新失败',
                content: (
                    <div>
                        <p>更新权限失败，需检查应用服务工作情况</p>
                        <p>Status: {e.status}</p>
                    </div>  )
            })
        })
    },
    //获取菜单树数据
    fetchMenu(lx){
        return req({
            url: MENU_URL + (lx == 'A' ? '?l=A' : '?l=B'),
            type: 'json',
            method: 'get'
        })
    },
    //获取角色列表
    fetchRole(){
        return req({
            url: ROLE_URL,
            type: 'json',
            method: 'get'
        })
    },
    //异步获取管理端、客户端、角色数据
    async fetchData(){
        let center = await this.fetchMenu('A');
        let client = await this.fetchMenu('B');
        let roles = await this.fetchRole();

        return {center: center, client: client, roles: roles}
    },

    render(){

        //中心端权限表
        const centerPrivileges = <TreeView
            data={this.state.center}
            onCheck={this.handleTreeCheck}
            checkedKeys={this.state.privileges}/>;

        //客户端权限表
        const clientPrivileges = <TreeView
            data={this.state.client}
            onCheck={this.handleTreeCheck}
            checkedKeys={this.state.privileges}/>;

        const rowSelection = {
            type: 'radio',
            selectedRowKeys: [this.state.currentIndex]
        };
        return <div className="qxgl">
            <div className="wrap">
                <Spin spining={this.state.pageLoading}>
                    <Row>
                        <Col span="12">
                            <Panel title="角色管理">
                                <Table className="outer-border"
                                       columns={model.columns}
                                       dataSource={this.state.roles}
                                       pagination={model.pagination}
                                       rowKey={record => record.id}
                                       rowSelection={rowSelection}
                                       onRowClick={this.handleRowClick}
                                       rowClassName={(record)=>{return record.id==this.state.currentIndex?'row-selected':''}}
                                />
                            </Panel>
                        </Col>
                        <Col span="12" style={{paddingLeft:'16px'}}>
                            <Panel title="权限分配" className="qxfp">
                                <Spin spining={this.state.privilegesLoading}>
                                    <Tabs defaultActiveKey="1">
                                        <TabPane tab="中心端" key="1">{centerPrivileges}</TabPane>
                                        <TabPane tab="客户端" key="2">{clientPrivileges}</TabPane>
                                    </Tabs>
                                    <div className="bar">
                                        <Button type="primary" size="large" onClick={this.handleTreeSubmit}>确认</Button>
                                    </div>
                                </Spin>
                            </Panel>
                        </Col>
                    </Row>
                </Spin>
            </div>
        </div>
    }
});

module.exports = qxgl;