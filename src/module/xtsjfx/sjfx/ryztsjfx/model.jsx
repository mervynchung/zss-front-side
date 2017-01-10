import React from 'react'
import {Icon,Popconfirm} from 'antd'

let handleEdit = function (record) {};
let handleDel = function (record) {};
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
        {title: '合计数', dataIndex: 'zrs', key: 'zrs'},
        {title: '男', dataIndex: 'zrs_n', key: 'zrs_n'},
        {title: '女', dataIndex: 'zrs_v', key: 'zrs_v'},
        {title: '合计数', dataIndex: 'zy_zrs', key: 'zy_zrs'},
        {title: '男', dataIndex: 'zy_zrs_n', key: 'zy_zrs_n'},
        {title: '女', dataIndex: 'zy_zrs_v', key: 'zy_zrs_v'},
        {title: '合计数', dataIndex: 'fzy_zrs', key: 'fzy_zrs'},
        {title: '男', dataIndex: 'fzy_zrs_n', key: 'fzy_zrs_n'},
        {title: '女', dataIndex: 'fzy_zrs_v', key: 'fzy_zrs_v'},
        {title: '合计数', dataIndex: 'cy_zrs', key: 'cy_zrs'},
        {title: '男', dataIndex: 'cy_zrs_n', key: 'cy_zrs_n'},
        {title: '女', dataIndex: 'cy_zrs_v', key: 'cy_zrs_v'}
    ]
};