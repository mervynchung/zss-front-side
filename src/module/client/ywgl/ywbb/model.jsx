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
        {title: '年度', dataIndex: 'ND', key: 'ND'},
        {title: '委托企业名称', dataIndex: 'WTDWMC', key: 'WTDWMC'},
        {title: '业务发生地', dataIndex: 'CS', key: 'CS'},
        {title: '业务类型', dataIndex: 'LX', key: 'LX'},
        {title: '协议文号', dataIndex: 'XYWH', key: 'XYWH'},
        {title: '协议金额', dataIndex: 'XYJE', key: 'XYJE'},
        {title: '发票金额', dataIndex: 'FPJE', key: 'FPJE'},
        {title: '报备号码', dataIndex: 'BBHM', key: 'BBHM'},
        {title: '签字税务师', dataIndex: 'QZSWS', key: 'QZSWS'},
        {title: '状态', dataIndex: 'ZT', key: 'ZT'},
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