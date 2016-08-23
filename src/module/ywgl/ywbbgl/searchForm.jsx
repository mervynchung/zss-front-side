import React from 'react'
import {Row,Col,Form,Button,Input,Modal,DatePicker} from 'antd'
import {SelectorCS,SelectorDQ} from 'component/compSelector'

import './style.css'

const FormItem = Form.Item;
const createForm = Form.create;
const RangePicker = DatePicker.RangePicker;

let searchForm = React.createClass({
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
        const formItemLayout = {
            labelCol: {span: 8},
            wrapperCol: {span: 16}
        };
        return <div className="search-form">
            <Form horizontal onSubmit={this.handleSubmit} form={this.props.form}>
                <Row>
                    <Col span="8">
                        <FormItem
                          {...formItemLayout}
                          label="事务所名称：">
                            <Input placeholder="事务所名称" {...getFieldProps('swsmc')}/>
                        </FormItem>
                    </Col>
                    <Col span="8">
                        <FormItem
                          {...formItemLayout}
                          label="业务发生地：">
                            <SelectorCS { ...getFieldProps('cs')}/>
                        </FormItem>
                    </Col>
                    <Col span="8">
                        <FormItem
                          {...formItemLayout}
                          label="报备号码：">
                            <Input placeholder="报备号码" { ...getFieldProps('bbhm')}/>
                        </FormItem>
                    </Col>
                </Row>
                <Row>
                    <Col span="8">
                        <FormItem
                          {...formItemLayout}
                          label="报备日期：">
                            <RangePicker { ...getFieldProps('bbrq')}/>
                        </FormItem>
                    </Col>
                    <Col span="8">
                        <FormItem
                          {...formItemLayout}
                          label="报告文号：">
                            <Input placeholder="报告文号" { ...getFieldProps('bgwh')}/>
                        </FormItem>
                    </Col>
                    <Col span="8">
                        <FormItem
                          {...formItemLayout}
                          label="年度：">
                            <SelectorDQ { ...getFieldProps('nd')}/>
                        </FormItem>
                    </Col>
                </Row>
                <Row>
                    <Col span="2" offset="20"><Button type="primary" htmlType="submit">查询</Button></Col>
                    <Col span="2"><Button type="ghost" onClick={this.handleReset}>重置</Button></Col>
                </Row>
            </Form>
        </div>
    }
});
searchForm = createForm()(searchForm);

module.exports = searchForm;