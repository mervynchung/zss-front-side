import {SelectorYear, SelectorXZ, SelectorSWSXZ, SelectorCS} from 'component/compSelector'
import React from 'react'
import {Steps, Col, Row, Spin, notification, Icon, Button, Form, Input, InputNumber, Popconfirm} from 'antd'
import {mapKeys} from 'lodash'
import RyList from './rylist'
import numeral from 'numeral'

const ButtonGroup = Button.Group;
const FormItem = Form.Item;

let form = React.createClass({
    getInitialState(){
        return {
            ry:[],
            data:[]
        }
    },
    handleSelected(selectedRowKeys){

    },
    commit(){
        const {validateFields} = this.props.form;
        validateFields({force: true}, (errors, values) => {
            if (!!errors) {
                return;
            }
            this.props.onCommit(values);
        })
    },
    render(){
        const {getFieldProps} = this.props.form;
        const layout = {
            labelCol: {span: 6},
            wrapperCol: {span: 14}
        };

        return <div className="form">
            <Form horizontal>
                <Row>
                    <Col offset={1}><h2>事务所信息</h2></Col>
                </Row>

                <Row>
                    <Col span="24">
                        <FormItem label="事务所名称" labelCol={{span: 3}} wrapperCol={{span: 19}} >
                            <Input disabled { ...getFieldProps('swsmc')} /></FormItem>
                    </Col>
                </Row>

                <Row>
                    <Col span="12">
                        <FormItem label="单位电话"  {...layout}>
                            <Input disabled { ...getFieldProps('swsdh')} /></FormItem>
                    </Col>
                    <Col span="12">
                        <FormItem label="单位传真"  {...layout}>
                            <Input disabled { ...getFieldProps('swscz')} /></FormItem>
                    </Col>

                </Row>
                <Row>
                    <Col span="12">
                        <FormItem label="法人"  {...layout}>
                            <Input disabled { ...getFieldProps('fddbr')} /></FormItem>
                    </Col>
                    <Col span="12">
                        <FormItem label="手机"  {...layout}>
                            <Input disabled { ...getFieldProps('swssj')} /></FormItem>
                    </Col>
                </Row>
                <Row>
                    <Col span="12">
                        <FormItem label="地址"  {...layout}>
                            <Input disabled { ...getFieldProps('swsdz')} /></FormItem>
                    </Col>
                    <Col span="12">
                        <FormItem label="电子邮件"  {...layout}>
                            <Input disabled { ...getFieldProps('swsdzyj')} /></FormItem>
                    </Col>
                </Row>
                <Row>
                    <Col offset={1}><h2>参会人员信息</h2></Col>
                </Row>
                <Row><RyList data={this.state.ry} onSelected={this.handleSelected}/></Row>

                <Row style={{marginTop: '24px'}}>
                    <Col span="5" offset="10">
                        <ButtonGroup>
                            <Popconfirm placement="top" title="确定提交？" onConfirm={this.commit}>
                                <Button type="primary">提交</Button>
                            </Popconfirm>
                        </ButtonGroup>
                    </Col>
                </Row>

            </Form>
        </div>
    }
});
form = Form.create({
    mapPropsToFields(props) {
        let result = props.data;

        return
    }
})(form);

module.exports = form