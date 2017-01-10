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
        {title: '序号', dataIndex: 'KEY', key: 'KEY'},
        {title: '机构名称', dataIndex: 'DWMC', key: 'DWMC'},
        {title: '性质', dataIndex: 'DWXZ', key: 'DWXZ'},
        {title: '法人代表(所长)', dataIndex: 'FRDBXM', key: 'FRDBXM'},
        {title: '出资人数', dataIndex: 'CZRS', key: 'CZRS'},
        {title: '发起人数', dataIndex: 'HHRS', key: 'HHRS'},
        {title: '总人数', dataIndex: 'RYZS', key: 'RYZS'},
        {title: '税务师人数', dataIndex: 'ZYZCSWSRS', key: 'ZYZCSWSRS'},
        {title: '从业人数', dataIndex: 'CYRS', key: 'CYRS'},
        {title: '注册资金(万元)', dataIndex: 'ZCZJ', key: 'ZCZJ'},
        {title: '运营资金(万元)', dataIndex: 'YYSR', key: 'YYSR'},
        {title: '资产总额(万元)', dataIndex: 'ZCZE', key: 'ZCZE'},
        {title: '收入总额(万元)', dataIndex: 'SRZE', key: 'SRZE'},
        {title: '利润总额(万元)', dataIndex: 'LRZE', key: 'LRZE'},
        {title: '城市', dataIndex: 'JGSZD', key: 'JGSZD'}
        /*
        ,
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
        }*/
    ]
};