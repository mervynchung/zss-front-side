/**
 * Created by ming on 2016/4/11.
 */
import React from 'react'
const model = [{
    title: '序号',
    dataIndex: 'key',
    key: 'key'
},{
    title: '事务所名称',
    dataIndex: 'DWMC',
    key: 'DWMC',
    
}, {
    title: '统计时间',
    dataIndex: 'TJSJ',
    key: 'TJSJ',
}, {
    title: '单位负责人',
    key: 'DWFZR',
    dataIndex: 'DWFZR',
}, {
    title: '财会负责人',
    key: 'CKFZR',
    dataIndex: 'CKFZR',
    
},{
    title: '状态',
    key: 'ZTBJ',
    dataIndex: 'ZTBJ',
},{
  title: '操作',
  key: 'operation',
  render(text) {
    return (
      <span>
        <a href="#">打印</a>
      </span>
    );
  }
}
];
const entityModel = {
   colGroupNum: 2,
  props: [
    {
 id:'DWMC',
 name: '编制地区（单位）：'}, 
    {
 id:'JSSJ',
 name: '时间' }, 
    {
 id:'JLR',
 name:  '净利润（本年）' }, 
    {
 id:'JLRUPYEAR',
 name:  '净利润（上年本年）' }, 
  
 
   ]
}

const outModel ={
    model : model,
    entityModel: entityModel
}

module.exports = outModel;