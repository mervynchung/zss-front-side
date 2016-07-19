import React from 'react'
import Panel from 'component/compPanel'
import {Button,Icon,Form,Input,notification,Select,Row,Col} from 'antd';
import config from 'common/configuration'
import auth from 'common/auth'
import req from 'reqwest'

const Option = Select.Option;
const FormItem = Form.Item;
const createForm = Form.create;

const token = auth.getToken();
const JG_ID = auth.getJgid();
const CUSTOMER_URL = config.HOST + config.URI_API_PROJECT + '/customers';

//获取客户信息列表
const addCustomers = function (param) {
    return req({
        url: CUSTOMER_URL,
        method: 'post',
        type: 'json',
        contentType:'application/json',
        data: JSON.stringify(param),
        headers:{'x-auth-token':token}
    })
};

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
    getInitialState(){
        return {
            updating: false
        }
    },
    getDefaultProps(){
        return {
            onSubmit: {}
        }
    },
    setFinished(boolean){
        this.props.onSaved(boolean);
    },
    handleReset(e) {
        e.preventDefault();
        this.props.form.resetFields();
    },
    handleSubmit(e){
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((errors, values) => {
            if (!!errors) {
                console.log('Errors in form!!!');
                return;
            }
            console.log('Submit!!!');
            console.log(values);
        })
        let value = this.props.form.getFieldsValue();
        value.JG_ID = JG_ID;
        addCustomers(value).then(resp=>{
            this.setFinished(true);
            this.props.form.resetFields();
            notification.success({
                duration: 2,
                message: '操作成功',
                description: '新的客户信息已添加'
            });
        }).fail(e=>{
            notification.error({
                duration: 2,
                message: '操作失败',
                description: '可能网络访问原因，请稍后尝试'
            });
        });
    },
    render(){
        let title = '新增客户信息';
        const { getFieldProps } = this.props.form;
        return <Panel title={title}>
            <div className="new-form">
                <Form horizontal onSubmit={this.handleSubmit} form={this.props.form}>
                    <Row>
                        <Col span="9">
                            <FormItem
                                labelCol={{span: 7}} wrapperCol={{span: 15}}
                                label="单位名称"
                                required = {true}>
                                <Input placeholder="单位名称" {...getFieldProps('DWMC')}/>
                            </FormItem>
                        </Col>
                        <Col span="15">
                            <FormItem
                                labelCol={{span: 4}} wrapperCol={{span: 20}}
                                label="单位地址">
                                <Input placeholder="单位地址" {...getFieldProps('DWDZ')}/>
                            </FormItem>
                        </Col>
                    </Row>
                    <Row>
                        <Col span="9">
                            <FormItem
                                labelCol={{span: 7}} wrapperCol={{span: 15}}
                                label="纳税人识别号">
                                <Input placeholder="纳税人识别号" {...getFieldProps('NSRSBH')}/>
                            </FormItem>
                        </Col>
                        <Col span="9">
                            <FormItem
                                labelCol={{span: 7}} wrapperCol={{span: 15}}
                                label="地税税务登记证号">
                                <Input placeholder="地税税务登记证号" {...getFieldProps('NSRSBHDF')}/>
                            </FormItem>
                        </Col>
                        <Col span="6">
                            <FormItem
                                labelCol={{span: 8}} wrapperCol={{span: 16}}
                                label="纳税人性质">
                                <SelectNSRXZ  {...getFieldProps('NSRXZ')}/>
                            </FormItem>
                        </Col>
                    </Row>
                    <Row>
                        <Col span="9">
                            <FormItem
                                labelCol={{span: 7}} wrapperCol={{span: 15}}
                                label="联系人">
                                <Input placeholder="联系人" {...getFieldProps('LXR')}/>
                            </FormItem>
                        </Col>
                        <Col span="9">
                            <FormItem
                                labelCol={{span: 7}} wrapperCol={{span: 15}}
                                label="联系电话">
                                <Input placeholder="联系电话" {...getFieldProps('LXDH')}/>
                            </FormItem>
                        </Col>
                    </Row>
                    <Row>
                        <Col span="24">
                            <Button
                                type="primary"
                                htmlType="submit"
                                style={{float:'right'}}
                                size="large"
                                loading={this.state.updating}>保存</Button>
                        </Col>
                    </Row>
                </Form>
            </div>
        </Panel>
    }
});
EditForm = createForm()(EditForm);

module.exports = EditForm;