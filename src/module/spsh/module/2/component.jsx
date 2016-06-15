import React from 'react'
import {Table,Modal,Row,Col,Button,Icon,Alert,Input,Radio,Form } from 'antd'
import { Router, Route, Link } from 'react-router'
import Panel from 'component/compPanel'
import auth from 'common/auth'
import req from 'reqwest';
import config from 'common/configuration'


const API_URL = config.HOST + config.URI_API_PROJECT + '/zjsh/wspxq1';
const API_URL_XX = config.HOST + config.URI_API_PROJECT + '/zjsh/wspxq/bgxx1';
const ToolBar = Panel.ToolBar;
const ButtonGroup = Button.Group;
const RadioGroup = Radio.Group;
const FormItem = Form.Item;
const createForm = Form.create;

const coumls = [{ //设定列
  title: '序号', //设定该列名称
  dataIndex: 'key', //设定该列对应后台字段名
  key: 'key', //列key，必须设置，建议与字段名相同
  render(value, row, index) {
    return {children: index+1};
  }
}, { //设定列
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
let wspcx = React.createClass({
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
                lcxx:[],
                titlemc:'',
                titlebz:'',
                bzxx:[],
                bzxxhider:false,
            }
        },

    handleTableChange(pagination, filters, sorter) {//onChange方法，分页、排序、筛选变化时触发，必须三个参数才能准确获取
          const paper = this.state.pagination;     //把this.state.pagination指向paper，与setState异曲同工，目的是更改单一属性数据
          paper.pageSize = pagination.pageSize;
          paper.current = pagination.current;
          this.fetchData({//调用主查询
                pagenum: pagination.current,
                pagesize: pagination.pageSize,
          })
  },

    handleRowClick(record){
      req({
                url: API_URL_XX,
                type: 'json',
                method: 'get',
                data: {sjid:record.sjid},
                contentType: 'application/json',
            }).then(resp=> {
                this.setState({entity: resp,dl:record,detailHide:false});
            }).fail(err=> {
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
     handleSubmit(e){
          e.preventDefault();
          let value = this.props.form.getFieldsValue();
          console.log(value,this.state.dl.id);
    },
    //明细表关闭
    handleDetailClose(){
        this.setState({detailHide: true})
    },
        //帮助按钮
    handleHelper(){
        this.setState({helper: !this.state.helper})
    },

    //手动关闭帮助提示
    handleHelperClose(){
        this.setState({helper: false})
    },
    
    //通过API获取数据
    fetchData(params = {pagenum: this.state.pagination.current, pagesize: this.state.pagination.pageSize}){
         this.setState({loading:true,});
         params.lcid=2
        req({
            url: API_URL,
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

    render(){//loading={this.props.submitLoading}
        //定义工具栏内容
        
        let toolbar = <ToolBar>
            <ButtonGroup>
                <Button type="primary" onClick={this.handleHelper}><Icon type="question"/></Button>
            </ButtonGroup>
        </ToolBar>;

        //定义提示内容
        let helper = [];
        helper.push(<p key="helper-0">1）显示当前用户待审核事项，其中事项性质分为两种：由事务所发起或管理中心发起；</p>);
        helper.push(<p key="helper-1">2)   可进行审批操作和具体审批流程查看</p>);

        const obj = this.state.entity;
        let i =1;
       const bgxmOptions = obj.map(bgxm => <tbody key={bgxm.MC}>
                <tr >
                    <td ><b>变更前{bgxm.MC}：</b></td>
                    <td>{bgxm.JZHI}</td> </tr>
                    <tr >
                    <td><b>变更后{bgxm.MC}：</b></td>
                    <td >{bgxm.XZHI}</td>
                 </tr></tbody>);
       const { getFieldProps } = this.props.form;
        return <div className="wspxm-swsbgsp">
            <div className="wrap">
                {this.state.helper && <Alert message="待审核事项帮助" description={helper} type="info" closable onClose={this.handleHelperClose}/>}
            <Panel title="待审核事项" toolbar={toolbar}>
                <Table style={{'cursor':'pointer'}} columns={coumls} dataSource={this.state.data} bordered onChange={this.handleTableChange} pagination={this.state.pagination} loading={this.state.loading} onRowClick={this.handleRowClick}  />
                </Panel>
                {this.state.detailHide ? null : <Panel title="变更申请明细" onClose={this.handleDetailClose} closable>
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
               <div style={{'padding':'10px'}}><h3 style={{'backgroundColor':'#fafbfc'}}>流程状态：</h3><h3 style={{'textAlign':'center','backgroundColor':'#fafbfc'}}><span style={{'color':'red'}}>1.广东省注册管理科</span></h3></div>
               <Panel title="事项审核">
                    <table >
                            <tbody >
                                  <tr>
                                      <td ><b>流程：</b></td>
                                      <td colSpan="3">1.广东省注册管理科</td>
                                      </tr>
                                      <tr >
                                      <td  rowSpan="3"><b>审核意见：</b></td>
                                      <td style={{textAlign:'left'}} rowSpan="3"><Col span="20"><Input type="textarea" rows="3" { ...getFieldProps('spyj')}></Input><p><span style={{'color':'red'}}>*最多允许输入100字</span></p></Col></td>
                                      <td >审核时间：</td>
                                      <td ><a >[系统默认当前时间]</a></td>
                                   </tr>
                                   <tr>
                                      <td>审核选项：</td>
                                      <td >
                                              <RadioGroup { ...getFieldProps('sftg',{ initialValue: "Y"})}>
                                                  <Radio key="a" value={config.AGREE_SP}>同意</Radio>
                                                  <Radio key="b" value={config.DISAGREE_SP}>驳回</Radio>  
                                              </RadioGroup> 
                                      </td>
                                   </tr>
                                   <tr>
                                      <td>审核人：</td>
                                      <td ><a >[系统默认当前登陆人]</a></td>
                                   </tr>
                                    <tr >
                                          <td colSpan="4" ><Button style={{float:'right'}} type="primary" htmlType="submit" onClick={this.handleSubmit}>提交</Button></td>
                                    </tr>
                                   </tbody>
                 </table>
               </Panel>
                   </div>
               </div>
                </Panel>}
            </div>
        </div>
    }
});
wspcx = createForm()(wspcx);
module.exports = wspcx;