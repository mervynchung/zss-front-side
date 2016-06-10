import './style.css'
import React from 'react'
import {Table,Col,Row,Tree,Tabs} from 'antd'
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
            currentIndex: '',
            currentEntity: ''
        }
    },

    componentDidMount(){
        req({
            url: ROLE_URL,
            type: 'json',
            method: 'get'
        }).then(resp=> {
            this.setState({roles: resp})
        });
        this.fetchMenu();
    },
    handleRowClick(record){
        this.setState({currentIndex: record.id, currentEntity: record})
    },
    handleTreeCheck(checkedKeys){
        console.log(checkedKeys)
    },
    fetchMenu(lx){
        req({
            url: MENU_URL + lx=='A'?'?l=A':'?l=B',
            type: 'json',
            method: 'get'
        }).then(resp=> {
            lx=='A'?this.setState({center: resp}):this.setState({client: resp})

        });
    },
    render(){

        //中心端权限表
        const CenterPrivileges = <TreeView data={this.state.center} onCheck={this.handleTreeCheck}/>;

       //客户端权限表
        const ClientPrivileges = <TreeView data={this.state.client} onCheck={this.handleTreeCheck}/>;

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
                                <TabPane tab="中心端" key="1"><CenterPrivileges /></TabPane>
                                <TabPane tab="客户端" key="2"><ClientPrivileges /></TabPane>
                            </Tabs>

                        </Panel>
                    </Col>
                </Row>
            </div>
        </div>
    }
})

module.exports = qxgl;