import React from 'react'
import {Input,Form,Checkbox,Button} from 'antd'
import req from 'reqwest'
import config from 'common/configuration'
import store from 'storejs'
import './style.css'


const FormItem = Form.Item;

let loginForm = React.createClass({
    handleSubmit(e){
        e.preventDefault();
        this.props.onSubmit(this.props.form.getFieldsValue());
    },
    render(){
        const { getFieldProps } = this.props.form;
        return <Form inline onSubmit={this.handleSubmit}>
            <FormItem
                label="账户：">
                <Input placeholder="请输入账户名"
                    {...getFieldProps('username')} />
            </FormItem>
            <FormItem
                label="密码：">
                <Input type="password" placeholder="请输入密码"
                    {...getFieldProps('password')} />
            </FormItem>
            <FormItem>
                <label className="ant-checkbox-inline">
                    <Checkbox
                        {...getFieldProps('agreement')} />记住我
                </label>
            </FormItem>
            <Button type="primary" htmlType="submit">登录</Button>
        </Form>
    }
});

loginForm = Form.create()(loginForm);

module.exports = loginForm;