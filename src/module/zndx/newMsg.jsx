import React from 'react'
import {Input, Form, Row, Col, Button, Tooltip} from 'antd'
import Panel from 'component/compPanel'
import Rich from 'component/compWYSIHtml'

const ToolBar = Panel.ToolBar;
const FormItem = Form.Item;
const createForm = Form.create;

let c = React.createClass({
    handleSubmit(e){
        e.preventDefault();
        console.log(this.refs.editor.handleValue())
    },

    back(){
        this.props.onBack()
    },
    render(){
        let toolbar = <ToolBar>
            <Tooltip title="返回">
                <Button type="ghost" shape="circle-outline" icon="double-left" onClick={this.back}/>
            </Tooltip>
        </ToolBar>;
        const formItemLayout = {
            labelCol: {span: 1},
            wrapperCol: {span: 24}
        };
        const {getFieldProps} = this.props.form;
        return <Panel title="编辑新信息" toolbar={toolbar}>
            <Form horizontal onSubmit={this.handleSubmit}>
                <Row>
                    <FormItem
                        {...formItemLayout}
                        label="标题">
                        <Input placeholder="标题" {...getFieldProps('title')}/>
                    </FormItem>
                </Row>
                <Row>
                    <FormItem
                        {...formItemLayout}
                        label="标题">
                        <Rich  {...getFieldProps('content')} ref="editor" />
                    </FormItem>
                </Row>
                <Row>
                    <Col span="24">
                        <Button type="primary" htmlType="submit" className="query"
                                onClick={this.handleSubmit}>查询</Button>
                        <Button type="ghost" onClick={this.handleReset}>重置</Button>
                    </Col>
                </Row>
            </Form>
        </Panel>
    }
});

c = createForm()(c);
module.exports = c;