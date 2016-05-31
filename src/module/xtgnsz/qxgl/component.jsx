import './style.css'
import React from 'react'
import {Table,Col,Row} from 'antd'
import Panel from 'component/compPanel'


//权限管理
const qxgl = React.createClass({
    render(){
        return <div className="qxgl">
            <Row>
                <Col span="12">
                    <Table></Table>
                </Col>
                <Col span="12"></Col>
            </Row>

        </div>
    }
})

module.exports = qxgl;