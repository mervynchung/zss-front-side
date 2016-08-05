import React from 'react'
import {Form,Row,Col,Input,Button,InputNumber,Select,DatePicker } from 'antd'
import Panel from 'component/compPanel'
import {SelectorISWS,SelectorSB,SelectorYWLX,SelectorHY,SelectorDQ} from 'component/compSelector'

const FormItem = Form.Item;
const createForm = Form.create;
const Option = Select.Option;

//定义纳税人性质下拉
const SelectNSRXZ = React.createClass({
    render(){
        return <Select {...this.props} >
            <Option value="0">一般纳税人</Option>
            <Option value="1">小规模纳税人</Option>
            <Option value="2">非增值税纳税人</Option>
        </Select>
    }
});
//定义征收方式
const SelectZSFS = React.createClass({
    render(){
        return <Select {...this.props} >
            <Option value="0">查账征收</Option>
            <Option value="1">核定征收</Option>
        </Select>
    }
});

//定义委托企业性质
const SelectWTDWXZ = React.createClass({
    render(){
        return <Select {...this.props} >
            <Option value="0">居民企业</Option>
            <Option value="1">非居民企业</Option>
        </Select>
    }
});

let stage =  React.createClass({
    next(){
        let value = this.props.form.getFieldsValue();
        console.log(value)
        //this.props.onStageChange(2)
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
                              labelCol={{span: 16}} wrapperCol={{span:7}}
                              label="主管税务机关">
                                <SelectorISWS {...getFieldProps('ISWS',{initialValue:'N'})} />
                            </FormItem>
                        </Col>
                        <Col span="3">
                            <FormItem style={{width:'90%'}}>
                                <SelectorSB  {...getFieldProps('SB_DM',{initialValue:'1'})}/>
                            </FormItem>
                        </Col>
                        <Col span="5">
                            <FormItem  style={{width:'90%'}} >
                                <SelectorDQ  placeholder="选择地区" {...getFieldProps('CS_DM')}/>
                            </FormItem>
                        </Col>
                        <Col span="4">
                            <FormItem style={{width:'90%'}}>
                                <Input placeholder="主管税务机关名称"  {...getFieldProps('ZGSWJG')}/>
                            </FormItem>
                        </Col>

                    </Row>
                    <Row>
                        <Col span="12">
                            <FormItem
                              labelCol={{span: 8}} wrapperCol={{span: 12}}
                              label="委托企业行业类型">
                                <SelectorHY  {...getFieldProps('HY_ID',{initialValue:'1'})}/>
                            </FormItem>
                        </Col>
                        <Col span="12">
                            <FormItem
                              labelCol={{span: 8}} wrapperCol={{span: 12}}
                              label="委托企业增值税纳税人类型">
                                <SelectNSRXZ  {...getFieldProps('NSRXZ',{initialValue:'0'})}/>
                            </FormItem>
                        </Col>

                    </Row>
                    <Row>
                        <Col span="12">
                            <FormItem
                                labelCol={{span: 8}} wrapperCol={{span: 12}}
                                label="报告文号">
                                <Input  {...getFieldProps('BGWH')}/>
                            </FormItem>
                        </Col>
                        <Col span="12">
                            <FormItem
                                labelCol={{span: 8}} wrapperCol={{span: 12}}
                                label="报告日期">
                                <DatePicker  {...getFieldProps('BGRQ')}/>
                            </FormItem>
                        </Col>
                    </Row>
                    <Row>
                        <Col span="24">
                            <FormItem
                                labelCol={{span: 4}} wrapperCol={{span: 6}}
                                label="一级复核">
                                <Input  {...getFieldProps('YJFH')}/>
                            </FormItem>
                        </Col>
                    </Row>
                    <Row>
                        <Col span="24">
                            <FormItem
                                labelCol={{span: 4}} wrapperCol={{span: 6}}
                                label="二级复核">
                                <Input  {...getFieldProps('RJFH')}/>
                            </FormItem>
                        </Col>
                    </Row>
                    <Row>
                        <Col span="24">
                            <FormItem
                                labelCol={{span: 4}} wrapperCol={{span: 6}}
                                label="三级复核">
                                <Input  {...getFieldProps('SJFH')}/>
                            </FormItem>
                        </Col>
                    </Row>
                    <Row>
                        <Col span="24">
                            <FormItem
                                labelCol={{span: 4}} wrapperCol={{span: 6}}
                                label="签名注册税务师">
                                <Input  {...getFieldProps('QMSWSID')}/>
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