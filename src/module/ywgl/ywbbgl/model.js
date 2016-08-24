/**
 * Created by ming on 2016/4/11.
 */
    import React from 'react'
const model = {
    columns: [{
        title: '年度',
        dataIndex: 'nd',
        key: 'nd',
        width: 60
    }, {
        title: '事务所名称',
        dataIndex: 'swsmc',
        key: 'swsmc',
        width: 300
    }, {
        title: '业务发生地',
        key: 'cs',
        dataIndex: 'cs',
    }, {
        title: '业务类型',
        key: 'ywlx',
        dataIndex: 'ywlx',
        width: 150
    }, {
        title: '协议金额',
        key: 'xyje',
        dataIndex: 'xyje',
    }, {
        title: '报备号码',
        key: 'bbhm',
        dataIndex: 'bbhm',
    }, {
        title: '报备日期',
        key: 'bbrq',
        dataIndex: 'bbrq',
    }, {
        title: '业务状态',
        key: 'ywzt',
        dataIndex: 'ywzt'
    },{
        title: '操作',
        key:'action',
        fix:'right',
        width: 200,
        render(){
            return <span><a>退回</a></span>
        }
    }]
};

module.exports = model;