import React from 'react'
import {Form,Row,Col,Input,Button} from 'antd'
import Panel from 'component/compPanel'
import utils from 'common/utils'

const FormItem = Form.Item;
const createForm = Form.create;

let stage =  React.createClass({
    next(){
        this.props.form.validateFields((errors, values) => {
            if (!!errors) {
                return;
            }
            values = utils.transEmpty2Null(values);
            this.props.onSubmit({stage:1,values:values});
        })
    },
    render(){
        const { getFieldProps } = this.props.form;
        return <Panel title="填写协议信息" className="stage">

                <Form horizontal form={this.props.form}>
                    <Row>
                        <Col span="9">
                            <FormItem
                                labelCol={{span: 7}} wrapperCol={{span: 15}}
                                label="单位名称"
                                required={true}>
                                <Input placeholder="单位名称" {...getFieldProps('DWMC')}/>
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
                        <Col span="2" offset="10">

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