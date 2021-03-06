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
    title: '主营业务成本',
    dataIndex: 'ZYYWCB',
    key: 'ZYYWCB',
}, {
    title: '主营业务税金及附加',
    key: 'ZYYWSJFJ',
    dataIndex: 'ZYYWSJFJ',
}, {
    title: '其他业务支出',
    key: 'QTYWZC',
    dataIndex: 'QTYWZC',
    
}, {
    title: '管理费用',
    key: 'GLFY',
    dataIndex: 'GLFY',
}, {
    title: '财务费用',
    key: 'CWFY',
    dataIndex: 'CWFY',
}, {
    title: '状态',
    key: 'ZTBJ',
    dataIndex: 'ZTBJ',
},   {
    title: '上报统计时间',
    key: 'TJSJ',
    dataIndex: 'TJSJ',
    
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
 id:'KSSJ',
 name: '统计时间' }, 
    {
 id:'JSSJ',
 name:  '结束时间' }, 
    {
 id:'ZYYWCB1',
 name:  '主营业务成本（本期）' }, 
  {
 id:'ZYYWCB',
 name:  '主营业务成本（本年）' }, 
  {
 id:'ZYYWSJFJ1',
 name:  '主营业务税金及附加（本期）' }, 
  {
 id:'ZYYWSJFJ',
 name:  '主营业务税金及附加（本年）' }, 
   ]
}

const outModel ={
    model : model,
    entityModel: entityModel
}

module.exports = outModel;