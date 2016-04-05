import './style.css'
import React from 'react'
import {Tree,Col,Row,Input,Form,Button,Icon,message,Tooltip,Checkbox} from 'antd'
import CompPageHead from 'component/CompPageHead'
import Panel from 'component/compPanel'
import Toolbar from './compToolbar'
import req from 'reqwest'
import utils from 'common/utils'

const TreeNode = Tree.TreeNode;
const FormItem = Form.Item;
const visble = {
  'Y':true,'N':false
}

/*const json = [{"id": 1, "pid": 0, "name": "系统管理", "href": null, "orderNo": 1, "path": "000", "visble": "Y"},
 {
 "id": 2,"pid": 0, "name": "模块设置", "href": 'xtgl/mksz', "orderNo": 2, "path": "000", "visble": "Y"},
 {
 "id": 3, "pid": 1, "name": "机构管理", "href": null, "orderNo": null, "path": "000-001", "visble": "Y"
 }]
 const data  = utils.getTreeData(json)*/
/**
 *  树节点组件，内部节点结构按照给定的JSON对象数组生成
 *  @props.data {Array}
 */
const TreeView = React.createClass({
  getDefaultProps(){
    return {
      data: ''
    }
  },
  handleSelect(key){
    this.props.onSelect(key[0])
  },
  getTreeNodes(data){
    let res = data.map((item) => {
      if (item.children) {
        return <TreeNode title={item.name+' - '+item.orderNo} key={item.key}
                         disableCheckbox>{this.getTreeNodes(item.children)}</TreeNode>;
      }
      return <TreeNode title={item.name+' - '+item.orderNo} key={item.key} isLeaf={true} disableCheckbox/>;
    });
    return res;
  },
  render(){
    const data = this.props.data;
    if (data) {
      const treeNodes = this.getTreeNodes(data)
      return <div>
        <Tree onSelect={this.handleSelect}
              defaultExpandAll
              checkable>
          {treeNodes}
        </Tree>
      </div>
    }
    return <div style={{padding:'20px'}}>暂无数据</div>
  }
})


let TreeNodeEdit = React.createClass({
  handleSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(this.props.form.getFieldsValue())
  },
  render(){
    let data = this.props.data;
    const { getFieldProps } = this.props.form;
    const formItemLayout = {
      labelCol: {span: 8},
      wrapperCol: {span: 16},
    };
    return <Form horizontal onSubmit={this.handleSubmit}>
      <FormItem
        {...formItemLayout}
        label="模块名称：">
        <Input placeholder="名称"
          {...getFieldProps('name',{initialValue: data.name})}/>
      </FormItem>
      <FormItem
        {...formItemLayout}
        label="链接地址：">
        <Input placeholder="URL..."
          {...getFieldProps('href', {initialValue: data.href})}/>
      </FormItem>
      <FormItem
        {...formItemLayout}
        label="排序号：">
        <Input  placeholder="用于排序的号码"
          {...getFieldProps('orderNo', {initialValue: data.orderNo})}/>
      </FormItem>
      <FormItem
        {...formItemLayout}
        label="图标：">
        <Input placeholder="图标代号"
          {...getFieldProps('icon', {initialValue: data.icon})}/>
      </FormItem>
      <FormItem
        {...formItemLayout}
        label={<span>默认显示 <Tooltip title="选中即该模块默认显示"><Icon type="question-circle-o" /></Tooltip> ：</span>}>
        <label>
          <Checkbox {...getFieldProps('visble',{valuePropName: 'checked',initialValue: visble[data.visble]})}/>显示
        </label>
      </FormItem>
      <Row>
        <Col offset="8"><Button  type="primary" htmlType="submit">保存修改</Button></Col>
      </Row>
    </Form>
  }
})
TreeNodeEdit = Form.create()(TreeNodeEdit);


const mksz = React.createClass({
  getInitialState(){
    return {
      nodes: [],
      currentNode: ''
    }
  },
  handleSelect(key){
    this.setState({
      currentNode: this.state.nodes[key]
    })
  },
  handleSubmit(value){
    console.log(value)
    req({
      url: 'api/fw/asidemenu/1',
      type: 'json',
      method: 'put',
      data: JSON.stringify(value),
      contentType:'application/json'
    })
      .then()

  },
  componentDidMount(){
    req({
      url: '/api/fw/asidemenu',
      type: 'json',
      method: 'get'
    })
      .then((resp) => {
        this.setState({nodes: resp});
      })
      .fail((err, msg)=> {
        message.error('Status Code:' + err.status + '  api错误 ')
      });
  },

  render(){
    const data = utils.getTreeData(this.state.nodes)
    return <div className="mksz">
      <CompPageHead heading={'模块设置'}/>
      <div className="wrap">
        <Panel>
          <Row>
            <Col span="8" className="tree-box">
              <Row>
                <Toolbar/>
                <TreeView data={data} onSelect={this.handleSelect}/>
              </Row>
            </Col>
            <Col span="10" offset="5" className="tree-node-edit">
              <Row><Col><TreeNodeEdit data={this.state.currentNode} onSubmit={this.handleSubmit}/></Col>
              </Row>
            </Col>
          </Row>
        </Panel>

      </div>
    </div>
  }
})

module.exports = mksz;