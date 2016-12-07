/**
 * Created by ming on 2016/4/11.
 */
import {Progress,Tag } from 'antd'
import React from 'react'
const model = {
    columns: [{
        title: '时间',
        dataIndex: 'xh',
        key: 'xh',
        width: 100
    },{
        title: '标题',
        dataIndex: 'bt',
        key: 'bt',
        width: 400
    },{
        title: '收件人',
        key: 'pxkssj',
        dataIndex: 'pxkssj',
        width:100
    }]
};

module.exports = model;