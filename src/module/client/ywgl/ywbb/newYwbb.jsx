import React from 'react'
import {Steps,Col,Row,Spin  } from 'antd'
import Panel from 'component/compPanel'
import auth from 'common/auth.js'
import config from 'common/configuration.js'
import req from 'reqwest'
import Stage0 from './stage0.jsx'
import Stage1 from './stage1.jsx'
import Stage2 from './stage2.jsx'

const Step = Steps.Step;

const jid = auth.getJgid();
const token = auth.getToken();
const LIST_URL = config.HOST + config.URI_API_PROJECT + '/jg/'+jid+'/yw' ;
const YWBBMISC_URL = config.HOST + config.URI_API_PROJECT + '/ywbbmisc/'+jid ;

//获取委托客户列表
const fetchCustomers = function (param = {page: 1, pageSize: 10, jid: jid}) {
    return req({
        url: CUSTOMER_URL,
        method: 'get',
        type: 'json',
        data: param,
        headers: {'x-auth-token': token}
    })
};
//获取本机构下属执业税务师列表
const fetchYwbbMisc = function () {
    return req({
        url: YWBBMISC_URL,
        method: 'get',
        type: 'json',
        headers: {'x-auth-token': token}
    })
};
//异步获取数据
const fetchData = async function () {
    let [ywbbMisc] = await Promise.all([fetchYwbbMisc()]);
    return {jgxx: ywbbMisc.jgxx,zysws:ywbbMisc.zysws}
};

const newYwbb = React.createClass({
    getInitialState(){
        return {
            loading: true,
            stage: 0,
            dataXY: {},
            dataYW: {},
            dataJG: {},
            zysws: []
        }
    },
    handleStageChange(value){
        this.setState({stage: value})
    },
    handleStage0Submit(param){
        this.setState({stage: param.stage, dataXY: param.values})

    },
    handleStage1Submit(param){
        this.setState({stage: param.stage, dataYW: param.dataYW})

    },
    handleStage2Submit(param){
        this.setState({stage: param.stage, dataJG: param.dataJG})

    },
    componentDidMount(){
        fetchData().then(resp=>{
            this.setState({dataJG:resp.jgxx,zysws:resp.zysws,loading:false})
        }).catch(e=>{
            let c = <div className="ywbb-new-loadfail"> 数据读取失败</div>;
            this.setState({loading:false,loaded:c})
        })
    },

    render(){
        let {stage,dataXY,dataYW,dataJG} = this.state;
        let stageContent = {
            '0': this.state.loaded || <Stage0 data={dataXY}
                         onSubmit={this.handleStage0Submit}/>,
            '1': <Stage1 onStageChange={this.handleStageChange}
                         data={dataYW} zysws={this.state.zysws}
                         onSubmit={this.handleStage1Submit}/>,
            '2': <Stage2 onStageChange={this.handleStageChange}
                         data={dataJG}
                         onSubmit={this.handleStage2Submit}/>
        };

        return <Spin spinning={this.state.loading}>
            <Panel>
                <Steps current={stage} className="steps">
                    <Step title="填写协议"/>
                    <Step title="填写业务详细信息"/>
                    <Step title="确认事务所基本信息"/>
                </Steps>
                <div>
                    {stageContent[stage]}
                </div>

            </Panel>
        </Spin>
    }
});

module.exports = newYwbb;