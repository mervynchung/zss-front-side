import React from 'react'
import {Button, Form, Input, Modal} from 'antd'

const FormItem = Form.Item;

let dialog = React.createClass({
    getInitialState(){
        return {
            visible:false
        }
    },

    handleSubmit(){
        this.props.onOk(this.props.form.getFieldsValue())
    },
    handleCancel(){
        this.close();
    },
    close(){
        this.setState({visible:false});
    },

    render(){
        const { getFieldProps } = this.props.form;
        const formItemLayout = {
            labelCol: {span: 6},
            wrapperCol: {span: 18}
        };
        return <Modal
            {...this.props}
            visible
            onOk={this.handleSubmit}
            onCancel={this.handleCancel} >
            <div className="qxgl-dialog">
                <Form horizontal onSubmit={this.handleSubmit}>
                    <FormItem {...formItemLayout} label="名称">
                        <Input  {...getFieldProps('name')}  />
                    </FormItem>
                    <FormItem {...formItemLayout} label="描述">
                        <Input  {...getFieldProps('description')}  />
                    </FormItem>
                </Form>
            </div>
        </Modal>
    }
});
dialog = Form.create({
    mapPropsToFields(data) {
        let result = {};
        for (let prop in data) {
            result[prop] = {value: data[prop]}
        }
        return result;
    }
})(dialog);

module.exports = dialog;


