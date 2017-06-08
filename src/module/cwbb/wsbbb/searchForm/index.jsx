import React from 'react'
import {Row, Col, Form, Button, Input, Modal, Select} from 'antd'
import {SelectorCS, SelectorYear} from 'component/compSelector'
import Export from 'component/ComExcelExperss'

import './style.css'

const FormItem = Form.Item;
const createForm = Form.create;
const Option = Select.Option;
const ButtonGroup = Button.Group;
let searchForm = React.createClass({
    getDefaultProps(){
        return {
            onSubmit: {}
        }
    },
    getInitialState(){
        return {
            sdyy: '',
            lx: '0'
        }
    },
    handleSubmit(e){
        e.preventDefault();
        let value = this.props.form.getFieldsValue();
        this.props.onSubmit(value);
    },
    showConfirm() {
        var that = this;
        const sels = this.props.selected.length;
        Modal.confirm({
            title: "已选择：" + sels + " 项，是否锁定？",
            content: that.state.sdyy,
            onOk() {
                that.props.allLocked(that.refs.myTextInput.refs.input.value);
            },
            okText: "锁定",
        });
    },
    handleLxChange(value){
        this.setState({lx: value})
    },
    render(){
        const nowy = new Date();
        var yy = [];
        for (let i = 0; i < 7; i++) {
            yy.push(nowy.getFullYear() - i);
        }

        const {getFieldProps} = this.props.form;
        const formItemLayout = {
            labelCol: {span: 8},
            wrapperCol: {span: 16}
        };
        const yearOptions = yy.map(year => <Option key={year}>{year}</Option>);
        this.state.sdyy = <p>锁定原因：<Input type="text" style={{width: "50%"}} ref="myTextInput"/></p>;
        return <div className="search-form">
            <Form horizontal onSubmit={this.handleSubmit}>
            <Row>
                <Col span="18">

                        <Row>
                            <Col span="12">
                                <FormItem
                                  {...formItemLayout}
                                  label="报表类型：">
                                    <Select { ...getFieldProps('bblx', {initialValue: '0',onChange:this.handleLxChange})} >
                                        <Option value="0">财务报表-利润表</Option>
                                        <Option value="1">财务报表-资产负债表</Option>
                                        <Option value="2">财务报表-利润分配表</Option>
                                        <Option value="3">财务报表-现金流量表</Option>
                                        <Option value="4">财务报表-支出明细表</Option>
                                    </Select>
                                </FormItem>
                            </Col>
                            <Col span="12">
                                <FormItem
                                  {...formItemLayout}
                                  label="事务所名称：">
                                    <Input placeholder="事务所名称" {...getFieldProps('dwmc')}/>
                                </FormItem>
                            </Col>
                        </Row>
                        <Row>
                            <Col span="12">
                                <FormItem
                                  {...formItemLayout}
                                  label="上报年度：">
                                    <Select  { ...getFieldProps('nd', {initialValue: yy[0] + ''})} >
                                        {yearOptions}
                                    </Select>
                                </FormItem>
                            </Col>
                            {this.state.lx == '0' && <Col span="12">
                                <FormItem
                                  {...formItemLayout}
                                  label="时间段：">
                                    <Select  { ...getFieldProps('timevalue', {initialValue: '0'})} >
                                        <Option value="0">半年</Option>
                                        <Option value="1">全年</Option>
                                    </Select>
                                </FormItem>
                            </Col>}

                        </Row>

                </Col>
                <Col span="5" offset={1}>
                    <Button icon="search" type="primary" htmlType="submit" className="query">查询</Button>

                </Col>
            </Row>
                <Row>
                    <ButtonGroup className="btn-group">
                        <Button onClick={this.showConfirm}
                                disabled={this.props.selected.length <= 0}>
                            批量锁定
                        </Button>
                        <Button onClick={this.props.allClean}
                                disabled={this.props.selected.length <= 0}>
                            撤销选择
                        </Button>
                    </ButtonGroup>
                    <Export
                      resData={this.props.cxdata}
                      model={this.props.model}
                      getAllApi={this.props.getAllApi()}
                      fileName={'未上报财务报表清单'} all/>
                </Row>
            </Form>

        </div>
    }
});
searchForm = createForm()(searchForm);

module.exports = searchForm;