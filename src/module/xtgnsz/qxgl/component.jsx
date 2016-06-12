import './style.css'
import React from 'react'
import {Table,Col,Row,Tree,Tabs,Modal} from 'antd'
import Panel from 'component/compPanel'
import config from 'common/configuration'
import model from './model.jsx'
import req from 'reqwest'
import TreeView from 'component/treeView'

const TabPane = Tabs.TabPane;
const ROLE_URL = config.HOST + config.URI_API_FRAMEWORK + '/roles';
const MENU_URL = config.HOST + config.URI_API_FRAMEWORK + '/asidemenu';

//权限管理
const qxgl = React.createClass({
    getInitialState(){
        return {
            roles: [],
            center:[],
            client:[],
            currentIndex: '',
            currentEntity: ''
        }
    },

    componentDidMount(){
        this.fetchData().then(resp=>{
            console.log(resp)
            this.setState({
                roles: resp.roles,
                center:resp.center,
                client:resp.client
            })
        }).catch(e=>{
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
    handleRowClick(record){
        this.setState({currentIndex: record.id, currentEntity: record})
    },
    handleTreeCheck(checkedKeys){
        console.log(checkedKeys)
    },
    fetchMenu(lx){
        return req({
            url: MENU_URL + (lx=='A'?'?l=A':'?l=B'),
            type: 'json',
            method: 'get'
        })
    },
    fetchRole(){
        return req({
            url: ROLE_URL,
            type: 'json',
            method: 'get'
        })
    },
    async fetchData(){
        let center = await this.fetchMenu('A');
        let client = await this.fetchMenu('B');
        let roles = await this.fetchRole();

        return {center:center,client:client,roles:roles}
    },

    render(){

        //中心端权限表
        const centerPrivileges = <TreeView data={this.state.center} onCheck={this.handleTreeCheck}/>;

       //客户端权限表
        const clientPrivileges = <TreeView data={this.state.client} onCheck={this.handleTreeCheck}/>;

        const rowSelection = {
            type: 'radio',
            selectedRowKeys: [this.state.currentIndex]
        };
        return <div className="qxgl">
            <div className="wrap">
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
                        <Panel title="权限分配">
                            <Tabs defaultActiveKey="1">
                                <TabPane tab="中心端" key="1">{centerPrivileges}</TabPane>
                                <TabPane tab="客户端" key="2">{clientPrivileges}</TabPane>
                            </Tabs>
                            <div></div>

                        </Panel>
                    </Col>
                </Row>
            </div>
        </div>
    }
})

module.exports = qxgl;