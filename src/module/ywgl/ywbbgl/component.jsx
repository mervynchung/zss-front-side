import React from 'react'
import {Table,Modal,Row,Col,Button,Icon,Alert} from 'antd'
import List from './list'

import {getObjBindModel} from 'common/utils.js'


const c = React.createClass({
    //初始化state
    render(){

        let helper = [];
        helper.push(<p key="helper-0">本功能主要提供本年度业务备案查询</p>);
        helper.push(<p key="helper-1">本功能主要提供本年度业务备案查询2</p>);

        return <div className="xygl">
            <div className="wrap">
                <List />
            </div>
        </div>
    }
});

module.exports = c;