/**
 * Created by ming on 2016/4/11.
 */
    import React from 'react'
const model = {
    columns: [{
        title: '年度',
        dataIndex: 'ND',
        key: 'ND',
        width: '60px'
    }, {
        title: '事务所名称',
        dataIndex: 'SWSMC',
        key: 'SWSMC',
    }, {
        title: '业务发生地',
        key: 'CS',
        dataIndex: 'CS',
    }, {
        title: '业务类型',
        key: 'YWLX',
        dataIndex: 'YWLX',
        width: '100px',
    }, {
        title: '协议金额',
        key: 'XYJE',
        dataIndex: 'XYJE',
    }, {
        title: '报备号码',
        key: 'BBHM',
        dataIndex: 'BBHM',
    }, {
        title: '报备日期',
        key: 'BBRQ',
        dataIndex: 'BBRQ',
    }, {
        title: '验证码',
        key: 'YZM',
        dataIndex: 'YZM',
    },{
        id: 'ACTION',
        name: '操作',
        render(){
            return <span><a>退回</a></span>
        }
    }]
};

module.exports = model;