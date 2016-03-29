import React from 'react'
import CompDataGird from 'component/CompDataGird';
import CompTab from 'component/CompTab';
import CompAutoForm from 'component/CompAutoForm';

const columns = [{ //设定列
  title: '序号', //设定该列名称
  dataIndex: 'xh', //设定该列对应后台字段名
  key: 'xh', //列key，必须设置，建议与字段名相同
},{
  title: '机构名称',
  dataIndex: 'dwmc',
  key: 'dwmc',
  sorter:true,//是否可以排序，需后台写排序方法
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

const pageSetting = {//分页设置
        page:true, //是否分页
         pageSize : 5, //初始化显示记录条数
        showSizeChanger : true, //是否可以改变每页记录条数
         showTotal : true, //是否显示总条数
        showQuickJumper : true, //是否可以快速跳转至某页
        size : 'small', //分页样式，当为「small」时，是小尺寸分页
        pageSizeOptions : ['5', '10', '20', '30', '40'],//指定每页可以显示多少条，与showSizeChanger配合使用
}
const dataProvider = '/api/zs/jgs'//后台交互路径，在组件中已写死URL带?条件写法：'?pagesize='+pageSetting.pageSize+'&pagenum=1&sfield=null&sorder=null'

const girdStyle = {//表格样式
  bordered:true,//是否展示外边框和列边框
  size:'small',//正常或迷你类型，default or small
}

const jgcx = React.createClass({


  render() {
    return <div className="wrap">
  
       <CompTab key='ttt'/>
        <CompAutoForm key='fff'/>
        </div>
  }
})

module.exports = jgcx;


 // 
  // <CompDataGird column={columns}
  //        pageSetting = {pageSetting} 
  //        dataProvider = {dataProvider} 
  //        girdStyle = {girdStyle}
  //        key = 'yyyy'/>