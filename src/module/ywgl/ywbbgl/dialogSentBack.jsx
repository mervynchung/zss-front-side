import React from 'react'
import {Modal, Form, Col, Row, Button, Input,notification} from 'antd'
import req from 'reqwest'
import config from 'common/configuration'
import auth from 'common/auth'

const FormItem = Form.Item;
const createForm = Form.create;


let modal = React.createClass({
    getInitialState(){
        return {
            loading: false
        }
    },
    handleSubmit(){
        const token = auth.getToken();
        this.setState({loading: true});
        req({
            url: this.props.apiUrl + this.props.id,
            type: 'json',
            method: 'put',
            contentType: 'application/json',
            data: JSON.stringify(values),
            headers: {'x-auth-token': token}
        }).then(resp=> {
            setFieldsValue({'thyy': null});
            this.setState({loading: false});
            this.props.onClose();
        }).fail(e=> {
            setFieldsValue({'thyy': null});
            this.setState({loading: false});
            notification.error({
                duration: 3,
                message: '操作失败',
                description: '可能网络访问原因，请稍后尝试'
            });
            this.props.onClose();
        })

    },
    handleClose(){
        this.props.form.setFieldsValue({'thyy': null});
        this.props.onClose();
    },
    render(){
        const {getFieldProps} = this.props.form;
        const {visible} = this.props;
        return <Form>
            <Modal
              visible = {visible}
              style={{top: '100px'}}
              title="退回业务报备"
              confirmLoading={this.state.loading}
              okText="确认退回" onOk={this.handleSubmit} onCancel={this.handleClose}>
                <Row>
                    <Col span="24">
                        <FormItem
                          label="退回原因">
                            <Input placeholder="请注明该业务被退回原因"
                                   autoComplete="off"
                                   type="textarea"
                                   rows={5} {...getFieldProps('thyy')}/>
                        </FormItem>
                    </Col>
                </Row>
            </Modal>
        </Form>
    }
});
modal = createForm()(modal);
module.exports = modal;