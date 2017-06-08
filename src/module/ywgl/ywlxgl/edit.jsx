import React from 'react'
import {Modal, Form, Input, message,Switch} from 'antd'
import req from 'common/request'
import config from 'common/configuration'

const FormItem = Form.Item;
const createForm = Form.create;


let modal = React.createClass({
    getDefaultProps(){
        return {
            apiUrl:config.URI_API_PROJECT  + `/ywlx`,
        }
    },

    getInitialState(){
        return {
            loading: false
        }
    },
    handleSubmit(){
        let {data,apiUrl} = this.props;
        const {getFieldsValue} = this.props.form;
        const values = getFieldsValue();
        data.ISQY = values.ISQY;
        this.setState({loading: true});
        req({
            url: apiUrl,
            type: 'json',
            method: 'put',
            data: data,
        }).then(resp => {
            this.setState({loading: false});
            this.props.onClose();
        }).catch(e => {
            this.setState({loading: false});
            message.error('网络访问故障');
            this.props.onClose();
        })

    },
    handleClose(){
        this.props.onClose();
    },
    render(){
        const {getFieldProps} = this.props.form;
        const {visible, data} = this.props;
        return <Modal
          visible={visible}
          title="修改业务类型"
          confirmLoading={this.state.loading}
          onOk={this.handleSubmit} onCancel={this.handleClose}>
            <Form horizontal>
                <FormItem
                  label="业务启用状态"
                  labelCol={{span: 10}}
                  wrapperCol={{span: 14}}
                  required>
                    <Switch {...getFieldProps('ISQY', {valuePropName: 'checked',initialValue:data.ISQY})} />
                </FormItem>
            </Form>
        </Modal>
    }
});
modal = createForm()(modal);
module.exports = modal;