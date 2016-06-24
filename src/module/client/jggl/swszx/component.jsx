import React from 'react'
import {Table,Modal,Row,Col,Button,Icon,Alert,Tooltip,Spin,Form,Input,Select,Upload,message } from 'antd'
import Panel from 'component/compPanel'
import auth from 'common/auth'
import req from 'reqwest';
import config from 'common/configuration'


const API_URL = config.HOST + config.URI_API_PROJECT + '/swsbg/swsjgGet1';
const API_URL_P = config.HOST + config.URI_API_PROJECT + '/swsbg/swsjgPut1';
const API_URL_S = config.HOST + config.URI_API_PROJECT + '/swsbg/swsjgPost1';
const ToolBar = Panel.ToolBar;
const createForm = Form.create;
const Option = Select.Option;
let swszxP = React.createClass({
    //初始化state
    getInitialState(){
            return {
                data: [],
                searchToggle: false,
                helper: false,
                entity: '',
                detailHide: true,
            }
        },

    handleSPSubmit(value){
          this.setState({sPLoading:true});
            var ls = value;
             req({
                url: API_URL_S,
                type: 'json',
                method: 'post',
                data: JSON.stringify(ls),
                contentType: 'application/json',
                headers:{'x-auth-token':auth.getToken()}
            }).then(resp=> {
                        var that=this;
                        Modal.success({
                            title: '提交成功',
                            content: (
                                <div>
                                    <p>提交成功，请等待管理中心审核</p>
                                </div>  ),
                            onOk() {
                                       that.fetchData();
                                    },
                        });
                      this.setState({sPLoading:false});
            }).fail(err=> {
                Modal.error({
                    title: '数据获取错误',
                    content: (
                        <div>
                            <p>无法从服务器返回数据，需检查应用服务工作情况</p>
                            <p>Status: {err.status}</p>
                        </div>  )
                });
            })
        },

        //帮助按钮
    handleHelper(){
        this.setState({helper: !this.state.helper})
    },

    //手动关闭帮助提示
    handleHelperClose(){
        this.setState({helper: false})
    },
     normFile(e) {
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  },

    render(){
        //定义工具栏内容
        
        let toolbar = <ToolBar>
                <Button type="primary" onClick={this.handleHelper}><Icon type="question"/></Button>
        </ToolBar>;

        //定义提示内容
        let helper = [];
        helper.push(<p key="helper-0">1)    变更备案需要审批项：单位名称、所在城市、地址、机构性质、注册资金等</p>);
        helper.push(<p key="helper-1">2)    法人在变更备案页面是无法变更的</p>);
        const { getFieldProps, getFieldError, isFieldValidating } = this.props.form;
        const props = {
              name: 'file',
              action: '/api/zs/swszx/swszxfjPost1',
              headers:{'x-auth-token':auth.getToken()},
              onChange(info) {
                if (info.file.status !== 'uploading') {
                  console.log(info.file, info.fileList);
                }
                if (info.file.status === 'done') {
                  message.success(`${info.file.name} 上传成功。`);
                } else if (info.file.status === 'error') {
                  message.error(`${info.file.name} 上传失败。`);
                }
              },
            };
        return <div className="khd-jggl-swszx">
        <div className="fix-table table-bordered table-striped">
                {this.state.helper && <Alert message="变更备案申请帮助" description={helper} type="info" closable onClose={this.handleHelperClose}/>}
                <Panel title="事务所信息变更" toolbar={toolbar}>
                   <Form horizontal onSubmit={this.showConfirm} form={this.props.form}>
              <h2>需审批项目变更</h2>
            <table >
                <tbody>
                    <tr>
                        <td ><b>注销原因说明：</b></td>
                        <td colSpan="3" ><Col span="20"><Input type="textarea" rows="3" { ...getFieldProps('bgcszczm')}></Input></Col></td>
                    </tr>
                    <tr>
                        <td ><b>注销类别：</b></td>
                        <td colSpan="3" >  <Select  id="cx-swsxz"  style={{ width: 200 }}  { ...getFieldProps('bgcszczm', {rules: [{ required: true}]})} placeholder="请选择机构性质" >
                                                        <Option value="1">合伙事务所</Option>
                                                        <Option value="2">有限公司</Option>
                                                        <Option value="3" >无</Option>
                                                      </Select>
                       </td>
                    </tr>
                    <tr>
                        <td ><b>附 件：</b></td>
                        <td colSpan="3" > <Upload  {...props}
                                                {...getFieldProps('upload', {
                                                  valuePropName: 'file',
                                                })}><Button type="ghost"><Icon type="upload" /> 点击上传</Button>
                                              </Upload>
                       </td>
                    </tr>
                        <tr >
                        <td ></td>
                        <td ><Col offSpan="8"><Button style={{float:'right'}} type="primary" htmlType="submit" >提交</Button></Col></td>
                    </tr>
                   
                        </tbody>
                    </table>
              </Form>
                </Panel>
            </div>
        </div>
    }
});
swszxP = createForm()(swszxP);
module.exports = swszxP;//loading={this.props.submitLoading}