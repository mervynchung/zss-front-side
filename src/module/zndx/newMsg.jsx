import React from 'react'
import {Input, Form, Row, Col, Button, Tooltip,Message,Modal} from 'antd'
import Panel from 'component/compPanel'
import Rich from 'component/compWYSIHtml'
import Reciver from './reciver'
import req from 'common/request'
import config from 'common/configuration'

const ToolBar = Panel.ToolBar;
const FormItem = Form.Item;
const createForm = Form.create;

let c = React.createClass({
    getDefaultProps(){
        return {
            url:config.URI_API_FRAMEWORK  + `/messages`,
        }
    },
    getInitialState(){
        return {
            modal:false,
            reciver:{}
        }
    },
    handleSubmit(e){
        e.preventDefault();
        let values = {
            title : this.props.form.getFieldValue('title'),
            content:this.refs.editor.handleValue(),
            reciver:this.state.reciver,
            type:2, //类型2为普通短信
            groupsend:true
        };
        req({
            url:this.props.url,
            method:'post',
            data:values
        })
    },
    closeReciver(){
        this.setState({modal:false})
    },
    openReciver(){
        this.setState({modal:true})
    },
    getReciver(obj){
        this.setState({reciver:obj});
        this.closeReciver()
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
            labelCol: {span: 2},
            wrapperCol: {span: 22}
        };
        const {getFieldProps} = this.props.form;
        const {modal,reciver} = this.state;

        const titleProps =  getFieldProps('title', {
            rules: [
                {required: true, whitespace: true, message: '必填'}
            ]
        });
        return <Panel title="编辑新信息" toolbar={toolbar}>
            <Reciver visible={modal} onCancel={this.closeReciver} onOk={this.getReciver}/>
            <Form horizontal onSubmit={this.handleSubmit}>
                <Row>
                    <FormItem
                        labelCol={{span: 2}} wrapperCol={{span: 10}}
                        label="收件人" required>
                        {reciver.value}
                        <Button  onClick={this.openReciver}>选择</Button>
                    </FormItem>
                </Row>
                <Row>
                    <FormItem
                        {...formItemLayout}
                        label="标题">
                        <Input placeholder="标题" {...titleProps}/>
                    </FormItem>
                </Row>
                <Row>
                    <FormItem
                        {...formItemLayout}
                        label="正文">
                        <Rich  {...getFieldProps('content')} ref="editor" />
                    </FormItem>
                </Row>
                <Row>
                    <Col span="2" offset={22}>
                        <Button type="primary" htmlType="submit" className="query"
                                onClick={this.handleSubmit}>提交</Button>
                    </Col>
                </Row>
            </Form>
        </Panel>
    }
});

c = createForm()(c);
module.exports = c;