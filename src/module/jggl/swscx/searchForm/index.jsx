import React from 'react'
import {  DatePicker,Modal,Form, Input, Select,Table, Icon,Tabs,Button,Row,Col,message }from 'antd'

const FormItem = Form.Item;
const createForm = Form.create;
let searchForm = React.createClass({
    getDefaultProps(){
        return {
            onSubmit: {}
        }
    },
    handleReset(e) {
        e.preventDefault();
        this.props.form.resetFields();
        this.handleSubmit(e);
    },
    handleSubmit(e){
        e.preventDefault();
        this.props.form.validateFields((errors, values) => {//条件校验处理
      if (!!errors) {
        alert('条件输入错误');
        return;
      }
        let value = this.props.form.getFieldsValue();
        this.props.onSubmit(value);
    });
    },
    disabledStartDate(rule, value, callback) {//日期校验规则方法
     const form = this.props.form;
     if (value && value.getTime() >= Date.now()) {
      callback(new Error('这是个将来的时间'));
    } else if (form.getFieldValue('clsj2')) {
       if (value.getTime() > form.getFieldValue('clsj2').getTime() ) {
      callback(new Error('最小时间大于最大时间'));
    } else {
      callback();
    }
     }else {
      callback();
    };
 
  },
  disabledEndDate(rule, value, callback) {//日期校验规则方法
    const form = this.props.form;
    if (form.getFieldValue('clsj')) {
       if (value&&value.getTime() < form.getFieldValue('clsj').getTime() ) {
      callback(new Error('最大时间小于最小时间'));
    }else {
      callback();
    }
    }else {
      callback();
    };
  },
    render(){
        const formItemLayout = {//表单样式
      labelCol: { span: 10 },
      wrapperCol: { span: 14 },
    };  
    const formItemLayout2 = {//表单样式2
      labelCol: { span: 4 },
      wrapperCol: { span: 20 },
    };
    const formItemLayout3 = {//表单样式3
      labelCol: { span: 6 },
      wrapperCol: { span: 18 },
    };
    const { getFieldProps } = this.props.form;//获取表单输入组件值的特定写法
      const clsj = getFieldProps('clsj', {//设置日期输入组件校验规则
      rules: [
        { 
           type: 'date', 
           message: '请输入最小时间',
         },{
          validator: this.disabledStartDate,
        }
      ]
    });
       const clsj2 = getFieldProps('clsj2', {//设置日期输入组件校验规则
      rules: [
        {
          type: 'date', 
          message: '请输入最大时间'
           },
        { validator: this.disabledEndDate, }
      ]
    });
        return <div className="search-form">
            <Form horizontal onSubmit={this.handleSubmit} form={this.props.form}>
            <Row>
                    <Col span="6">
                <FormItem
      id="cx-dwmc"
      label="单位名称："
      {...formItemLayout}>
      <Input id="cx-dwmc" {...getFieldProps('dwmc')} placeholder="请输入搜索条件" />
    </FormItem>
</Col>
                    <Col span="6">
    <FormItem
      id="cx-zsbh"
      label="证书编号："
      {...formItemLayout}>
      <Input id="cx-zsbh" {...getFieldProps('zsbh')} placeholder="请输入搜索条件" />
    </FormItem> 
</Col>
                    <Col span="6">
    <FormItem
      id="cx-cs"
      label="城市："
      {...formItemLayout}>
      <Select showSearch id="cx-cs"  {...getFieldProps('cs')}  optionFilterProp="children" notFoundContent="无法找到" placeholder="请选择城市">
        <Option value="1">广州市</Option>
        <Option value="2">珠海市</Option>
        <Option value="3" >汕头市</Option>
        <Option value="4">韶关市</Option>
        <Option value="5">佛山市</Option>
        <Option value="6">江门市</Option>
        <Option value="7">湛江市</Option>
        <Option value="8">茂名市</Option>
        <Option value="9">肇庆市</Option>
        <Option value="10">惠州市</Option>
        <Option value="11">梅州市</Option>
        <Option value="12">汕尾市</Option>
        <Option value="13">河源市</Option>
        <Option value="14">阳江市</Option>
        <Option value="15">清远市</Option>
        <Option value="16">东莞市</Option>
        <Option value="17">中山市</Option>
        <Option value="18">潮州市</Option>
        <Option value="19">揭阳市</Option>
        <Option value="20">云浮市</Option>
      </Select>
    </FormItem>
</Col>
                    <Col span="6">
<FormItem
      id="cx-swsxz"
      label="机构性质："
      {...formItemLayout}>
      <Select  id="cx-swsxz"  {...getFieldProps('swsxz')} placeholder="请选择机构性质" >
        <Option value="1">合伙事务所</Option>
        <Option value="2">有限公司</Option>
        <Option value="3" >无</Option>
      </Select>
    </FormItem>
 </Col>
                    
                    
                </Row>
      
      <Row>
                  
                    <Col span="12">
    <FormItem
      id="cx-zrs"
      label="总人数："
      {...formItemLayout2}>
       <Row>
        <Col span="11">
          <Input id="zrs1" {...getFieldProps('zrs')} placeholder="请输入人数"/>
        </Col>
        <Col span="2">
          <p className="ant-form-split">至</p>
        </Col>
        <Col span="11">
           <Input id="zrs2" {...getFieldProps('zrs2')} placeholder="请输入人数"/>
        </Col>
        
      </Row>
    </FormItem>
    </Col>
                    <Col span="12">
    <FormItem
      id="cx-zyrs"
      label="执业人数："
      {...formItemLayout2}>
       <Row>
        <Col span="11">
          <Input id="zyrs1" {...getFieldProps('zyrs')} placeholder="请输入人数"/>
        </Col>
        <Col span="2">
          <p className="ant-form-split">至</p>
        </Col>
        <Col span="11">
           <Input id="zyrs2" {...getFieldProps('zyrs2')} placeholder="请输入人数"/>
        </Col>
        
      </Row>
    </FormItem>
     </Col>
                </Row>
                 <Row>
                  
                    <Col span="12">
                <FormItem
      id="cx-zczj"
      label="注册资金（万元）："
      {...formItemLayout3}>
      
        <Col span="11">
          <Input id="zj1" {...getFieldProps('zczj')} placeholder="请输入金额"/>
        </Col>
        <Col span="2">
          <p className="ant-form-split">至</p>
        </Col>
        <Col span="11">
           <Input id="zj2"  {...getFieldProps('zczj2')} placeholder="请输入金额"/>
        </Col>
    </FormItem>
        </Col>
                    <Col span="12">
    <FormItem
      id="cx-clsj"
      label="成立日期："
      {...formItemLayout2}>
        <Col span="11">
        <FormItem>
        <DatePicker id="clsj1"  placeholder="请选择日期" {...clsj} /></FormItem>
        </Col>
        <Col span="2">
          <p className="ant-form-split">至</p>
        </Col>
        <Col span="11">
         <FormItem>
            <DatePicker id="clsj2" placeholder="请选择日期"  {...clsj2} /></FormItem>
        </Col>
    </FormItem>
     </Col>
                </Row>
                <Row>
                    <Col span="2" offset="20"><Button type="primary" htmlType="submit">查询</Button></Col>
                    <Col span="2"><Button type="ghost" onClick={this.handleReset}>重置</Button></Col>
                </Row>
            </Form>
        </div>
    }
});
searchForm = createForm()(searchForm);

module.exports = searchForm;