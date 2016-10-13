import React from 'react'
import {Steps, Col, Row, Spin, notification, Icon, Button, Form, Input} from 'antd'
import Panel from 'component/compPanel'
import {SelectorYear, SelectorXZ, SelectorJGXZ, SelectorCS} from 'component/compSelector'
import auth from 'common/auth.js'
import config from 'common/configuration.js'
import req from 'reqwest'
import EditSuccess from './commitSuccessScr';

const ButtonGroup = Button.Group;
const FormItem = Form.Item;
const PanelBar = Panel.ToolBar;


let form = React.createClass({
    getDefaultProps(){
        return {
            title: '编辑事务所基本情况表',
            data: {},
            url: config.HOST + config.URI_API_PROJECT + '/client/swsjbqk'
        }
    },
    getInitialState(){
        return {
            loading: true,
            addSuccess: false,
            successResp: {}
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
        const {url}  = this.props;
        const {setFieldProps} = this.props.form;
        const nd = new Date().getFullYear() - 1;

        req({
            method:'get',
            url:url,
            data:{page:1,pagesize:5}
        }).then(resp=>{
            console.log(resp);
            //setFieldProps({dwmc:resp.dwmc,nd:nd,jgxz_dm:resp.jgxz_dm})
        }).catch(e=>{
            console.log(e)
        })
    },

    render(){
        const {id, data, title} = this.props;
        const {getFieldProps} = this.props.form;
        const panelBar = <PanelBar>
            <Button onClick={this.back}>
                <Icon type="rollback"/>返回
            </Button>
        </PanelBar>;

        return <Panel className="swsjbqk-edit" toolbar={panelBar} title={title}>
            <div className="fix-table no-border table-striped ">
                <Form horizontal>
                    <table className="tg" style={{width:'765px',border:'none'}}>
                        <colgroup>
                            <col style={{width:'15%'}}/>
                            <col style={{width:'35%'}}/>
                            <col style={{width:'15%'}}/>
                            <col style={{width:'35%'}}/>
                        </colgroup>
                        <tbody>
                        <tr>
                            <td className="tg-031e" colSpan="2">单位：{data.dwmc}</td>
                            <td className="tg-031e" >年度</td>
                            <td className="tg-031e" ><Input { ...getFieldProps('nd')} /></td>
                        </tr>
                        <tr>
                            <td className="tg-031e">组织形式</td>
                            <td className="tg-031e"><SelectorJGXZ disabled { ...getFieldProps('jgxz_dm')}/></td>
                            <td className="tg-031e">法人</td>
                            <td className="tg-031e"><Input   {...getFieldProps('frdbxm')}/></td>
                        </tr>
                        <tr>
                            <td className="tg-031e">股东人数</td>
                            <td className="tg-031e"><Input   {...getFieldProps('czrs')}/></td>
                            <td className="tg-031e">人员总数</td>
                            <td className="tg-031e"><Input   {...getFieldProps('ryzs')}/></td>
                        </tr>
                        <tr>
                            <td className="tg-031e">执业人数</td>
                            <td className="tg-031e"><Input disabled  {...getFieldProps('zyzcswsrs')}/></td>
                            <td className="tg-031e">资产总额</td>
                            <td className="tg-031e"><Input   {...getFieldProps('zcze')}/></td>
                        </tr>
                        <tr>
                            <td className="tg-031e">注册资金</td>
                            <td className="tg-031e"><Input   {...getFieldProps('zczj')}/></td>
                            <td className="tg-031e">收入总额</td>
                            <td className="tg-031e"><Input   {...getFieldProps('srze')}/></td>
                        </tr>
                        <tr>
                            <td className="tg-031e">利润总额</td>
                            <td className="tg-031e"><Input disabled  {...getFieldProps('lrze')}/></td>
                            <td className="tg-031e">机构所在地</td>
                            <td className="tg-031e"><SelectorCS  { ...getFieldProps('cs_dm')}/></td>
                        </tr>
                        <tr>
                            <td className="tg-031e">委托户数</td>
                            <td className="tg-031e"><Input   {...getFieldProps('wths')}/></td>
                            <td className="tg-031e">合伙人数</td>
                            <td className="tg-031e"><Input   {...getFieldProps('hhrs')}/></td>
                        </tr>
                        <tr>
                            <td className="tg-031e">运营资金</td>
                            <td className="tg-031e"><Input   {...getFieldProps('yysr')}/></td>
                            <td className="tg-031e" colSpan="2"></td>
                        </tr>
                        <tr>
                            <td className="tg-031e">制表人</td>
                            <td className="tg-031e"><Input   {...getFieldProps('tianbiaoren')}/></td>
                            <td className="tg-031e">所长</td>
                            <td className="tg-031e"><Input   {...getFieldProps('suozhang')}/></td>
                        </tr>
                        </tbody>
                    </table>
                    <Row>
                        <Col span="24">
                            <Button type="primary" onClick={this.handleSave}> <Icon type="check"/>保存</Button>
                            <Button type="primary" onClick={this.handleCommit}> <Icon type="arrow-up"/>提交</Button>
                        </Col>
                    </Row>

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