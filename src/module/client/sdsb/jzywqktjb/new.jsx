import React from 'react'
import {Steps, Col, Row, Spin, notification, Icon, Button, Form, Input, InputNumber, Popconfirm} from 'antd'
import Panel from 'component/compPanel'
import {SelectorYear, SelectorXZ, SelectorSWSXZ, SelectorCS} from 'component/compSelector'
import config from 'common/configuration.js'
import req from 'common/request'
import utils from 'common/utils'
import Success from './successScr'
import FailScr from './failScr'
import num from 'numeral'

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
    zero(v, prev){
        if(!v){
            return 0
        }else{
            return v
        }
    },
    commit(){
        const {validateFields} = this.props.form;
        validateFields({force:true},(errors, values) => {
            if (!!errors) {
                return;
            }
            console.log(values)
            //values = utils.transEmpty2Null(values);
            //this.props.onCommit(values);
        })
    },
    save(){
        const {validateFields} = this.props.form;
        validateFields({force:true},(errors, values) => {
            if (!!errors) {
                return;
            }
            values = utils.transEmpty2Null(values);
            this.props.onSave(values);
        })
    },
    render(){
        const {data} = this.props;
        const {getFieldProps,getFieldValue} = this.props.form;
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

        const hsqjje_hs0 = getFieldProps('hsqjje_hs0', {
            rules: [
                {validator: this.checkZczj}
            ]
        });

        return <div className="fix-table no-border table-striped  ">
            <Form horizontal>
                 <table className="tg">
                    <colgroup>
                        <col style={{width:'5%'}}/>
                        <col style={{width:'35%'}}/>
                        <col style={{width:'15%'}}/>
                        <col style={{width:'15%'}}/>
                        <col style={{width:'15%'}}/>
                        <col style={{width:'15%'}}/>
                    </colgroup>
                    <tbody>
                    <tr>
                        <td colSpan="2">事务所名称：{data.dwmc}</td>
                        <td colSpan="2"><FormItem label="年度"  {...layout}><Input {...style} disabled { ...ndProps} /></FormItem></td>
                        <td colSpan="2">单位：万元、户</td>
                    </tr>
                    <tr>
                        <td className="tg-s6z2" rowSpan="2"><br/>序号</td>
                        <td className="tg-s6z2" rowSpan="2"><br/>项目</td>
                        <td className="tg-s6z2" colSpan="2">上年数</td>
                        <td className="tg-s6z2" colSpan="2">本年数</td>
                    </tr>
                    <tr>
                        <td className="tg-s6z2">户数</td>
                        <td className="tg-s6z2">金额</td>
                        <td className="tg-s6z2">户数</td>
                        <td className="tg-s6z2">金额</td>
                    </tr>
                    <tr>
                        <td className="tg-031e">1</td>
                        <td className="tg-031e">企业所得税汇算清缴总户数</td>
                        <td className="tg-031e">--</td>
                        <td className="tg-031e">--</td>
                        <td className="tg-yw4l">--</td>
                        <td className="tg-yw4l">--</td>
                    </tr>
                    <tr>
                        <td className="tg-031e">2</td>
                        <td className="tg-031e">企业所得税汇算清缴纳税申报鉴证业务</td>
                        <td className="tg-031e"><FormItem><InputNumber disabled {...style} {...getFieldProps('hsqjje_hs0',{normalize:this.zero})}/></FormItem></td>
                        <td className="tg-031e"><FormItem><InputNumber disabled {...style} {...getFieldProps('hsqjje_je0',{normalize:this.zero})}/></FormItem></td>
                        <td className="tg-yw4l"><FormItem><InputNumber disabled {...style} {...getFieldProps('hsqjje_hs',{normalize:this.zero})} /></FormItem></td>
                        <td className="tg-yw4l"><FormItem><InputNumber disabled {...style} {...getFieldProps('hsqjje_je',{normalize:this.zero})}/></FormItem></td>
                    </tr>
                    <tr>
                        <td className="tg-031e">3</td>
                        <td className="tg-031e">其中：（1）调增应纳所得税税额</td>
                        <td className="tg-031e"><FormItem><InputNumber disabled {...style} {...getFieldProps('tzynsdse_hs0',{normalize:this.zero})}/></FormItem></td>
                        <td className="tg-031e"><FormItem><InputNumber disabled {...style} {...getFieldProps('tzynsdse_je0',{normalize:this.zero})}/></FormItem></td>
                        <td className="tg-yw4l"><FormItem><InputNumber min={0} {...style} {...getFieldProps('tzynsdse_hs',{normalize:this.zero})}/></FormItem></td>
                        <td className="tg-yw4l"><FormItem><InputNumber min={0} {...style} {...getFieldProps('tzynsdse_je',{normalize:this.zero})}/></FormItem></td>
                    </tr>
                    <tr>
                        <td className="tg-031e">4</td>
                        <td className="tg-031e">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;（2）调减应纳所得税税额</td>
                        <td className="tg-031e"><FormItem><InputNumber disabled {...style} {...getFieldProps('tjynsdse_hs0',{normalize:this.zero})}/></FormItem></td>
                        <td className="tg-031e"><FormItem><InputNumber disabled {...style} {...getFieldProps('tjynsdse_je0',{normalize:this.zero})}/></FormItem></td>
                        <td className="tg-yw4l"><FormItem><InputNumber min={0} {...style} {...getFieldProps('tjynsdse_hs',{normalize:this.zero})}/></FormItem></td>
                        <td className="tg-yw4l"><FormItem><InputNumber min={0} {...style} {...getFieldProps('tjynsdse_je',{normalize:this.zero})}/></FormItem></td>
                    </tr>
                    {/*<tr>
                        <td className="tg-031e">5</td>
                        <td className="tg-031e">企业税前弥补亏损鉴证业务</td>
                        <td className="tg-031e"><FormItem><InputNumber disabled {...style} {...getFieldProps('mbksje_hs0',{normalize:this.zero})}/></FormItem></td>
                        <td className="tg-031e"><FormItem><InputNumber disabled {...style} {...getFieldProps('mbksje_je0',{normalize:this.zero})}/></FormItem></td>
                        <td className="tg-yw4l"><FormItem><InputNumber min={0} {...style} {...getFieldProps('mbksje_hs',{normalize:this.zero})}/></FormItem></td>
                        <td className="tg-yw4l"><FormItem><InputNumber step={0.01} {...style} {...getFieldProps('mbksje_je',{normalize:this.zero})}/></FormItem></td>
                    </tr>
                    <tr>
                        <td className="tg-031e">6</td>
                        <td className="tg-031e">企业资产损失税前扣除鉴证业务</td>
                        <td className="tg-031e"><FormItem><InputNumber disabled {...style} {...getFieldProps('ccsskc_hs0',{normalize:this.zero})}/></FormItem></td>
                        <td className="tg-031e"><FormItem><InputNumber disabled {...style} {...getFieldProps('ccsskc_je0',{normalize:this.zero})}/></FormItem></td>
                        <td className="tg-yw4l"><FormItem><InputNumber min={0}  {...style} {...getFieldProps('ccsskc_hs',{normalize:this.zero})}/></FormItem></td>
                        <td className="tg-yw4l"><FormItem><InputNumber step={0.01} {...style} {...getFieldProps('ccsskc_je',{normalize:this.zero})}/></FormItem></td>
                    </tr>
                    <tr>
                        <td className="tg-031e">7</td>
                        <td className="tg-031e">土地增值税清算鉴证业务</td>
                        <td className="tg-031e"><FormItem><InputNumber disabled {...style} {...getFieldProps('tdzzsqsjz_hs0',{normalize:this.zero})}/></FormItem></td>
                        <td className="tg-031e"><FormItem><InputNumber disabled {...style} {...getFieldProps('tdzzsqsjz_je0',{normalize:this.zero})}/></FormItem></td>
                        <td className="tg-yw4l"><FormItem><InputNumber min={0} {...style} {...getFieldProps('tdzzsqsjz_hs',{normalize:this.zero})}/></FormItem></td>
                        <td className="tg-yw4l"><FormItem><InputNumber step={0.01} {...style} {...getFieldProps('tdzzsqsjz_je',{normalize:this.zero})}/></FormItem></td>
                    </tr>
                    <tr>
                        <td className="tg-031e">8</td>
                        <td className="tg-031e">其他鉴证业务小计</td>
                        <td className="tg-031e"><FormItem><InputNumber disabled {...style} {...getFieldProps('qtjz_hs0',{normalize:this.zero})}/></FormItem></td>
                        <td className="tg-031e"><FormItem><InputNumber disabled {...style} {...getFieldProps('qtjz_je0',{normalize:this.zero})}/></FormItem></td>
                        <td className="tg-yw4l"><FormItem><InputNumber min={0} disabled{...style} {...getFieldProps('qtjz_hs',{normalize:this.zero})}/></FormItem></td>
                        <td className="tg-yw4l"><FormItem><InputNumber step={0.01} disabled {...style} {...getFieldProps('qtjz_je',{normalize:this.zero})}/></FormItem></td>
                    </tr>
                    <tr>
                        <td className="tg-031e">9</td>
                        <td className="tg-031e">其中：（1）高新技术企业认定鉴证业务</td>
                        <td className="tg-031e"><FormItem><InputNumber disabled {...style} {...getFieldProps('gxjsqyrdqzyw_hs0',{normalize:this.zero})}/></FormItem></td>
                        <td className="tg-031e"><FormItem><InputNumber disabled {...style} {...getFieldProps('gxjsqyrdqzyw_je0',{normalize:this.zero})}/></FormItem></td>
                        <td className="tg-yw4l"><FormItem><InputNumber min={0} {...style} {...getFieldProps('gxjsqyrdqzyw_hs',{normalize:this.zero})}/></FormItem></td>
                        <td className="tg-yw4l"><FormItem><InputNumber step={0.01} {...style} {...getFieldProps('gxjsqyrdqzyw_je',{normalize:this.zero})}/></FormItem></td>
                    </tr>
                    <tr>
                        <td className="tg-031e">10</td>
                        <td className="tg-031e">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;（2）企业注销税务登记税款清算鉴证业务 </td>
                        <td className="tg-031e"><FormItem><InputNumber disabled {...style} {...getFieldProps('qyzxswdeskjsjzyw_hs0',{normalize:this.zero})}/></FormItem></td>
                        <td className="tg-031e"><FormItem><InputNumber disabled {...style} {...getFieldProps('qyzxswdeskjsjzyw_je0',{normalize:this.zero})}/></FormItem></td>
                        <td className="tg-yw4l"><FormItem><InputNumber min={0} {...style} {...getFieldProps('qyzxswdeskjsjzyw_hs',{normalize:this.zero})}/></FormItem></td>
                        <td className="tg-yw4l"><FormItem><InputNumber step={0.01} {...style} {...getFieldProps('qyzxswdeskjsjzyw_je',{normalize:this.zero})}/></FormItem></td>
                    </tr>
                    <tr>
                        <td className="tg-031e">11</td>
                        <td className="tg-031e">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;（3）研发费加计扣除鉴证业务</td>
                        <td className="tg-031e"><FormItem><InputNumber disabled {...style} {...getFieldProps('yffjjkcjzyw_hs0',{normalize:this.zero})}/></FormItem></td>
                        <td className="tg-031e"><FormItem><InputNumber disabled {...style} {...getFieldProps('yffjjkcjzyw_je0',{normalize:this.zero})}/></FormItem></td>
                        <td className="tg-yw4l"><FormItem><InputNumber min={0} {...style} {...getFieldProps('yffjjkcjzyw_hs',{normalize:this.zero})}/></FormItem></td>
                        <td className="tg-yw4l"><FormItem><InputNumber step={0.01} {...style} {...getFieldProps('yffjjkcjzyw_je',{normalize:this.zero})}/></FormItem></td>
                    </tr>
                    <tr>
                        <td className="tg-031e">12</td>
                        <td className="tg-031e">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;（4）其他</td>
                        <td className="tg-031e"><FormItem><InputNumber disabled {...style} {...getFieldProps('qt_hs0',{normalize:this.zero})}/></FormItem></td>
                        <td className="tg-031e"><FormItem><InputNumber disabled {...style} {...getFieldProps('qt_je0',{normalize:this.zero})}/></FormItem></td>
                        <td className="tg-yw4l"><FormItem><InputNumber min={0} {...style} {...getFieldProps('qt_hs',{normalize:this.zero})}/></FormItem></td>
                        <td className="tg-yw4l"><FormItem><InputNumber step={0.01} {...style} {...getFieldProps('qt_je',{normalize:this.zero})}/></FormItem></td>
                    </tr>*/}

                    </tbody>
                </table>
                <Button type="primary" onClick={this.commit}> <Icon type="to-top"/>提交</Button>
                <Row style={{marginTop: '24px'}}>
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
    },
    onFieldsChange(props, fields) {
       props.onFieldChange(fields)
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
    handleFieldChange(field){
        const {data} = this.state;
        for(let o in field){
            data[field[o].name] = field[o].value;
        }
        data.hsqjje_hs = num(data.tzynsdse_hs) + num(data.tjynsdse_hs);
        data.hsqjje_je = num(data.tzynsdse_je) + num(data.tjynsdse_je);
        this.setState({data:data})
    },

    //保存
    handleSave(values){
        const {url} = this.props;
        values.ztbj = 0;
        values.dwmc = this.state.data.dwmc;
        this.setState({loading: true, data: values});
        req({
            method: 'post',
            url: url,
            data: values
        }).then(resp=> {
            this.setState({loading: false, scr: 'success', successType: 'save'})
        }).catch(e=> {
            this.setState({loading: false});
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
    handleCommit(values){
        const {url} = this.props;
        values.ztbj = 1;
        values.dwmc = this.state.data.dwmc;
        this.setState({loading: true, data: values});
        req({
            method: 'post',
            url: url,
            data: values
        }).then(resp=> {
            this.setState({loading: false, scr: 'success', successType: 'commit'})
        }).catch(e=> {
            this.setState({loading: false});
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
        let {data, loading, scr, failtext, successType} = this.state;
        const panelBar = <PanelBar>
            <Button onClick={this.back}>
                <Icon type="rollback"/>返回
            </Button>
        </PanelBar>;

        let content = {
            normal: <Editfrom data={data}
                              onCommit={this.handleCommit}
                              onSave={this.handleSave}
                              onFieldChange={this.handleFieldChange}/>,
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