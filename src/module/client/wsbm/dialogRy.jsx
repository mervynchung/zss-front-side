import React from 'react'
import {Modal, Row, Col, Button, Form, Input, InputNumber, Checkbox, Radio, DatePicker} from 'antd'
import {SelectorXB, SelectorZW} from 'component/compSelector'

const FormItem = Form.Item;
const RadioGroup = Radio.Group;
const RangePicker = DatePicker.RangePicker;
let c = React.createClass({
    getDefaultProps(){
        return {
            title: '录入参会人员信息'
        }
    },
    handleClose(){
        this.props.onClose()
    },
    reset(){
        this.props.form.resetFields();
    },
    handleSubmit(){
        this.props.form.validateFields({force: true}, (errors, values) => {
            if (!!errors) {
                return;
            }
            values.xb = values.xb.label;
            values.zw = values.zw.label;
            values.rzsj = values.zssj[0];
            values.lksj = values.zssj[1];
            this.reset();
            this.props.onOk(values);
            this.handleClose()
        })
    },
    render(){
        const {title, visible} = this.props;
        const {getFieldProps} = this.props.form;
        const layout = {
            labelCol: {span: 6},
            wrapperCol: {span: 14}
        };
        return <Modal title={title} width={500} onCancel={this.handleClose} visible={visible} onOk={this.handleSubmit}>
            <Form horizontal>
                <Row>
                    <Col span="8">
                        <FormItem label="姓名" {...layout} >
                            <Input  { ...getFieldProps('xming')} />
                        </FormItem>
                    </Col>
                    <Col span="8">
                        <FormItem label="性别" {...layout} >
                            <SelectorXB labelInValue  { ...getFieldProps('xb')} />
                        </FormItem>
                    </Col>
                    <Col span="8">
                        <FormItem label="年龄" {...layout} >
                            <InputNumber   { ...getFieldProps('nl')} />
                        </FormItem>
                    </Col>
                </Row>

                <FormItem label="职务" {...layout} >
                    <SelectorZW labelInValue   { ...getFieldProps('zw')} />
                </FormItem>
                <FormItem label="手机" {...layout} >
                    <Input   { ...getFieldProps('yddh')} />
                </FormItem>
                <FormItem label="电话" {...layout} >
                    <Input   { ...getFieldProps('dhhm')} />
                </FormItem>
                <FormItem label="电子邮箱" {...layout} >
                    <Input   { ...getFieldProps('email')} />
                </FormItem>
                <FormItem label="住宿时间" {...layout} >
                    <RangePicker format="yyyy-MM-dd "
                                 { ...getFieldProps('zssj',{getValueFromEvent: (date, dateString)=> dateString})} />
                </FormItem>
                <FormItem label="房型" {...layout}>
                    <RadioGroup {...getFieldProps('fjlx')}>
                        <Radio value="1">单人房</Radio>
                        <Radio value="2">双人房</Radio>
                    </RadioGroup>
                </FormItem>
                <FormItem label="点餐" {...layout}>
                    <Checkbox { ...getFieldProps('zaoc',{valuePropName: 'checked'})}>早餐</Checkbox>
                    <Checkbox { ...getFieldProps('wuc',{valuePropName: 'checked'})}>午餐</Checkbox>
                    <Checkbox { ...getFieldProps('wanc',{valuePropName: 'checked'})}>晚餐</Checkbox>
                </FormItem>

            </Form>
        </Modal>
    }
});
c = Form.create()(c);

module.exports = c;
