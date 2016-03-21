import React from 'react'
import {Tree,Col,Row} from 'antd'
import CompPageHead from '/component/CompPageHead'
import req from 'reqwest'

const TreeNode = Tree.TreeNode;
function getTreeData(){
    req({
        url:'/api/fw/asidemenu',
        type:'json',
        method:'get'
    })
    .then((resp)=>{
        resp.map((item)=>{

        })
    })
}


const mksz = React.createClass({
    render(){
        return <div>
            <CompPageHead heading={'模块设置'} />
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