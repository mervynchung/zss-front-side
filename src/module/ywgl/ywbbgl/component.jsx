import React from 'react'
import {Table,Modal,Row,Col,Button,Icon,Alert} from 'antd'
import List from './list'

import {getObjBindModel} from 'common/utils.js'


const c = React.createClass({
    //初始化state
    render(){

        let helperTitle = '业务报备使用帮助';
        let helperDesc = [];
        helperDesc.push(<p key="helper-0">本功能主要提供本年度业务备案查询</p>);
        helperDesc.push(<p key="helper-1">本功能主要提供本年度业务备案查询</p>);

        return <div className="ywbbgl">
            <div className="wrap">
                <List helperDesc={helperDesc} helperTitle={helperTitle} scrollx={1200} keyCol="id"/>
            </div>
        </div>
    }
});

module.exports = c;