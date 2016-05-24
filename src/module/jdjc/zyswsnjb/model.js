/**
 * Created by ming on 2016/4/11.
 */
import React from 'react'
const model = [{
    title: '序号',
    dataIndex: 'key',
    key: 'key'
},{
    title: '年度',
    dataIndex: 'ND',
    key: 'ND',
    
},{
    title: '姓名',
    dataIndex: 'XMING',
    key: 'XMING',
},{
    title: '所在单位',
    dataIndex: 'dwmc',
    key: 'dwmc',
},{
    title: '状态',
    key: 'ZTDM',
    dataIndex: 'ZTDM',
},  {
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
  
   ]
}

const outModel ={
    model : model,
    entityModel: entityModel
}

module.exports = outModel;