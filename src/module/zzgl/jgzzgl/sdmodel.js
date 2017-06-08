/**
 * Created by ming on 2016/4/11.
 */

const model = {
    columns: [{
        title:'序号',
        dataIndex: 'rownum',
        key: 'rownum',
        width:50
    },{
        title: '锁定时间',
        dataIndex: 'sdtime',
        key: 'sdtime',
        sorter: true,
        width: 100
    }, {
        title: '事务所名称',
        dataIndex: 'swsmc',
        key: 'swsmc',
        sorter: true,
        width: 300
    }, {
        title: '锁定人',
        key: 'sdr',
        dataIndex: 'sdr',
        width:100
    }, {
        title: '锁定人角色',
        key: 'sdr_role',
        dataIndex: 'sdr_role',
        width: 150
    }, {
        title: '锁定原因',
        key: 'sdyy',
        dataIndex: 'sdyy',
        width:200
    }]
};

module.exports = model;