/**
 * Created by ming on 2016/3/9.
 */
import '../common/lib.js'
import React from 'react'
import ReactDOM from 'react-dom'
import { Form, Input, Button, Select, Checkbox, Radio } from 'antd';
const FormItem = Form.Item;

let Demo = React.createClass({
    handleSubmit(e) {
        e.preventDefault();
        console.log('收到表单值：', this.props.form.getFieldsValue());
    },

    handleSelectChange(value) {
    console.log(`selected`, value);
},

    render() {
        const { getFieldProps } = this.props.form;
        return (
            <Form inline onSubmit={this.handleSubmit}>
                <FormItem
                    label="账户：">
                    <Input placeholder="请输入账户名"
                        {...getFieldProps('userName')} />
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
                <FormItem
                    id="select"
                    label="Select 选择器："
                    labelCol={{ span: 6 }}
                    wrapperCol={{ span: 14 }}>
                    <Select id="select" size="large" defaultValue="lucy" style={{ width: 200 }} onChange={this.handleSelectChange}>
                        <Option value="jack">jack</Option>
                        <Option value="lucy">lucy</Option>
                        <Option value="disabled" disabled>disabled</Option>
                        < Option value="yiminghe">yiminghe</Option>
                    </Select>
                </FormItem>
                <Button type="primary" htmlType="submit">登录</Button>
            </Form>
        );
    }
});

Demo = Form.create()(Demo);



ReactDOM.render(<Demo />,document.getElementById('react-content'));