import React from 'react'
const model = {
    columns:[
        {
    title: '年度',
    dataIndex: 'nd',
    key: 'nd'
},
{
    title: '地区',
    dataIndex: 'mc',
    key: 'mc'
},
{
    title: '机构总数',
    dataIndex: 'zjgs',
    key: 'zjgs'
},

//符合政策机构数
{
    title: '有限',
    dataIndex: 'fhzcgd_yx',
    key: 'fhzcgd_yx'
},
{
    title: '合伙',
    dataIndex: 'fhzcgd_hh',
    key: 'fhzcgd_hh'
},
{
    title: '分所',
    dataIndex: 'fhzcgd_fs',
    key: 'fhzcgd_fs'
},
//不符合政策机构数
{
    title: '有限',
    dataIndex: 'bfhzcgd_yx',
    key: 'bfhzcgd_yx'
},
{
    title: '合伙',
    dataIndex: 'bfhzcgd_hh',
    key: 'bfhzcgd_hh'
},
{
    title: '分所',
    dataIndex: 'bfhzcgd_fs',
    key: 'bfhzcgd_fs'
},

],

};
module.exports = model;
