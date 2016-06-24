import './style.css'
import React from 'react'
import {Table,Col,Row,Tree,Tabs,Modal,Button,Spin,notification } from 'antd'
import Panel from 'component/compPanel'
import config from 'common/configuration'
import {SelectorRoles} from 'component/compSelector'
import model from './model.jsx'
import req from 'reqwest'
import {jsonCopy} from 'common/utils.js'

const ToolBar = Panel.ToolBar;
const USER_URL = config.HOST + config.URI_API_FRAMEWORK + '/users';
const ROLE_URL = config.HOST + config.URI_API_FRAMEWORK + '/roles';

//获取用户列表
const fetchUsers = function (param = {page: 1, pageSize: 10}) {
    return req({
        url: USER_URL,
        method: 'get',
        type: 'json',
        data: param
    })
};
//获取角色列表
const fetchRoles = function () {
    return req({
        url: ROLE_URL,
        method: 'get',
        type: 'json'
    })
};

//异步获取数据
const fetchData = async function () {
    let [users,roles] = await Promise.all([fetchUsers(), fetchRoles()]);
    return {users:users,roles:roles}
};


//权限管理
const yhgl = React.createClass({
    getInitialState(){
        return {
            pageLoading: true,
            roles: [],
            users:[],
            select:''
        }
    },

    componentDidMount(){
        fetchData().then(resp=> {
            this.setState({
                pageLoading: false,
                roles: resp.roles,
                users: resp.users.data
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


    render(){
        const rowSelection = {
            type: 'checkbox',
            selectedRowKeys: [this.state.currentIndex],
            onSelect: this.handleSelect
        };
        const toolbar = <ToolBar>
            <SelectorRoles data={this.state.roles}/>
        </ToolBar>;


        return <div className="yhgl">
            <div className="wrap">
                <Spin spinning={this.state.pageLoading}>
                    <Panel title="用户管理" toolbar={toolbar}>
                        <Table className="outer-border"
                               columns={model.columns}
                               dataSource={this.state.users}
                               pagination={model.pagination}
                               rowKey={record => record.ID}
                               rowSelection={rowSelection}
                               onRowClick={this.handleRowClick}
                        />
                    </Panel>
                </Spin>
            </div>
        </div>
    }
});

module.exports = yhgl;