import React from 'react'
import {Tree,Col,Row} from 'antd'
import CompContentHead from '../../component/CompContentHead'
import req from 'reqwest'

const TreeNode = Tree.TreeNode;

const mksz = React.createClass({
    render(){
        return <div>
            <CompContentHead />
            <div className="wrap">
                <Row>
                    <Col span="12">

                    </Col>
                    <Col span="12"></Col>
                </Row>
                <Row></Row>
            </div>
        </div>
    }
})

module.exports = mksz;