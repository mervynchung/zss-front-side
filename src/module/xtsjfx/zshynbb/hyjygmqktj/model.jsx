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
        {title: '机构名称', dataIndex: 'dwmc', key: 'dwmc'},
        {title: '合计', dataIndex: 'bnhj', key: 'bnhj'},
        {title: '涉税服务收入', dataIndex: 'ssfw', key: 'ssfw'},
        {title: '涉税鉴证收入', dataIndex: 'ssjz', key: 'ssjz'},
        {title: '其他业务收入', dataIndex: 'qtyw', key: 'qtyw'},
        {title: '上半年收入总额', dataIndex: 'qnhj', key: 'qnhj'},
        {title: '比上半年增长%', dataIndex: 'zz_bl', key: 'zz_bl'},
        {title: '备注', dataIndex: 'bz', key: 'bz'},
    ]
};