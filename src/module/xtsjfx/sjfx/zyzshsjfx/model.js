import React from 'react'
const columns = [{ //设定列
  title: '序号', //设定该列名称
  dataIndex: 'key', //设定该列对应后台字段名
  key: 'key', //列key，必须设置，建议与字段名相同
}, {
  title: '姓名',
  dataIndex: 'XMING',
  key: 'XMING',
}, {
  title: '性别',
  dataIndex: 'XB',
  key: 'XB',
}, {
  title: '学历',
  dataIndex: 'XL',
  key: 'XL',
},{
  title: '资格证书编号',
  dataIndex: 'ZYZGZSBH',
  key: 'ZYZGZSBH',
},  {
  title: '执业证书（备案）编号',
  dataIndex: 'ZYZSBH',
  key: 'ZYZSBH',
}, {
  title: '出资人',
  dataIndex: 'isCzr',
  key: 'isCzr',
}, {
  title: '发起人',
  dataIndex: 'isFqr',
  key: 'isFqr',
}, {
  title: '所属机构',
  dataIndex: 'DWMC',
  key: 'DWMC',
}
];

const pageSetting = { //分页设置
  page: true, //是否分页
  pageSize: 5, //初始化显示记录条数
  showSizeChanger: true, //是否可以改变每页记录条数
  showTotal(total) {
          return "共"+total+"条";
        },//是否显示总条数
  showQuickJumper: true, //是否可以快速跳转至某页
  size: 'small', //分页样式，当为「small」时，是小尺寸分页
  pageSizeOptions: ['5', '10', '20', '30', '40'], //指定每页可以显示多少条，与showSizeChanger配合使用
  current:1,
}

const columnsSwsqkBgjl=[{
  title:'变更名称',
  dataIndex:'bgmc',
  key:'bgmc',
  width:'250'
},{
  title:'旧值',
  dataIndex:'jzhi',
  key:'jzhi',
  width:'35%'
},{
  title:'新值',
  dataIndex:'xzhi',
  key:'xzhi'
},{
  title:'更新时间',
  dataIndex:'gxsj',
  key:'gxsj',
  width:'100'
}
];

const autoformXxzl={
  colGroupNum: 2,
  props:[
    {
      id:'dwmc',
      name:'单位名称：'
    },{
      id:'cs',
      name:'所在城市：'
    },{
      id:'fddbr',
      name:'法定代表人：'
    },{
      id:'dz',
      name:'地址：'
    },{
      id:'yzbm',
      name:'邮政编码：'
    },{
      id:'dh',
      name:'电话：'
    },{
      id:'cz',
      name:'传真：'
    },{
      id:'jgxz',
      name:'机构性质：'
    },{
      id:'zsbh',
      name:'证书编号：'
    },{
      id:'zczj',
      name:'注册资金（万元）：'
    },{
      id:'jyfw',
      name:'经营范围：'
    },{
      id:'swdjhm',
      name:'税务登记号码：'
    },{
      id:'jgdmzh',
      name:'机构代码证号：'
    },{
      id:'zrs',
      name:'总人数：'
    },{
      id:'dzyj',
      name:'电子邮件：'
    },{
      id:'sqslsj',
      name:'申请设立时间：'
    },{
      id:'sjsbwh',
      name:'省局上报文号：'
    },{
      id:'sjsbzjsj',
      name:'省局上报总局时间：'
    },{
      id:'zjpzwh',
      name:'总局批准文号：'
    },{
      id:'zjpzsj',
      name:'总局批准时间：'
    },{
      id:'sjzfwh',
      name:'省局转发文号：'
    },{
      id:'sjzfsj',
      name:'省局转发时间：'
    },{
      id:'zsclsj',
      name:'正式成立时间：'
    },{
      id:'yyzzh',
      name:'营业执照号：'
    },{
      id:'khh',
      name:'开户行：'
    },{
      id:'khhzh',
      name:'开户行账号：'
    },{
      id:'qkjj',
      name:'情况简介：'
    }
  ]
};

const columnsNbjg=[{
  title:'机构名称',
  dataIndex:'jgmc',
  key:'jgmc'
},{
  title:'基本职能',
  dataIndex:'jbzn',
  key:'jbzn'
},{
  title:'人数',
  dataIndex:'rs',
  key:'rs'
}
];

const model = {
  columns:columns,
  pageSetting:pageSetting,
  columnsSwsqkBgjl:columnsSwsqkBgjl,
  autoformXxzl:autoformXxzl,
  columnsNbjg:columnsNbjg
} 
module.exports = model