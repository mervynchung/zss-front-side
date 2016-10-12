import React from 'react'
import {Steps, Col, Row, Spin, notification, Modal, Icon, Button, Form,Input} from 'antd'
import Panel from 'component/compPanel'
import {SelectorYear, SelectorXZ, SelectorJGXZ, SelectorCS} from 'component/compSelector'
import auth from 'common/auth.js'
import config from 'common/configuration.js'
import req from 'reqwest'
import EditSuccess from './commitSuccessScr';

const ButtonGroup = Button.Group;
const FormItem = Form.Item;
const PanelBar = Panel.toolbar;


let form  = React.createClass({
    getDefaultProps(){
        return {
            title: '编辑事务所基本情况表',
            data:{}
        }
    },
    getInitialState(){
        return {
            loading: true,
            addSuccess: false,
            successResp: {},
            stage: 0,
            dataXY: {},
            dataYW: {},
            dataJG: {},
            customer: {},
            zysws: []
        }
    },
    back(){
        this.props.onBack();
    },
    //添加新报备信息
    addYwbb(param){
        const token = auth.getToken();
        return req({
            url: YWBB_URL,
            method: 'post',
            type: 'json',
            contentType: 'application/json',
            data: JSON.stringify(param),
            headers: {'x-auth-token': token}
        }).then(resp=> {
            this.setState({loading: false, addSuccess: true, successResp: resp});
        }).fail(e=> {
            let r = JSON.parse(e.responseText);
            this.setState({loading: false});
            if (e.status == 403) {
                Modal.error({
                    title: '业务信息提交失败',
                    content: r.text
                });
            } else {
                notification.error({
                    duration: 3,
                    message: '操作失败',
                    description: '网络访问故障'
                });
            }
        })
    },

    //保存业务报备
    handleSave(){
        let values = {
            dataXY: this.state.dataXY,
            dataYW: this.state.dataYW,
            dataJG: this.state.dataJG,
            customer: this.state.customer,
            type: 'save'
        };
        this.setState({loading: true});
        this.addYwbb(values)
    },
    //提交业务报备
    handleCommit(){
        let values = {
            dataXY: this.state.dataXY,
            dataYW: this.state.dataYW,
            dataJG: this.state.dataJG,
            customer: this.state.customer,
            type: 'commit'
        };
        this.setState({loading: true});
        this.addYwbb(values)
    },
    //获取本机构下属执业税务师列表
    fetchYwbbMisc () {
        const jid = auth.getJgid();
        const token = auth.getToken();
        const YWBBMISC_URL = config.HOST + config.URI_API_PROJECT + '/ywbbmisc/' + jid;

        return req({
            url: YWBBMISC_URL,
            method: 'get',
            type: 'json',
            headers: {'x-auth-token': token}
        })
    },
    componentDidMount(){
    },

    render(){
        const {id, data,title} = this.props;
        const {getFieldProps} = this.props.form;
        const panelBar = <PanelBar>
            <Button onClick={this.back}>
                <Icon type="rollback"/>返回
            </Button>
        </PanelBar>;

        return <Panel className="swsjbqk-edit" toolbar={panelBar} title={title}>
            <div className="fix-table table-bordered table-striped">
                <Form horizontal onSubmit={this.handleSubmit}>
                    <table>
                        <colgroup>
                            <col className="col-3"/>
                            <col className="col-3"/>
                            <col className="col-3"/>
                            <col className="col-3"/>
                            <col className="col-3"/>
                            <col className="col-3"/>
                            <col className="col-3"/>
                            <col className="col-3"/>
                        </colgroup>
                        <tbody>
                        <tr>
                            <td colSpan="3">单位：{data.DWMC}</td>
                            <td  ><Col
                                label="年度：">
                                <SelectorYear  { ...getFieldProps('nd')}/>
                            </Col>
                            </td>
                            <td >制表人：<Input   {...getFieldProps('tianbiaoren', )}/></td>
                            <td >所长：<Input   {...getFieldProps('suozhang')}/></td>
                            <td colSpan="2">单位：万元、人</td>
                        </tr>

                        <tr>
                            <td width="11%" style={{textAlign: 'center'}}>组织形式</td>
                            <td width="14%"><Col
                                label="选择：">
                                <SelectorJGXZ  { ...getFieldProps('jgxz_dm')}/>
                            </Col></td>
                            <td style={{textAlign: 'center'}}>法人</td>
                            <td ><Input   {...getFieldProps('frdbxm')}/></td>
                            <td style={{textAlign: 'center'}}>股东人数</td>
                            <td ><Input   {...getFieldProps('czrs')}/></td>
                            <td style={{textAlign: 'center'}}>人员总数</td>
                            <td ><Input   {...getFieldProps('ryzs')}/></td>
                        </tr>

                        <tr>
                            <td width="11%" style={{textAlign: 'center'}}>执业人数</td>
                            <td ><Input disabled  {...getFieldProps('zyzcswsrs')}/></td>
                            <td style={{textAlign: 'center'}}>资产总额</td>
                            <td ><Input   {...getFieldProps('zcze')}/></td>
                            <td style={{textAlign: 'center'}}>注册资金</td>
                            <td ><Input   {...getFieldProps('zczj')}/></td>
                            <td style={{textAlign: 'center'}}>收入总额</td>
                            <td ><Input   {...getFieldProps('srze')}/></td>
                        </tr>

                        <tr>
                            <td width="11%" style={{textAlign: 'center'}}>利润总额</td>
                            <td ><Input disabled  {...getFieldProps('lrze')}/></td>
                            <td style={{textAlign: 'center'}}>机构所在地</td>
                            <td  ><Col
                                label="选择：">
                                <SelectorCS  { ...getFieldProps('cs_dm')}/>
                            </Col></td>
                            <td style={{textAlign: 'center'}}>委托户数</td>
                            <td ><Input   {...getFieldProps('wths')}/></td>
                            <td style={{textAlign: 'center'}}>合伙人数</td>
                            <td ><Input   {...getFieldProps('hhrs')}/></td>
                        </tr>
                        <tr>
                            <td style={{textAlign: 'center'}}>运营资金</td>
                            <td ><Input   {...getFieldProps('yysr')}/></td>
                        </tr>
                        </tbody>
                        <tbody>
                        <tr >
                            <td colSpan="3" style={{textAlign: 'center'}}>
                                <Button type="primary" onClick={this.handleSubmit}> <Icon type="check"/>保存</Button>
                            </td>
                            <td colSpan="2" style={{textAlign: 'center'}}>
                                <Button type="primary" onClick={this.showModal}> <Icon type="arrow-up"/>提交</Button>
                                <Modal title="你确定要提交吗？" visible={this.state.visible}
                                       onOk={this.handleOk} onCancel={this.handleCancel}>
                                    <p>提交后就不能修改了！！！</p>
                                </Modal>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </Form>
            </div>
        </Panel>

    }
});
form = Form.create({
    mapPropsToFields(props) {
        let result = {};
        for (let prop in props.data) {
            result[prop] = {value: props.data[prop]}
        }
        return result;
    }
})(form);
module.exports = form;