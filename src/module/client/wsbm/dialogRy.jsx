import React from 'react'
import {Modal,Row,Col,Button,Form,Input,InputNumber} from 'antd'
import {SelectorXB, SelectorZW} from 'component/compSelector'

const FormItem = Form.Item;
let c = React.createClass({
    getDefaultProps(){
        return {
            title:'录入参会人员信息'
        }
    },
    handleClose(){
        this.props.onClose()
    },
    handleSubmit(){
    },
    render(){
        const {title,visible} = this.props;
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

            </Form>
        </Modal>
    }
});
c = Form.create()(c);

module.exports = c;
