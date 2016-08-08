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
        {title: '项目', dataIndex: 'xmmc', key: 'xmmc'},
        {title: '总计', dataIndex: 'zrs', key: 'zrs'},
        {title: '女', dataIndex: 'n_zrs', key: 'n_zrs'},
        {title: '男', dataIndex: 'v_zrs', key: 'v_zrs'},
        {title: '博士', dataIndex: 'bs_zrs', key: 'bs_zrs'},
        {title: '研究生', dataIndex: 'yjs_zrs', key: 'yjs_zrs'},
        {title: '大学本科', dataIndex: 'bk_zrs', key: 'bk_zrs'},
        {title: '大专', dataIndex: 'dz_zrs', key: 'dz_zrs'},
        {title: '高中以下', dataIndex: 'gz_zrs', key: 'gz_zrs'},
        {title: '35岁以下', dataIndex: '35_zrs', key: '35_zrs'},
        {title: '36-50岁', dataIndex: '50_zrs', key: '50_zrs'},
        {title: '51-60岁', dataIndex: '60_zrs', key: '60_zrs'},
        {title: '60岁以上', dataIndex: '61_zrs', key: '61_zrs'}
    ]
};