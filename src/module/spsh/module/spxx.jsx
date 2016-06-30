import React from 'react'
import {Table,Modal,Row,Col,Button,Icon } from 'antd'
import {Link} from 'react-router'
import Panel from 'component/compPanel'
import auth from 'common/auth'
import req from 'reqwest';
import SPTJ from './sptj.jsx';
import config from 'common/configuration'
import SearchForm from './searchFormForJG'

const API_URL_TJ = config.HOST + config.URI_API_PROJECT + '/spapi/sptj/';
const API_URL_C = config.HOST + config.URI_API_PROJECT + '/commont/checkisbh/';
const API_URL_YJ = config.HOST + config.URI_API_PROJECT + '/spapi/sjbhyj/';
const ToolBar = Panel.ToolBar;

const coumls = [{ //设定列
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
const wspcx = React.createClass({
// getDefaultProps(){
//         return {
//             getbg: {}
//         }
//     },
    //初始化state
    getInitialState(){
            return {
                pagination: {
                current: 1,
                showSizeChanger: true,
                pageSize: 5,
                showQuickJumper: true,
                pageSizeOptions: ['5', '10', '20']
                },
                data:[],
                helper: false,
                entity: [],
                detailHide:true,
                dl: '',
                searchToggle: false,
                dqlcbz:'',
                lcbzmx:'', 
            }
        },

    //点击某行
    handleRowClick(record){
      this.fetchAll(record).then(resp=> {
                this.setState({entity: resp.data,dl:record,checked: resp.checked,detailHide:false});
                this.props.getbg(resp.data);
                if (!resp.checked) {
                   let bz=record.lcbz+1;
                   req({
                          url: API_URL_YJ+record.id+"/"+bz,
                          type: 'json',
                          method: 'get',
                      }).then(resp=> {
                        this.setState({sjyj: resp.spyj});
                        })
                };
            }).catch(err=> {
                Modal.error({
                    title: '数据获取错误',
                    content: (
                        <div>
                            <p>无法从服务器返回数据，需检查应用服务工作情况</p>
                            <p>Status: {err.status}</p>
                        </div>  )
                });
            });
    },
       fetchXX(sjid){
        return req({
            url: config.HOST + config.URI_API_PROJECT + this.props.spmxurl ,
            type: 'json',
            method: 'get',
            data: {sjid:sjid},
        })
    },
        fetchIsBH(spid){
        return req({
            url: API_URL_C+spid,
            type: 'json',
            method: 'get'
        })
    },
    async fetchAll(record){
        let [data, checked] = await Promise.all([this.fetchXX(record.sjid), this.fetchIsBH(record.id)]);
        return {data: data, checked: checked}
    },

    //审批提交按钮
     handleSubmit(e){
      this.setState({submitLoading:true});
          let value = e;
          req({
                url: API_URL_TJ+this.state.dl.id,
                type: 'json',
                method: 'put',
                data: JSON.stringify(value),
                contentType: 'application/json',
                headers:{'x-auth-token':auth.getToken()}
            }).then(resp=> {
                 this.setState({submitLoading:false});
                 var that = this;
                Modal.success({
                    title: '提交成功',
                    content: (
                        <div>
                            <p>审批提交成功，数据已更新</p>
                        </div>  ),
                    onOk() {//点击ok后页面刷新
                              that.setState({detailHide: true});
                               const paper = that.state.pagination;    
                                paper.current = 1;
                                that.fetchData({//调用主查询
                                      pagenum: paper.current,
                                      pagesize: paper.pageSize,
                                })
                            },
                });
            }).fail(err=> {
                Modal.error({
                    title: '数据提交错误',
                    content: (
                        <div>
                            <p>无法向服务器提交数据，需检查应用服务工作情况</p>
                            <p>Status: {err.status}</p>
                        </div>  )
                });
            })
    },

    //分页与排序
    handleTableChange(pagination, filters, sorter) {//onChange方法，分页、排序、筛选变化时触发，必须三个参数才能准确获取
          const paper = this.state.pagination;     //把this.state.pagination指向paper，与setState异曲同工，目的是更改单一属性数据
          paper.pageSize = pagination.pageSize;
          paper.current = pagination.current;
          this.fetchData({//调用主查询
                pagenum: pagination.current,
                pagesize: pagination.pageSize,
          })
  },

      //提交条件查询
    handleSearchSubmit(value){
        const pager = this.state.pagination;
        pager.current = 1;
        const params = {
            pagenum: 1,
            pagesize: pager.pageSize,
            where: encodeURIComponent(JSON.stringify(value))
        };
        this.setState({where: value});
        this.fetchData(params)
    },

    //明细表关闭
    handleDetailClose(){
        this.setState({detailHide: true})
    },

     //查询按钮
    handleSearchToggle(){
        this.setState({searchToggle: !this.state.searchToggle});
    },

    //通过API获取数据
    fetchData(params = {pagenum: this.state.pagination.current, pagesize: this.state.pagination.pageSize}){
         this.setState({loading:true,});
        req({
            url: config.HOST + config.URI_API_PROJECT + this.props.wspcxurl ,
            type: 'json',
            method: 'get',
            data: params,
            headers:{'x-auth-token':auth.getToken()}
        }).then(result=> {
              if (result.data.length!=0) {
                const pagination = this.state.pagination;
                pagination.total = result.page.pageTotal;//要求后台返回json写法有属性page，该属性包含pageTotal（总条数值）
                function showTotal() { return "共"+pagination.total+"条";}
                pagination.showTotal = showTotal;//调用总条数返回方法
                this.setState({
                        data: result.data,//传入后台获取数据，table组件要求每条查询记录必须拥有字段'key'
                        loading:false,//关闭加载状态
                        dqlcbz:result.dqlcbz,
                        lcbzmx:result.lcbzmx,
                });
                }else{//空数据处理
                  const pagination = this.state.pagination;
                         pagination.total = 0;
                         this.setState({data: [],loading:false,});
                    };
        }).fail(err=> {
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

    componentDidMount(){
        this.fetchData();
    },

    render(){
        //定义工具栏内容

        let toolbar = <ToolBar>
            <Button onClick={this.handleSearchToggle} size="large" type="primary">
                <Icon type="search"/>查询
                { this.state.searchToggle ? <Icon className="toggle-tip" type="circle-o-up"/> :
                    <Icon className="toggle-tip" type="circle-o-down"/>}
            </Button>
            <Button type="ghost" size="large"><Link to="spsh"><Icon type="circle-o-left" />返回</Link></Button>
        </ToolBar>;
        const bgxmOptions = this.props.mxbg;
        return <div className="wspxm-swszxsp">
            <div className="wrap">
            <Panel title={this.props.titleTop} toolbar={toolbar}>
                {this.state.searchToggle && <SearchForm onSubmit={this.handleSearchSubmit}/>}
                <Table style={{'cursor':'pointer'}} columns={this.props.columns} dataSource={this.state.data} bordered 
                onChange={this.handleTableChange} pagination={this.state.pagination} loading={this.state.loading} 
                onRowClick={this.handleRowClick}  />
                </Panel>
                {this.state.detailHide ? null : <Panel title={this.props.titleSecond} onClose={this.handleDetailClose} closable>
                <div className="h-scroll-table" >
                        <div className="fix-table table-bordered table-striped">
                        <h3 style={{'padding':'5px'}}>预警信息：<span style={{'color':'red'}}>{this.state.dl.yjxx}</span></h3>
                    <table >
                            <tbody >
                                  <tr>
                                      <td ><b>申请单位名称：</b></td>
                                      <td>{this.state.dl.dwmc}</td>
                                      </tr>
                                      <tr>
                                      <td><b>申请时间：</b></td>
                                      <td >{this.state.dl.tjsj}</td>
                                   </tr>
                                   </tbody>
                             {bgxmOptions}
                 </table>
               <div style={{'padding':'10px'}}>
                       <h3 style={{'backgroundColor':'#fafbfc'}}>流程状态：</h3>
                       <h3 style={{'textAlign':'center','backgroundColor':'#fafbfc'}}>
                       <span style={{'color':'red'}}>{!this.state.checked&&<span>上级驳回：{this.state.sjyj}  - - - -＞</span>}{this.state.dqlcbz}</span>
                       </h3>
               </div>
               <Panel title="事项审核">
                    <SPTJ onSubmit={this.handleSubmit} loading={this.state.submitLoading} lcbzmx={this.state.lcbzmx}/>
               </Panel>
                   </div>
               </div>
                </Panel>}
            </div>
        </div>
    }
});
module.exports = wspcx;