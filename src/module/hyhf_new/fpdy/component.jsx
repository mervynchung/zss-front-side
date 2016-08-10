import React from 'react'
import Panel from 'component/compPanel'
import config from 'common/configuration'
import req from 'reqwest'
import auth from 'common/auth'
import {Link} from 'react-router'
import SearchForm from './searchForm'
import {  InputNumber, Table, Icon, Tabs, Button, Row, Col, message,Form,Modal }from 'antd'
// 标签定义
const API_URL = config.HOST + config.URI_API_PROJECT + '/fpdy';
const API_URL_XG = config.HOST + config.URI_API_PROJECT + '/fpdy/ttgrfyfp/';
const ToolBar = Panel.ToolBar;
const createForm = Form.create;
let jgcx = React.createClass({

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
      rowIndex:'a',
      year:'',
    };
  },

  handleTableChange(pagination, filters, sorter) {//onChange方法，分页、排序、筛选变化时触发，必须三个参数才能准确获取
    const tablewhere = this.state.where;
    tablewhere.sfield = sorter.field;
    tablewhere.sorder = sorter.order;
    const paper = this.state.pagination;     //把this.state.pagination指向paper，与setState异曲同工，目的是更改单一属性数据
    paper.pageSize = pagination.pageSize;
    paper.current = pagination.current;
    this.setState({rowIndex:'a',xgZT:false});
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
                year:result.data[0].ND,
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

tthf(zje) {//团体会费校验规则方法
     const form = this.props.form;
    if ((!!form.getFieldValue('YJGRHF'))||(!!form.getFieldValue('YJTTHF'))) {
          if (form.getFieldValue('YJGRHF')+form.getFieldValue('YJTTHF')!=zje) {
          form.setFieldsValue({YJGRHF:zje-form.getFieldValue('YJTTHF')});
          };
  };
  },
 grhf(zje) {//个人会费校验规则方法
     const form = this.props.form;
    if ((!!form.getFieldValue('YJGRHF'))||(!!form.getFieldValue('YJTTHF'))) {
          if (form.getFieldValue('YJGRHF')+form.getFieldValue('YJTTHF')!=zje) {
          form.setFieldsValue({YJTTHF:zje-form.getFieldValue('YJGRHF')});
          };
  };
  },
  rowSelect(index){
      this.setState({rowIndex:index,xgZT:true});
  },
  rowConcel(){
      this.setState({rowIndex:'a',xgZT:false});
  },
  rowOK(row){
      let value = this.props.form.getFieldsValue();
      this.setState({ loading: true, });
      const fptj=value;
      const nowy = new Date(row.ND)
      fptj.jgid=row.jgid;
      fptj.nd=nowy.getFullYear();
      fptj.scid=row.scid;
      fptj.jfje=row.JFZE;
      req({
                url: API_URL_XG+row.jlid,
                type: 'json',
                method: 'put',
                data: JSON.stringify(fptj),
                contentType: 'application/json',
                headers:{'x-auth-token':auth.getToken()}
            }).then(resp=> {
                  if (resp) {
                      this.fetch_jgcx({//调用主查询
                        pagenum: this.state.pagination.current,
                        pagesize: this.state.pagination.pageSize,
                        where: encodeURIComponent(JSON.stringify(this.state.where)),
                      })
                  }else{
                        Modal.error({
                        title: '请检查金额分配情况',
                        content: (
                            <div>
                                <p><b>金额分配必须满足：</b></p>
                                <p>总金额=团体金额+个人金额</p>
                            </div>  )
                            });
                  };
                    this.setState({loading:false,rowIndex:'a',xgZT:false});
            }).fail(err=> {
              this.setState({loading:false});
                Modal.error({
                    title: '数据获取错误',
                    content: (
                        <div>
                            <p>无法从服务器返回数据，需检查应用服务工作情况</p>
                            <p>Status: {err.status}</p>
                        </div>  )
                });
            })
  },
ztRender(text, row, index) {
    var that=this;
    if (!!this.state.xgZT&&index==this.state.rowIndex) {
          return (
                                <span>
                                  <a onClick={that.rowOK.bind(this,row)}>确定</a><span className="ant-divider" ></span>
                                  <a onClick={that.rowConcel}>取消</a>
                                </span>
                              );
    };
     return (
                    <span>
                      <a onClick={that.rowSelect.bind(this,index)}>修改</a><span className="ant-divider" ></span>
                      <a >打印</a>
                    </span>
                  );
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

  componentDidMount() { //REACT提供懒加载方法，懒加载时使用，且方法名必须为componentDidMount
    this.fetch_jgcx(); //异步调用后台服务器方法fetch_jgcx
  },

  render() {
    var that=this;
    let rowI = this.state.rowIndex;
    const { getFieldProps } = this.props.form
    let columns = [{ //设定列
                  title: '序号', //设定该列名称
                  dataIndex: 'key', //设定该列对应后台字段名
                  key: 'key', //列key，必须设置，建议与字段名相同
                }, {
                  title: '所属年度',
                  dataIndex: 'ND',
                  key: 'ND',
                  render(text) {
                    const nowy = new Date(text);//年份格式化
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
                  render(text, row, index) {
                    if (index==rowI) {
                    return <InputNumber {...getFieldProps('YJTTHF',{ initialValue: text,rules:[{type:'number'},{validator:()=>that.tthf(row.JFZE)}]})}  min={0} max={row.JFZE} />;
                    };
                    return text;
                  }
                },  {
                  title: '个人金额',
                  dataIndex: 'YJGRHF',
                  key: 'YJGRHF',
                  render(text, row, index) {
                    if (index==rowI) {
                    return <InputNumber {...getFieldProps('YJGRHF',{ initialValue: text,rules:[{type:'number'},{validator:()=>that.grhf(row.JFZE)}]})} min={0} max={row.JFZE} />;
                    }
                    return text;
                  }
                }, {
                  title: '交费日期',
                  dataIndex: 'JFRQ',
                  key: 'JFRQ',
                }, {
                  title: '打印次数',
                  dataIndex: 'DYCS',
                  key: 'DYCS',
                },{
                  title: '操作',
                  dataIndex: 'dy',
                  key: 'dy',
                  render:this.ztRender
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
              onSubmit={this.handleOk} year={this.state.year}/> }
            <Table columns={columns}
              dataSource={this.state.data}
              pagination={this.state.pagination}
              onChange={this.handleTableChange}
              loading={this.state.loading}  bordered   />
          </Panel>
        </div>

    </div>

  }
});
jgcx = createForm()(jgcx);
module.exports = jgcx;


