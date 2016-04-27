/* 
 引入依赖库 
  */
import 'common/lib.js'
import React from 'react'
import {Input, Form, Col, Row, Select, Modal, Button} from 'antd'
import ReactDom from 'react-dom'
import BaseTable from 'component/compBaseTable'
import req from 'reqwest'
import './style.css'
import {
    Table, Icon
}
from 'antd'

import Panel from 'component/compPanel'

import Lrfpbxx from './Lrfpbxx'



/* 
定义组件A 
 */
const columns = [{
    title: '序号',
    dataIndex: 'JG_ID',
    key: 'JG_ID',
}, {
        title: '事务所名称',
        dataIndex: 'DWMC',
        key: 'DWMC',
    }, {
        title: '统计时间',
        dataIndex: 'TJSJ',
        key: 'TJSJ',
    }, {
        title: '单位负责人',
        dataIndex: 'DWFZR',
        key: 'DWFZR',
    }, {
        title: '财会负责人',
        dataIndex: 'CKFZR',
        key: 'CKFZR',
    }, {
        title: '状态',
        dataIndex: 'ZTBJ',
        key: 'ZTBJ',
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

const Lrfpb = React.createClass({

    render() {
        return <div >
            <Table columns={this.columms}
                bordered size="small" />
        </div>
    }
})


/* 
 * 组件B 
 */

const data1 = {
    

}

const model = {
   colGroupNum: 2,
  props: [
    {
 id:'DWMC',
 name: '编制地区（单位）：', }, 
    {
 id:'SJ',
 name: '时间：', }, 
    {
 id:'JLR',
 name:  '净利润（本年实际）：', }, 
    {
 id:'JLRUPYEAR',
 name:  '（上年实际）：', }, 
    {
 id:'NCWFPLR',
 name:  '年初未分配利润（本年实际）：', }, 
    {
 id:'NCWFPLRUPYEAR',
 name:  '（上年实际）：', }, 
        {
 id:'QTZR',
 name:  '其他转入（本年实际）：', }, 
    {
 id:'QTZRUPYEAR',
 name:  '（上年实际）：', }, 
    {
 id:'KFPLR',
 name:  '可供分配的利润（本年实际）：', }, 
    {
 id:'KFPLRUPYEAR',
 name:  '（上年实际）：', }, 
  {
 id:'YYGJ',
 name:  '提取盈余公积（本年实际）：', }, 
    {
 id:'YYGJUPYEAR',
 name:  '（上年实际）：', }, 
 {
 id:'JLFLJJ',
 name:  '提取职工奖励福利基金（本年实际）：', }, 
    {
 id:'JLFLJJUPYEAR',
 name:  '（上年实际）：', }, 
  {
 id:'CBJJ',
 name:  '提取储备基金（本年实际）：', }, 
    {
 id:'CBJJUPYEAR',
 name:  '（上年实际）：', }, 
  {
 id:'QYFZJJ',
 name:  '提取企业发展基金（本年实际）：', }, 
    {
 id:'QYFZJJUPYEAR',
 name:  '（上年实际）：', }, 
  {
 id:'LRGHTZ',
 name:  '利润归还投资（本年实际）：', }, 
    {
 id:'LRGHTZUPYEAR',
 name:  '（上年实际）：', }, 
  {
 id:'TZZFPLR',
 name:  '可供投资者分配利润（本年实际）：', }, 
    {
 id:'TZZFPLRUPYEAR',
 name:  '（上年实际）：', }, 
   {
 id:'YXGL',
 name:  '应付优先股股利（本年实际）：', }, 
    {
 id:'YXGLUPYEAR',
 name:  '（上年实际）：', }, 
  {
 id:'PTGL',
 name:  '应付普通股股利（本年实际）：', }, 
    {
 id:'PTGLUPYEAR',
 name:  '（上年实际）：', }, 
 {
 id:'ZHPTGL',
 name:  '转作资本、股本的普通股利（本年实际）：', }, 
    {
 id:'ZHPTGLUPYEAR',
 name:  '（上年实际）：', }, 
  {
 id:'WFPLR',
 name:  '未分配利润（本年实际）：', }, 
    {
 id:'WFPLRUPYEAR',
 name:  '（上年实际）：', },
 {
 id:'DWFZR',
 name:  '单位负责人：', }, 
    {
 id:'CKFZR',
 name:  '财会负责人：', },
 {
 id:'FHR',
 name:  '复核人：', }, 
    {
 id:'ZBR',
 name:  '制表人：', },

  ]
}

    
/* 
组件compWrap 
 */
const lrfp = React.createClass({
    //==============初始化事件================== 
    getInitialState() {
        return {
            data: [],
            pagination: {},
              urls: '',
            ret: {},
        };
    },

    //**********事件处理**************** 

    //==========生命周期事件===================== 

    handleTableChange(pagination, filters, sorter) {
        req({
            url: '/api/lrfp?pagenum=' + pagination.current + '&pagesize=' + pagination.pageSize + '&sfield=' + sorter.field + '&sorder=' + sorter.order,
            method: 'get',
            type: 'json',
            success: (result) => {
                const paper = this.state.pagination;
                paper.pageSize = pagination.pageSize;
                this.setState({
                    data: result.data,
                     urls:result.data[0].id,
                
                });
             this.fetch_lrfpbxx()
            },
           
        });
    },
    fetch_lrfpb() {
        req({
            url: '/api/lrfp?pagenum=1&pagesize=5&sfield=unll&sorder=unll',
            method: 'get',
            type: 'json',
            success: (result) => { 
                function showTotal() {
                    return "共" + pagination.total + "条";
                }
                const pagination = this.state.pagination;
                pagination.total = result.page.total_number1;
                pagination.pageSize = 5;
                pagination.showSizeChanger = true;
                pagination.showTotal = showTotal;
                pagination.showQuickJumper = true;
                pagination.size = 'small';
                pagination.pageSizeOptions = ['5', '10', '20', '30', '40'];

                this.setState({
                    data: result.data,
                     urls:result.data[0].id,
                });
             this.fetch_lrfpbxx();
            },
            error: (err) =>{alert('api错误');}
        });
    },
       fetch_lrfpbxx() {
        req({
            url: '/api/lrfp/xx/' + this.state.urls,
            method: 'get',
            type: 'json',
            success: (result) => {
              
                this.setState({
                    ret: result.xx.data,
              
                });
                console.log(result);
            }
        });
    },

    onSelect(record) {
      
        this.state.urls = record.id;
        console.log(record);
        this.fetch_lrfpbxx();
    },

     componentDidMount() {
    this.fetch_lrfpb();
  },
    
  
  


    // =========样式渲染================== 
    render() {
            
        return <div className = "lrfp">
        <div className ="wrap"> 
        <Panel>
            <Table columns={columns}
                dataSource={this.state.data}
                pagination={this.state.pagination}
                onChange={this.handleTableChange}
                onRowClick={this.onSelect}
                bordered size="small" />      
            </Panel>
       
                <Panel title="利润分配表信息查看">
           <Lrfpbxx  data={this.state.ret} />
            </Panel>

            </div>
        </div>
    }
})

module.exports = lrfp;
