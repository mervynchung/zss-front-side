import React from 'react'
import {Modal,Form,Col,Row,Button,Input} from 'antd'
import config from 'common/configuration'
import auth from 'common/auth'
import req from 'reqwest'

const FormItem = Form.Item;
const createForm = Form.create;
const confirm = Modal.confirm;

const token = auth.getToken();
const URL = config.HOST + config.URI_API_FRAMEWORK + '/password/';

let modal = React.createClass({
    handleSubmit(){

    },
    //检查密码
    checkPass(rule, value, callback) {
        const { validateFields } = this.props.form;
        if (value) {
            validateFields(['password2'], {force: true});
        }
        callback();
    },
    render(){
        const { getFieldProps } = this.props.form;
        const passwdProps = getFieldProps('password1', {
            rules: [
                {required: true, whitespace: true, min:6,message: '密码至少6位字符'},
                {validator: this.checkPass}
            ]
        });
        const rePasswdProps = getFieldProps('password2', {
            rules: [
                {required: true, whitespace: true, message: '请再次输入密码'},
                {validator: this.checkPass2}
            ]
        });
        return  <Form horizontal onSubmit={this.handleSubmit}>
            <Modal {...this.props} style={{top:'100px'}} title="重置该用户密码" okText="保存">
                <Row>
                    <Col span="24">
                        <FormItem
                            labelCol={{span: 6}} wrapperCol={{span: 6}}
                            label="密码">
                            <Input placeholder="6位以上"
                                   autoComplete="off"
                                   type="password" {...passwdProps}/>
                        </FormItem>
                    </Col>
                </Row>
                <Row>
                    <Col span="24">
                        <FormItem
                            labelCol={{span: 6}} wrapperCol={{span: 6}}
                            label="确认密码">
                            <Input placeholder="再次输入密码"
                                   autoComplete="off"
                                   type="password" {...rePasswdProps}/>
                        </FormItem>
                    </Col>
                </Row>
            </Modal>
        </Form>
    }
});
modal = createForm(modal);
module.exports = modal;