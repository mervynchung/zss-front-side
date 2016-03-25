import './style.css'
import React from 'react'
import {Tree,Col,Row,Input,Form} from 'antd'
import CompPageHead from 'component/CompPageHead'
import req from 'reqwest'
import utils from 'common/utils'

const TreeNode = Tree.TreeNode;
const FormItem = Form.Item;
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

/**
 *  树节点组件，内部节点结构按照给定的JSON对象数组生成
 *  @props.data {Array}
 */
const TreeView = React.createClass({
    onSelect(key,info){
        console.log('key ',key);
        console.log('info ', info)
    },
    getTreeNodes(data){
        let res =  data.map((item) => {
            if (item.children) {
                return <TreeNode title={item.name+' - '+item.orderNo} key={item.id} disableCheckbox>{this.getTreeNodes(item.children)}</TreeNode>;
            }
            return <TreeNode title={item.name+' - '+item.orderNo} key={item.id} isLeaf={true} disableCheckbox/>;
        });
        return res;
    },
    render(){
        const treeNodes = this.getTreeNodes(this.props.data)
        return (
            <Tree onSelect={this.onSelect}
                  defaultExpandAll
                  checkable >
                {treeNodes}
            </Tree>
        )
    }
})

let TreeNodeEdit = React.createClass({
    handleSubmit(e){
        e.preventDefault();
    },
    render(){
        const formItemLayout = {
            labelCol: { span: 6 },
            wrapperCol: { span: 14 },
        };
        return <Form horizontal onSubmit = {this.handleSubmit}>
            <FormItem
                {...formItemLayout}
                label="模块名称：">
                <Input id="control-input" placeholder="名称" />
            </FormItem>
            <FormItem
                {...formItemLayout}
                label="链接地址：">
                <Input id="control-input" placeholder="URL..." />
            </FormItem>
            <FormItem
                {...formItemLayout}
                label="排序号：">
                <Input id="control-input" placeholder="用于排序的号码" />
            </FormItem>
            <FormItem
                {...formItemLayout}
                label="图标：">
                <Input id="control-input" placeholder="图标代号" />
            </FormItem>
            </Form>
            }
})

TreeNodeEdit = Form.create()(TreeNodeEdit);
const mksz = React.createClass({

    render(){
        return <div className="mksz">
            <CompPageHead heading={'模块设置'}/>
            <div className="wrap">
                <Row className = "panel">
                    <Col span="12">
                        <TreeView data={data}/>
                    </Col>
                    <Col span="12">
                        <TreeNodeEdit/>
                    </Col>
                </Row>
                <Row></Row>
            </div>
        </div>
    }
})

module.exports = mksz;