import React from 'react'
import {Tabs,Icon} from 'antd'
import config from 'common/configuration'
import auth from 'common/auth.js'
import YwbbGl from './ywbbGl.jsx'
import NewYwbb from './newYwbb.jsx'
import './style.css'

const TabPane = Tabs.TabPane;

const ywbb = React.createClass({
    getInitialState(){
        return {
            data:[],
            pagination: {
                current: 1,
                showSizeChanger: true,
                pageSize: 10,
                showQuickJumper: true,
                pageSizeOptions: ['5', '10', '20']

            }
        }
    },
    fetchYwbb(param = {page: 1, pageSize: 20}){
        const jid = auth.getJgid();
        const token = auth.getToken();
        const LIST_URL = config.HOST + config.URI_API_PROJECT + '/jg/'+jid+'/yw' ;
        return req({
            url: LIST_URL,
            method: 'get',
            type: 'json',
            data: param,
            headers:{'x-auth-token':token}
        })
    },
    render(){
        return <div className="client-ywbb">
            <div className="wrap">
                <Tabs type="card">
                    <TabPane tab="业务报备记录" key="1">
                        <YwbbGl />
                    </TabPane>
                    <TabPane tab= {<span><Icon type="plus-circle-o" />添加</span>} key="2">
                        <NewYwbb />
                    </TabPane>
                </Tabs>
            </div>
        </div>
    }
});

module.exports = ywbb;