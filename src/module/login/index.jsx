import React from 'react'
import {Input,Form,Checkbox,Button} from 'antd'
import req from 'reqwest'
import config from 'common/configuration'
import store from 'storejs'

const FormItem = Form.Item;
const API_URL = config.HOST + config.URI_API_FRAMEWORK + '/auth';

let login = React.createClass({
    handleSubmit(e){
        e.preventDefault();
        let value = this.props.form.getFieldsValue();
        req({
            url:API_URL,
            method:'post',
            contentType: 'application/json',
            data:JSON.stringify(value)
        }).then(resp=>{
            for(let prop in resp){
                store.set(prop,resp[prop]);
            }
            const { location } = this.props;

            if (location.state && location.state.nextPathname) {
                this.props.router.replace(location.state.nextPathname)
            } else {
                this.props.router.replace('/')
            }
        })

    },
    render(){
        const { getFieldProps } = this.props.form;
        return <div>
            <Form inline onSubmit={this.handleSubmit}>
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
                    <Checkbox {...getFieldProps('agreement')}>记住我</Checkbox>
                </FormItem>
                <Button type="primary" htmlType="submit">登录</Button>
            </Form>
        </div>
    }
});

login = Form.create()(login);

module.exports = login;