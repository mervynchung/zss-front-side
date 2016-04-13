import React from 'react'
import {Row,Col,Form,Button,Input,Modal} from 'antd'
import './style.css'

const FormItem = Form.Item;
const createForm = Form.create;
let AdvancedSearchForm = React.createClass({
    render(){
        const formItemLayout = {
            labelCol: {span: 8},
            wrapperCol: {span: 16},
        };
        return <Form horizontal>
            <Row>
                <Col span="8">
                    <FormItem
                        {...formItemLayout}
                        label="模块名称：">
                        <Input placeholder="名称"/>
                    </FormItem>
                </Col>
                <Col span="8">
                    <FormItem
                        {...formItemLayout}
                        label="链接地址：">
                        <Input placeholder="URL..."/>
                    </FormItem>
                </Col>
                <Col span="8">
                    <FormItem
                        {...formItemLayout}
                        label="排序号：">
                        <Input placeholder="用于排序的号码"/>
                    </FormItem>
                </Col>
            </Row>
            <Row>
                <Col span="8">
                    <FormItem
                        {...formItemLayout}
                        label="模块名称：">
                        <Input placeholder="名称"/>
                    </FormItem>
                </Col>
                <Col span="8">
                    <FormItem
                        {...formItemLayout}
                        label="链接地址：">
                        <Input placeholder="URL..."/>
                    </FormItem>
                </Col>
                <Col span="8">
                    <FormItem
                        {...formItemLayout}
                        label="排序号：">
                        <Input placeholder="用于排序的号码"/>
                    </FormItem>
                </Col>
            </Row>
            <Row>
                <Col span="8">
                    <FormItem
                        {...formItemLayout}
                        label="模块名称：">
                        <Input placeholder="名称"/>
                    </FormItem>
                </Col>
                <Col span="8">
                    <FormItem
                        {...formItemLayout}
                        label="链接地址：">
                        <Input placeholder="URL..."/>
                    </FormItem>
                </Col>
                <Col span="8">
                    <FormItem
                        {...formItemLayout}
                        label="排序号：">
                        <Input placeholder="用于排序的号码"/>
                    </FormItem>
                </Col>
            </Row>

        </Form>
    }
})
AdvancedSearchForm = createForm()(AdvancedSearchForm);

const compSearch = React.createClass({
    getInitialState(){
        return{
            visible : false
        }
    },

    handleCancel(){
        this.props.onCancel();
    },

    render(){
        return <Modal
            title={this.props.title}
            width={this.props.width}
            visible={this.props.visible}
            onCancel={this.handleCancel}
            closable={true}>
            <AdvancedSearchForm />
        </Modal>
    }
})

module.exports = compSearch;