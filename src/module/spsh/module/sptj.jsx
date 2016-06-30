  import React from 'react'
import { Router, Route, Link } from 'react-router'
import {Table,Modal,Row,Col,Button,Icon,Alert,Input,Radio,Form } from 'antd'
import config from 'common/configuration'

const createForm = Form.create;
const RadioGroup = Radio.Group;

let sptj = React.createClass({
  getDefaultProps(){
        return {
            onSubmit: {}
        }
    },
  handleSubmit(e){
          e.preventDefault();
          let value = this.props.form.getFieldsValue();
          this.props.onSubmit(value);
        },
  render(){
    const { getFieldProps } = this.props.form;
    const lcbzmx = this.props.lcbzmx;
    return <div className="swsbgsp-swsbgsp">
        <table >
                            <tbody >
                                  <tr>
                                      <td ><b>流程：</b></td>
                                      <td colSpan="3">{lcbzmx}</td>
                                      </tr>
                                      <tr >
                                      <td  rowSpan="3"><b>审核意见：</b></td>
                                      <td style={{textAlign:'left'}} rowSpan="3"><Col span="20"><Input type="textarea" rows="3" { ...getFieldProps('spyj')}></Input><p><span style={{'color':'red'}}>*最多允许输入100字</span></p></Col></td>
                                      <td >审核时间：</td>
                                      <td ><a >[系统默认当前时间]</a></td>
                                   </tr>
                                   <tr>
                                      <td>审核选项：</td>
                                      <td >
                                              <RadioGroup { ...getFieldProps('ispass',{ initialValue:config.AGREE_SP})}>
                                                  <Radio key="a" value={config.AGREE_SP}>同意</Radio>
                                                  <Radio key="b" value={config.DISAGREE_SP}>驳回</Radio>  
                                              </RadioGroup> 
                                      </td>
                                   </tr>
                                   <tr>
                                      <td>审核人：</td>
                                      <td ><a >[系统默认当前登陆角色]</a></td>
                                   </tr>
                                    <tr >
                                          <td colSpan="4" ><Button style={{float:'right'}} type="primary" htmlType="submit"  onClick={this.handleSubmit} loading={this.props.loading}>提交</Button></td>
                                    </tr>
                                   </tbody>
                 </table>
              </div>
       }
});
  sptj = createForm()(sptj);
module.exports = sptj;