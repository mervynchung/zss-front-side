import React from 'react';
import {Row, Col,Tabs,Table,Badge,Icon,Button} from 'antd'
import Container from 'component/container'
import Panel from 'component/compPanel'
import auth from 'common/auth'
import req from 'common/request'
import config from 'common/configuration'
import './style.css'

const TabPane = Tabs.TabPane;
const c = React.createClass({
    fetchSummary(jgid){
        let url = config.HOST + config.URI_API_PROJECT + '/summary/'+jgid;
        req({url:url,method:'get'})
    },
    fetchZysws(jgid){
        let url = config.HOST + config.URI_API_PROJECT + '/sumZysws/'+jgid;
        req({url:url,method:'get'})
    },
    fetchCyry(jgid){
        let url = config.HOST + config.URI_API_PROJECT + '/sumCyry/'+jgid;
        req({url:url,method:'get'})
    },
    //获取汇总信息，执业人员和从业人员名单
    async fetchData(){
        const jgid = auth.getJgid();
        let [summary, zysws,cyry] = await Promise.all([this.fetchSummary(jgid), this.fetchZysws(jgid), this.fetchCyry(jgid)]);
        return {summary: summary, zysws: zysws, cyry: cyry}
    },
    componentDidMount(){
        fetchData();
    },
    render(){
        const unreadedBadge = <Badge count={109} style={{ backgroundColor: '#87d068' }} />;
        const more = <a><Icon type="ellipsis" /> 展开</a>;
        return <div className="client-home wrap">
            <Row gutter={16}>
                <Col span="16">
                    <Container>
                        <Tabs size="small">
                            <TabPane key="1" tab="执业税务师">1</TabPane>
                            <TabPane key="2" tab="从业人员">2</TabPane>
                            <TabPane key="3" tab="所长信息">3</TabPane>
                            <TabPane key="4" tab="发起人信息">4</TabPane>
                            <TabPane key="5" tab="出资人信息">5</TabPane>
                        </Tabs>

                    </Container>
                </Col>
                <Col span="8">
                    <Container className="tabs-for-title">
                        <Tabs size="small" tabBarExtraContent={unreadedBadge}>
                            <TabPane key ="1" tab="未读消息">1</TabPane>
                        </Tabs>
                    </Container>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Container className="tabs-for-title">
                        <Tabs size="small" tabBarExtraContent={more}>
                            <TabPane key ="1" tab="事务所详细信息">1</TabPane>
                        </Tabs>
                    </Container>
                </Col>
            </Row>

        </div>
    }
});

module.exports = c;