import React from 'react'
import { Steps, Col, Row, Spin, notification, Icon, Button, Form, Input } from 'antd'
import Panel from 'component/compPanel'
import { SelectorYear, SelectorXZ, SelectorSWSXZ, SelectorCS } from 'component/compSelector'
import auth from 'common/auth.js'
import config from 'common/configuration.js'
import req from 'common/request'
import CommitSuccess from './successScr'
import InitFailScr from './failScr'

const ButtonGroup = Button.Group;
const FormItem = Form.Item;
const PanelBar = Panel.ToolBar;

let Editfrom = React.createClass({
    render() {
        const {data} = this.props; 
        const {getFieldProps} = this.props.form;
        return <div className="fix-table no-border table-striped ">
            <Form horizontal>
                <table className="tg" style={{ width: '765px', border: 'none' }}>
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
                            <td >单位:{data.DWMC} </td>
                            <td  >  <Col
                                label="年度：">
                                <SelectorYear  { ...getFieldProps('nd', { initialValue: data.ND }) } />
                            </Col>
                            </td>
                            <td>制表人:</td>

                            <td ><Input   {...getFieldProps('tbr', { initialValue: data.TBR }) } /> </td>
                            <td>所长：</td>
                            <td ><Input   {...getFieldProps('sz', { initialValue: data.SZ }) } /> </td>
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
                            <td><Input   {...getFieldProps('srze0', { initialValue: data.SRZE0 }) } /></td>
                            <td colSpan="2">----</td>
                            <td><Input   {...getFieldProps('srze', { initialValue: data.SRZE }) } /></td>
                        </tr>
                        <tr>
                            <td><b>（一）主营业务合计</b></td>
                            <td colSpan="2"><Input   {...getFieldProps('zyywsrhj_hs0', { initialValue: data.ZYYWSRHJ_HS0 }) } /></td>
                            <td><Input   {...getFieldProps('zyywsrhj_je0', { initialValue: data.ZYYWSRHJ_JE0 }) } /></td>
                            <td colSpan="2"><Input   {...getFieldProps('zyywsrhj_hs', { initialValue: data.ZYYWSRHJ_JE }) } /></td>
                            <td><Input   {...getFieldProps('zyywsrhj_je', { initialValue: data.ZYYWSRHJ_JE }) } /></td>
                        </tr>
                        <tr>
                            <td>1、涉税服务业务</td>
                            <td colSpan="2"><Input   {...getFieldProps('ssfwyw_hs0', { initialValue: data.SSFWYW_HS0 }) } /></td>
                            <td><Input   {...getFieldProps('ssfwyw_je0', { initialValue: data.SSFWYW_JE0 }) } /></td>
                            <td colSpan="2"><Input   {...getFieldProps('ssfwyw_hs', { initialValue: data.SSFWYW_JE }) } /></td>
                            <td><Input   {...getFieldProps('ssfwyw_je', { initialValue: data.SSFWYW_JE }) } /></td>
                        </tr>
                        <tr>
                            <td>(1)代理税务登记</td>
                            <td colSpan="2"><Input   {...getFieldProps('dlswdj_hs0', { initialValue: data.DLSWDJ_HS0 }) } /></td>
                            <td><Input   {...getFieldProps('dlswdj_je0', { initialValue: data.DLSWDJ_JE0 }) } /></td>
                            <td colSpan="2"><Input   {...getFieldProps('dlswdj_hs', { initialValue: data.DLSWDJ_JE }) } /></td>
                            <td><Input   {...getFieldProps('dlswdj_je', { initialValue: data.DLSWDJ_JE }) } /></td>
                        </tr>
                        <tr>
                            <td>(2)代理纳税申报</td>
                            <td colSpan="2"><Input   {...getFieldProps('dlnssb_hs0', { initialValue: data.DLNSSB_HS0 }) } /></td>
                            <td><Input   {...getFieldProps('dlnssb_je0', { initialValue: data.DLNSSB_JE0 }) } /></td>
                            <td colSpan="2"><Input   {...getFieldProps('dlnssb_hs', { initialValue: data.DLNSSB_JE }) } /></td>
                            <td><Input   {...getFieldProps('dlnssb_je', { initialValue: data.DLNSSB_JE }) } /></td>
                        </tr>
                        <tr>
                            <td>(3)代理建帐记帐</td>
                            <td colSpan="2"><Input   {...getFieldProps('dljzjz_hs0', { initialValue: data.DLJZJZ_HS0 }) } /></td>
                            <td><Input   {...getFieldProps('dljzjz_je0', { initialValue: data.DLJZJZ_JE0 }) } /></td>
                            <td colSpan="2"><Input   {...getFieldProps('dljzjz_hs', { initialValue: data.DLJZJZ_HS }) } /></td>
                            <td><Input   {...getFieldProps('dljzjz_je', { initialValue: data.DLJZJZ_JE }) } /></td>
                        </tr>
                        <tr>
                            <td>(4)代理申请减、免、退税</td>
                            <td colSpan="2"><Input   {...getFieldProps('dlsqjmts_hs0', { initialValue: data.DLSQJMTS_HS0 }) } /></td>
                            <td><Input   {...getFieldProps('dlsqjmts_je0', { initialValue: data.DLSQJMTS_JE0 }) } /></td>
                            <td colSpan="2"><Input   {...getFieldProps('dlsqjmts_hs', { initialValue: data.DLSQJMTS_HS }) } /></td>
                            <td><Input   {...getFieldProps('dlsqjmts_je', { initialValue: data.DLSQJMTS_JE }) } /></td>
                        </tr>
                        <tr>
                            <td>(5)代理申请增值税一般纳税人资格认定</td>
                            <td colSpan="2"><Input   {...getFieldProps('dlzgrd_hs0', { initialValue: data.DLZGRD_HS0 }) } /></td>
                            <td><Input   {...getFieldProps('dlzgrd_je0', { initialValue: data.DLZGRD_JE0 }) } /></td>
                            <td colSpan="2"><Input   {...getFieldProps('dlzgrd_hs', { initialValue: data.DLZGRD_HS }) } /></td>
                            <td><Input   {...getFieldProps('dlzgrd_je', { initialValue: data.DLZGRD_JE }) } /></td>
                        </tr>
                        <tr>
                            <td>(6)代理制作涉税文书</td>
                            <td colSpan="2"><Input   {...getFieldProps('dlzzssws_hs0', { initialValue: data.DLZZSSWS_HS0 }) } /></td>
                            <td><Input   {...getFieldProps('dlzzssws_je0', { initialValue: data.DLZZSSWS_JE0 }) } /></td>
                            <td colSpan="2"><Input   {...getFieldProps('dlzzssws_hs', { initialValue: data.DLZZSSWS_HS }) } /></td>
                            <td><Input   {...getFieldProps('dlzzssws_je', { initialValue: data.DLZZSSWS_JE }) } /></td>
                        </tr>
                        <tr>
                            <td>(7)代理一机多卡业务</td>
                            <td colSpan="2"><Input   {...getFieldProps('dlyjdk_hs0', { initialValue: data.DLYJDK_HS0 }) } /></td>
                            <td><Input   {...getFieldProps('dlyjdk_je0', { initialValue: data.DLYJDK_JE0 }) } /></td>
                            <td colSpan="2"><Input   {...getFieldProps('dlyjdk_hs', { initialValue: data.DLYJDK_HS }) } /></td>
                            <td><Input   {...getFieldProps('dlyjdk_je', { initialValue: data.DLYJDK_JE }) } /></td>
                        </tr>
                        <tr>
                            <td>(8)受聘税务顾问咨珣</td>
                            <td colSpan="2"><Input   {...getFieldProps('spswgwzx_hs0', { initialValue: data.SPSWGWZX_HS0 }) } /></td>
                            <td><Input   {...getFieldProps('spswgwzx_je0', { initialValue: data.SPSWGWZX_JE0 }) } /></td>
                            <td colSpan="2"><Input   {...getFieldProps('spswgwzx_hs', { initialValue: data.SPSWGWZX_HS }) } /></td>
                            <td><Input   {...getFieldProps('spswgwzx_je', { initialValue: data.SPSWGWZX_JE }) } /></td>
                        </tr>
                        <tr>
                            <td>(9)代理税收筹划</td>
                            <td colSpan="2"><Input   {...getFieldProps('dlssch_hs0', { initialValue: data.DLSSCH_HS0 }) } /></td>
                            <td><Input   {...getFieldProps('dlssch_je0', { initialValue: data.DLSSCH_JE0 }) } /></td>
                            <td colSpan="2"><Input   {...getFieldProps('dlssch_hs', { initialValue: data.DLSSCH_HS }) } /></td>
                            <td><Input   {...getFieldProps('dlssch_je', { initialValue: data.DLSSCH_JE }) } /></td>
                        </tr>
                        <tr>
                            <td>(10)涉税培训业务</td>
                            <td colSpan="2"><Input   {...getFieldProps('sspx_hs0', { initialValue: data.SSPX_HS0 }) } /></td>
                            <td><Input   {...getFieldProps('sspx_je0', { initialValue: data.SSPX_JE0 }) } /></td>
                            <td colSpan="2"><Input   {...getFieldProps('sspx_hs', { initialValue: data.SSPX_HS }) } /></td>
                            <td><Input   {...getFieldProps('sspx_je', { initialValue: data.SSPX_JE }) } /></td>
                        </tr>
                        <tr>
                            <td>(11)其他涉税服务业务小计</td>
                            <td colSpan="2"><Input   {...getFieldProps('qtssfwywxj_hs0', { initialValue: data.QTSSFWYWXJ_HS0 }) } /></td>
                            <td><Input   {...getFieldProps('qtssfwywxj_je0', { initialValue: data.QTSSFWYWXJ_JE0 }) } /></td>
                            <td colSpan="2"><Input   {...getFieldProps('qtssfwywxj_hs', { initialValue: data.QTSSFWYWXJ_HS }) } /></td>
                            <td><Input   {...getFieldProps('qtssfwywxj_je', { initialValue: data.QTSSFWYWXJ_JE }) } /></td>
                        </tr>
                        <tr>
                            <td>2、涉税鉴证业务</td>
                            <td colSpan="2"><Input   {...getFieldProps('ssjzyw_hs0', { initialValue: data.SSJZYW_HS0 }) } /></td>
                            <td><Input   {...getFieldProps('ssjzyw_je0', { initialValue: data.SSJZYW_JE0 }) } /></td>
                            <td colSpan="2"><Input   {...getFieldProps('ssjzyw_hs', { initialValue: data.SSJZYW_HS }) } /></td>
                            <td><Input   {...getFieldProps('ssjzyw_je', { initialValue: data.SSJZYW_JE }) } /></td>
                        </tr>
                        <tr>
                            <td>(1)企业所得税汇算清缴纳税申报鉴证业务</td>
                            <td colSpan="2"><Input   {...getFieldProps('sdshsqj_hs0', { initialValue: data.SDSHSQJ_HS0 }) } /></td>
                            <td><Input   {...getFieldProps('sdshsqj_je0', { initialValue: data.SDSHSQJ_JE0 }) } /></td>
                            <td colSpan="2"><Input   {...getFieldProps('sdshsqj_hs', { initialValue: data.SDSHSQJ_HS }) } /></td>
                            <td><Input   {...getFieldProps('sdshsqj_je', { initialValue: data.SDSHSQJ_JE }) } /></td>
                        </tr>
                        <tr>
                            <td>(2)企业税前弥补亏损鉴证业务</td>
                            <td colSpan="2"><Input   {...getFieldProps('mbks_hs0', { initialValue: data.MBKS_HS0 }) } /></td>
                            <td><Input   {...getFieldProps('mbks_je0', { initialValue: data.MBKS_JE0 }) } /></td>
                            <td colSpan="2"><Input   {...getFieldProps('mbks_hs', { initialValue: data.MBKS_HS }) } /></td>
                            <td><Input   {...getFieldProps('mbks_je', { initialValue: data.MBKS_JE }) } /></td>
                        </tr>
                        <tr>
                            <td>(3)企业资产损失税前税前扣除鉴证业务</td>
                            <td colSpan="2"><Input   {...getFieldProps('ccsssqkc_hs0', { initialValue: data.CCSSSQKC_HS0 }) } /></td>
                            <td><Input   {...getFieldProps('ccsssqkc_je0', { initialValue: data.CCSSSQKC_JE0 }) } /></td>
                            <td colSpan="2"><Input   {...getFieldProps('ccsssqkc_hs', { initialValue: data.CCSSSQKC_HS }) } /></td>
                            <td><Input   {...getFieldProps('ccsssqkc_je', { initialValue: data.CCSSSQKC_JE }) } /></td>
                        </tr>
                        <tr>
                            <td>(4)土地增值税清算鉴证业务</td>
                            <td colSpan="2"><Input   {...getFieldProps('tt_hs0', { initialValue: data.TT_HS0 }) } /></td>
                            <td><Input   {...getFieldProps('tt_je0', { initialValue: data.TT_JE0 }) } /></td>
                            <td colSpan="2"><Input   {...getFieldProps('tt_hs', { initialValue: data.TT_HS }) } /></td>
                            <td><Input   {...getFieldProps('tt_je', { initialValue: data.TT_JE }) } /></td>
                        </tr>
                        <tr>
                            <td>(5)其他涉税鉴证业务小计</td>
                            <td colSpan="2"><Input   {...getFieldProps('qtssjz_hs0', { initialValue: data.QTSSJZ_HS0 }) } /></td>
                            <td><Input   {...getFieldProps('qtssjz_je0', { initialValue: data.QTSSJZ_JE0 }) } /></td>
                            <td colSpan="2"><Input   {...getFieldProps('qtssjz_hs', { initialValue: data.QTSSJZ_HS }) } /></td>
                            <td><Input   {...getFieldProps('qtssjz_je', { initialValue: data.QTSSJZ_JE }) } /></td>
                        </tr>
                        <tr>
                            <td style={{ paddingLeft: '5em' }}>⑴</td>
                            <td colSpan="2"><Input   {...getFieldProps('qtssywsr_hs10', { initialValue: data.QTSSYWSR_HS10 }) } /></td>
                            <td><Input   {...getFieldProps('qtssywsr_je10', { initialValue: data.QTSSYWSR_JE10 }) } /></td>
                            <td colSpan="2"><Input   {...getFieldProps('qtssywsr_hs1', { initialValue: data.QTSSYWSR_HS1 }) } /></td>
                            <td><Input   {...getFieldProps('qtssywsr_je1', { initialValue: data.QTSSYWSR_JE1 }) } /></td>
                        </tr>
                        <tr>
                            <td style={{ paddingLeft: '5em' }}>⑵</td>
                            <td colSpan="2"><Input   {...getFieldProps('qtssywsr_hs20', { initialValue: data.QTSSYWSR_HS20 }) } /></td>
                            <td><Input   {...getFieldProps('qtssywsr_je20', { initialValue: data.QTSSYWSR_JE20 }) } /></td>
                            <td colSpan="2"><Input   {...getFieldProps('qtssywsr_hs2', { initialValue: data.QTSSYWSR_HS2 }) } /></td>
                            <td><Input   {...getFieldProps('qtssywsr_je2', { initialValue: data.QTSSYWSR_JE2 }) } /></td>
                        </tr>
                        <tr>
                            <td style={{ paddingLeft: '5em' }}>⑶</td>
                            <td colSpan="2"><Input   {...getFieldProps('qtssywsr_hs30', { initialValue: data.QTSSYWSR_HS30 }) } /></td>
                            <td><Input   {...getFieldProps('qtssywsr_je30', { initialValue: data.QTSSYWSR_JE30 }) } /></td>
                            <td colSpan="2"><Input   {...getFieldProps('qtssywsr_hs3', { initialValue: data.QTSSYWSR_HS3 }) } /></td>
                            <td><Input   {...getFieldProps('qtssywsr_je3', { initialValue: data.QTSSYWSR_JE3 }) } /></td>
                        </tr>
                        <tr>
                            <td><b>（二）其他收人合计</b></td>
                            <td colSpan="3"><Col span={12} offset={6}><Input  {...getFieldProps('qtywsrhj0', { initialValue: data.QTYWSRHJ0 }) } /></Col></td>

                            <td colSpan="3"><Col span={12} offset={6}><Input  {...getFieldProps('qtywsrhj', { initialValue: data.QTYWSRHJ }) } /></Col></td>
                        </tr>
                        <tr>
                            <td><b>二、支出总额</b></td>
                            <td colSpan="3"><Col span={12} offset={6}><Input  {...getFieldProps('zcze0', { initialValue: data.ZCZE0 }) } /></Col></td>
                            <td colSpan="3"><Col span={12} offset={6}><Input  {...getFieldProps('zcze', { initialValue: data.ZCZE }) } /></Col></td>
                        </tr>
                        <tr>
                            <td>（一）主营业务成本</td>
                            <td colSpan="3"><Col span={12} offset={6}><Input  {...getFieldProps('zyywcb0', { initialValue: data.ZYYWCB0 }) } /></Col></td>
                            <td colSpan="3"><Col span={12} offset={6}><Input  {...getFieldProps('zyywcb', { initialValue: data.ZYYWCB }) } /></Col></td>
                        </tr>
                        <tr>
                            <td>（二）主营业务税金及附加</td>
                            <td colSpan="3"><Col span={12} offset={6}><Input  {...getFieldProps('zyywsjfj0', { initialValue: data.ZYYWSJFJ0 }) } /></Col></td>
                            <td colSpan="3"><Col span={12} offset={6}><Input  {...getFieldProps('zyywsjfj', { initialValue: data.ZYYWSJFJ }) } /></Col></td>
                        </tr>
                        <tr>
                            <td>（三）营业费用</td>
                            <td colSpan="3"><Col span={12} offset={6}><Input  {...getFieldProps('yyfy0', { initialValue: data.YYFY0 }) } /></Col></td>
                            <td colSpan="3"><Col span={12} offset={6}><Input  {...getFieldProps('yyfy', { initialValue: data.YYFY }) } /></Col></td>
                        </tr>
                        <tr>
                            <td>（四）管理费用</td>
                            <td colSpan="3"><Col span={12} offset={6}><Input  {...getFieldProps('glfy0', { initialValue: data.GLFY0 }) } /></Col></td>
                            <td colSpan="3"><Col span={12} offset={6}><Input  {...getFieldProps('glfy', { initialValue: data.GLFY }) } /></Col></td>
                        </tr>
                        <tr>
                            <td>（五）财务费用</td>
                            <td colSpan="3"><Col span={12} offset={6}><Input  {...getFieldProps('cwfy0', { initialValue: data.CWFY0 }) } /></Col></td>
                            <td colSpan="3"><Col span={12} offset={6}><Input  {...getFieldProps('cwfy', { initialValue: data.CWFY }) } /></Col></td>
                        </tr>
                        <tr>
                            <td>（六）营业外支出</td>
                            <td colSpan="3"><Col span={12} offset={6}><Input  {...getFieldProps('yywzc0', { initialValue: data.YYWZC0 }) } /></Col></td>
                            <td colSpan="3"><Col span={12} offset={6}><Input  {...getFieldProps('yywzc', { initialValue: data.YYWZC }) } /></Col></td>
                        </tr>
                        <tr>
                            <td>（七）其他支出</td>
                            <td colSpan="3"><Col span={12} offset={6}><Input  {...getFieldProps('qtzc0', { initialValue: data.QTZC0 }) } /></Col></td>
                            <td colSpan="3"><Col span={12} offset={6}><Input  {...getFieldProps('qtzc', { initialValue: data.QTZC }) } /></Col></td>
                        </tr>
                        <tr>
                            <td><b>三、利润总额</b></td>
                            <td colSpan="3"><Col span={12} offset={6}><Input  {...getFieldProps('lrze0', { initialValue: data.LRZE0 }) } /></Col></td>
                            <td colSpan="3"><Col span={12} offset={6}><Input  {...getFieldProps('lrze', { initialValue: data.LRZE }) } /></Col></td>
                        </tr>
                        <tr>
                            <td colSpan="6">
                                <p>填表说明：</p>
                                <p>1.各项收入数均截止到统计年度12月31日。</p>
                                <p>2.“其他涉税鉴证业务”是指除所得税汇算清缴、弥补亏损鉴证业务、企业资产损失税前扣除鉴证业务、土地增值税渚笪鉴证业务以外的涉税鉴证业务。</p>
                                <p>3.“其他收入”是指投资收益、补贴收入、营业外收入等非主营业务收入。</p>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <Row>
                    <Col span="24">
                        <Button type="primary" onClick={this.handleSave}> <Icon type="check" />保存</Button>
                        <Button type="primary" onClick={this.handleCommit}> <Icon type="arrow-up" />提交</Button>
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
            title: '编辑事务所基本情况表',
            url: config.HOST + config.URI_API_PROJECT + '/client/swsjbqk',
            initUrl: config.HOST + config.URI_API_PROJECT + '/client/swsjbqkinit',
        }
    },
    getInitialState() {
        return {
            loading: true,
            addSuccess: false,
            successResp: {},
            data: {},
            scr: 'edit'
        }
    },
    back() {
        this.props.onBack();
    },
    //添加新报备信息
    addYwbb(param) {
        const token = auth.getToken();
        return req({
            url: this.props.apiUrl,
            method: 'post',
            type: 'json',
            contentType: 'application/json',
            data: JSON.stringify(param),
            headers: { 'x-auth-token': token }
        }).then(resp => {
            this.setState({ loading: false, addSuccess: true, successResp: resp });
        }).fail(e => {
            let r = JSON.parse(e.responseText);
            this.setState({ loading: false });
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
    handleSave() {
        let values = {
            dataXY: this.state.dataXY,
            dataYW: this.state.dataYW,
            dataJG: this.state.dataJG,
            customer: this.state.customer,
            type: 'save'
        };
        this.setState({ loading: true });
        this.addYwbb(values)
    },
    //提交业务报备
    handleCommit() {
        let values = {
            dataXY: this.state.dataXY,
            dataYW: this.state.dataYW,
            dataJG: this.state.dataJG,
            customer: this.state.customer,
            type: 'commit'
        };
        this.setState({ loading: true });
        this.addYwbb(values)
    },
    componentDidMount() {
        const {initUrl} = this.props;
        req({
            method: 'get',
            url: initUrl
        }).then(resp => {
            this.setState({ data: resp, loading: false })
        }).catch(e => {
            this.setState({ scr: 'fail', loading: false })
        })
    },

    render() {
        const {title} = this.props;
        let {data, loading, scr} = this.state;
        const panelBar = <PanelBar>
            <Button onClick={this.back}>
                <Icon type="rollback" />返回
            </Button>
        </PanelBar>;

        let content = {
            edit: <Editfrom data={data} />,
            fail: <InitFailScr />,
            success: <CommitSuccess />
        };

        return <Panel className="swsjbqk-edit" toolbar={panelBar} title={title}>
            <Spin spinning={loading} >
                {content[scr]}
            </Spin>
        </Panel>

    }
});



module.exports = c;