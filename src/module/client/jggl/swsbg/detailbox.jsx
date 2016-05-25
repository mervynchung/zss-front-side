import React from 'react'
import {Row,Col,Form,Checkbox,Button,Input,Select,Tooltip,DatePicker  } from 'antd'
import {SelectorCS,SelectorYear,SelectorTGZT,SelectorJGXZ} from 'component/compSelector'
import './style.css'
// import Top from'./toTop.jsx'
const FormItem = Form.Item;
const createForm = Form.create;
const Option = Select.Option;
let detailBox = React.createClass({
    getDefaultProps(){
        return {
            onSubmit: {},
            submitLoading:false
        }
    },
 handleSubmit(e){
      e.preventDefault();
        this.props.form.validateFieldsAndScroll((errors, values) => {//条件校验处理
      if (!!errors) {
        for(var key in errors){
        var div1 = document.getElementById(key);
        div1.style.backgroundColor="rgba(255, 0, 0, 0.09)"; 
        }
        return;
      }
        let value = this.props.form.getFieldsValue();
        var ls = [];
        const old = this.props.data;
        for(var key in value){
            if (old[key]!=value[key]) {
                if (value[key]=='') {
                    ls.push({mc:Model[key],jzhi:old[key],xzhi:null});
                    }else{
                    ls.push({mc:Model[key],jzhi:old[key],xzhi:value[key]});
                    };
            };
        };
        if (ls.length!=0) {
            value.bgjl=ls;
            this.props.onSubmit(value);
        }else{
            Modal.info({ title: '提示', content: (<div><p>没有变更数据，请检查后提交</p> </div>)});
            return;
        };
    });
    },
    render(){
        const obj = this.props.data;
        const { getFieldProps } = this.props.form;//, { initialValue: {obj}}
         let helper = [];
        helper.push(<p key="helper-0">省外事务所在广东省内设立分所</p>);
        helper.push(<p key="helper-1">请选择有限公司性质</p>);
        return <div className="fix-table table-bordered table-striped">
         <Form horizontal onSubmit={this.handleSubmit} form={this.props.form}>
              <h2>需审批项目变更</h2>
            <table >
                <tbody>
                    <tr>
                        <td style={{width:'180px'}}><span style={{'color':'red',fontSize:'large'}}>*</span><b>单位名称：</b></td>
                        <td ><Input id='dwmc' { ...getFieldProps('dwmc', { initialValue: obj.dwmc,rules: [{ required: true}]})}></Input></td>
                        <td ><span style={{'color':'red',fontSize:'large'}}>*</span><b>所在城市：</b></td>
                        <td style={{textAlign:'left'}}><SelectorCS id='cs' { ...getFieldProps('cs', { initialValue: obj.cs,rules: [{ required: true}]})}></SelectorCS></td>
                    </tr>
                    <tr>
                        <td ><span style={{'color':'red',fontSize:'large'}}>*</span><b>机构性质：</b></td>
                        <td style={{textAlign:'left'}}><Tooltip placement="rightTop" title={helper}><SelectorJGXZ id='swsxz' { ...getFieldProps('swsxz', { initialValue: obj.swsxz,rules: [{ required: true}]})}></SelectorJGXZ></Tooltip></td>
                        <td ><span style={{'color':'red',fontSize:'large'}}>*</span><b>办公地址：</b></td>
                        <td ><Input id='dzhi' { ...getFieldProps('dzhi', { initialValue: obj.dzhi,rules: [{ required: true}]})}></Input></td>
                    </tr>
                    <tr>
                        <td ><span style={{'color':'red',fontSize:'large'}}>*</span><b>注册资金：</b></td>
                        <td ><Input id='zczj' { ...getFieldProps('zczj', { initialValue: obj.zczj,rules: [{ required: true}]})}></Input></td>
                        <td ><span style={{'color':'red',fontSize:'large'}}>*</span><b>注册地址：</b></td>
                        <td ><Input id='zcdz' { ...getFieldProps('zcdz', { initialValue: obj.zcdz,rules: [{ required: true}]})}></Input></td>
                    </tr>
                    <tr >
                        <td ><span style={{'color':'red',fontSize:'large'}}>*</span><b>营业执照号：</b></td>
                        <td ><Input id='yyzzhm' { ...getFieldProps('yyzzhm', { initialValue: obj.yyzzhm,rules: [{ required: true}]})}></Input></td>
                        <td ><span style={{'color':'red',fontSize:'large'}}>*</span><b>正式成立时间：</b></td>
                        <td style={{textAlign:'left'}}><DatePicker id='clrq' { ...getFieldProps('clrq', { initialValue: obj.clrq,rules: [{ required: true}]})}></DatePicker></td>
                    </tr>
                      <tr >
                        <td colSpan="3" style={{textAlign:'left'}}><p>说明：</p><p>需要审批的变更项目提交后将提交中心管理端审批</p><p> 事务所变更审批时，不能再进行变更操作，必须等待审批结束后，才能变更。</p></td>
                        <td ><Col offSpan="8"><Button type="primary" htmlType="submit" loading={this.props.submitLoading}>提交</Button></Col></td>
                    </tr>
                </tbody>
            </table>
      </Form>
        </div>
        
    }
});
detailBox = createForm()(detailBox);
module.exports = detailBox;

