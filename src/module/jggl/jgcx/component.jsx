import React from 'react'
import CompBaseTable from 'component/compBaseTable';
import CompPageHead from 'component/CompPageHead'
import './style.css'
import req from 'reqwest'
import Model from './model.js' 
import {  Table, Icon,Tabs }from 'antd'

const TabPane = Tabs.TabPane;

const jgcx = React.createClass({

  getInitialState() { //初始化State状态，使用传入参数
      return {
        dataxx: {values: {}},
        datalist:[],
          data: [],
            pagination: Model.pageSetting,
            showtotal:Model.pageSetting.showTotal,
            urls:{},
            loading:true,
            selectedRowKeys: [],
            tabkey:1,
      };
    },

handleTableChange(pagination, filters, sorter) {//onChange方法，分页、排序、筛选变化时触发，必须三个参数才能准确获取
 req({
      url: '/api/zs/jgs?pagenum='+pagination.current+'&pagesize='+pagination.pageSize+'&sfield='+sorter.field+'&sorder='+sorter.order,//根据前端返回值更新后台查询方法和数据
      method: 'get',
      type: 'json',
      success: (result) => {
        const paper = this.state.pagination;     
         paper.pageSize = pagination.pageSize;//把页面Size更改为前端相应Size
        this.setState({
          data: result.data,
          urls:result.data[0]._links,
        });
        this.fetch_jgxx()
      }
    });
  },

  fetch_jgcx() {
    req({
      url: '/api/zs/jgs?pagesize='+this.state.pagination.pageSize+'&pagenum=1&sfield=null&sorder=null',//默认数据查询后台返回JSON
      method: 'get',
      type: 'json',
      success: (result) => {
if (this.state.pagination.page){//判断是否进行分页
    const pagination = this.state.pagination;
        pagination.total = result.page.pageTotal;//要求后台返回json写法有属性page，该属性包含pageTotal（总条数值）
              if (this.state.showtotal){//判断是否显示总条数
                   function showTotal() {
                      return "共"+pagination.total+"条";
                    }
                    pagination.showTotal = showTotal;//调用总条数返回方法
                  }else{
                    pagination.showTotal = null;//不显示总条数处理
                  }
  }else{
    const pagination = this.state.pagination;
        pagination.total = result;//不分页总条数处理
  }
        this.setState({
          data: result.data,//要求后台返回json写法有属性data，该属性包含查询记录，每条查询记录必须拥有字段'key'
          urls:result.data[0]._links,
          loading:false,
        });
        this.fetch_jgxx();
      }
    });
  },

    fetch_jgxx() {
      let tabkey =this.state.tabkey 
      if (tabkey==1) {;
        req({
        url: this.state.urls.herf_sws,
        method: 'get',
        type: 'json',
        success: (result) => {
          this.setState({
            dataxx: result.data
          })
        }
      });
      }else if (tabkey==2) {
        req({
        url: this.state.urls.herf_zyry,
        method: 'get',
        type: 'json',
        success: (result) => {
          this.setState({
            datalist: result.data
          })
        }
      });
      }else if (tabkey==3) {
        req({
        url: this.state.urls.herf_cyry,
        method: 'get',
        type: 'json',
        success: (result) => {
          this.setState({
            datalist: result.data
          })
        }
      });
      }else if (tabkey==4) {
        req({
        url: this.state.urls.herf_czrylb,
        method: 'get',
        type: 'json',
        success: (result) => {
          this.setState({
            datalist: result.data
          })
        }
      });
      }else if (tabkey==5) {
        req({
        url: this.state.urls.herf_swsbgxx,
        method: 'get',
        type: 'json',
        success: (result) => {
          this.setState({
            datalist: result.data
          })
        }
      });
      }else if (tabkey==6) {
         req({
        url: this.state.urls.herf_njjl,
        method: 'get',
        type: 'json',
        success: (result) => {
          this.setState({
            datalist: result.data
          })
        }
      });
      };
    },
    
    onSelect(record){
       this.state.urls=record._links
       this.fetch_jgxx()
    },
    callback(key) {
      this.state.tabkey=key;
     this.fetch_jgxx()
},
    componentDidMount() { //REACT提供懒加载方法，懒加载时使用，且方法名必须为componentDidMount
      this.fetch_jgcx(); //异步调用后台服务器方法fetch_jgcx

      // this.fetch_jgxx(); //异步调用后台服务器方法fetch_jgcx
      // this.interval = setInterval(this.fetch_jgxx(), 1000);
    },
    render() {
    const onSelect = this.onSelect;
    const callback = this.callback;
      return <div className="jgcx">
      <CompPageHead heading="事务所查询" />
        <div className="wrap">

                 <div className="dataGird">
   <Table columns={Model.columns} 
           dataSource={this.state.data} 
          pagination={this.state.pagination}
           onChange={this.handleTableChange} 
           onRowClick={onSelect}
        loading={this.state.loading}  bordered   />
                 </div>

       <Tabs type="line" onChange={callback}>
    <TabPane tab="事务所信息" key="1"><CompBaseTable data = {this.state.dataxx}  model ={Model.data} bordered striped /></TabPane>
    <TabPane tab="执业人员信息" key="2"><Table columns={Model.columnsZyry} dataSource={this.state.datalist} bordered   /></TabPane>
   <TabPane tab="从业人员信息" key="3"><Table columns={Model.columnsCyry} dataSource={this.state.datalist} bordered   /></TabPane>
   <TabPane tab="出资人列表" key="4"><Table columns={Model.columnsCzrlb} dataSource={this.state.datalist} bordered   /></TabPane>
   <TabPane tab="事务所变更信息" key="5"><Table columns={Model.columnsSwsbgxx} dataSource={this.state.datalist} bordered   /></TabPane>
   <TabPane tab="年检记录" key="6"><Table columns={Model.columnsNjjl} dataSource={this.state.datalist} bordered   /></TabPane>
        </Tabs>
       
      
          </div>

        </div>
        
    }
})

module.exports = jgcx;


// 
// <CompDataGird column={columns}
//        pageSetting = {pageSetting} 
//        dataProvider = {dataProvider} 
//        girdStyle = {girdStyle}
//        key = 'yyyy'/> <Table columns={Model.columnsZyry} dataSource={this.state.dataxx} bordered   />