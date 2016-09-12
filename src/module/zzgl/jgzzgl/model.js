/**
 * Created by ming on 2016/4/11.
 */

const model = {
    columns: [{
        title: '锁定时间',
        dataIndex: 'nd',
        key: 'nd',
        width: 60
    }, {
        title: '事务所名称',
        dataIndex: 'swsmc',
        key: 'swsmc',
        width: 300
    }, {
        title: '锁定人',
        key: 'cs',
        dataIndex: 'cs',
        width:100
    }, {
        title: '锁定人角色',
        key: 'ywlx',
        dataIndex: 'ywlx',
        width: 220
    }, {
        title: '锁定原因',
        key: 'xyje',
        dataIndex: 'xyje',
        width:150
    }, {
        title: '报备号码',
        key: 'bbhm',
        dataIndex: 'bbhm',
        width:150
    }, {
        title: '报备日期',
        key: 'bbrq',
        dataIndex: 'bbrq',
        width:100
    }, {
        title: '业务状态',
        key: 'ywzt',
        dataIndex: 'ywzt',
        width:120
    }]
};

module.exports = model;