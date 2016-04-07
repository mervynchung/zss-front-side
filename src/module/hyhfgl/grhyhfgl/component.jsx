
import React from 'react'

import'./style.css'
import Hflb from './compHflb'
import { Select, Radio, Checkbox, Button, DatePicker, InputNumber, Form, Row, Col, Input, Cascader } from 'antd';
const Option = Select.Option;
const RadioGroup = Radio.Group;
const createForm = Form.create;
const FormItem = Form.Item;



const columns = [{
  title: '序号',
  dataIndex: 'xh',
  key: 'xh',
},{
  title: '年度',
  dataIndex: 'ND',
  key: 'ND',
  sorter:true,
}, {
  title: '地区',
  dataIndex: 'DQ',
  key: 'DQ',
  sorter:true,
},{
  title: '事务所名称',
  dataIndex: 'JGNAME',
  key: 'JGNAME',
}, {
  title: '总缴费金额',
  dataIndex: 'SEX',
  key: 'SEX',
},{
  title: '缴费时间',
  dataIndex: 'JFSJ',
  key: 'JFSJ',
},{
  title: '操作',
  key: 'operation',
  render(text) {
    return (
      <span>
        <a href="#">查看</a>
      </span>
    );
  }
}];
 
 let FormItemLayout = React.createClass({
  

  render(){
   
    const { getFieldProps } = this.props.form;
   
   
    const formItemLayout = {
      labelCol: { span: 9},
      wrapperCol: { span: 4 },
    };

    return(
      <Form horizontal form={this.props.form}>

     
       <FormItem
       {...formItemLayout}
      label="年度："
      labelCol={{ span: 9 }}
      wrapperCol={{ span: 4 }}>
      <Input id="control-input"  />
    </FormItem>

        <FormItem
       {...formItemLayout}
      label="地区："
      labelCol={{ span: 9 }}
      wrapperCol={{ span: 4 }}>
      <Input id="control-input"  />
    </FormItem>
        
          
        <FormItem
       {...formItemLayout}
      label="事务所名称："
      labelCol={{ span: 9 }}
      wrapperCol={{ span: 6 }}>
      <Input id="control-input"  />
    </FormItem>

 <FormItem
     {...formItemLayout}
      label="姓名："
      labelCol={{ span: 9 }}
      wrapperCol={{ span: 5 }}>
      <Input type="textarea" id="control-textarea"  rows="4" />
    </FormItem>

    <FormItem
       {...formItemLayout}
      label="个人会费："
      labelCol={{ span: 9 }}
      wrapperCol={{ span: 5 }}>
      <Input id="control-input"  />
    </FormItem>

    <FormItem
       {...formItemLayout}
      label="总缴费金额："
      labelCol={{ span: 9 }}
      wrapperCol={{ span: 5 }}>
      <Input id="control-input"  />
    </FormItem>

    <FormItem
       {...formItemLayout}
      label="缴费日期："
      labelCol={{ span: 9 }}
      wrapperCol={{ span: 5 }}>
      <Input id="control-input"  />
    </FormItem>

      
     
      
  

     
      
        <FormItem
          wrapperCol={{ span: 10, offset: 10 }} >
          <Button type="primary" onClick={this.handleSubmit}>确定</Button>
          &nbsp;&nbsp;&nbsp;
          <Button type="ghost" onClick={this.handleReset}>重置</Button>
        </FormItem>

        
       
      </Form>
      );
      },
 });

 FormItemLayout =createForm()(FormItemLayout)


const grhyhfgl = React.createClass({
  render(){
    return <div>
                <Hflb columns={columns}/>
                 <div className="pp">
                  <div className="from1"><FormItemLayout />
    
                                 </div>
                         </div>
                   </div>
  }
})


module.exports = grhyhfgl;

