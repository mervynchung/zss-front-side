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
        return <div className="new-form">
            <Form horizontal onSubmit={this.handleSubmit} form={this.props.form}>
                <Row>
                    <Col span="9">
                        <FormItem
                            labelCol ={{span: 7}} wrapperCol={{span: 15}}
                            label="单位名称">
                            <Input placeholder="单位名称" {...getFieldProps('DWMC')}/>
                        </FormItem>
                    </Col>
                    <Col span="15">
                        <FormItem
                            labelCol ={{span: 4}} wrapperCol={{span: 20}}
                            label="单位地址">
                            <Input placeholder="单位地址" {...getFieldProps('DWDZ')}/>
                        </FormItem>
                    </Col>
                </Row>
                <Row>
                    <Col span="9">
                        <FormItem
                            labelCol ={{span: 7}} wrapperCol={{span: 15}}
                            label="纳税人识别号">
                            <Input placeholder="纳税人识别号" {...getFieldProps('NSRSBH')}/>
                        </FormItem>
                    </Col>
                    <Col span="9">
                        <FormItem
                            labelCol ={{span: 7}} wrapperCol={{span: 15}}
                            label="地税税务登记证号">
                            <Input placeholder="地税税务登记证号" {...getFieldProps('NSRSBHDF')}/>
                        </FormItem>
                    </Col>
                    <Col span="6">
                        <FormItem
                            labelCol ={{span: 8}} wrapperCol={{span: 16}}
                            label="纳税人性质">
                            <SelectNSRXZ  {...getFieldProps('NSRXZ')}/>
                        </FormItem>
                    </Col>
                </Row>
                <Row>
                    <Col span="9">
                        <FormItem
                            labelCol ={{span: 7}} wrapperCol={{span: 15}}
                            label="联系人">
                            <Input placeholder="联系人" {...getFieldProps('LXR')}/>
                        </FormItem>
                    </Col>
                    <Col span="9">
                        <FormItem
                            labelCol ={{span: 7}} wrapperCol={{span: 15}}
                            label="联系电话">
                            <Input placeholder="联系电话" {...getFieldProps('LXDH')}/>
                        </FormItem>
                    </Col>
                </Row>



                <Row>
                    <Col span="24">
                        <Button type="primary" htmlType="submit" style={{float:'right'}}>保存</Button>
                    </Col>
                </Row>
            </Form>
        </div>
    }
});
EditForm = createForm()(EditForm);

module.exports = React.createClass({

    render(){
        let title = '新增客户信息';
        return <Panel title={title}>

            <EditForm />

        </Panel>
    }
});