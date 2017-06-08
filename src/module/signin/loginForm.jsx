import React from 'react'
import {Input,Form,Button} from 'antd'
import store from 'store2'
import './style.css'


const FormItem = Form.Item;

let loginForm = React.createClass({
    handleSubmit(e){
        e.preventDefault();
        this.props.onSubmit(this.props.form.getFieldsValue());
    },
    render(){
        const { getFieldProps } = this.props.form;
        return <div className="login-form">
            <h2>欢迎来到广东省税务师行业管理信息化系统</h2>
            <h3>系统登录</h3>
            <Form onSubmit={this.handleSubmit}>
                <FormItem>
                    <Input placeholder="用户名"
                        {...getFieldProps('username',{initialValue:store.get('uname')})} />
                </FormItem>
                <FormItem>
                    <Input type="password" placeholder="密码"
                        {...getFieldProps('password')} />
                </FormItem>

                <Button className="submit" type="primary" htmlType="submit" loading={this.props.loading}>登录</Button>
            </Form></div>
    }
});

loginForm = Form.create()(loginForm);

module.exports = loginForm;