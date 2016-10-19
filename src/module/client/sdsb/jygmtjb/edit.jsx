import React from 'react'
import { Steps, Col, Row, Spin, notification, Icon, Button, Form, Input } from 'antd'
import Panel from 'component/compPanel'
import { SelectorYear, SelectorXZ, SelectorSWSXZ, SelectorCS } from 'component/compSelector'
import auth from 'common/auth.js'
import config from 'common/configuration.js'
import req from 'common/request'
import CommitSuccess from './successScr'
import InitFailScr from './failScr'
import Success from './successScr'
import FailScr from './failScr'

const ButtonGroup = Button.Group;
const FormItem = Form.Item;
const PanelBar = Panel.ToolBar;

let Editfrom = React.createClass({
    render() {
        const {data} = this.props; 
        const layout = {
            labelCol: {span: 12},
            wrapperCol: {span: 12}
        };
        const style = {style: {width: '100%'}};
        const {getFieldProps} = this.props.form;
        return <div className="fix-table table-bordered table-striped" >
            <Form horizontal>
                <table className="tg" style={{ width: '765px', border: 'none' }}>
                    <colgroup>
                        <col style={{ width: '15%' }} />
                        <col style={{ width: '15%' }} />
                        <col style={{ width: '15%' }} />
                        <col style={{ width: '15%' }} />
                        <col style={{ width: '20%' }} />
                        <col style={{ width: '30%' }} />
                    </colgroup>

                    <tbody>
                        <tr>
                            <td colSpan="3">单位： {data.DWMC}</td>
                            <td  >  <Col
                                label="年度：">
                                <Input  { ...getFieldProps('nd', { initialValue: data.ND }) }disabled />
                            </Col>
                            </td>
                            <td ><Col>制表人：<Input   {...getFieldProps('tbr', { initialValue: data.TBR }) } /> </Col></td>
                            <td >所长：<Input   {...getFieldProps('sz', { initialValue: data.SZ }) } /> </td>
                            <td  >上年收入总计</td>
                            <td ><Input   {...getFieldProps('snsrze', { initialValue: data.SNSRZE }) } /> </td>

                        </tr>

                        <tr>

                            <td  >本年收入总额合计</td>
                            <td ><Input   {...getFieldProps('bnsrze_hj', { initialValue: data.BNSRZE_HJ }) } /> </td>
                            <td >本年收入总额涉税服务</td>
                            <td ><Input   {...getFieldProps('bnsrze_ssfw', { initialValue: data.BNSRZE_SSFW }) } /> </td>
                            <td >本年收入总额涉税鉴证</td>
                            <td ><Input   {...getFieldProps('bnsrze_ssjz', { initialValue: data.BNSRZE_SSJZ }) } /> </td>
                            <td  >本年收入总额涉税鉴证</td>
                            <td ><Input   {...getFieldProps('bnsrze_qtyw', { initialValue: data.BNSRZE_QTYW }) } /> </td>
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
            result[prop] = {value: props.data[prop]}
        }
        return result;
    }
})(Editfrom);


const c = React.createClass({
    getDefaultProps(){
        return {
            title: '编辑经营规模表',
            url: config.HOST + config.URI_API_PROJECT + '/client/jygmtjb',
            initUrl: config.HOST + config.URI_API_PROJECT + '/client/jygmtjinit'
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
        const {url,id} = this.props;
        values.ztbj = 0;
        values.dwmc = this.state.data.dwmc;
        this.setState({loading:true,data:values});
        req({
            method:'put',
            url:url+ `/${id}`,
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
        const {url,id} = this.props;
        values.ztbj = 1;
        values.dwmc = this.state.data.dwmc;
        this.setState({loading:true,data:values});
        req({
            method:'put',
            url:url+ `/${id}`,
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

    //异步获取注册税务师人数和报表明细信息
    async fetchData(){
        const {url,initUrl,id} = this.props;
        let fetch1 = req({
            method: 'get',
            url: initUrl,
            data:{id:id}
        });
        let fetch2 =  req({
            method: 'get',
            url: url + `/${id}`
        });
        let [init, mx] = await Promise.all([fetch1, fetch2]);
        return {init: init, mx: mx}
    },

    componentDidMount(){
        //const {url,id}  = this.props;
        this.fetchData().then(resp=> {
            //将明细对象的所有属性名转成小写
            let values = mapKeys(resp.mx,function(value,key){
                return key.toLowerCase()
            });
            values.srze = resp.init.srze;
            values.zyzcswsrs = resp.init.zyzcswsrs;
            //将机构性质和城市代码转为字符串，城市下拉由于labelInValue，所以需采用下面的赋值方式
            values.jgxz_dm = ''+values.jgxz_dm;
            values.cs_dm = {key:''+values.cs_dm};
            this.setState({data: values, loading: false,zyzcswsrs:values.zyzcswsrs})
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
        let {data,loading,scr,failtext,successType,zyzcswsrs} = this.state;
        const panelBar = <PanelBar>
            <Button onClick={this.back}>
                <Icon type="rollback"/>返回
            </Button>
        </PanelBar>;



        let content = {
            normal: <Editfrom data={data} onCommit={this.handleCommit} onSave={this.handleSave} zyzcswsrs={zyzcswsrs}/>,
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