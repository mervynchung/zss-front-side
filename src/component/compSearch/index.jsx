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
                        label="事务所名称：">
                        <Input placeholder="事务所名称"/>
                    </FormItem>
                </Col>
                <Col span="8">
                    <FormItem
                        {...formItemLayout}
                        label="业务发生地：">
                        <Input placeholder="URL..."/>
                    </FormItem>
                </Col>
                <Col span="8">
                    <FormItem
                        {...formItemLayout}
                        label="报备号码：">
                        <Input placeholder="用于排序的号码"/>
                    </FormItem>
                </Col>
            </Row>
            <Row>
                <Col span="8">
                    <FormItem
                        {...formItemLayout}
                        label="报备日期：">
                        <Input placeholder="名称"/>
                    </FormItem>
                </Col>
                <Col span="8">
                    <FormItem
                        {...formItemLayout}
                        label="报告文号：">
                        <Input placeholder="URL..."/>
                    </FormItem>
                </Col>
                <Col span="8">
                    <FormItem
                        {...formItemLayout}
                        label="年度：">
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
        return <div className="search-form">
            <AdvancedSearchForm />
        </div>
    }
})

module.exports = compSearch;