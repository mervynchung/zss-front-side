import React from 'react'
import {Row,Col,Form,Button,Input,Modal,DatePicker,Select} from 'antd'
import {SelectorCS,SelectorYear,SelectorTGZT} from 'component/compSelector'
import './style.css'

const FormItem = Form.Item;
const createForm = Form.create;
const Option = Select.Option;
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
     if (value && value.getTime() > Date.now()) {
      callback(new Error('这是个将来的时间'));
    } else if (form.getFieldValue('sbrq2')) {
       if (value.getTime() > form.getFieldValue('sbrq2').getTime() ) {
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
    if (form.getFieldValue('sbrq')) {
       if (value&&value.getTime() < form.getFieldValue('sbrq').getTime() ) {
      callback(new Error('最大时间小于最小时间'));
    }else {
      callback();
    }
    }else {
      callback();
    };
  },
    render(){
        const { getFieldProps } = this.props.form;
        const formItemLayout = {
            labelCol: {span: 8},
            wrapperCol: {span: 16}
        };
        const formItemLayout2 = {//表单样式2
      labelCol: { span: 4 },
      wrapperCol: { span: 20 },
    };
        const clsj = getFieldProps('sbrq', {//设置日期输入组件校验规则
      rules: [
        { 
           type: 'date', 
         },{
          validator: this.disabledStartDate,
        }
      ]
    });
       const clsj2 = getFieldProps('sbrq2', {//设置日期输入组件校验规则
      rules: [
        {
          type: 'date', 
           },
        { validator: this.disabledEndDate, }
      ]
    });
        return <div className="search-form">
            <Form horizontal onSubmit={this.handleSubmit} form={this.props.form}>
                <Row>
                    <Col span="8">
                        <FormItem
                          {...formItemLayout}
                          label="事务所名称：">
                            <Input placeholder="事务所名称" {...getFieldProps('dwmc')}/>
                        </FormItem>
                    </Col>
                    <Col span="8">
                        <FormItem
                          {...formItemLayout}
                          label="姓名：">
                            <Input placeholder="姓名" {...getFieldProps('xm')}/>
                        </FormItem>
                    </Col>
                    <Col span="8">
                        <FormItem
                          {...formItemLayout}
                          label="状态：">
                           <Select { ...getFieldProps('spzt')} placeholder="选择状态"   >
                            <Option key="1">审批中</Option>
                            <Option key="2">通过</Option>
                            <Option key="3">不通过</Option>
                        </Select>
                        </FormItem>
                    </Col>
                    </Row>
                     <Row>
                    <Col span="16">
                        <FormItem
                              label="上报时间："
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