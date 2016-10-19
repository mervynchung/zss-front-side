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

    handleZcInputChange(changeField, value) {
        const fieldName = value;
        let f = this.props.form.getFieldsValue();
        f[changeField] = value;
        f.zcze = Number(f.zyywcb ? f.zyywcb : 0)
            + Number(f.zyywsjfj ? f.zyywsjfj : 0)
            + Number(f.yyfy ? f.yyfy : 0)
            + Number(f.glfy ? f.glfy : 0)
            + Number(f.cwfy ? f.cwfy : 0)
            + Number(f.yywzc ? f.yywzc : 0)
            + Number(f.qtzc ? f.qtzc : 0);
        this.props.form.setFieldsValue(f);
    },

    handleSrInputChange(changeField, value) {
        const fieldName = value;
        console.log(fieldName);
        let fieldValue = 0;
        let f = this.props.form.getFieldsValue();
        if (value) {
            fieldValue = value;
        }
        f[changeField] = value;

        f.ssfwyw_hs = Number(f.dlswdj_hs ? f.dlswdj_hs : 0)
            + Number(f.dlnssb_hs ? f.dlnssb_hs : 0)
            + Number(f.dljzjz_hs ? f.dljzjz_hs : 0)
            + Number(f.dlsqjmts_hs ? f.dlsqjmts_hs : 0)
            + Number(f.dlzgrd_hs ? f.dlzgrd_hs : 0)
            + Number(f.dlzzssws_hs ? f.dlzzssws_hs : 0)
            + Number(f.dlyjdk_hs ? f.dlyjdk_hs : 0)
            + Number(f.spswgwzx_hs ? f.spswgwzx_hs : 0)
            + Number(f.dlssch_hs ? f.dlssch_hs : 0)
            + Number(f.sspx_hs ? f.sspx_hs : 0)
            + Number(f.qtssfwywxj_hs ? f.qtssfwywxj_hs : 0);
        // this.props.form.setFieldsValue({ "ssfwyw_hs": f.ssfwyw_hs });

        f.ssjzyw_hs = Number(f.sdshsqj_hs ? f.sdshsqj_hs : 0)
            + Number(f.mbks_hs ? f.mbks_hs : 0)
            + Number(f.ccsssqkc_hs ? f.ccsssqkc_hs : 0)
            + Number(f.tt_hs ? f.tt_hs : 0)
            + Number(f.qtssjz_hs ? f.qtssjz_hs : 0);
        // this.props.form.setFieldsValue({ "ssjzyw_hs": f.ssjzyw_hs });

        f.zyywsrhj_hs = Number(f.ssfwyw_hs ? f.ssfwyw_hs : 0)
            + Number(f.ssjzyw_hs ? f.ssjzyw_hs : 0);
        // this.props.form.setFieldsValue({ "zyywsrhj_hs": f.zyywsrhj_hs });

        f.ssfwyw_je = Number(f.dlswdj_je ? f.dlswdj_je : 0)
            + Number(f.dlnssb_je ? f.dlnssb_je : 0)
            + Number(f.dljzjz_je ? f.dljzjz_je : 0)
            + Number(f.dlsqjmts_je ? f.dlsqjmts_je : 0)
            + Number(f.dlzgrd_je ? f.dlzgrd_je : 0)
            + Number(f.dlzzssws_je ? f.dlzzssws_je : 0)
            + Number(f.dlyjdk_je ? f.dlyjdk_je : 0)
            + Number(f.spswgwzx_je ? f.spswgwzx_je : 0)
            + Number(f.dlssch_je ? f.dlssch_je : 0)
            + Number(f.sspx_je ? f.sspx_je : 0)
            + Number(f.qtssfwywxj_je ? f.qtssfwywxj_je : 0);
        // this.props.form.setFieldsValue({ "ssfwyw_je": f.ssfwyw_je });

        f.ssjzyw_je = Number(f.sdshsqj_je ? f.sdshsqj_je : 0)
            + Number(f.mbks_je ? f.mbks_je : 0)
            + Number(f.ccsssqkc_je ? f.ccsssqkc_je : 0)
            + Number(f.tt_je ? f.tt_je : 0)
            + Number(f.qtssjz_je ? f.qtssjz_je : 0);
        // this.props.form.setFieldsValue({ "ssjzyw_je": f.ssjzyw_je });


        f.zyywsrhj_je = Number(f.ssfwyw_je ? f.ssfwyw_je : 0)
            + Number(f.ssjzyw_je ? f.ssjzyw_je : 0);
        // this.props.form.setFieldsValue({ "zyywsrhj_je": f.zyywsrhj_je });

        this.props.form.setFieldsValue(f);


        // //（一）主营业务合计
        // let zyywsrhj_hs = 0;
        // let zyywsrhj_je = 0;
        // //1、涉税服务业务
        // let ssfwyw_hs = 0;
        // let ssfwyw_je = 0;
        // //(1)代理税务登记
        // let dlswdj_hs = 0;
        // let dlswdj_je = 0;
        // //(2)代理纳税申报
        // let dlnssb_hs = 0;
        // let dlnssb_je = 0;
        // //(3)代理建帐记帐
        // let dljzjz_hs = 0;
        // let dljzjz_je = 0;
        // //(4)代理申请减、免、退税
        // let dlsqjmts_hs = 0;
        // let dlsqjmts_je = 0;
        // //(5)代理申请增值税一般纳税人资格认定
        // let dlzgrd_hs = 0;
        // let dlzgrd_je = 0;
        // //(6)代理制作涉税文书
        // let dlzzssws_hs = 0;
        // let dlzzssws_je = 0;
        // //(7)代理一机多卡业务
        // let dlyjdk_hs = 0;
        // let dlyjdk_je = 0;
        // //(8)受聘税务顾问咨珣
        // let spswgwzx_hs = 0;
        // let spswgwzx_je = 0;
        // //(9)代理税收筹划
        // let dlssch_hs = 0;
        // let dlssch_je = 0;
        // //(10)涉税培训业务
        // let sspx_hs = 0;
        // let sspx_je = 0;
        // //(11)其他涉税服务业务小计
        // let qtssfwywxj_hs = 0;
        // let qtssfwywxj_je = 0;
        // //2、涉税鉴证业务
        // let ssjzyw_hs = 0;
        // let ssjzyw_je = 0;
        // //(1)企业所得税汇算清缴纳税申报鉴证业务
        // let sdshsqj_hs = 0;
        // let sdshsqj_je = 0;
        // //(2)企业税前弥补亏损鉴证业务
        // let mbks_hs = 0;
        // let mbks_je = 0;
        // //(3)企业资产损失税前税前扣除鉴证业务
        // let ccsssqkc_hs = 0;
        // let ccsssqkc_je = 0;
        // //(4)土地增值税清算鉴证业务
        // let tt_hs = 0;
        // let tt_je = 0;
        // //(5)其他涉税鉴证业务小计
        // let qtssywsr_hs1 = 0;
        // let qtssywsr_je1 = 0;

        // //(1)代理税务登记
        // if (entity.dlswdj_hs) {
        //     dlswdj_hs = entity.dlswdj_hs;
        // }
        // if (entity.dlswdj_je) {
        //     dlswdj_hs = entity.dlswdj_je;
        // }
        // //(2)代理纳税申报
        // if (entity.dlnssb_hs) {
        //     dlswdj_hs = entity.dlnssb_hs;
        // }
        // if (entity.dlnssb_je) {
        //     dlswdj_hs = entity.dlnssb_je;
        // }
        // //(3)代理建帐记帐
        // if (entity.dljzjz_hs) {
        //     dlswdj_hs = entity.dljzjz_hs;
        // }
        // if (entity.dljzjz_je) {
        //     dlswdj_hs = entity.dljzjz_je;
        // }
        // //(4)代理申请减、免、退税
        // if (entity.dlsqjmts_hs) {
        //     dlswdj_hs = entity.dlsqjmts_hs;
        // }
        // if (entity.dlsqjmts_je) {
        //     dlswdj_hs = entity.dlsqjmts_je;
        // }
        // //(5)代理申请增值税一般纳税人资格认定
        // if (entity.dlzgrd_hs) {
        //     dlswdj_hs = entity.dlzgrd_hs;
        // }
        // if (entity.dlzgrd_je) {
        //     dlswdj_hs = entity.dlzgrd_je;
        // }
        // //(6)代理制作涉税文书
        // if (entity.dlzzssws_hs) {
        //     dlswdj_hs = entity.dlzzssws_hs;
        // }
        // if (entity.dlzzssws_je) {
        //     dlswdj_hs = entity.dlzzssws_je;
        // }
        // //(7)代理一机多卡业务
        // if (entity.dlyjdk_hs) {
        //     dlswdj_hs = entity.dlyjdk_hs;
        // }
        // if (entity.dlyjdk_je) {
        //     dlswdj_hs = entity.dlyjdk_je;
        // }
        // //(8)受聘税务顾问咨珣
        // if (entity.spswgwzx_hs) {
        //     dlswdj_hs = entity.spswgwzx_hs;
        // }
        // if (entity.spswgwzx_je) {
        //     dlswdj_hs = entity.spswgwzx_je;
        // }
        // //(9)代理税收筹划
        // if (entity.dlssch_hs) {
        //     dlswdj_hs = entity.dlssch_hs;
        // }
        // if (entity.dlssch_je) {
        //     dlswdj_hs = entity.dlssch_je;
        // }
        // //(10)涉税培训业务
        // if (entity.sspx_hs) {
        //     dlswdj_hs = entity.sspx_hs;
        // }
        // if (entity.sspx_je) {
        //     dlswdj_hs = entity.sspx_je;
        // }
        // //(11)其他涉税服务业务小计
        // if (entity.qtssfwywxj_hs) {
        //     dlswdj_hs = entity.qtssfwywxj_hs;
        // }
        // if (entity.qtssfwywxj_je) {
        //     dlswdj_hs = entity.qtssfwywxj_je;
        // }

        // //(1)企业所得税汇算清缴纳税申报鉴证业务
        // if (entity.sdshsqj_hs) {
        //     dlswdj_hs = entity.sdshsqj_hs;
        // }
        // if (entity.sdshsqj_je) {
        //     dlswdj_hs = entity.sdshsqj_je;
        // }
        // //(2)企业税前弥补亏损鉴证业务
        // if (entity.mbks_hs) {
        //     dlswdj_hs = entity.mbks_hs;
        // }
        // if (entity.mbks_je) {
        //     dlswdj_hs = entity.mbks_je;
        // }
        // //(3)企业资产损失税前税前扣除鉴证业务
        // if (entity.ccsssqkc_hs) {
        //     dlswdj_hs = entity.ccsssqkc_hs;
        // }
        // if (entity.ccsssqkc_je) {
        //     dlswdj_hs = entity.ccsssqkc_je;
        // }
        // //(4)土地增值税清算鉴证业务
        // if (entity.tt_hs) {
        //     dlswdj_hs = entity.tt_hs;
        // }
        // if (entity.tt_je) {
        //     dlswdj_hs = entity.tt_je;
        // }
        // //(5)其他涉税鉴证业务小计
        // if (entity.qtssywsr_hs1) {
        //     dlswdj_hs = entity.qtssywsr_hs1;
        // }
        // if (entity.qtssywsr_je1) {
        //     dlswdj_hs = entity.qtssywsr_je1;
        // }

        // this.props.form.setFieldsValue({ changeField: value });

        // ssfwyw_hs = Number(dlswdj_hs ? dlswdj_hs : 0)
        //     + Number(dlnssb_hs ? dlnssb_hs : 0)
        //     + Number(dljzjz_hs ? dljzjz_hs : 0)
        //     + Number(dlsqjmts_hs ? dlsqjmts_hs : 0)
        //     + Number(dlzgrd_hs ? dlzgrd_hs : 0)
        //     + Number(dlzzssws_hs ? dlzzssws_hs : 0)
        //     + Number(dlyjdk_hs ? dlyjdk_hs : 0)
        //     + Number(spswgwzx_hs ? spswgwzx_hs : 0)
        //     + Number(dlssch_hs ? dlssch_hs : 0)
        //     + Number(sspx_hs ? sspx_hs : 0)
        //     + Number(qtssfwywxj_hs ? qtssfwywxj_hs : 0);
        // this.props.form.set
        // ssjzyw_hs = Number(sdshsqj_hs ? sdshsqj_hs : 0)
        //     + Number(mbks_hs ? mbks_hs : 0)
        //     + Number(ccsssqkc_hs ? ccsssqkc_hs : 0)
        //     + Number(tt_hs ? tt_hs : 0)
        //     + Number(qtssjz_hs ? qtssjz_hs : 0);

        // zyywsrhj_hs = Number(ssfwyw_hs ? ssfwyw_hs : 0)
        //     + Number(ssjzyw_hs ? ssjzyw_hs : 0);


        // ssfwyw_je = Number(dlswdj_je ? dlswdj_je : 0)
        //     + Number(dlnssb_je ? dlnssb_je : 0)
        //     + Number(dljzjz_je ? dljzjz_je : 0)
        //     + Number(dlsqjmts_je ? dlsqjmts_je : 0)
        //     + Number(dlzgrd_je ? dlzgrd_je : 0)
        //     + Number(dlzzssws_je ? dlzzssws_je : 0)
        //     + Number(dlyjdk_je ? dlyjdk_je : 0)
        //     + Number(spswgwzx_je ? spswgwzx_je : 0)
        //     + Number(dlssch_je ? dlssch_je : 0)
        //     + Number(sspx_je ? sspx_je : 0)
        //     + Number(qtssfwywxj_je ? qtssfwywxj_je : 0);

        // ssjzyw_je = Number(sdshsqj_je ? sdshsqj_je : 0)
        //     + Number(mbks_je ? mbks_je : 0)
        //     + Number(ccsssqkc_je ? ccsssqkc_je : 0)
        //     + Number(tt_je ? tt_je : 0)
        //     + Number(qtssjz_je ? qtssjz_je : 0);

        // zyywsrhj_je = Number(ssfwyw_je ? ssfwyw_je : 0)
        //     + Number(ssjzyw_je ? ssjzyw_je : 0);
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
                            <td>
                                <SelectorYear disabled  { ...getFieldProps('nd', { initialValue: data.tbnd }) } />
                            </td>
                            <td>制表人:</td>
                            <td ><Input {...getFieldProps('tbr', { initialValue: data.TBR }) } /> </td>
                            <td>所长：</td>
                            <td ><Input {...getFieldProps('sz', { initialValue: data.SZ }) } /> </td>
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
                            <td><InputNumber step={0.01} disabled  {...getFieldProps('srze0', { initialValue: data.SRZE }) } /></td>
                            <td colSpan="2">----</td>
                            <td><InputNumber step={0.01} disabled  {...getFieldProps('srze', { initialValue: data.bn_srze }) } /></td>
                        </tr>
                        <tr>
                            <td><b>（一）主营业务合计</b></td>
                            <td colSpan="2"><InputNumber disabled  {...getFieldProps('zyywsrhj_hs0', { initialValue: data.ZYYWSRHJ_HS }) } /></td>
                            <td><InputNumber step={0.01} disabled  {...getFieldProps('zyywsrhj_je0', { initialValue: data.ZYYWSRHJ_JE }) } /></td>
                            <td colSpan="2"><InputNumber disabled {...getFieldProps('zyywsrhj_hs') } /></td>
                            <td><InputNumber step={0.01} disabled {...getFieldProps('zyywsrhj_je') } /></td>
                        </tr>
                        <tr>
                            <td>1、涉税服务业务</td>
                            <td colSpan="2"><InputNumber disabled  {...getFieldProps('ssfwyw_hs0', { initialValue: data.SSFWYW_HS }) } /></td>
                            <td><InputNumber step={0.01} disabled {...getFieldProps('ssfwyw_je0', { initialValue: data.SSFWYW_JE }) } /></td>
                            <td colSpan="2"><InputNumber disabled  {...getFieldProps('ssfwyw_hs') } /></td>
                            <td><InputNumber step={0.01} disabled  {...getFieldProps('ssfwyw_je') } /></td>
                        </tr>
                        <tr>
                            <td>(1)代理税务登记</td>
                            <td colSpan="2"><InputNumber disabled  {...getFieldProps('dlswdj_hs0', { initialValue: data.DLSWDJ_HS }) } /></td>
                            <td><InputNumber step={0.01} disabled  {...getFieldProps('dlswdj_je0', { initialValue: data.DLSWDJ_JE }) } /></td>
                            <td colSpan="2"><InputNumber {...getFieldProps('dlswdj_hs') } onChange={this.handleSrInputChange.bind(this, "dlswdj_hs")} /></td>
                            <td><InputNumber step={0.01}   {...getFieldProps('dlswdj_je') } onChange={this.handleSrInputChange.bind(this, "dlswdj_je")} /></td>
                        </tr>
                        <tr>
                            <td>(2)代理纳税申报</td>
                            <td colSpan="2"><InputNumber disabled  {...getFieldProps('dlnssb_hs0', { initialValue: data.DLNSSB_HS }) } /></td>
                            <td><InputNumber step={0.01} disabled {...getFieldProps('dlnssb_je0', { initialValue: data.DLNSSB_JE }) } /></td>
                            <td colSpan="2"><InputNumber {...getFieldProps('dlnssb_hs') } onChange={this.handleSrInputChange.bind(this, "dlnssb_hs")} /></td>
                            <td><InputNumber step={0.01}   {...getFieldProps('dlnssb_je') } onChange={this.handleSrInputChange.bind(this, "dlnssb_je")} /></td>
                        </tr>
                        <tr>
                            <td>(3)代理建帐记帐</td>
                            <td colSpan="2"><InputNumber disabled  {...getFieldProps('dljzjz_hs0', { initialValue: data.DLJZJZ_HS }) } /></td>
                            <td><InputNumber step={0.01} disabled  {...getFieldProps('dljzjz_je0', { initialValue: data.DLJZJZ_JE }) } /></td>
                            <td colSpan="2"><InputNumber {...getFieldProps('dljzjz_hs') } onChange={this.handleSrInputChange.bind(this, "dljzjz_hs")} /></td>
                            <td><InputNumber step={0.01}   {...getFieldProps('dljzjz_je') } onChange={this.handleSrInputChange.bind(this, "dljzjz_je")} /></td>
                        </tr>
                        <tr>
                            <td>(4)代理申请减、免、退税</td>
                            <td colSpan="2"><InputNumber disabled  {...getFieldProps('dlsqjmts_hs0', { initialValue: data.DLSQJMTS_HS }) } /></td>
                            <td><InputNumber step={0.01} disabled  {...getFieldProps('dlsqjmts_je0', { initialValue: data.DLSQJMTS_JE }) } /></td>
                            <td colSpan="2"><InputNumber {...getFieldProps('dlsqjmts_hs') } onChange={this.handleSrInputChange.bind(this, "dlsqjmts_hs")} /></td>
                            <td><InputNumber step={0.01}   {...getFieldProps('dlsqjmts_je') } onChange={this.handleSrInputChange.bind(this, "dlsqjmts_je")} /></td>
                        </tr>
                        <tr>
                            <td>(5)代理申请增值税一般纳税人资格认定</td>
                            <td colSpan="2"><InputNumber disabled  {...getFieldProps('dlzgrd_hs0', { initialValue: data.DLZGRD_HS }) } /></td>
                            <td><InputNumber step={0.01} disabled  {...getFieldProps('dlzgrd_je0', { initialValue: data.DLZGRD_JE }) } /></td>
                            <td colSpan="2"><InputNumber {...getFieldProps('dlzgrd_hs') } onChange={this.handleSrInputChange.bind(this, "dlzgrd_hs")} /></td>
                            <td><InputNumber step={0.01}   {...getFieldProps('dlzgrd_je') } onChange={this.handleSrInputChange.bind(this, "dlzgrd_je")} /></td>
                        </tr>
                        <tr>
                            <td>(6)代理制作涉税文书</td>
                            <td colSpan="2"><InputNumber disabled  {...getFieldProps('dlzzssws_hs0', { initialValue: data.DLZZSSWS_HS }) } /></td>
                            <td><InputNumber step={0.01} disabled  {...getFieldProps('dlzzssws_je0', { initialValue: data.DLZZSSWS_JE }) } /></td>
                            <td colSpan="2"><InputNumber {...getFieldProps('dlzzssws_hs') } onChange={this.handleSrInputChange.bind(this, "dlzzssws_hs")} /></td>
                            <td><InputNumber step={0.01}   {...getFieldProps('dlzzssws_je') } onChange={this.handleSrInputChange.bind(this, "dlzzssws_je")} /></td>
                        </tr>
                        <tr>
                            <td>(7)代理一机多卡业务</td>
                            <td colSpan="2"><InputNumber disabled  {...getFieldProps('dlyjdk_hs0', { initialValue: data.DLYJDK_HS }) } /></td>
                            <td><InputNumber step={0.01} disabled  {...getFieldProps('dlyjdk_je0', { initialValue: data.DLYJDK_JE }) } /></td>
                            <td colSpan="2"><InputNumber {...getFieldProps('dlyjdk_hs') } onChange={this.handleSrInputChange.bind(this, "dlyjdk_hs")} /></td>
                            <td><InputNumber step={0.01}   {...getFieldProps('dlyjdk_je') } onChange={this.handleSrInputChange.bind(this, "dlyjdk_je")} /></td>
                        </tr>
                        <tr>
                            <td>(8)受聘税务顾问咨珣</td>
                            <td colSpan="2"><InputNumber disabled  {...getFieldProps('spswgwzx_hs0', { initialValue: data.SPSWGWZX_HS }) } /></td>
                            <td><InputNumber step={0.01} disabled  {...getFieldProps('spswgwzx_je0', { initialValue: data.SPSWGWZX_JE }) } /></td>
                            <td colSpan="2"><InputNumber {...getFieldProps('spswgwzx_hs') } onChange={this.handleSrInputChange.bind(this, "spswgwzx_hs")} /></td>
                            <td><InputNumber step={0.01}   {...getFieldProps('spswgwzx_je') } onChange={this.handleSrInputChange.bind(this, "spswgwzx_je")} /></td>
                        </tr>
                        <tr>
                            <td>(9)代理税收筹划</td>
                            <td colSpan="2"><InputNumber disabled  {...getFieldProps('dlssch_hs0', { initialValue: data.DLSSCH_HS }) } /></td>
                            <td><InputNumber step={0.01} disabled  {...getFieldProps('dlssch_je0', { initialValue: data.DLSSCH_JE }) } /></td>
                            <td colSpan="2"><InputNumber {...getFieldProps('dlssch_hs') } onChange={this.handleSrInputChange.bind(this, "dlssch_hs")} /></td>
                            <td><InputNumber step={0.01}   {...getFieldProps('dlssch_je') } onChange={this.handleSrInputChange.bind(this, "dlssch_je")} /></td>
                        </tr>
                        <tr>
                            <td>(10)涉税培训业务</td>
                            <td colSpan="2"><InputNumber disabled  {...getFieldProps('sspx_hs0', { initialValue: data.SSPX_HS }) } /></td>
                            <td><InputNumber step={0.01} disabled  {...getFieldProps('sspx_je0', { initialValue: data.SSPX_JE }) } /></td>
                            <td colSpan="2"><InputNumber {...getFieldProps('sspx_hs') } onChange={this.handleSrInputChange.bind(this, "sspx_hs")} /></td>
                            <td><InputNumber step={0.01}   {...getFieldProps('sspx_je') } onChange={this.handleSrInputChange.bind(this, "sspx_je")} /></td>
                        </tr>
                        <tr>
                            <td>(11)其他涉税服务业务小计</td>
                            <td colSpan="2"><InputNumber disabled  {...getFieldProps('qtssfwywxj_hs0', { initialValue: data.QTSSFWYWXJ_HS }) } /></td>
                            <td><InputNumber step={0.01} disabled  {...getFieldProps('qtssfwywxj_je0', { initialValue: data.QTSSFWYWXJ_JE }) } /></td>
                            <td colSpan="2"><InputNumber {...getFieldProps('qtssfwywxj_hs') } onChange={this.handleSrInputChange.bind(this, "qtssfwywxj_hs")} /></td>
                            <td><InputNumber step={0.01}   {...getFieldProps('qtssfwywxj_je') } onChange={this.handleSrInputChange.bind(this, "qtssfwywxj_je")} /></td>
                        </tr>
                        <tr>
                            <td>2、涉税鉴证业务</td>
                            <td colSpan="2"><InputNumber disabled  {...getFieldProps('ssjzyw_hs0', { initialValue: data.SSJZYW_HS }) } /></td>
                            <td><InputNumber step={0.01} disabled  {...getFieldProps('ssjzyw_je0', { initialValue: data.SSJZYW_JE }) } /></td>
                            <td colSpan="2"><InputNumber disabled  {...getFieldProps('ssjzyw_hs') } /></td>
                            <td><InputNumber step={0.01} disabled  {...getFieldProps('ssjzyw_je') } /></td>
                        </tr>
                        <tr>
                            <td>(1)企业所得税汇算清缴纳税申报鉴证业务</td>
                            <td colSpan="2"><InputNumber disabled  {...getFieldProps('sdshsqj_hs0', { initialValue: data.SDSHSQJ_HS }) } /></td>
                            <td><InputNumber step={0.01} disabled  {...getFieldProps('sdshsqj_je0', { initialValue: data.SDSHSQJ_JE }) } /></td>
                            <td colSpan="2"><InputNumber {...getFieldProps('sdshsqj_hs') } onChange={this.handleSrInputChange.bind(this, "sdshsqj_hs")} /></td>
                            <td><InputNumber step={0.01}   {...getFieldProps('sdshsqj_je') } onChange={this.handleSrInputChange.bind(this, "sdshsqj_je")} /></td>
                        </tr>
                        <tr>
                            <td>(2)企业税前弥补亏损鉴证业务</td>
                            <td colSpan="2"><InputNumber disabled  {...getFieldProps('mbks_hs0', { initialValue: data.MBKS_HS }) } /></td>
                            <td><InputNumber step={0.01} disabled  {...getFieldProps('mbks_je0', { initialValue: data.MBKS_JE }) } /></td>
                            <td colSpan="2"><InputNumber {...getFieldProps('mbks_hs') } onChange={this.handleSrInputChange.bind(this, "mbks_hs")} /></td>
                            <td><InputNumber step={0.01}   {...getFieldProps('mbks_je') } onChange={this.handleSrInputChange.bind(this, "mbks_je")} /></td>
                        </tr>
                        <tr>
                            <td>(3)企业资产损失税前税前扣除鉴证业务</td>
                            <td colSpan="2"><InputNumber disabled  {...getFieldProps('ccsssqkc_hs0', { initialValue: data.CCSSSQKC_HS }) } /></td>
                            <td><InputNumber step={0.01} disabled  {...getFieldProps('ccsssqkc_je0', { initialValue: data.CCSSSQKC_JE }) } /></td>
                            <td colSpan="2"><InputNumber {...getFieldProps('ccsssqkc_hs') } onChange={this.handleSrInputChange.bind(this, "ccsssqkc_hs")} /></td>
                            <td><InputNumber step={0.01}   {...getFieldProps('ccsssqkc_je') } onChange={this.handleSrInputChange.bind(this, "ccsssqkc_je")} /></td>
                        </tr>
                        <tr>
                            <td>(4)土地增值税清算鉴证业务</td>
                            <td colSpan="2"><InputNumber disabled  {...getFieldProps('tt_hs0', { initialValue: data.TT_HS }) } /></td>
                            <td><InputNumber step={0.01} disabled  {...getFieldProps('tt_je0', { initialValue: data.TT_JE }) } /></td>
                            <td colSpan="2"><InputNumber {...getFieldProps('tt_hs') } onChange={this.handleSrInputChange.bind(this, "tt_hs")} /></td>
                            <td><InputNumber step={0.01}   {...getFieldProps('tt_je') } onChange={this.handleSrInputChange.bind(this, "tt_je")} /></td>
                        </tr>
                        <tr>
                            <td>(5)其他涉税鉴证业务小计</td>
                            <td colSpan="2"><InputNumber disabled  {...getFieldProps('qtssjz_hs0', { initialValue: data.QTSSJZ_HS }) } /></td>
                            <td><InputNumber step={0.01} disabled  {...getFieldProps('qtssjz_je0', { initialValue: data.QTSSJZ_JE }) } /></td>
                            <td colSpan="2"><InputNumber {...getFieldProps('qtssjz_hs') } onChange={this.handleSrInputChange.bind(this, "qtssjz_hs")} /></td>
                            <td><InputNumber step={0.01}   {...getFieldProps('qtssjz_je') } onChange={this.handleSrInputChange.bind(this, "qtssjz_je")} /></td>
                        </tr>
                        <tr>
                            <td style={{ paddingLeft: '5em' }}>⑴</td>
                            <td colSpan="2"><InputNumber disabled  {...getFieldProps('qtssywsr_hs10', { initialValue: data.QTSSYWSR_HS1 }) } /></td>
                            <td><InputNumber step={0.01} disabled {...getFieldProps('qtssywsr_je10', { initialValue: data.QTSSYWSR_JE1 }) } /></td>
                            <td colSpan="2"><InputNumber {...getFieldProps('qtssywsr_hs1') } /></td>
                            <td><InputNumber step={0.01}   {...getFieldProps('qtssywsr_je1') } /></td>
                        </tr>
                        <tr>
                            <td style={{ paddingLeft: '5em' }}>⑵</td>
                            <td colSpan="2"><InputNumber disabled  {...getFieldProps('qtssywsr_hs20', { initialValue: data.QTSSYWSR_HS2 }) } /></td>
                            <td><InputNumber step={0.01} disabled  {...getFieldProps('qtssywsr_je20', { initialValue: data.QTSSYWSR_JE2 }) } /></td>
                            <td colSpan="2"><InputNumber {...getFieldProps('qtssywsr_hs2') } /></td>
                            <td><InputNumber step={0.01}   {...getFieldProps('qtssywsr_je2') } /></td>
                        </tr>
                        <tr>
                            <td style={{ paddingLeft: '5em' }}>⑶</td>
                            <td colSpan="2"><InputNumber disabled  {...getFieldProps('qtssywsr_hs30', { initialValue: data.QTSSYWSR_HS3 }) } /></td>
                            <td><InputNumber step={0.01} disabled  {...getFieldProps('qtssywsr_je30', { initialValue: data.QTSSYWSR_JE3 }) } /></td>
                            <td colSpan="2"><InputNumber {...getFieldProps('qtssywsr_hs3') } /></td>
                            <td><InputNumber step={0.01}   {...getFieldProps('qtssywsr_je3') } /></td>
                        </tr>
                        <tr>
                            <td><b>（二）其他收人合计</b></td>
                            <td colSpan="3"><Col span={12} offset={6}><InputNumber step={0.01} disabled {...getFieldProps('qtywsrhj0', { initialValue: data.QTYWSRHJ }) } /></Col></td>

                            <td colSpan="3"><Col span={12} offset={6}><InputNumber step={0.01}  {...getFieldProps('qtywsrhj') } /></Col></td>
                        </tr>
                        <tr>
                            <td><b>二、支出总额</b></td>
                            <td colSpan="3"><Col span={12} offset={6}><InputNumber step={0.01} disabled {...getFieldProps('zcze0', { initialValue: data.ZCZE }) } /></Col></td>
                            <td colSpan="3"><Col span={12} offset={6}><InputNumber step={0.01} disabled {...getFieldProps('zcze') } /></Col></td>
                        </tr>
                        <tr>
                            <td>（一）主营业务成本</td>
                            <td colSpan="3"><Col span={12} offset={6}><InputNumber step={0.01} disabled {...getFieldProps('zyywcb0', { initialValue: data.ZYYWCB }) } /></Col></td>
                            <td colSpan="3"><Col span={12} offset={6}><InputNumber step={0.01}  {...getFieldProps('zyywcb') } onChange={this.handleZcInputChange.bind(this,"zyywcb")}/></Col></td>
                        </tr>
                        <tr>
                            <td>（二）主营业务税金及附加</td>
                            <td colSpan="3"><Col span={12} offset={6}><InputNumber step={0.01} disabled {...getFieldProps('zyywsjfj0', { initialValue: data.ZYYWSJFJ }) } /></Col></td>
                            <td colSpan="3"><Col span={12} offset={6}><InputNumber step={0.01}  {...getFieldProps('zyywsjfj') } /></Col></td>
                        </tr>
                        <tr>
                            <td>（三）营业费用</td>
                            <td colSpan="3"><Col span={12} offset={6}><InputNumber step={0.01} disabled {...getFieldProps('yyfy0', { initialValue: data.YYFY }) } /></Col></td>
                            <td colSpan="3"><Col span={12} offset={6}><InputNumber step={0.01}  {...getFieldProps('yyfy') } /></Col></td>
                        </tr>
                        <tr>
                            <td>（四）管理费用</td>
                            <td colSpan="3"><Col span={12} offset={6}><InputNumber step={0.01} disabled {...getFieldProps('glfy0', { initialValue: data.GLFY }) } /></Col></td>
                            <td colSpan="3"><Col span={12} offset={6}><InputNumber step={0.01}  {...getFieldProps('glfy') } /></Col></td>
                        </tr>
                        <tr>
                            <td>（五）财务费用</td>
                            <td colSpan="3"><Col span={12} offset={6}><InputNumber step={0.01} disabled {...getFieldProps('cwfy0', { initialValue: data.CWFY }) } /></Col></td>
                            <td colSpan="3"><Col span={12} offset={6}><InputNumber step={0.01}  {...getFieldProps('cwfy') } /></Col></td>
                        </tr>
                        <tr>
                            <td>（六）营业外支出</td>
                            <td colSpan="3"><Col span={12} offset={6}><InputNumber step={0.01} disabled {...getFieldProps('yywzc0', { initialValue: data.YYWZC }) } /></Col></td>
                            <td colSpan="3"><Col span={12} offset={6}><InputNumber step={0.01}  {...getFieldProps('yywzc') } /></Col></td>
                        </tr>
                        <tr>
                            <td>（七）其他支出</td>
                            <td colSpan="3"><Col span={12} offset={6}><InputNumber step={0.01} disabled {...getFieldProps('qtzc0', { initialValue: data.QTZC }) } /></Col></td>
                            <td colSpan="3"><Col span={12} offset={6}><InputNumber step={0.01}  {...getFieldProps('qtzc') } /></Col></td>
                        </tr>
                        <tr>
                            <td><b>三、利润总额</b></td>
                            <td colSpan="3"><Col span={12} offset={6}><InputNumber step={0.01} disabled {...getFieldProps('lrze0', { initialValue: data.LRZE }) } /></Col></td>
                            <td colSpan="3"><Col span={12} offset={6}><InputNumber step={0.01} disabled {...getFieldProps('lrze', { initialValue: data.bn_lrze }) } /></Col></td>
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