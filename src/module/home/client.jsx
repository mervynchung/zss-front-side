import React from 'react';
import {Row, Col,Tabs,Table,Badge,Icon,Button} from 'antd'
import Container from 'component/container'
import ZyswsList from './zyswsList'
import CyryList from './cyrylist'
import Fqr from './fqrlist'
import Czr from './czrlist'
import Szxx from './szxx'
import Swsxx from './swsxx'
import InBox from './inBox'
import auth from 'common/auth'
import req from 'common/request'
import config from 'common/configuration'
import MsgDetail from 'component/msgDetail'
import './style.css'

const TabPane = Tabs.TabPane;
const c = React.createClass({
    getDefaultProps(){
        return {
            sumUrl:config.HOST + config.URI_API_PROJECT + '/clisummary/',
            zyswsUrl:config.HOST + config.URI_API_PROJECT + '/sumZysws/',
            cyryUrl:config.HOST + config.URI_API_PROJECT + '/sumCyry/',
            inboxUrl:config.HOST + config.URI_API_FRAMEWORK + '/inbox'
        }
    },

    //初始化state
    getInitialState(){
        return {
            summary: {},
            zysws: {},
            cyry: {},
            inbox: [],
            msg:false,
            msgEntity:{}
        }

    },
    fetchSummary(){
        let jgid = auth.getJgid();
        return req({url: this.props.sumUrl+jgid, method: 'get', type: 'json'})
    },
    fetchZysws( params= {page : 1, pagesize : 5}){
        let jgid = auth.getJgid();
        return req({url: this.props.zyswsUrl+jgid, method: 'get', type: 'json', data: {page: params.page, pagesize: params.pagesize}})
    },
    fetchCyry( params= {page : 1, pagesize : 5}){
        let jgid = auth.getJgid();
        return req({url: this.props.cyryUrl+jgid, method: 'get', type: 'json', data: {page: params.page, pagesize: params.pagesize}})
    },
    fetchInbox( params= {page : 1, pagesize : 5}){
        return req({url: this.props.inboxUrl, method: 'get', type: 'json', data: {page: params.page, pagesize: params.pagesize}})
    },
    //获取汇总信息，执业人员和从业人员名单
    async fetchData(){
        let [summary, zysws,cyry,inbox] = await Promise.all([this.fetchSummary(), this.fetchZysws(), this.fetchCyry(),this.fetchInbox()]);
        return {summary: summary, zysws: zysws, cyry: cyry,inbox:inbox}
    },
    componentDidMount(){
        this.fetchData().then(resp=> {
            this.setState({summary: resp.summary, zysws: resp.zysws, cyry: resp.cyry,inbox:resp.inbox.data})
        });
    },
    //读取某条消息内容
    handleRead(entity){
        this.setState({msg:true,msgEntity:entity})
    },
    //关闭消息视图
    closeMsg(){
        this.fetchInbox().then(resp=>{
            this.setState({inbox:resp.data,msg:false})
        })
    },

    render(){
        const more = <a><Icon type="ellipsis"/> 展开</a>;
        /*设置明细信息组件的参数*/
        const detailSetting = {
            //设置数据源
            id: this.state.msgEntity.textid,
            //设置已读
            setRead:this.state.msgEntity.id,
            visible:this.state.msg,
            //设置返回主视图调用的方法
            onClose: this.closeMsg
        };
        return <div className="client-home wrap">
            <Row gutter={16}>
                <Col span="16">
                    <Container>
                        <Tabs size="small">
                            <TabPane key="1" tab="执业税务师">
                                <ZyswsList fetch={this.fetchZysws}
                                           data={this.state.zysws.data}
                                           total = {this.state.zysws.total} />
                            </TabPane>
                            <TabPane key="2" tab="从业人员">
                                <CyryList fetch={this.fetchCyry}
                                          data={this.state.cyry.data}
                                          total = {this.state.cyry.total}/>
                            </TabPane>
                            <TabPane key="3" tab="所长信息">
                                <Szxx data={this.state.summary.szxx} />
                            </TabPane>
                            <TabPane key="4" tab="发起人信息">
                                <Fqr data={this.state.summary.fqrxx} />
                            </TabPane>
                            <TabPane key="5" tab="出资人信息">
                                <Czr data={this.state.summary.czrxx} />
                            </TabPane>
                        </Tabs>

                    </Container>
                </Col>
                <Col span="8">
                    <Container className="tabs-for-title">
                        <Tabs size="small">
                            <TabPane key="1" tab="站内通知"><InBox data={this.state.inbox} onRead={this.handleRead}/></TabPane>
                        </Tabs>
                    </Container>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Container className="tabs-for-title">
                        <Tabs size="small" tabBarExtraContent={more}>
                            <TabPane key="1" tab="事务所详细信息">
                                <Swsxx data = {this.state.summary.swsxx} />
                            </TabPane>
                        </Tabs>
                    </Container>
                </Col>
            </Row>
            <MsgDetail {...detailSetting}/>
        </div>
    }
});

module.exports = c;