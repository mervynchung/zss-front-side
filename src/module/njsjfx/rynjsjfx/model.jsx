import React from 'react'
import {Icon,Popconfirm} from 'antd'

let handleEdit = function (record) {
    console.log('edit',record)
};
let handleDel = function (record) {
    console.log('del',record)
};
module.exports = {

    setEdit: function (func) {
        handleEdit = func;
    },
    setDel: function (func) {
        handleDel = func;
    },
    columns: [
        {title: '年度', dataIndex: 'nd', key: 'nd'},
        {title: '地区', dataIndex: 'mc', key: 'mc'},
        {title: '应参加执业人总数', dataIndex: 'ycjzy_zrs', key: 'ycjzy_zrs'},
        {title: '人数', dataIndex: 'scjzy_rs', key: 'scjzy_rs'},
        {title: '占比', dataIndex: 'scjzy_bl', key: 'scjzy_bl'},
        {title: '通过', dataIndex: 'scjzy_tg_rs', key: 'scjzy_tg_rs'},
        {title: '未通过', dataIndex: 'scjzy_wtg_rs', key: 'scjzy_wtg_rs'},
        {title: '处理中', dataIndex: 'scjzy_clz_rs', key: 'scjzy_clz_rs'},
        {title: '人数', dataIndex: 'wcjzy_rs', key: 'wcjzy_rs'},
        {title: '占比', dataIndex: 'wcjzy_bl', key: 'wcjzy_bl'},
        {title: '应参加非执业人总数', dataIndex: 'ycjfzy_zrs', key: 'ycjfzy_zrs'},
        {title: '人数', dataIndex: 'scjfzy_rs', key: 'scjfzy_rs'},
        {title: '占比', dataIndex: 'scjzy_bl', key: 'scjzy_bl2'},
        {title: '通过', dataIndex: 'scjfzy_tg_rs', key: 'scjfzy_tg_rs'},
        {title: '未通过', dataIndex: 'scjfzy_wtg_rs', key: 'scjfzy_wtg_rs'},
        {title: '处理中', dataIndex: 'scjfzy_clz_rs', key: 'scjfzy_clz_rs'},
        {title: '人数', dataIndex: 'wcjzy_rs', key: 'wcjzy_rs2'},
        {title: '占比', dataIndex: 'wcjzy_bl', key: 'wcjzy_bl2'}
    ]
};