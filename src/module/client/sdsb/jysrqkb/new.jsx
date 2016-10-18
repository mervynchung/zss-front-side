import React from 'react'
import { Steps, Col, Row, Spin, notification, Icon, Button, Form, Input, InputNumber, Popconfirm } from 'antd'
import Panel from 'component/compPanel'
import { SelectorYear, SelectorXZ, SelectorSWSXZ, SelectorCS } from 'component/compSelector'
import auth from 'common/auth.js'
import config from 'common/configuration.js'
import req from 'common/request'
import utils from 'common/utils'
import Success from './successScr'
import FailScr from './failScr'

const ButtonGroup = Button.Group;
const FormItem = Form.Item;
const PanelBar = Panel.ToolBar;

let Editfrom = React.createClass({
    checkRyzs(rule, value, callback) {
        if (value < this.props.form.getFieldValue('zyzcswsrs')) {
            callback("人员总数要大于执业人数")
        } else {
            callback()
        }
    },
    checkZczj(rule, value, callback) {
        if (this.props.data.jgxz_dm == 2 && (!value || value <= 0)) {
            callback("必填")
        } else {
            callback()
        }
    },
    checkCzrs(rule, value, callback) {
        if (this.props.data.jgxz_dm == 2 && (!value || value <= 0)) {
            callback("必填")
        } else {
            callback()
        }
    },
    checkHhrs(rule, value, callback) {
        if (this.props.data.jgxz_dm == 1 && (!value || value <= 0)) {
            callback("必填")
        } else {
            callback()
        }
    },
    checkYysr(rule, value, callback) {
        if (this.props.data.jgxz_dm == 1 && (!value || value <= 0)) {
            callback("必填")
        } else {
            callback()
        }
    },
    commit() {
        const {validateFields} = this.props.form;
        validateFields((errors, values) => {
            if (!!errors) {
                return;
            }
            values = utils.transEmpty2Null(values);
            this.props.onCommit(values);
        })
    },
    save() {
        const {validateFields} = this.props.form;
        validateFields((errors, values) => {
            if (!!errors) {
                return;
            }
            values = utils.transEmpty2Null(values);
            this.props.onSave(values);
        })
    },
    render() {
        const {data} = this.props;
        const {getFieldProps} = this.props.form;
        const layout = {
            labelCol: { span: 12 },
            wrapperCol: { span: 12 }
        };
        const style = { style: { width: '100%' } };
        const ndProps = getFieldProps('nd', {
            rules: [
                { required: true, type: 'number', message: '必填' }
            ]
        });
        const jgxzProps = getFieldProps('jgxz_dm', {
            rules: [
                { required: true, message: '必填' }
            ]
        });
        const frdbProps = getFieldProps('frdbxm', {
            rules: [
                { required: true, whitespace: true, message: '必填' }
            ]
        });
        const ryzsProps = getFieldProps('ryzs', {
            rules: [
                { required: true, type: "number", message: '必填' },
                { validator: this.checkRyzs }
            ]
        });
        const zyzcswsrsProps = getFieldProps('zyzcswsrs', {
            rules: [
                { required: true, type: "number", message: '必填' }
            ]
        });
        const lrzeProps = getFieldProps('lrze', {
            rules: [
                { required: true, type: "number", message: '必填' }
            ]
        });
        const zczeProps = getFieldProps('zcze', {
            rules: [
                { required: true, type: "number", message: '必填' }
            ]
        });
        const srzeProps = getFieldProps('srze', {
            rules: [
                { required: true, type: "number", message: '必填' }
            ]
        });
        const wthsProps = getFieldProps('wths', {
            rules: [
                { required: true, type: "number", message: '必填' }
            ]
        });
        const csProps = getFieldProps('cs_dm', {
            rules: [
                { required: true, type: 'object', message: '必填' }
            ]
        });
        const zczjProps = getFieldProps('zczj', {
            rules: [
                { validator: this.checkZczj }
            ]
        });
        const czrsProps = getFieldProps('czrs', {
            rules: [
                { validator: this.checkCzrs }
            ]
        });
        const hhrsProps = getFieldProps('hhrs', {
            rules: [
                { validator: this.checkHhrs }
            ]
        });
        const yysrProps = getFieldProps('yysr', {
            rules: [
                { validator: this.checkYysr }
            ]
        });
        const tbrProps = getFieldProps('tianbiaoren', {
            rules: [
                { required: true, whitespace: true, message: '必填' }
            ]
        });
        const szProps = getFieldProps('suozhang', {
            rules: [
                { required: true, whitespace: true, message: '必填' }
            ]
        });
        return <div className="fix-table no-border table-striped  ">
            <Form horizontal>
                <table className="tg">
                    <colgroup>
                        <col className="ant-col-6"></col>
                        <col className="ant-col-3"></col>
                        <col className="ant-col-2"></col>
                        <col className="ant-col-4"></col>
                        <col className="ant-col-2"></col>
                        <col className="ant-col-4"></col>
                        <col className="ant-col-3"></col>
                    </colgroup>
                    <tbody>
                        <tr>
                            <td>单位: {data.dwmc}</td>
                            <td>  <Col
                                label="年度：">
                                <SelectorYear disabled  { ...getFieldProps('nd',{ initialValue: data.tbnd }) } />
                            </Col>
                            </td>
                            <td>制表人:</td>

                            <td ><Input   {...getFieldProps('tbr',{ initialValue: data.TBR }) } /> </td>
                            <td>所长：</td>
                            <td ><Input   {...getFieldProps('sz',{ initialValue: data.SZ }) } /> </td>
                            <td>单位：万元、户</td>
                        </tr>
                        <tr style={{ textAlign: 'center' }}>
                            <th rowSpan="2">项目</th>
                            <th colSpan="3">上年数</th>
                            <th colSpan="3">本年数</th>
                        </tr>
                        <tr>
                            <th colSpan="2">户次</th>
                            <th >金额</th>
                            <th colSpan="2">户次</th>
                            <th>金额</th>
                        </tr>
                        <tr>
                            <td ><b>一、收人总额</b></td>
                            <td colSpan="2">----</td>
                            <td><Input disabled  {...getFieldProps('srze0', { initialValue: data.SRZE }) } /></td>
                            <td colSpan="2">----</td>
                            <td><Input disabled  {...getFieldProps('srze',{ initialValue: data.bn_srze }) } /></td>
                        </tr>
                        <tr>
                            <td><b>（一）主营业务合计</b></td>
                            <td colSpan="2"><Input disabled  {...getFieldProps('zyywsrhj_hs0', { initialValue: data.ZYYWSRHJ_HS }) } /></td>
                            <td><Input disabled  {...getFieldProps('zyywsrhj_je0', { initialValue: data.ZYYWSRHJ_JE }) } /></td>
                            <td colSpan="2"><Input   {...getFieldProps('zyywsrhj_hs') } /></td>
                            <td><Input   {...getFieldProps('zyywsrhj_je') } /></td>
                        </tr>
                        <tr>
                            <td>1、涉税服务业务</td>
                            <td colSpan="2"><Input disabled  {...getFieldProps('ssfwyw_hs0', { initialValue: data.SSFWYW_HS }) } /></td>
                            <td><Input  disabled {...getFieldProps('ssfwyw_je0', { initialValue: data.SSFWYW_JE }) } /></td>
                            <td colSpan="2"><Input   {...getFieldProps('ssfwyw_hs') } /></td>
                            <td><Input   {...getFieldProps('ssfwyw_je') } /></td>
                        </tr>
                        <tr>
                            <td>(1)代理税务登记</td>
                            <td colSpan="2"><Input disabled  {...getFieldProps('dlswdj_hs0', { initialValue: data.DLSWDJ_HS }) } /></td>
                            <td><Input disabled  {...getFieldProps('dlswdj_je0', { initialValue: data.DLSWDJ_JE }) } /></td>
                            <td colSpan="2"><Input   {...getFieldProps('dlswdj_hs') } /></td>
                            <td><Input   {...getFieldProps('dlswdj_je') } /></td>
                        </tr>
                        <tr>
                            <td>(2)代理纳税申报</td>
                            <td colSpan="2"><Input disabled  {...getFieldProps('dlnssb_hs0', { initialValue: data.DLNSSB_HS }) } /></td>
                            <td><Input  disabled {...getFieldProps('dlnssb_je0', { initialValue: data.DLNSSB_JE }) } /></td>
                            <td colSpan="2"><Input   {...getFieldProps('dlnssb_hs') } /></td>
                            <td><Input   {...getFieldProps('dlnssb_je') } /></td>
                        </tr>
                        <tr>
                            <td>(3)代理建帐记帐</td>
                            <td colSpan="2"><Input disabled  {...getFieldProps('dljzjz_hs0', { initialValue: data.DLJZJZ_HS }) } /></td>
                            <td><Input disabled  {...getFieldProps('dljzjz_je0', { initialValue: data.DLJZJZ_JE }) } /></td>
                            <td colSpan="2"><Input   {...getFieldProps('dljzjz_hs') } /></td>
                            <td><Input   {...getFieldProps('dljzjz_je') } /></td>
                        </tr>
                        <tr>
                            <td>(4)代理申请减、免、退税</td>
                            <td colSpan="2"><Input disabled  {...getFieldProps('dlsqjmts_hs0', { initialValue: data.DLSQJMTS_HS }) } /></td>
                            <td><Input disabled  {...getFieldProps('dlsqjmts_je0', { initialValue: data.DLSQJMTS_JE }) } /></td>
                            <td colSpan="2"><Input   {...getFieldProps('dlsqjmts_hs') } /></td>
                            <td><Input   {...getFieldProps('dlsqjmts_je') } /></td>
                        </tr>
                        <tr>
                            <td>(5)代理申请增值税一般纳税人资格认定</td>
                            <td colSpan="2"><Input disabled  {...getFieldProps('dlzgrd_hs0', { initialValue: data.DLZGRD_HS }) } /></td>
                            <td><Input disabled  {...getFieldProps('dlzgrd_je0', { initialValue: data.DLZGRD_JE }) } /></td>
                            <td colSpan="2"><Input   {...getFieldProps('dlzgrd_hs') } /></td>
                            <td><Input   {...getFieldProps('dlzgrd_je') } /></td>
                        </tr>
                        <tr>
                            <td>(6)代理制作涉税文书</td>
                            <td colSpan="2"><Input disabled  {...getFieldProps('dlzzssws_hs0', { initialValue: data.DLZZSSWS_HS }) } /></td>
                            <td><Input disabled  {...getFieldProps('dlzzssws_je0', { initialValue: data.DLZZSSWS_JE }) } /></td>
                            <td colSpan="2"><Input   {...getFieldProps('dlzzssws_hs') } /></td>
                            <td><Input   {...getFieldProps('dlzzssws_je') } /></td>
                        </tr>
                        <tr>
                            <td>(7)代理一机多卡业务</td>
                            <td colSpan="2"><Input disabled  {...getFieldProps('dlyjdk_hs0', { initialValue: data.DLYJDK_HS }) } /></td>
                            <td><Input disabled  {...getFieldProps('dlyjdk_je0', { initialValue: data.DLYJDK_JE }) } /></td>
                            <td colSpan="2"><Input   {...getFieldProps('dlyjdk_hs') } /></td>
                            <td><Input   {...getFieldProps('dlyjdk_je') } /></td>
                        </tr>
                        <tr>
                            <td>(8)受聘税务顾问咨珣</td>
                            <td colSpan="2"><Input disabled  {...getFieldProps('spswgwzx_hs0', { initialValue: data.SPSWGWZX_HS }) } /></td>
                            <td><Input disabled  {...getFieldProps('spswgwzx_je0', { initialValue: data.SPSWGWZX_JE }) } /></td>
                            <td colSpan="2"><Input   {...getFieldProps('spswgwzx_hs') } /></td>
                            <td><Input   {...getFieldProps('spswgwzx_je') } /></td>
                        </tr>
                        <tr>
                            <td>(9)代理税收筹划</td>
                            <td colSpan="2"><Input disabled  {...getFieldProps('dlssch_hs0', { initialValue: data.DLSSCH_HS }) } /></td>
                            <td><Input disabled  {...getFieldProps('dlssch_je0', { initialValue: data.DLSSCH_JE }) } /></td>
                            <td colSpan="2"><Input   {...getFieldProps('dlssch_hs') } /></td>
                            <td><Input   {...getFieldProps('dlssch_je') } /></td>
                        </tr>
                        <tr>
                            <td>(10)涉税培训业务</td>
                            <td colSpan="2"><Input disabled  {...getFieldProps('sspx_hs0', { initialValue: data.SSPX_HS }) } /></td>
                            <td><Input disabled  {...getFieldProps('sspx_je0', { initialValue: data.SSPX_JE }) } /></td>
                            <td colSpan="2"><Input   {...getFieldProps('sspx_hs') } /></td>
                            <td><Input   {...getFieldProps('sspx_je') } /></td>
                        </tr>
                        <tr>
                            <td>(11)其他涉税服务业务小计</td>
                            <td colSpan="2"><Input disabled  {...getFieldProps('qtssfwywxj_hs0', { initialValue: data.QTSSFWYWXJ_HS }) } /></td>
                            <td><Input disabled  {...getFieldProps('qtssfwywxj_je0', { initialValue: data.QTSSFWYWXJ_JE }) } /></td>
                            <td colSpan="2"><Input   {...getFieldProps('qtssfwywxj_hs') } /></td>
                            <td><Input   {...getFieldProps('qtssfwywxj_je') } /></td>
                        </tr>
                        <tr>
                            <td>2、涉税鉴证业务</td>
                            <td colSpan="2"><Input disabled  {...getFieldProps('ssjzyw_hs0', { initialValue: data.SSJZYW_HS }) } /></td>
                            <td><Input disabled  {...getFieldProps('ssjzyw_je0', { initialValue: data.SSJZYW_JE }) } /></td>
                            <td colSpan="2"><Input   {...getFieldProps('ssjzyw_hs') } /></td>
                            <td><Input   {...getFieldProps('ssjzyw_je') } /></td>
                        </tr>
                        <tr>
                            <td>(1)企业所得税汇算清缴纳税申报鉴证业务</td>
                            <td colSpan="2"><Input disabled  {...getFieldProps('sdshsqj_hs0', { initialValue: data.SDSHSQJ_HS }) } /></td>
                            <td><Input disabled  {...getFieldProps('sdshsqj_je0', { initialValue: data.SDSHSQJ_JE }) } /></td>
                            <td colSpan="2"><Input   {...getFieldProps('sdshsqj_hs') } /></td>
                            <td><Input   {...getFieldProps('sdshsqj_je') } /></td>
                        </tr>
                        <tr>
                            <td>(2)企业税前弥补亏损鉴证业务</td>
                            <td colSpan="2"><Input disabled  {...getFieldProps('mbks_hs0', { initialValue: data.MBKS_HS }) } /></td>
                            <td><Input disabled  {...getFieldProps('mbks_je0', { initialValue: data.MBKS_JE }) } /></td>
                            <td colSpan="2"><Input   {...getFieldProps('mbks_hs') } /></td>
                            <td><Input   {...getFieldProps('mbks_je') } /></td>
                        </tr>
                        <tr>
                            <td>(3)企业资产损失税前税前扣除鉴证业务</td>
                            <td colSpan="2"><Input disabled  {...getFieldProps('ccsssqkc_hs0', { initialValue: data.CCSSSQKC_HS }) } /></td>
                            <td><Input disabled  {...getFieldProps('ccsssqkc_je0', { initialValue: data.CCSSSQKC_JE }) } /></td>
                            <td colSpan="2"><Input   {...getFieldProps('ccsssqkc_hs') } /></td>
                            <td><Input   {...getFieldProps('ccsssqkc_je') } /></td>
                        </tr>
                        <tr>
                            <td>(4)土地增值税清算鉴证业务</td>
                            <td colSpan="2"><Input disabled  {...getFieldProps('tt_hs0', { initialValue: data.TT_HS }) } /></td>
                            <td><Input disabled  {...getFieldProps('tt_je0', { initialValue: data.TT_JE }) } /></td>
                            <td colSpan="2"><Input   {...getFieldProps('tt_hs') } /></td>
                            <td><Input   {...getFieldProps('tt_je') } /></td>
                        </tr>
                        <tr>
                            <td>(5)其他涉税鉴证业务小计</td>
                            <td colSpan="2"><Input disabled  {...getFieldProps('qtssjz_hs0', { initialValue: data.QTSSJZ_HS }) } /></td>
                            <td><Input disabled  {...getFieldProps('qtssjz_je0', { initialValue: data.QTSSJZ_JE }) } /></td>
                            <td colSpan="2"><Input   {...getFieldProps('qtssjz_hs') } /></td>
                            <td><Input   {...getFieldProps('qtssjz_je') } /></td>
                        </tr>
                        <tr>
                            <td style={{ paddingLeft: '5em' }}>⑴</td>
                            <td colSpan="2"><Input disabled  {...getFieldProps('qtssywsr_hs10', { initialValue: data.QTSSYWSR_HS1 }) } /></td>
                            <td><Input  disabled {...getFieldProps('qtssywsr_je10', { initialValue: data.QTSSYWSR_JE1 }) } /></td>
                            <td colSpan="2"><Input   {...getFieldProps('qtssywsr_hs1') } /></td>
                            <td><Input   {...getFieldProps('qtssywsr_je1') } /></td>
                        </tr>
                        <tr>
                            <td style={{ paddingLeft: '5em' }}>⑵</td>
                            <td colSpan="2"><Input disabled  {...getFieldProps('qtssywsr_hs20', { initialValue: data.QTSSYWSR_HS2 }) } /></td>
                            <td><Input disabled  {...getFieldProps('qtssywsr_je20', { initialValue: data.QTSSYWSR_JE2 }) } /></td>
                            <td colSpan="2"><Input   {...getFieldProps('qtssywsr_hs2') } /></td>
                            <td><Input   {...getFieldProps('qtssywsr_je2') } /></td>
                        </tr>
                        <tr>
                            <td style={{ paddingLeft: '5em' }}>⑶</td>
                            <td colSpan="2"><Input disabled  {...getFieldProps('qtssywsr_hs30', { initialValue: data.QTSSYWSR_HS3 }) } /></td>
                            <td><Input disabled  {...getFieldProps('qtssywsr_je30', { initialValue: data.QTSSYWSR_JE3 }) } /></td>
                            <td colSpan="2"><Input   {...getFieldProps('qtssywsr_hs3') } /></td>
                            <td><Input   {...getFieldProps('qtssywsr_je3') } /></td>
                        </tr>
                        <tr>
                            <td><b>（二）其他收人合计</b></td>
                            <td colSpan="3"><Col span={12} offset={6}><Input disabled {...getFieldProps('qtywsrhj0', { initialValue: data.QTYWSRHJ }) } /></Col></td>

                            <td colSpan="3"><Col span={12} offset={6}><Input  {...getFieldProps('qtywsrhj') } /></Col></td>
                        </tr>
                        <tr>
                            <td><b>二、支出总额</b></td>
                            <td colSpan="3"><Col span={12} offset={6}><Input disabled {...getFieldProps('zcze0', { initialValue: data.ZCZE }) } /></Col></td>
                            <td colSpan="3"><Col span={12} offset={6}><Input  {...getFieldProps('zcze') } /></Col></td>
                        </tr>
                        <tr>
                            <td>（一）主营业务成本</td>
                            <td colSpan="3"><Col span={12} offset={6}><Input disabled {...getFieldProps('zyywcb0', { initialValue: data.ZYYWCB }) } /></Col></td>
                            <td colSpan="3"><Col span={12} offset={6}><Input  {...getFieldProps('zyywcb') } /></Col></td>
                        </tr>
                        <tr>
                            <td>（二）主营业务税金及附加</td>
                            <td colSpan="3"><Col span={12} offset={6}><Input disabled {...getFieldProps('zyywsjfj0', { initialValue: data.ZYYWSJFJ }) } /></Col></td>
                            <td colSpan="3"><Col span={12} offset={6}><Input  {...getFieldProps('zyywsjfj') } /></Col></td>
                        </tr>
                        <tr>
                            <td>（三）营业费用</td>
                            <td colSpan="3"><Col span={12} offset={6}><Input disabled {...getFieldProps('yyfy0', { initialValue: data.YYFY }) } /></Col></td>
                            <td colSpan="3"><Col span={12} offset={6}><Input  {...getFieldProps('yyfy') } /></Col></td>
                        </tr>
                        <tr>
                            <td>（四）管理费用</td>
                            <td colSpan="3"><Col span={12} offset={6}><Input disabled {...getFieldProps('glfy0', { initialValue: data.GLFY }) } /></Col></td>
                            <td colSpan="3"><Col span={12} offset={6}><Input  {...getFieldProps('glfy') } /></Col></td>
                        </tr>
                        <tr>
                            <td>（五）财务费用</td>
                            <td colSpan="3"><Col span={12} offset={6}><Input disabled {...getFieldProps('cwfy0', { initialValue: data.CWFY }) } /></Col></td>
                            <td colSpan="3"><Col span={12} offset={6}><Input  {...getFieldProps('cwfy') } /></Col></td>
                        </tr>
                        <tr>
                            <td>（六）营业外支出</td>
                            <td colSpan="3"><Col span={12} offset={6}><Input disabled {...getFieldProps('yywzc0', { initialValue: data.YYWZC }) } /></Col></td>
                            <td colSpan="3"><Col span={12} offset={6}><Input  {...getFieldProps('yywzc') } /></Col></td>
                        </tr>
                        <tr>
                            <td>（七）其他支出</td>
                            <td colSpan="3"><Col span={12} offset={6}><Input disabled {...getFieldProps('qtzc0', { initialValue: data.QTZC }) } /></Col></td>
                            <td colSpan="3"><Col span={12} offset={6}><Input  {...getFieldProps('qtzc') } /></Col></td>
                        </tr>
                        <tr>
                            <td><b>三、利润总额</b></td>
                            <td colSpan="3"><Col span={12} offset={6}><Input disabled {...getFieldProps('lrze0', { initialValue: data.LRZE }) } /></Col></td>
                            <td colSpan="3"><Col span={12} offset={6}><Input  {...getFieldProps('lrze',{ initialValue: data.bn_lrze }) } /></Col></td>
                        </tr>
                    </tbody>
                </table>
                <Row style={{ marginTop: '24px' }}>
                    <Col span="5" offset="19">
                        <ButtonGroup>
                            <Popconfirm placement="top" title="确定保存？" onConfirm={this.save}>
                                <Button type="primary"> <Icon type="save" />保存</Button>
                            </Popconfirm>
                            <Popconfirm placement="top" title="确定提交？" onConfirm={this.commit}>
                                <Button type="primary"> <Icon type="to-top" />提交</Button>
                            </Popconfirm>
                        </ButtonGroup>
                    </Col>
                </Row>
            </Form>
        </div>
    }
});
Editfrom = Form.create({
    mapPropsToFields(props) {
        let result = {};
        for (let prop in props.data) {
            result[prop] = { value: props.data[prop] }
        }
        return result;
    }
})(Editfrom);


const c = React.createClass({
    getDefaultProps() {
        return {
            title: '经营收入情况表',
            url: config.HOST + config.URI_API_PROJECT + '/client/swsjbqk',
            initUrl: config.HOST + config.URI_API_PROJECT + '/add/upyear1'
        }
    },
    getInitialState() {
        return {
            loading: true,
            data: {},
            scr: 'normal'
        }
    },
    back() {
        this.props.onBack();
    },

    //保存
    handleSave(values) {
        const {url} = this.props;
        values.ztbj = 0;
        values.dwmc = this.state.data.dwmc;
        this.setState({ loading: true, data: values });
        req({
            method: 'post',
            url: url,
            data: values
        }).then(resp => {
            this.setState({ loading: false, scr: 'success', successType: 'save' })
        }).catch(e => {
            this.setState({ loading: false });
            if (e.status == 403) {
                let res = JSON.parse(e.response);
                notification.error({
                    duration: 3,
                    message: '操作失败',
                    description: res.text
                });
            } else {
                notification.error({
                    duration: 3,
                    message: '操作失败',
                    description: '报表数据保存失败，请稍后再尝试'
                });
            }
        });
    },
    //提交
    handleCommit(values) {
        const {url} = this.props;
        values.ztbj = 1;
        values.dwmc = this.state.data.dwmc;
        this.setState({ loading: true, data: values });
        req({
            method: 'post',
            url: url,
            data: values
        }).then(resp => {
            this.setState({ loading: false, scr: 'success', successType: 'commit' })
        }).catch(e => {
            this.setState({ loading: false });
            if (e.status == 403) {
                let res = JSON.parse(e.response);
                notification.error({
                    duration: 3,
                    message: '操作失败',
                    description: res.text
                });
            } else {
                notification.error({
                    duration: 3,
                    message: '操作失败',
                    description: '报表数据保存失败，请稍后再尝试'
                });
            }
        });
    },

    componentDidMount() {
        const {initUrl} = this.props;
        req({
            method: 'get',
            url: initUrl
        }).then(resp => {
            this.setState({ data: resp.upyear, loading: false })
        }).catch(e => {
            if (e.status == 403) {
                let res = JSON.parse(e.response);
                let failtext = {
                    text: res.text
                };
                this.setState({ scr: 'fail', loading: false, failtext: failtext })
            } else {
                this.setState({ scr: 'fail', loading: false })
            }

        })
    },

    render() {
        const {title} = this.props;
        let {data, loading, scr, failtext, successType} = this.state;
        const panelBar = <PanelBar>
            <Button onClick={this.back}>
                <Icon type="rollback" />返回
            </Button>
        </PanelBar>;

        let content = {
            normal: <Editfrom data={data} onCommit={this.handleCommit} onSave={this.handleSave} />,
            fail: <FailScr text={failtext} />,
            success: <Success type={successType} />
        };

        return <Panel className="jysrqkb-edit" toolbar={panelBar} title={title}>
            <Spin spinning={loading}>
                {content[scr]}
            </Spin>
        </Panel>

    }
});


module.exports = c;