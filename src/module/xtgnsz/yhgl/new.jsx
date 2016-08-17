import React from 'react'
import Panel from 'component/compPanel'
import {Button,Icon,Form,Input,notification,Select,Row,Col} from 'antd';
import {SelectorRoles} from 'component/compSelector'
import config from 'common/configuration'
import auth from 'common/auth'
import req from 'reqwest'
import utils from 'common/utils'

const PanelBar = Panel.ToolBar;
const FormItem = Form.Item;
const createForm = Form.create;

let editForm = React.createClass({
    getInitialState(){
        return {
            loading: false,
            jgDisplay:false,
            jg:[]
        }
    },
    handleSubmit(e){
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((errors, values) => {
            if (!!errors) {
                return;
            }
            let value = this.props.form.getFieldsValue();
            value = utils.transEmpty2Null(value);
            console.log(value)

        })
    },
    //退回用户管理界面
    back(){
        this.props.onBack();
    },
    //检查登录名
    checkUname(rule, value, callback){
        if (!value || value.trim().length < 5) {
            callback("登录名长度至少5个字符")
        } else if (!/^[a-z0-9]+$/.test(value.trim())) {
            callback("必须是字母或汉字")
        } else {
            callback()
        }
    },
    //检查用户名
    checkUserName(rule, value, callback){
        if (!value || value.trim().length < 5) {
            callback("用户名长度至少5个字符")
        } else {
            callback()
        }
    },
    //检查密码
    checkPass(rule, value, callback) {
        const { validateFields } = this.props.form;
        if (value) {
            validateFields(['password2'], { force: true });
        }
        callback();
    },

    checkPass2(rule, value, callback) {
        const { getFieldValue } = this.props.form;
        if (value && value !== getFieldValue('password1')) {
            callback('两次输入密码不一致！');
        } else {
            callback();
        }
    },
    //当角色代码为3/17/18/114时出现事务所分配框
    handleRoleChange(value){
        if(value==3||value==17||value==18||value==114){
            this.setState({jgDisplay:true})
        }else{
            this.setState({jgDisplay:false})
        }
    },
    render(){
        let {title} = this.props;
        const { getFieldProps } = this.props.form;
        const usernameProps = getFieldProps('username', {
            rules: [
                {required: true, min: 5, whitespace: true, message: '用户名不能为空'},
                {validator: this.checkUserName}
            ]
        });
        const unameProps = getFieldProps('uname', {
            rules: [
                {required: true, whitespace: true, message: '登录名不能为空'},
                {validator: this.checkUname}
            ]
        });
        const passwdProps = getFieldProps('password1', {
            rules: [
                {required: true, whitespace: true, message: '请填写密码'},
                {validator: this.checkPass}
            ]
        });
        const rePasswdProps = getFieldProps('password2', {
            rules: [
                {required: true, whitespace: true, message: '请再次输入密码'},
                {validator: this.checkPass2}
            ]
        });
        const roleProps = getFieldProps('role', {
            rules: [
                {required: true, whitespace: true, message: '选择用户所属角色'}
            ]
        });
        const phoneProps = getFieldProps('phone', {
            rules: [
                {required: true, whitespace: true, message: '输入联系电话'}
            ]
        });
        const panelBar = <PanelBar>
            <Button onClick={this.back}>
                <Icon type="rollback"/>返回用户管理

            </Button>
        </PanelBar>;


        return <Panel title={title} toolbar={panelBar}>
            <div className="new-form">
                <Form horizontal onSubmit={this.handleSubmit} form={this.props.form}>
                    <Row>
                        <Col span="24">
                            <FormItem
                                labelCol={{span: 6}} wrapperCol={{span: 6}}
                                label="用户名">
                                <Input placeholder="可以是字母或汉字，长度5位以上" {...usernameProps}/>
                            </FormItem>
                        </Col>
                    </Row>
                    <Row>
                        <Col span="24">
                            <FormItem
                                labelCol={{span: 6}} wrapperCol={{span: 6}}
                                label="登录名">
                                <Input placeholder="只能是字母或数字，长度5位以上" {...unameProps}/>
                            </FormItem>
                        </Col>
                    </Row>
                    <Row>
                        <Col span="24">
                            <FormItem
                                labelCol={{span: 6}} wrapperCol={{span: 6}}
                                label="密码" >
                                <Input placeholder="8位以上"
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
                                <Input placeholder="重复输入密码一遍"
                                       autoComplete="off"
                                       type="password" {...rePasswdProps}/>
                            </FormItem>
                        </Col>
                    </Row>
                    <Row>
                        <Col span="24">
                            <FormItem
                                labelCol={{span: 6}} wrapperCol={{span: 6}}
                                label="身份证号">
                                <Input placeholder="身份证号码" {...getFieldProps('idcard')}/>
                            </FormItem>
                        </Col>
                    </Row>
                    <Row>
                        <Col span="24">
                            <FormItem
                                labelCol={{span: 6}} wrapperCol={{span: 6}}
                                label="联系电话">
                                <Input placeholder="移动电话/固定电话" {...phoneProps}/>
                            </FormItem>
                        </Col>
                    </Row>
                    <Row>
                        <Col span="12">
                            <FormItem
                                labelCol={{span: 12}} wrapperCol={{span: 12}}
                                label="选择用户所属角色">
                                <SelectorRoles
                                    style={{width:'100%'}}
                                    data={this.props.roles}
                                    optionFilterProp="children"
                                    onSelect={this.handleRoleChange}
                                    {...roleProps}/>
                            </FormItem>
                        </Col>
                        {this.state.jgDisplay&&<Col span="12">
                            <FormItem
                              labelCol={{span: 6}} wrapperCol={{span: 12}}
                              label="选择所属事务所">
                                <Select
                                  showSearch
                                  style={{width:'100%'}}
                                  data={this.state.jg}
                                  filterOption={false}
                                  notFoundContent=""
                                  />
                            </FormItem>
                        </Col>}

                    </Row>
                    <Row>
                        <Col span="2" offset="8">
                            <Button
                                type="primary"
                                htmlType="submit"
                                style={{width:'100%'}}
                                size="large"
                                loading={this.state.updating}>保存</Button>
                        </Col>
                    </Row>
                </Form>
            </div>
        </Panel>
    }
});

editForm = createForm({
    mapPropsToFields(props) {
        let result = {};
        for (let prop in props.data) {
            result[prop] = {value: props.data[prop]}
        }
        return result;
    }
})(editForm);

module.exports = editForm;