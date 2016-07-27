import React from 'react'
import {Row,Col,Form,Button,Input,InputNumber} from 'antd'
import {SelectorCS,SelectorYear,SelectorYWLX} from 'component/compSelector'

const FormItem = Form.Item;
const createForm = Form.create;

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
                            label="委托企业名称">
                            <Input placeholder="委托企业名称" {...getFieldProps('WTDWMC')}/>

                        </FormItem>
                    </Col>
                    <Col span="8">
                        <FormItem
                            {...formItemLayout}
                            label="业务发生地">
                            <SelectorCS {...getFieldProps('CS')}/>
                        </FormItem>
                    </Col>
                    <Col span="8">
                        <FormItem
                            {...formItemLayout}
                            label="业务类型">
                            <SelectorYWLX  {...getFieldProps('LX')}/>
                        </FormItem>
                    </Col>
                </Row>
                <Row>
                    <Col span="8">
                        <FormItem
                            {...formItemLayout}
                            label="协议文号">
                            <Input placeholder="协议文号" {...getFieldProps('XYWH')}/>

                        </FormItem>
                    </Col>
                    <Col span="8">
                        <FormItem
                            {...formItemLayout}
                            label="协议金额">
                            <InputNumber min={1} max={13} style={{ width: '100%' }} {...getFieldProps('XYJE')}/>
                        </FormItem>
                    </Col>
                    <Col span="8">
                        <FormItem
                            {...formItemLayout}
                            label="发票金额">
                            <InputNumber  min={1} max={13} style={{ width: '100%' }} {...getFieldProps('FPJE')}/>
                        </FormItem>
                    </Col>
                </Row>
                <Row>
                    <Col span="6">
                        <FormItem
                            {...formItemLayout}
                            label="年度">
                            <SelectorYear {...getFieldProps('ND')}/>
                        </FormItem>
                    </Col>
                    <Col span="6">
                        <FormItem
                            {...formItemLayout}
                            label="报备号码">
                            <Input placeholder="协议文号" {...getFieldProps('BBHM')}/>
                        </FormItem>
                    </Col>
                    <Col span="6">
                        <FormItem
                            {...formItemLayout}
                            label="签字税务师">
                            <Input placeholder="签字税务师" {...getFieldProps('QZSWS')}/>
                        </FormItem>
                    </Col>
                    <Col span="6">
                        <FormItem
                            {...formItemLayout}
                            label="状态">
                            <Input placeholder="状态" {...getFieldProps('ZT')}/>
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