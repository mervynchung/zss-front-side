import React from 'react'
import {Row,Col,Form,Button,Input,DatePicker} from 'antd'
import {SelectorCS,SelectorYWLX,SelectorYear} from 'component/compSelector'
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
            <Form horizontal onSubmit={this.handleSubmit}>
                <Row>
                    <Col span="8">
                        <FormItem
                          {...formItemLayout}
                          label="事务所名称">
                            <Input placeholder="事务所名称" {...getFieldProps('swsmc')}/>
                        </FormItem>
                    </Col>
                    <Col span="8">
                        <FormItem
                          {...formItemLayout}
                          label="委托单位名称">
                            <Input placeholder="委托单位名称" {...getFieldProps('wtdw')}/>
                        </FormItem>
                    </Col>
                    <Col span="8">
                        <FormItem
                          {...formItemLayout}
                          label="业务类型">
                            <SelectorYWLX placeholder="业务类型" {...getFieldProps('ywlx_dm')}/>
                        </FormItem>
                    </Col>
                </Row>
                <Row>
                    <Col span="8">
                        <FormItem
                          {...formItemLayout}
                          label="协议文号">
                            <Input placeholder="协议文号" {...getFieldProps('xyh')}/>
                        </FormItem>
                    </Col>
                    <Col span="8">
                        <FormItem
                          {...formItemLayout}
                          label="报告文号">
                            <Input placeholder="报告文号" {...getFieldProps('bgwh')}/>
                        </FormItem>
                    </Col>
                    <Col span="8">
                        <FormItem
                          {...formItemLayout}
                          label="报备号码">
                            <Input placeholder="报备号码" { ...getFieldProps('bbhm')}/>
                        </FormItem>
                    </Col>
                </Row>
                <Row>
                    <Col span="8">
                        <FormItem
                          {...formItemLayout}
                          label="报备日期：">
                            <RangePicker format="yyyy/MM/dd" { ...getFieldProps('bbrq')}/>
                        </FormItem>
                    </Col>
                    <Col span="8">
                        <FormItem
                          {...formItemLayout}
                          label="报告日期">
                            <RangePicker format="yyyy/MM/dd" { ...getFieldProps('bgrq')}/>
                        </FormItem>
                    </Col>
                    <Col span="8">
                        <FormItem
                          {...formItemLayout}
                          label="业务发生地">
                            <SelectorCS { ...getFieldProps('cs_dm')}/>
                        </FormItem>
                    </Col>

                </Row>
                <Row>

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
                            <SelectorYear { ...getFieldProps('nd')}/>
                        </FormItem>
                    </Col>
                </Row>
                <Row>
                    <Col span="4" offset="20">
                        <Button type="primary" htmlType="submit" className="query">查询</Button>
                        <Button type="ghost" onClick={this.handleReset}>重置</Button>
                    </Col>
                </Row>
            </Form>
        </div>
    }
});
searchForm = createForm()(searchForm);

module.exports = searchForm;