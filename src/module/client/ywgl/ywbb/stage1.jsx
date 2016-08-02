import React from 'react'
import {Form,Row,Col,Input,Button,InputNumber} from 'antd'
import Panel from 'component/compPanel'
import {SelectorISWS,SelectorSB,SelectorYWLX,SelectorHY} from 'component/compSelector'

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

                <Form horizontal  form={this.props.form}>
                    <Row>
                        <Col span="6">
                            <FormItem
                              labelCol={{span: 12}} wrapperCol={{span: 11}}
                              label="主管税务机关">
                                <SelectorISWS {...getFieldProps('ISWS',{initialValue:'N'})} />
                            </FormItem>
                        </Col>
                        <Col span="3">
                            <FormItem style={{width:'90%'}}>
                                <SelectorSB  {...getFieldProps('SB',{initialValue:'1'})}/>
                            </FormItem>
                        </Col>
                        <Col span="3">
                            <FormItem  style={{width:'90%'}} >
                                <SelectorSB  {...getFieldProps('SB',{initialValue:'1'})}/>
                            </FormItem>
                        </Col>
                        <Col span="4">
                            <FormItem style={{width:'90%'}}>
                                <SelectorSB  {...getFieldProps('SB',{initialValue:'1'})}/>
                            </FormItem>
                        </Col>

                    </Row>
                    <Row>
                        <Col span="12">
                            <FormItem
                              labelCol={{span: 6}} wrapperCol={{span: 12}}
                              label="委托企业行业类型">
                                <SelectorHY  {...getFieldProps('HY_ID',{initialValue:'1'})}/>
                            </FormItem>
                        </Col>
                        <Col span="12">
                            <FormItem
                              labelCol={{span: 3}} wrapperCol={{span: 5}}
                              label="委托企业增值税纳税人类型">
                                <SelectorHY  {...getFieldProps('SB',{initialValue:'1'})}/>
                            </FormItem>
                        </Col>

                    </Row>
                    <Row>
                        <Col span="24">
                            <FormItem
                              labelCol={{span: 3}} wrapperCol={{span: 5}}
                              label="纳税人识别号">
                                <Input placeholder="纳税人识别号" disabled {...getFieldProps('NSRSBH')}/>
                            </FormItem>
                        </Col>
                    </Row>
                    <Row>
                        <Col span="24">
                            <FormItem
                              labelCol={{span: 3}} wrapperCol={{span: 5}}
                              label="地税税务登记证号">
                                <Input placeholder="地税税务登记证号" disabled {...getFieldProps('NSRSBHDF')}/>
                            </FormItem>
                        </Col>
                    </Row>
                    <Row>
                        <Col span="8">
                            <FormItem
                              labelCol={{span: 9}} wrapperCol={{span: 15}}
                              label="联系人">
                                <Input disabled {...getFieldProps('DWDZ')}/>
                            </FormItem>
                        </Col>
                        <Col span="8">
                            <FormItem
                              labelCol={{span: 9}} wrapperCol={{span: 15}}
                              label="联系电话">
                                <Input disabled {...getFieldProps('LXDH')}/>
                            </FormItem>
                        </Col>
                    </Row>
                    <Row>
                        <Col span="24">
                            <FormItem
                              labelCol={{span: 3}} wrapperCol={{span: 13}}
                              label="委托企业联系地址">
                                <Input disabled {...getFieldProps('DWDZ')}/>
                            </FormItem>
                        </Col>
                    </Row>
                    <Row>
                        <Col span="24">
                            <FormItem
                              labelCol={{span: 3}} wrapperCol={{span: 6}}
                              label="委托项目类型">
                                <SelectorYWLX  />
                            </FormItem>
                        </Col>
                    </Row>
                    <Row>
                        <Col span="24">
                            <FormItem
                              labelCol={{span: 3}} wrapperCol={{span: 5}}
                              label="协议收费金额">
                                <InputNumber style={{width:'100%'}} />
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

        </Panel>
    }
});

stage = createForm()(stage);

module.exports = stage;