const column= [{
  title: '我是组件的哦~',
  dataIndex: 'xh',
  key: 'xh',
},{
  title: '机构名称',
  dataIndex: 'dwmc',
  key: 'dwmc',
  sorter:true,
}, {
  title: '注册资金',
  dataIndex: 'zczj',
  key: 'zczj',
  sorter:true,
},{
  title: '法定代表人',
  dataIndex: 'fddbr',
  key: 'fddbr',
    sorter:true,
}, {
  title: '证书编号',
  dataIndex: 'zsbh',
  key: 'zsbh',
},{
  title: '事务所性质',
  dataIndex: 'swsxz',
  key: 'swsxz',
},{
  title: '城市',
  dataIndex: 'cs',
  key: 'cs',
},{
  title: '总人数',
  dataIndex: 'zrs',
  key: 'zrs',
}, {
  title: '执业注税师人数',
  dataIndex: 'zyrs',
  key: 'zyrs',
}, {
  title: '成立时间',
  dataIndex: 'clsj',
  key: 'clsj',
   sorter:true,
}, {
  title: '操作',
  key: 'operation',
  render(text) {
    return (
      <span>
        <a href="#">打印</a>
      </span>
    );
  }
}];

module.exports = column