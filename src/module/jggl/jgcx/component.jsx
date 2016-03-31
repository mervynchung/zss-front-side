import React from 'react'
import CompDataGird from 'component/CompDataGird';
import CompTab from 'component/CompTab';
import CompBaseTable from 'component/compBaseTable';
import './style.css'
import req from 'reqwest'

const columns = [{ //设定列
  title: '序号', //设定该列名称
  dataIndex: 'xh', //设定该列对应后台字段名
  key: 'xh', //列key，必须设置，建议与字段名相同
}, {
  title: '机构名称',
  dataIndex: 'dwmc',
  key: 'dwmc',
  sorter: true, //是否可以排序，需后台写排序方法
}, {
  title: '注册资金',
  dataIndex: 'zczj',
  key: 'zczj',
  sorter: true,
}, {
  title: '法定代表人',
  dataIndex: 'fddbr',
  key: 'fddbr',
  sorter: true,
}, {
  title: '证书编号',
  dataIndex: 'zsbh',
  key: 'zsbh',
}, {
  title: '事务所性质',
  dataIndex: 'swsxz',
  key: 'swsxz',
}, {
  title: '城市',
  dataIndex: 'cs',
  key: 'cs',
}, {
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
  sorter: true,
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

const pageSetting = { //分页设置
  page: true, //是否分页
  pageSize: 5, //初始化显示记录条数
  showSizeChanger: true, //是否可以改变每页记录条数
  showTotal: true, //是否显示总条数
  showQuickJumper: true, //是否可以快速跳转至某页
  size: 'small', //分页样式，当为「small」时，是小尺寸分页
  pageSizeOptions: ['5', '10', '20', '30', '40'], //指定每页可以显示多少条，与showSizeChanger配合使用
}
const dataProvider = '/api/zs/jgs' //后台交互路径，在组件中已写死URL带?条件写法：'?pagesize='+pageSetting.pageSize+'&pagenum=1&sfield=null&sorder=null'

const girdStyle = { //表格样式
  bordered: true, //是否展示外边框和列边框
  size: 'small', //正常或迷你类型，default or small
}
const data = {
  values: {

  },
   colGroupNum: 2,
  keys: [
    {
 id:'dwmc',
 name: '单位名称', }, 
    {
 id:'cs',
 name: '年龄', }, 
    {
 id:'fddbr',
 name:  '性别', }, 
    {
 id:'dzhi',
 name:  '学历', }, 
    {
 id:'sjlzxsbwh',
 name:  '城市', }, 
    {
 id:'zcdz',
 name:  '地址', }, 
    {
 id:'sglzxsbsj',
 name:  '毕业院校', }, 
    {
 id:'zjpzsj',
 name:  '证书编号', }, 
    {
 id:'yzbm',
 name: '备案日期', }, 
    {
 id:'zjpzwh',
 name: '备案日期', }, 
    {
 id:'czhen',
 name:  '备案日期', }, 
    {
 id:'dhua',
 name: '备案日期', }, 
    {
 id:'szyx',
 name:  '备案日期', }, 
    {
 id:'txyxming',
 name:  '备案日期', }, 
    {
 id:'xtyyx',
 name:  '备案日期', }, 
    {
 id:'xtyphone',
 name:  '备案日期', }, 
    {
 id:'zsbh',
 name: '备案日期', }, 
    {
 id:'zczj',
 name:  '备案日期', }, 
    {
 id:'jyfw',
 name: '备案日期', }, 
    {
 id:'zrs',
 name: '备案日期', }, 
    {
 id:'swsxz',
 name: '备案日期', }, 
    {
 id:'szphone',
 name: '备案日期', }, 
    {
 id:'gsyhmcbh',
 name: '备案日期', }, 
    {
 id:'dzyj',
 name: '备案日期', }, 
    {
 id:'yhdw',
 name: '备案日期', }, 
    {
 id:'yhsj',
 name: '备案日期', }, 
    {
 id:'gzbh',
 name: '备案日期', }, 
    {
 id:'gzdw',
 name: '备案日期', }, 
    {
 id:'gzry',
 name: '备案日期', }, 
    {
 id:'gzsj',
 name: '备案日期', }, 
    {
 id:'yzbh',
 name: '备案日期', }, 
    {
 id:'yzdw',
 name: '备案日期', }, 
    {
 id:'yzry',
 name: '备案日期', }, 
    {
 id:'yzsj',
 name: '备案日期', }, 
    {
 id:'tthybh',
 name: '备案日期', }, 
    {
 id:'rhsj',
 name: '备案日期', }, 
    {
 id:'khh',
 name: '备案日期', }, 
    {
 id:'khhzh',
 name: '备案日期', }, 
    {
 id:'fj',
 name: '备案日期', }, 
    {
 id:'swdjhm',
 name: '备案日期', }, 
    {
 id:'jbqk',
 name: '备案日期', }, 
    {
 id:'glzd',
 name: '备案日期', }, 
    {
 id:'gddh',
 name: '备案日期', }, 
    {
 id:'bgcszczm',
 name: '备案日期', }, 
    
  ]
}
const TrWrapper = React.createClass({
  render() {
    return <tr>{this.props.children}</tr>
  }
})


const jgcx = React.createClass({
  getInitialState() { //初始化State状态，使用传入参数
      return {
        data: { values: {},colGroupNum: 2,keys:data.keys},
        seconds: 0
      };
    },

    fetch_jgxx() {
      req({
        url: "/api/zs/swsxx/53",
        method: 'get',
        type: 'json',
        success: (result) => {
          console.log(result.data);
          this.setState({
            data: {values:result.data,colGroupNum: 2,keys:data.keys}
          })
          // console.log(this.state.data);
          console.log("111111111111111111");
          // const vdata = this.state.data;
          //   vdata.data.values=result.data;//要求后台返回json写法有属性data，该属性包含查询记录，每条查询记录必须拥有字段'key'

        }
      });
    },
    componentDidMount() {
      //REACT提供懒加载方法，懒加载时使用，且方法名必须为componentDidMount
      this.fetch_jgxx(); //异步调用后台服务器方法fetch_jgcx
      this.interval = setInterval(this.tick, 1000);
    },
    // tick() {
    //   if(!this.state.data.data.values){
    //        this.setState({seconds: this.state.seconds + 1});
    //   }

    // },
    render() {
      
      return <div className="wrap">
  
       <CompTab key='ttt'/>
       <CompBaseTable data = {this.state.data} bordered striped />
      
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