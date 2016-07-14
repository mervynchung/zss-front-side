import React from 'react'
import Panel from 'component/compPanel'
import {Button,Icon,Form,Input,notification,Select,Row,Col} from 'antd'

const Option = Select.Option;
const FormItem = Form.Item;
const createForm = Form.create;

//定义纳税人性质下拉
const SelectNSRXZ = React.createClass({
    render(){
        return <Select {...this.props} allowClear>
            <Option value="0">一般纳税人</Option>
            <Option value="1">小规模纳税人</Option>
        </Select>
    }
});
//定义客户信息录入表单
let EditForm = React.createClass({
    getDefaultProps(){
        return {
            onSubmit: {}
        }
    },
    handleReset(e) {
        e.preventDefault();
        this.props.form.resetFields();
    },
    handleSubmit(e){
        e.preventDefault();
        let value = this.props.form.getFieldsValue();
        this.props.onSubmit(value);
    },
    render(){
        const { getFieldProps } = this.props.form;
        const formItemLayout = {
            labelCol: {span: 4},
            wrapperCol: {span: 10}
        };
        return <div className="new-form">
            <Form horizontal onSubmit={this.handleSubmit} form={this.props.form}>
                <Row>
                <Col span="24">
                    <FormItem
                      {...formItemLayout}
                      label="单位名称">
                        <Input placeholder="单位名称" {...getFieldProps('DWMC')}/>
                    </FormItem>
                </Col>
            </Row>
                <Row>
                    <Col span="24">
                        <FormItem
                          {...formItemLayout}
                          label="单位地址">
                            <Input placeholder="单位地址" {...getFieldProps('DWDZ')}/>
                        </FormItem>
                    </Col>
                </Row>
                <Row>
                    <Col span="24">
                        <FormItem
                          labelCol={{span: 4}} wrapperCol={{span: 6}}
                          label="联系人">
                            <Input placeholder="联系人" {...getFieldProps('LXR')}/>
                        </FormItem>
                    </Col>
                </Row>
                <Row>
                    <Col span="24">
                        <FormItem
                          labelCol={{span: 4}} wrapperCol={{span: 4}}
                          label="联系电话">
                            <Input placeholder="联系电话" {...getFieldProps('LXDH')}/>
                        </FormItem>
                    </Col>
                </Row>
                <Row>
                    <Col span="24">
                        <FormItem
                          labelCol={{span: 4}} wrapperCol={{span: 6}}
                          label="纳税人识别号">
                            <Input placeholder="纳税人识别号" {...getFieldProps('NSRSBH')}/>
                        </FormItem>
                    </Col>
                </Row>
                <Row>
                    <Col span="24">
                        <FormItem
                          labelCol={{span: 4}} wrapperCol={{span: 6}}
                          label="地税税务登记证号">
                            <Input placeholder="地税税务登记证号" {...getFieldProps('NSRSBHDF')}/>
                        </FormItem>
                    </Col>
                </Row>
                <Row>
                    <Col >
                        <FormItem
                          labelCol={{span: 4}} wrapperCol={{span: 6}}
                          label="纳税人性质">
                            <SelectNSRXZ  {...getFieldProps('NSRXZ')}/>
                        </FormItem>
                    </Col>
                </Row>
                <Row>
                    <Col span="4" offset="6">
                        <Button type="primary" htmlType="submit" style={{marginRight:'16px'}}>保存</Button>
                        <Button type="ghost" onClick={this.handleReset}>重置</Button>
                    </Col>
                </Row>
            </Form>
        </div>
    }
});
EditForm = createForm()(EditForm);

module.exports = React.createClass({
    pageJump(){
        this.props.onPageJump('list')
    },
   render(){
       let title = <Button onClick={this.pageJump} type="ghost"><Icon type="left"/>返回</Button>
       return <Panel title={title}>
           <h2><Icon
             style={{color:'#A6E33C',marginRight:'16px',fontWeight:'500'}}
             type="edit" /> 添加新客户信息</h2>
           <div style={{padding:'32px 0'}} >
               <EditForm />

           </div>
       </Panel>
   }
});