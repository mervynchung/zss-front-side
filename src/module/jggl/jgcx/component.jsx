import React from 'react'
import CompDataGird from 'component/CompDataGird';
import CompTab from 'component/CompTab';
// import CompBaseTable from 'component/compBaseTable';
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
  keys: {
    dwmc: '单位名称',
    cs: '年龄',
    fddbr: '性别',
    dzhi: '学历',
    sjlzxsbwh: '城市',
    zcdz: '地址',
    sglzxsbsj: '毕业院校',
    zjpzsj: '证书编号',
    yzbm: '备案日期',
    zjpzwh: '备案日期',
    czhen: '备案日期',
    dhua: '备案日期',
    szyx: '备案日期',
    txyxming: '备案日期',
    xtyyx: '备案日期',
    xtyphone: '备案日期',
    zsbh: '备案日期',
    zczj: '备案日期',
    jyfw: '备案日期',
    zrs: '备案日期',
    swsxz: '备案日期',
    szphone: '备案日期',
    gsyhmcbh: '备案日期',
    dzyj: '备案日期',
    yhdw: '备案日期',
    yhsj: '备案日期',
    gzbh: '备案日期',
    gzdw: '备案日期',
    gzry: '备案日期',
    gzsj: '备案日期',
    yzbh: '备案日期',
    yzdw: '备案日期',
    yzry: '备案日期',
    yzsj: '备案日期',
    tthybh: '备案日期',
    rhsj: '备案日期',
    khh: '备案日期',
    khhzh: '备案日期',
    fj: '备案日期',
    swdjhm: '备案日期',
    jbqk: '备案日期',
    glzd: '备案日期',
    gddh: '备案日期',
    bgcszczm: '备案日期',
    nbjgsz: '备案日期',
  }
}
const TrWrapper = React.createClass({
  render() {
    return <tr>{this.props.children}</tr>
  }
})


const jgcx = React.createClass({
  getInitialState() { //初始化State状态，使用传入参数
      return {
        data: {},
        seconds: 0
      };
    },

    fetch_jgxx() {
      req({
        url: "/api/zs/swsxx/53",
        method: 'get',
        type: 'json',
        success: (result) => {
          this.setState({
            data: result.data

          })
          console.log(this.state.data);
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
      const colgroup = [];
      const tr = [];
      let td = []
      const groupNum = 2;
      //设置colgroup样式
      for (let i = 0; i < (groupNum < 3 ? groupNum : 2); i++) {
        var spanKey = 24 / (groupNum * 3);
        var spanValue = 24 * 2 / (groupNum * 3);
        colgroup.push(<col key={'c-k-'+i} className={'col-'+spanKey}></col>);
        colgroup.push(<col key={'c-v-'+i} className={'col-'+spanValue}></col>);
      }
      //将实体内容以key:value放置到对应的td组中，再按照groupNum分列
      for (let prop in data.keys) {
        td.push(<td key={'td-k-'+prop}>{data.keys[prop]}</td>);
        td.push(<td key={'td-v-'+prop}>{this.state.data[prop]}</td>);
        if (td.length == groupNum * 2) {
          tr.push(<TrWrapper key={'tr-'+tr.length+1}>{td}</TrWrapper>);
          td = []
        }
      }
      return <div className="wrap">
  
       <CompTab key='ttt'/>

      <div className="base-table base-table-bordered" >
            <table className="table-bordered table-striped ">
                <colgroup>
                     {colgroup}
                </colgroup>
                <tbody>
                {tr}
              
                </tbody>
            </table>
        </div>
        <p>
        React has been running for {this.state.seconds} seconds.
      </p>
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