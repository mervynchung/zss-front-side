import './style.css'
import React from 'react'
import {Table,Col,Row,Tree,Tab} from 'antd'
import Panel from 'component/compPanel'
import config from 'common/configuration'
import model from './model.jsx'
import req from 'reqwest'
import TreeView from 'component/treeView'

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
    fetchMenu(){
        req({
            url:MENU_URL + '?l=A',
            type:'json',
            method:'get'
        }).then(resp=>{
            this.setState({center:resp})
        });
    },
    render(){
        const rowSelection = {
            type: 'radio',
            selectedRowKeys:[this.state.currentIndex]
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
                            <TreeView data={this.state.center}/>
                        </Panel>
                    </Col>
                </Row>
            </div>
        </div>
    }
})

module.exports = qxgl;