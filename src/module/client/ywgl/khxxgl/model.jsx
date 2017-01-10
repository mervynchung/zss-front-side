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
        {title: '客户单位名称', dataIndex: 'DWMC', key: 'DWMC'},
        {title: '联系地址', dataIndex: 'DWDZ', key: 'DWDZ'},
        {title: '联系人', dataIndex: 'LXR', key: 'LXR'},
        {title: '联系电话', dataIndex: 'LXDH', key: 'LXDH'},
        {title: '纳税人识别号', dataIndex: 'NSRSBH', key: 'NSRSBH'},
        {title: '地税纳税人识别号', dataIndex: 'NSRSBHDF', key: 'NSRSBHDF'},
        {
            title: '操作',
            key: 'action',
            render: (text, record) => {
                return <span>
                    <a onClick={()=>handleEdit(record)}>修改</a> &nbsp;&nbsp;
                    <Popconfirm title="确定要删除吗？" placement="left" onConfirm={()=>handleDel(record)}>
                        <a>删除</a>
                    </Popconfirm>

                </span>
            }
        }
    ]
};