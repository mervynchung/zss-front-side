import React from 'react'
import {Form,Row,Col,Input,Button} from 'antd'
import Panel from 'component/compPanel'

const FormItem = Form.Item;
const createForm = Form.create;

let stage =  React.createClass({
    next(){
        this.props.onStageChange(2)
    },
    back(){
        this.props.onStageChange(0)
    },
    render(){
        const { getFieldProps } = this.props.form;
        return <Panel title="填写业务详细资料" className="stage">
            <div className="new-form">
                <Form horizontal onSubmit={this.handleSubmit} form={this.props.form}>
                    <Row>
                        <Col span="9">
                            <FormItem
                                labelCol={{span: 7}} wrapperCol={{span: 15}}
                                label="单位名称"
                                required={true}>
                                <Input placeholder="单位名称" {...getFieldProps('DWDZ')}/>
                            </FormItem>
                        </Col>
                        <Col span="15">
                            <FormItem
                                labelCol={{span: 4}} wrapperCol={{span: 20}}
                                label="单位地址">
                                <Input placeholder="单位地址" {...getFieldProps('DWDZ')}/>
                            </FormItem>
                        </Col>
                    </Row>
                    <Row>
                        <Col span="9">
                            <FormItem
                                labelCol={{span: 7}} wrapperCol={{span: 15}}
                                label="纳税人识别号">
                                <Input placeholder="纳税人识别号" {...getFieldProps('DWDZ')}/>
                            </FormItem>
                        </Col>
                        <Col span="9">
                            <FormItem
                                labelCol={{span: 7}} wrapperCol={{span: 15}}
                                label="地税税务登记证号">
                                <Input placeholder="地税税务登记证号" {...getFieldProps('DWDZ')}/>
                            </FormItem>
                        </Col>
                        <Col span="6">
                            <FormItem
                                labelCol={{span: 8}} wrapperCol={{span: 16}}
                                label="纳税人性质">
                                <Input placeholder="单位名称" {...getFieldProps('NSRXZ')}/>
                            </FormItem>
                        </Col>
                    </Row>
                    <Row>
                        <Col span="9">
                            <FormItem
                                labelCol={{span: 7}} wrapperCol={{span: 15}}
                                label="联系人">
                                <Input placeholder="联系人" {...getFieldProps('DWDZ')}/>
                            </FormItem>
                        </Col>
                        <Col span="9">
                            <FormItem
                                labelCol={{span: 7}} wrapperCol={{span: 15}}
                                label="联系电话">
                                <Input placeholder="联系电话" {...getFieldProps('LXDH')}/>
                            </FormItem>
                        </Col>
                    </Row>
                    <Row>
                        <Col span="4" offset="10">
                            <Button
                                size="large"
                                style={{marginRight:'16px'}}
                                onClick={this.back}>上一步</Button>
                            <Button
                                size="large"
                                onClick={this.next}>下一步</Button>

                        </Col>
                    </Row>
                </Form>
            </div>

        </Panel>
    }
});

stage = createForm()(stage);

module.exports = stage;