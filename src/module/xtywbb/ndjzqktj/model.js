import React from 'react'
const model = {
    columns:[
          {
    title: '项目类别',
    dataIndex: 'xmlx',
    key: 'xmlx'
},
{
    title: '去年户数',
    dataIndex: 'hs_qn',
    key: 'hs_qn'
},
{
    title: '去年金额（万元）',
    dataIndex: 'je_qn',
    key: 'je_qn'
},
{
    title: '本年户数',
    dataIndex: 'hs_bn',
    key: 'hs_bn'
},

{
    title: '本年金额',
    dataIndex: 'je_bn',
    key: 'je_bn'
},
//比上年增减额
{
    title: '比上年增减户数',
    dataIndex: 'hs_zj',
    key: 'hs_zj'
},
{
    title: '比上年增减金额',
    dataIndex: 'je_zj',
    key: 'je_zj'
},
//增减百分比
{
    title: '增减百分比户数',
    dataIndex: 'hs_bl',
    key: 'hs_bl'
},
{
    title: '增减百分比金额',
    dataIndex: 'je_bl',
    key: 'je_bl'
},

],

};
module.exports = model;
