import React from 'react'
import {Tabs,Icon} from 'antd'
import QueueAnim from 'rc-queue-anim'
import './style.css'
import config from 'common/configuration'
import req from 'reqwest'
import auth from 'common/auth.js'
import List from './list'

const TabPane = Tabs.TabPane;

const jid = auth.getJgid();
const token = auth.getToken();
const LIST_URL = config.HOST + config.URI_API_PROJECT + '/jg/'+jid+'/yw' ;

const fetchYwbb =function (param = {page: 1, pageSize: 10,jid:jid}) {
    return req({
        url: LIST_URL,
        method: 'get',
        type: 'json',
        data: param,
        headers:{'x-auth-token':token}
    })
};

const ywbb = React.createClass({
    getInitialState(){
        return {
        }
    },

    render(){
        return <div className="client-ywbb">
            <div className="wrap">
                <Tabs type="card">
                    <TabPane tab="业务报备" key="1"><List /></TabPane>
                    <TabPane tab= {<span><Icon type="plus-circle-o" />添加</span>} key="2">选项卡二内容</TabPane>
                </Tabs>
            </div>
        </div>
    }
});

module.exports = ywbb;