import React from 'react'
import {Steps, Col, Row, Spin, notification, Icon, Button, Form, Input,InputNumber} from 'antd'
import Panel from 'component/compPanel'
import {SelectorYear, SelectorXZ, SelectorSWSXZ, SelectorCS} from 'component/compSelector'
import auth from 'common/auth.js'
import config from 'common/configuration.js'
import req from 'common/request'
import utils from 'common/utils'
import CommitSuccess from './commitSuccessScr'
import InitFailScr from './initFailScr'

const ButtonGroup = Button.Group;
const FormItem = Form.Item;
const PanelBar = Panel.ToolBar;

let Editfrom = React.createClass({
    checkRyzs(rule, value, callback){
        if( value < this.props.form.getFieldValue('zyzcswsrs')){
            callback("人员总数要大于执业人数")
        }else{
            callback()
        }
    },
    commit(){
        const {validateFields} = this.props.form;
        validateFields((errors, values) => {
            console.log(errors)
            if (!!errors) {
                return;
            }
            values = utils.transEmpty2Null(values);
            this.props.onCommit({stage: 1, values: values,customer:this.state.customer});
        })
    },
    save(){

    },
    render(){
        const {data} = this.props;
        const {getFieldProps} = this.props.form;
        const layout = {
            labelCol: {span: 8},
            wrapperCol: {span: 16}
        };
        const style = {style:{width:'100%'}};
        const ndProps = getFieldProps('nd', {
            rules: [
                {required: true, type:'number', message: '必填'}
            ]
        });
        const jgxzProps = getFieldProps('jgxz_dm', {
            rules: [
                {required: true,  message: '必填'}
            ]
        });
        const frdbProps = getFieldProps('frdbxm', {
            rules: [
                {required: true, whitespce:true, message: '必填'}
            ]
        });
        const ryzsProps = getFieldProps('ryzs', {
            rules: [
                {required: true, type:"number",  message: '必填'},
                { validator: this.checkRyzs }
            ]
        });
        const zyzcswsrsProps = getFieldProps('zyzcswsrs', {
            rules: [
                {required: true, type:"number",  message: '必填'}
            ]
        });
        const lrzeProps = getFieldProps('lrze', {
            rules: [
                {required: true, type:"number",  message: '必填'}
            ]
        });
        const zczeProps = getFieldProps('zcze', {
            rules: [
                {required: true, type:"number",  message: '必填'}
            ]
        });
        const srzeProps = getFieldProps('srze', {
            rules: [
                {required: true, type:"number",  message: '必填'}
            ]
        });
        const wthsProps = getFieldProps('wths', {
            rules: [
                {required: true, type:"number",  message: '必填'}
            ]
        });
        const csProps = getFieldProps('cs_dm', {
            rules: [
                {required: true, message: '必填'}
            ]
        });
        const zczjProps = getFieldProps('zczj', {
            rules: [
                {required: true,type:"number", message: '必填'}
            ]
        });
        const czrsProps = getFieldProps('czrs', {
            rules: [
                {required: true,type:"number", message: '必填'}
            ]
        });
        const hhrsProps = getFieldProps('hhrs', {
            rules: [
                {required: true,type:"number", message: '必填'}
            ]
        });
        const yysrProps = getFieldProps('yysr', {
            rules: [
                {required: true,type:"number", message: '必填'}
            ]
        });
        const tbrProps = getFieldProps('tianbiaoren', {
            rules: [
                {required: true,whitespace:true, message: '必填'}
            ]
        });
        const szProps = getFieldProps('suozhang', {
            rules: [
                {required: true,whitespace:true, message: '必填'}
            ]
        });
        return <div className="fix-table no-border table-striped  ">
            <Form horizontal>
                <table className="tg">
                    <colgroup>
                        <col style={{width:'25%'}}/>
                        <col style={{width:'25%'}}/>
                        <col style={{width:'25%'}}/>
                        <col style={{width:'25%'}}/>
                    </colgroup>
                    <tbody>
                    <tr>
                        <td className="tg-031e" colSpan="2">单位：{data.dwmc}</td>
                        <td className="tg-031e" colSpan="2">
                            <FormItem label="年度"  {...layout}><Input {...style} disabled { ...ndProps} /></FormItem>
                        </td>
                    </tr>
                    <tr>
                        <td className="tg-031e">
                            <FormItem label="组织形式"  {...layout}><SelectorSWSXZ {...style} disabled { ...jgxzProps}/></FormItem>
                        </td>
                        <td className="tg-031e"><FormItem
                          label="法人" {...layout}><Input {...style} {...frdbProps}/></FormItem>
                        </td>

                        <td className="tg-031e">
                            <FormItem label="人员总数" {...layout}><InputNumber {...style}  {...ryzsProps}/></FormItem>
                        </td>
                        <td className="tg-031e">
                            <FormItem label="执业人数" {...layout}><InputNumber {...style}
                              disabled {...zyzcswsrsProps}/></FormItem>
                        </td>
                    </tr>
                    <tr>
                        <td className="tg-031e">
                            <FormItem label="利润总额"  {...layout}><InputNumber {...style}  {...lrzeProps}/></FormItem>
                        </td>
                        <td className="tg-031e">
                            <FormItem label="资产总额" {...layout}><InputNumber {...style} {...zczeProps}/></FormItem>
                        </td>

                        <td className="tg-031e">
                            <FormItem label="收入总额" {...layout}><InputNumber {...style}
                              disabled   {...srzeProps}/></FormItem></td>
                        <td className="tg-031e">
                            <FormItem label="委托户数" {...layout}><InputNumber {...style}   {...wthsProps}/></FormItem>
                        </td>
                    </tr>
                    <tr>
                        <td className="tg-031e">
                            <FormItem
                              label="所在地" {...layout}><SelectorCS {...style} { ...csProps}/></FormItem></td>

                        {data.jgxz_dm == 2?<td className="tg-031e">
                            <FormItem label="注册资金" {...layout}><InputNumber {...style} {...zczjProps}/></FormItem></td>:null}
                        {data.jgxz_dm == 2 ? <td className="tg-031e">
                            <FormItem label="股东人数" {...layout}><InputNumber {...style}  {...czrsProps}/></FormItem></td>:null}
                        {data.jgxz_dm ==1 ? <td className="tg-031e">
                           <FormItem label="合伙人数" {...layout}><InputNumber {...style}  {...hhrsProps}/></FormItem></td>:null}
                        {data.jgxz_dm == 1? <td className="tg-031e">
                           <FormItem label="运营资金" {...layout}><InputNumber {...style}  {...yysrProps}/></FormItem></td>:null}
                        <td> </td>
                    </tr>
                    <tr>
                        <td className="tg-031e">
                            <FormItem label="制表人" {...layout}><Input {...style}  {...tbrProps}/></FormItem></td>
                        <td className="tg-031e">
                            <FormItem label="所长" {...layout}><Input {...style}  {...szProps}/></FormItem></td>
                        <td colSpan="2"> </td>
                    </tr>
                    </tbody>
                </table>
                <Row style={{marginTop:'24px'}}>
                    <Col span="5" offset="19">
                        <ButtonGroup>
                        <Button type="primary" onClick={this.save}> <Icon type="save" />保存</Button>
                        <Button type="primary" onClick={this.commit}> <Icon type="to-top" />提交</Button>
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
            title: '添加事务所基本情况表',
            url: config.HOST + config.URI_API_PROJECT + '/client/swsjbqk',
            initUrl: config.HOST + config.URI_API_PROJECT + '/client/swsjbqkinit'
        }
    },
    getInitialState(){
        return {
            loading: true,
            addSuccess: false,
            successResp: {},
            data: {},
            scr: 'edit'
        }
    },
    back(){
        this.props.onBack();
    },
    //添加新报备信息
    addYwbb(param){
        const token = auth.getToken();
        return req({
            url: this.props.apiUrl,
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
                let failtext = {
                    title: '无法添新的报表',
                    text: res.text
                };
                this.setState({scr: 'fail', loading: false, failtext: failtext})
            } else {
                this.setState({scr: 'fail', loading: false})
            }

        })
    },

    render(){
        const {title} = this.props;
        let {data,loading,scr,failtext} = this.state;
        const panelBar = <PanelBar>
            <Button onClick={this.back}>
                <Icon type="rollback"/>返回
            </Button>
        </PanelBar>;

        let content = {
            edit: <Editfrom data={data} onCommit={this.handleCommit} onSave={this.handleSave}/>,
            fail: <InitFailScr data={failtext}/>,
            success: <CommitSuccess />
        };

        return <Panel className="swsjbqk-edit" toolbar={panelBar} title={title}>
            <Spin spinning={loading}>
                {content[scr]}
            </Spin>
        </Panel>

    }
});


module.exports = c;