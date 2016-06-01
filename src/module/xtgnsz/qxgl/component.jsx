import './style.css'
import React from 'react'
import {Table,Col,Row} from 'antd'
import Panel from 'component/compPanel'
import config from 'common/configuration'
import model from './model.jsx'
import req from 'reqwest'

const ROLE_URL = config.HOST + config.URI_API_FRAMEWORK + '/roles';
const pagination={
    pageSize:10
};

//权限管理
const qxgl = React.createClass({
    getInitialState(){
        return {
            roles: []
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
    render(){
        return <div className="qxgl">
            <div className="wrap">
                <Row>
                <Col span="12">
                    <Panel title="角色管理">
                        <Table
                            columns={model.columns}
                            dataSource={this.state.roles}
                            pagination={pagination}
                            rowKey={record => record.id}
                        />
                    </Panel>
                </Col>
                <Col span="12"> </Col>
            </Row>
            </div>
        </div>
    }
})

module.exports = qxgl;