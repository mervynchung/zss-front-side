import React from 'react'
import {Tabs,Icon} from 'antd'
import QueueAnim from 'rc-queue-anim'
import './style.css'
import config from 'common/configuration'
import req from 'reqwest'
import auth from 'common/auth.js'

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
            isSaved: false,
            entity: {},
            type: 'add'
        }
    },

    render(){
        return <div className="client-ywbb">
            <div className="wrap">
                <Tabs type="card">
                    <TabPane tab="业务报备" key="1">选项卡一内容</TabPane>
                    <TabPane tab= {<Icon type="plus-circle-o" />} key="2">选项卡二内容</TabPane>
                </Tabs>
            </div>
        </div>
    }
});

module.exports = ywbb;