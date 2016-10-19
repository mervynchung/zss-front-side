import React from 'react'
import {Steps, Col, Row, Spin, notification, Icon, Button, Form, Input,InputNumber,Popconfirm} from 'antd'
import Panel from 'component/compPanel'
import {SelectorYear, SelectorXZ, SelectorSWSXZ, SelectorCS} from 'component/compSelector'
import config from 'common/configuration.js'
import req from 'common/request'
import utils from 'common/utils'
import Success from './successScr'
import FailScr from './failScr'

const ButtonGroup = Button.Group;
const FormItem = Form.Item;
const PanelBar = Panel.ToolBar;

let Editfrom = React.createClass({
    checkRyzs(rule, value, callback){
        if (value < this.props.form.getFieldValue('zyzcswsrs')) {
            callback("人员总数要大于执业人数")
        } else {
            callback()
        }
    },
    checkZczj(rule, value, callback){
        if ( this.props.data.jgxz_dm==2 && (!value || value <= 0)) {
            callback("必填")
        } else {
            callback()
        }
    },
    checkCzrs(rule, value, callback){
        if ( this.props.data.jgxz_dm==2 && (!value || value <= 0)) {
            callback("必填")
        } else {
            callback()
        }
    },
    checkHhrs(rule, value, callback){
        if ( this.props.data.jgxz_dm==1 && (!value || value <= 0)) {
            callback("必填")
        } else {
            callback()
        }
    },
    checkYysr(rule, value, callback){
        if ( this.props.data.jgxz_dm==1 && (!value || value <= 0)) {
            callback("必填")
        } else {
            callback()
        }
    },
    commit(){
        const {validateFields} = this.props.form;
        validateFields((errors, values) => {
            if (!!errors) {
                return;
            }
            values = utils.transEmpty2Null(values);
            this.props.onCommit(values);
        })
    },
    save(){
        const {validateFields} = this.props.form;
        validateFields((errors, values) => {
            if (!!errors) {
                return;
            }
            values = utils.transEmpty2Null(values);
            this.props.onSave(values);
        })
    },
    render(){
        const {data} = this.props;
        const {getFieldProps} = this.props.form;
        const layout = {
            labelCol: {span: 12},
            wrapperCol: {span: 12}
        };
        const style = {style: {width: '100%'}};
        const ndProps = getFieldProps('nd', {
            rules: [
                {required: true, type: 'number', message: '必填'}
            ]
        });
        const jgxzProps = getFieldProps('jgxz_dm', {
            rules: [
                {required: true, message: '必填'}
            ]
        });
        const frdbProps = getFieldProps('frdbxm', {
            rules: [
                {required: true, whitespace: true, message: '必填'}
            ]
        });
        const ryzsProps = getFieldProps('ryzs', {
            rules: [
                {required: true, type: "number", message: '必填'},
                {validator: this.checkRyzs}
            ]
        });
        const zyzcswsrsProps = getFieldProps('zyzcswsrs', {
            rules: [
                {required: true, type: "number", message: '必填'}
            ]
        });
        const lrzeProps = getFieldProps('lrze', {
            rules: [
                {required: true, type: "number", message: '必填'}
            ]
        });
        const zczeProps = getFieldProps('zcze', {
            rules: [
                {required: true, type: "number", message: '必填'}
            ]
        });
        const srzeProps = getFieldProps('srze', {
            rules: [
                {required: true, type: "number", message: '必填'}
            ]
        });
        const wthsProps = getFieldProps('wths', {
            rules: [
                {required: true, type: "number", message: '必填'}
            ]
        });
        const csProps = getFieldProps('cs_dm', {
            rules: [
                {required: true, type:'object', message: '必填'}
            ]
        });
        const zczjProps = getFieldProps('zczj', {
            rules: [
                {validator: this.checkZczj}
            ]
        });
        const czrsProps = getFieldProps('czrs', {
            rules: [
                {validator: this.checkCzrs}
            ]
        });
        const hhrsProps = getFieldProps('hhrs', {
            rules: [
                {validator: this.checkHhrs}
            ]
        });
        const yysrProps = getFieldProps('yysr', {
            rules: [
                {validator: this.checkYysr}
            ]
        });
        const tbrProps = getFieldProps('tianbiaoren', {
            rules: [
                {required: true, whitespace: true, message: '必填'}
            ]
        });
        const szProps = getFieldProps('suozhang', {
            rules: [
                {required: true, whitespace: true, message: '必填'}
            ]
        });
        return <div className="fix-table no-border table-striped  ">
            <Form horizontal>
                <table>
                    <colgroup>
                        <col className ="col-2"/>
                        <col className="col-6"/>
                        <col className="col-4"/>
                        <col className="col-4"/>
                        <col className ="col-4"/>
                        <col className ="col-4"/>

                    </colgroup>
                    <tbody>
                    <tr>
                        <td >单位:</td>
                        <td></td>
                        <td  >  <Col
                            label="年度：">
                            <SelectorYear  { ...getFieldProps('nd')}/>
                        </Col>
                        </td>
                        <td >制表人：<Input   {...getFieldProps('tianbiaoren')}/> </td>
                        <td >所长：<Input   {...getFieldProps('suozhang')}/> </td>
                        <td>单位：万元、户</td>
                    </tr>
                    <tr>
                        <td rowSpan="2">序号</td>
                        <td rowSpan="2">项目</td>
                        <td colSpan="2">上年数</td>
                        <td colSpan="2">本年数</td>

                    </tr>
                    <tr>
                        <td>户数</td>
                        <td>金额</td>
                        <td>户数</td>
                        <td>金额</td>

                    </tr>
                    <tr>

                        <td>1</td>
                        <td>企业所得税汇算清缴总户数</td>
                        <td>--</td>
                        <td>--</td>
                        <td>--</td>
                        <td>--</td>
                    </tr>
                    <tr>
                        <td  >2</td>
                        <td >企业所得税汇算清缴纳税申报鉴证业务  </td>
                        <td ><Input   {...getFieldProps('hsqjje_hs0')}/> </td>
                        <td ><Input   {...getFieldProps('hsqjje_je0')}/> </td>
                        <td ><Input   {...getFieldProps('hsqjje_hs')}/> </td>
                        <td ><Input   {...getFieldProps('hsqjje_je')}/> </td>
                    </tr>
                    <tr>
                        <td  >3</td>
                        <td >其中：（1）调增应纳所得税税额  </td>
                        <td ><Input   {...getFieldProps('tzynsdse_hs0')}/> </td>
                        <td ><Input   {...getFieldProps('tzynsdse_je0')}/> </td>
                        <td ><Input   {...getFieldProps('tzynsdse_hs')}/> </td>
                        <td ><Input   {...getFieldProps('tzynsdse_je')}/> </td>
                    </tr>

                    <tr>
                        <td  >4</td>
                        <td > &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;（2）调减应纳所得税税额  </td>
                        <td ><Input   {...getFieldProps('tjynsdse_hs0')}/> </td>
                        <td ><Input   {...getFieldProps('tjynsdse_je0')}/> </td>
                        <td ><Input   {...getFieldProps('tjynsdse_hs')}/> </td>
                        <td ><Input   {...getFieldProps('tjynsdse_je')}/> </td>
                    </tr>

                    <tr>
                        <td  >5</td>
                        <td > 企业税前弥补亏损鉴证业务 </td>
                        <td ><Input   {...getFieldProps('mbksje_hs0')}/> </td>
                        <td ><Input   {...getFieldProps('mbksje_je0')}/> </td>
                        <td ><Input   {...getFieldProps('mbksje_hs')}/> </td>
                        <td ><Input   {...getFieldProps('mbksje_je')}/> </td>
                    </tr>

                    <tr>
                        <td  >6</td>
                        <td > 企业资产损失税前扣除鉴证业务 </td>
                        <td ><Input   {...getFieldProps('ccsskc_hs0')}/> </td>
                        <td ><Input   {...getFieldProps('ccsskc_je0')}/> </td>
                        <td ><Input   {...getFieldProps('ccsskc_hs')}/> </td>
                        <td ><Input   {...getFieldProps('ccsskc_je')}/> </td>
                    </tr>

                    <tr>
                        <td  >7</td>
                        <td > 土地增值税清算鉴证业务 </td>
                        <td ><Input   {...getFieldProps('tdzzsqsjz_hs0')}/> </td>
                        <td ><Input   {...getFieldProps('tdzzsqsjz_je0')}/> </td>
                        <td ><Input   {...getFieldProps('tdzzsqsjz_hs')}/> </td>
                        <td ><Input   {...getFieldProps('tdzzsqsjz_je')}/> </td>
                    </tr>

                    <tr>
                        <td  >8</td>
                        <td > 其他鉴证业务小计 </td>
                        <td ><Input   {...getFieldProps('qtjz_hs0')}/> </td>
                        <td ><Input   {...getFieldProps('qtjz_je0')}/> </td>
                        <td ><Input   {...getFieldProps('qtjz_hs')}/> </td>
                        <td ><Input   {...getFieldProps('qtjz_je')}/> </td>
                    </tr>

                    <tr>
                        <td  >9</td>
                        <td > 其中：（1）高新技术企业认定鉴证业务 </td>
                        <td ><Input   {...getFieldProps('gxjsqyrdqzyw_hs0')}/> </td>
                        <td ><Input   {...getFieldProps('gxjsqyrdqzyw_je0')}/> </td>
                        <td ><Input   {...getFieldProps('gxjsqyrdqzyw_hs')}/> </td>
                        <td ><Input   {...getFieldProps('gxjsqyrdqzyw_je')}/> </td>
                    </tr>

                    <tr>
                        <td  >10</td>
                        <td >&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;（2）企业注销税务登记税款清算鉴证业务 </td>
                        <td ><Input   {...getFieldProps('qyzxswdeskjsjzyw_hs0')}/> </td>
                        <td ><Input   {...getFieldProps('qyzxswdeskjsjzyw_je0')}/> </td>
                        <td ><Input   {...getFieldProps('qyzxswdeskjsjzyw_hs')}/> </td>
                        <td ><Input   {...getFieldProps('qyzxswdeskjsjzyw_je')}/> </td>
                    </tr>

                    <tr>
                        <td  >11</td>
                        <td >&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;（3）研发费加计扣除鉴证业务 </td>
                        <td ><Input   {...getFieldProps('yffjjkcjzyw_hs0')}/> </td>
                        <td ><Input   {...getFieldProps('yffjjkcjzyw_je0')}/> </td>
                        <td ><Input   {...getFieldProps('yffjjkcjzyw_hs')}/> </td>
                        <td ><Input   {...getFieldProps('yffjjkcjzyw_je')}/> </td>
                    </tr>

                    <tr>
                        <td  >12</td>
                        <td >&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;（4）其他 </td>
                        <td ><Input   {...getFieldProps('qt_hs0')}/> </td>
                        <td ><Input   {...getFieldProps('qt_je0')}/> </td>
                        <td ><Input   {...getFieldProps('qt_hs')}/> </td>
                        <td ><Input   {...getFieldProps('qt_je')}/> </td>
                    </tr>
                    </tbody>
                </table>
                <Row style={{marginTop:'24px'}}>
                    <Col span="5" offset="19">
                        <ButtonGroup>
                            <Popconfirm placement="top" title="确定保存？" onConfirm={this.save}>
                                <Button type="primary"> <Icon type="save"/>保存</Button>
                            </Popconfirm>
                            <Popconfirm placement="top" title="确定提交？" onConfirm={this.commit}>
                                <Button type="primary"> <Icon type="to-top"/>提交</Button>
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
            result[prop] = {value: props.data[prop]}
        }
        return result;
    }
})(Editfrom);


const c = React.createClass({
    getDefaultProps(){
        return {
            title: '添加行业鉴证业务情况统计表6',
            url: config.HOST + config.URI_API_PROJECT + '/client/jzywqktjb',
            initUrl: config.HOST + config.URI_API_PROJECT + '/client/jzywqktjbinit'
        }
    },
    getInitialState(){
        return {
            loading: true,
            data: {},
            scr: 'normal'
        }
    },
    back(){
        this.props.onBack();
    },

    //保存
    handleSave(values){
        const {url} = this.props;
        values.ztbj = 0;
        values.dwmc = this.state.data.dwmc;
        this.setState({loading:true,data:values});
        req({
            method:'post',
            url:url,
            data:values
        }).then(resp=>{
            this.setState({loading:false,scr:'success',successType:'save'})
        }).catch(e=>{
            this.setState({loading: false});
            if (e.status == 403){
                let res = JSON.parse(e.response);
                notification.error({
                    duration: 3,
                    message: '操作失败',
                    description: res.text
                });
            }else{
                notification.error({
                    duration: 3,
                    message: '操作失败',
                    description: '报表数据保存失败，请稍后再尝试'
                });
            }
        });
    },
    //提交
    handleCommit(values){
        const {url} = this.props;
        values.ztbj = 1;
        values.dwmc = this.state.data.dwmc;
        this.setState({loading:true,data:values});
        req({
            method:'post',
            url:url,
            data:values
        }).then(resp=>{
            this.setState({loading:false,scr:'success',successType:'commit'})
        }).catch(e=>{
            this.setState({loading: false});
            if (e.status == 403){
                let res = JSON.parse(e.response);
                notification.error({
                    duration: 3,
                    message: '操作失败',
                    description: res.text
                });
            }else{
                notification.error({
                    duration: 3,
                    message: '操作失败',
                    description: '报表数据保存失败，请稍后再尝试'
                });
            }
        });
    },

    componentDidMount(){
        const {initUrl}  = this.props;
        req({
            method: 'get',
            url: initUrl
        }).then(resp=> {
            this.setState({data: resp, loading: false})
        }).catch(e=> {
            if (e.status == 403) {
                let res = JSON.parse(e.response);
                this.setState({scr: 'fail', loading: false, failtext: res.text})
            } else {
                this.setState({scr: 'fail', loading: false})
            }

        })
    },

    render(){
        const {title} = this.props;
        let {data,loading,scr,failtext,successType} = this.state;
        const panelBar = <PanelBar>
            <Button onClick={this.back}>
                <Icon type="rollback"/>返回
            </Button>
        </PanelBar>;

        let content = {
            normal: <Editfrom data={data} onCommit={this.handleCommit} onSave={this.handleSave} />,
            fail: <FailScr text={failtext}/>,
            success: <Success type={successType}/>
        };

        return <Panel className="swsjbqk-edit" toolbar={panelBar} title={title}>
            <Spin spinning={loading}>
                {content[scr]}
            </Spin>
        </Panel>

    }
});


module.exports = c;