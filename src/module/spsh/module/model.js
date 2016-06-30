import React from 'react'
const coumlsJG = [{ //设定列
  title: '序号', //设定该列名称
  dataIndex: 'key', //设定该列对应后台字段名
  key: 'key', //列key，必须设置，建议与字段名相同
  render(value, row, index) {
    return {children: index+1};
  }}, { //设定列
  title: '事务所名称', //设定该列名称
  dataIndex: 'dwmc', //设定该列对应后台字段名
  key: 'dwmc', //列key，必须设置，建议与字段名相同
}, {
  title: '审批类型',
  dataIndex: 'wsxm',
  key: 'wsxm',
}, {
  title: '提交时间',
  dataIndex: 'tjsj',
  key: 'tjsj',
}]

const model = {
  jg:coumlsJG,
} 
module.exports = model