import './style.css'
import React from 'react'
import {Table,Col,Row,Tree,Tab} from 'antd'
import Panel from 'component/compPanel'
import config from 'common/configuration'
import model from './model.jsx'
import req from 'reqwest'

const TreeNode = Tree.TreeNode;
const ROLE_URL = config.HOST + config.URI_API_FRAMEWORK + '/roles';

const privilege = React.createClass({
    render(){
        return <div className="privilege">

        </div>
    }
})
//权限管理
const qxgl = React.createClass({
    getInitialState(){
        return {
            roles: [],
            currentIndex:'',
            currentEntity:''
        }
    },

    componentDidMount(){
        req({
            url: ROLE_URL,
            type: 'json',
            method: 'get'
        }).then(resp=> {
            this.setState({roles: resp})
        })
    },
    handleRowClick(record, index){
        console.log(index);
        this.setState({currentIndex:index,currentEntity:record})
    },
    render(){
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
                                   rowSelection={model.rowSelection}
                                   onRowClick={this.handleRowClick}
                                   rowClassName={(record,index)=>{return index==this.state.currentIndex?'row-selected':''}}
                            />
                        </Panel>
                    </Col>
                    <Col span="12" style={{paddingLeft:'16px'}}>
                        <Panel title="权限分配">

                        </Panel>
                    </Col>
                </Row>
            </div>
        </div>
    }
})

module.exports = qxgl;