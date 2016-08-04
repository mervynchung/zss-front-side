import React from 'react'
import Panel from 'component/compPanel'
import config from 'common/configuration'
import req from 'reqwest'
import {Link} from 'react-router'
import SearchForm from './searchForm'
import {  Input, Table, Icon, Tabs, Button, Row, Col, message }from 'antd'
// 标签定义
const API_URL = config.HOST + config.URI_API_PROJECT + '/fpdy';
const ToolBar = Panel.ToolBar;
const jgcx = React.createClass({

  getInitialState() { //初始化State状态，使用传入参数
    return {
      //这些都是dataset
      data: [],//用于主查询
      pagination:  { //分页设置
          page: true, //是否分页
          pageSize: 5, //初始化显示记录条数
          showSizeChanger: true, //是否可以改变每页记录条数
          showQuickJumper: true, //是否可以快速跳转至某页
          size: 'small', //分页样式，当为「small」时，是小尺寸分页
          pageSizeOptions: ['5', '10', '20', '30', '40'], //指定每页可以显示多少条，与showSizeChanger配合使用
          current:1,
        },
      visible: false,//条件查询框默认状态
      where: {},
    };
  },

  handleTableChange(pagination, filters, sorter) {//onChange方法，分页、排序、筛选变化时触发，必须三个参数才能准确获取
    const tablewhere = this.state.where;
    tablewhere.sfield = sorter.field;
    tablewhere.sorder = sorter.order;
    const paper = this.state.pagination;     //把this.state.pagination指向paper，与setState异曲同工，目的是更改单一属性数据
    paper.pageSize = pagination.pageSize;
    paper.current = pagination.current;
    this.fetch_jgcx({//调用主查询
      pagenum: pagination.current,
      pagesize: pagination.pageSize,
      where: encodeURIComponent(JSON.stringify(tablewhere)),
    })
  },

  fetch_jgcx(params = { pagenum: this.state.pagination.current, pagesize: this.state.pagination.pageSize }) {
    this.setState({ loading: true, });//主查询加载状态
    req({
      url: API_URL,//默认数据查询后台返回JSON
      method: 'get',
      type: 'json',
      data: params,
      success: (result) => {
        if (result.data.length != 0) {
          const pagination = this.state.pagination;
          pagination.total = result.page.pageTotal;//要求后台返回json写法有属性page，该属性包含pageTotal（总条数值）
          function showTotal() { return "共" + pagination.total + "条"; }
          pagination.showTotal = showTotal;//调用总条数返回方法
          this.setState({
            data: result.data,//传入后台获取数据，table组件要求每条查询记录必须拥有字段'key'
            loading: false,//关闭加载状态
          });
        } else {//空数据处理
          const pagination = this.state.pagination;
          pagination.total = 0;
          this.setState({ data: [],  loading: false, });
        };
      },
      error: (err) => { alert('api错误'); }
    });
  },


  onSelect(record) {//主查询记录被选中方法
   console.log(record);

  },


  handleSearchToggle() {//点击查询按钮，显示查询form
    this.setState({ searchToggle: !this.state.searchToggle });
  },

  handleOk(value) {//点击搜索按钮触发事件
    this.setState({ where: value });
    const paper = this.state.pagination;     //把当前页重置为1
    paper.current = 1;
    this.fetch_jgcx({//调用主查询
      pagenum: 1,
      pagesize: this.state.pagination.pageSize,
      where: encodeURIComponent(JSON.stringify(value)),
    })
  },

ztRender(text, row, index) {
                    if (!row.jyzsr) {
                        return <span style={{'color':'red'}}>{text}（未上报报表）</span>;
                    };
                    return <p>{text}</p>;
  },
  componentDidMount() { //REACT提供懒加载方法，懒加载时使用，且方法名必须为componentDidMount
    this.fetch_jgcx(); //异步调用后台服务器方法fetch_jgcx
  },

  render() {
    const columns = [{ //设定列
                  title: '序号', //设定该列名称
                  dataIndex: 'key', //设定该列对应后台字段名
                  key: 'key', //列key，必须设置，建议与字段名相同
                }, {
                  title: '所属年度',
                  dataIndex: 'ND',
                  key: 'ND',
                  render(text) {
                    const nowy = new Date(text);
                    return (
                      <span>
                        {nowy.getFullYear()}
                      </span>
                    );
                  }
                }, {
                  title: '单位名称',
                  dataIndex: 'DWMC',
                  key: 'DWMC',
                }, {
                  title: '总金额',
                  dataIndex: 'JFZE',
                  key: 'JFZE',
                },{
                  title: '团体金额',
                  dataIndex: 'YJTTHF',
                  key: 'YJTTHF',
                },  {
                  title: '个人金额',
                  dataIndex: 'YJGRHF',
                  key: 'YJGRHF',
                }, {
                  title: '交费日期',
                  dataIndex: 'JFRQ',
                  key: 'JFRQ',
                }, {
                  title: '上半年/全年',
                  dataIndex: 'SX',
                  key: 'SX',
                }, {
                  title: '打印次数',
                  dataIndex: 'DYCS',
                  key: 'DYCS',
                },{
                  title: '操作',
                  dataIndex: 'dy',
                  key: 'dy',
                  render(text) {
                    return (
                      <span>
                        <a >打印</a>
                      </span>
                    );
                  }
                },
            ];
    let toolbar = <ToolBar><div>
      <Button type="ghost" onClick={this.handleSearchToggle}>
        <Icon type="search"/>查询
        { this.state.searchToggle ? <Icon className="toggle-tip" type="arrow-up"/> :
          <Icon className="toggle-tip" type="arrow-down"/>}
      </Button><span className="ant-divider"></span>
      <Button type="ghost"  ><Link to="hyhf/hyhfjnqk">返回会费缴纳</Link></Button>
    </div>
    </ToolBar>;
    return <div className="fpdy">
      <div className="wrap">
          <Panel title="发票打印" toolbar={toolbar}>
            {this.state.searchToggle && <SearchForm
              onSubmit={this.handleOk}/>}
            <Table columns={columns}
              dataSource={this.state.data}
              pagination={this.state.pagination}
              onChange={this.handleTableChange}
              onRowClick={this.onSelect}
              loading={this.state.loading}  bordered   />
          </Panel>
        </div>

    </div>

  }
})
module.exports = jgcx;


