import React from 'react'
import {Tree,Col,Row} from 'antd'
import CompPageHead from 'component/CompPageHead'
import req from 'reqwest'
import utils from 'common/utils'


const TreeNode = Tree.TreeNode;
const json = [{"id": 1, "pid": 0, "name": "系统管理", "href": null, "orderNo": 1, "path": "000", "visble": "Y"}, {
    "id": 2,
    "pid": 0,
    "name": "模块设置",
    "href": null,
    "orderNo": 2,
    "path": "000",
    "visble": "Y"
}, {"id": 3, "pid": 1, "name": "机构管理", "href": null, "orderNo": null, "path": "000-001", "visble": "Y"}]
const data = utils.getTreeData(json);
const TreeView = React.createClass({
    getTreeNodes(data){
        return data.map((item) => {
            if (item.children) {
                return <TreeNode title={item.name} key={item.id}>{this.getTreeNodes(item.children)}</TreeNode>;
            }
            return <TreeNode title={item.name} key={item.id} isLeaf={true}/>;
        });
    },
    render(){
        const treeNodes = this.getTreeNodes(this.props.data)
        return (
            <Tree onSelect={this.onSelect} loadData={this.onLoadData}>
                {treeNodes}
            </Tree>
        )
    }
})

const mksz = React.createClass({

    render(){

        return <div>
            <CompPageHead heading={'模块设置'}/>
            <div className="wrap">
                <Row>
                    <Col span="12">
                        <TreeView data={data}/>
                    </Col>
                    <Col span="12"></Col>
                </Row>
                <Row></Row>
            </div>
        </div>
    }
})

module.exports = mksz;