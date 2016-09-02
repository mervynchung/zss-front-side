  import React from 'react'
import { Router, Route, Link } from 'react-router'
import {Table,Modal,Row,Col,Button,Icon,Alert,Input,Radio,Form,Select } from 'antd'
import config from 'common/configuration'

const createForm = Form.create;
const RadioGroup = Radio.Group;
const Option = Select.Option;
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
                                      <td >{this.props.jgnj?<Select  placeholder="请选择" { ...getFieldProps('jgnj')} style={{width:'100%'}} >
                                                                        <Option key="1" value={1}>1、年检予以通过</Option>
                                                                        <Option key="2" value={2}>2、年检不予通过，责令2个月整改</Option>
                                                                        <Option key="3" value={3}><p>3、情节严重，责令其整改期间停止</p><p>执业，收回税务师事务所执业证</p></Option>
                                                                        <Option key="4" value={4}><p>4、整改期满仍达不到要求，注销税务</p><p>师事务所执业证</p></Option>
                                                                        <Option key="5" value={5}>5、整改期满仍达不到要求，向社会公告</Option>
                                                                        <Option key="6" value={6}>6、年检不予以通过</Option>
                                                                        <Option key="7" value={7}>7、资料填写有误，请重新填写</Option>
                                                                    </Select>:
                                              <RadioGroup { ...getFieldProps('ispass',{ initialValue:config.AGREE_SP})}>
                                                  <Radio key="a" value={config.AGREE_SP}>同意</Radio>
                                                  <Radio key="b" value={config.DISAGREE_SP}>驳回</Radio>  
                                              </RadioGroup> }
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