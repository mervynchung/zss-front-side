import React from 'react'
import {Modal, Form, Col, Row, Button, Input,Radio,notification} from 'antd'
import req from 'reqwest'
import auth from 'common/auth'
import utils from 'common/utils'

const FormItem = Form.Item;
const createForm = Form.create;
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;


let modal = React.createClass({
    getInitialState(){
        return {
            loading: false,
            qtyy:true
        }
    },
    handleSubmit(){
        const token = auth.getToken();
        const {data,apiUrl,refreshList} = this.props;
        const {setFieldsValue,validateFields} = this.props.form;
        validateFields((errors, values) => {
            if (!!errors) {
                return;
            }
            values = utils.transEmpty2Null(values);
            const obj = {
                lx:4, //更新类型4为收费操作
                data:values
            };
            this.setState({loading: true});
            req({
                url: apiUrl + data.id,
                type: 'json',
                method: 'put',
                contentType: 'application/json',
                data: JSON.stringify(obj),
                headers: {'x-auth-token': token}
            }).then(resp=> {
                setFieldsValue({fphm: null,sjsqje:null});
                refreshList();
                this.setState({loading: false});
                this.props.onClose();
            }).fail(e=> {
                setFieldsValue({fphm: null,sjsqje:null});
                this.setState({loading: false});
                notification.error({
                    duration: 3,
                    message: '操作失败',
                    description: '网络故障，数据无法更新'
                });
                this.props.onClose();
            })
        });


    },
    handleChange(e){
        if(e.target.value == '3'){
            this.setState({qtyy: false })
        }else{
            this.setState({qtyy: true })
        }
    },
    handleClose(){
        this.props.form.setFieldsValue({fphm: null,sjsqje:null});
        this.props.onClose();
    },
    render(){
        const {getFieldProps} = this.props.form;
        const {visible,data} = this.props;

        const qtyyProps = getFieldProps('qtyy', {
            rules: [
                {required: true, whitespace: true, message: '必填项'}
            ]
        });
        return <Form horizontal >
            <Modal
                visible = {visible}
                style={{top: '100px'}}
                title="业务退回申请"
                confirmLoading={this.state.loading}
                okText="确认退回" onOk={this.handleSubmit} onCancel={this.handleClose}>
                <div className="fix-table no-border">
                    <table>
                        <tbody>
                        <tr>
                            <td>报备号码 :</td>
                            <td>{data.bbhm}</td>
                        </tr>
                        <tr>
                            <td>委托企业 :</td>
                            <td>{data.wtdw}</td>
                        </tr>
                        <tr>
                            <td>事务所 :</td>
                            <td>{data.swsmc}</td>
                        </tr>
                        <tr>
                            <td>业务类型 :</td>
                            <td>{data.ywlx}</td>
                        </tr>
                        <tr>
                            <td>报备日期 :</td>
                            <td>{data.bbrq}</td>
                        </tr>
                        <tr>
                            <td>最后修改日期 :</td>
                            <td>{data.zbrq}</td>
                        </tr>
                        <tr>
                            <td>协议金额 :</td>
                            <td>{data.xyje}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <Row style={{marginTop:'8px'}}>
                    <Col span="24">
                        <FormItem label="申请退回原因">
                        <RadioGroup  {...getFieldProps('sqthyy', {
                            initialValue: '1',
                            onChange:this.handleChange
                        })}>
                            <RadioButton value="1">收费未达成一致</RadioButton>
                            <RadioButton value="2">调整事项未达成一致</RadioButton>
                            <RadioButton value="3">其他</RadioButton>
                        </RadioGroup>
                        </FormItem>
                    </Col>
                </Row>
                <Row>
                    <Col span="24">
                        <FormItem >
                            <Input type="textarea" disabled={this.state.qtyy} {...qtyyProps}/>
                        </FormItem>
                    </Col>
                </Row>
            </Modal>
        </Form>
    }
});
modal = createForm()(modal);
module.exports = modal;