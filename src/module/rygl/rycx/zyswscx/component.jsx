import React from 'react'
import CompBaseTable from 'component/compBaseTable';
import config from 'common/configuration'
import Panel from 'component/compPanel'
import './style.css'
import req from 'reqwest'
import Model from './model.js' 
import SearchForm from './searchForm'
import {  DatePicker,Modal,Form, Input, Select,Table, Icon,Tabs,Button,Row,Col,message }from 'antd'
// 标签定义
const TabPane = Tabs.TabPane;
const API_URL = config.HOST+config.URI_API_PROJECT + '/rys';
const ToolBar = Panel.ToolBar;
const ButtonGroup = Button.Group;

const rycx = React.createClass({

  getInitialState() { //初始化State状态，使用传入参数
      return {
        //这些都是dataset
            dataxx: {values: {}},//用于详细信息autoform数据格式
            datalist:[],//用于其他详细table数据格式
            data: [],//用于主查询
            pagination: Model.pageSetting,//从model加载常量
            urls:{},//详细信息URL
            tabkey:1,//默认tab状态
            searchToggle: false,
            where:{},
            activeKey:1,
            spzt:"",
              zy:false,
              fz:false,
              cy:false,

      };
    },

  fetch_rycx(params = {pagenum: this.state.pagination.current, pagesize: this.state.pagination.pageSize}) {
     this.setState({loading:true,});//主查询加载状态
      req({
            url: API_URL,//默认数据查询后台返回JSON
            method: 'get',
            type: 'json',
            data: params,
            success: (result) => {
                      if (result.data.length!=0) {
                          const pagination = this.state.pagination;
                          pagination.total = result.page.pageTotal;//要求后台返回json写法有属性page，该属性包含pageTotal（总条数值）
                              this.setState({
                                      data: result.data,//传入后台获取数据，table组件要求每条查询记录必须拥有字段'key'
                                      urls:result.data[0]._links,
                                      loading:false,//关闭加载状态
                               });
                          this.onSelect(result.data[0]);//联动详细信息，重新调用方法
                    }else{
                         const pagination = this.state.pagination;
                         pagination.total = 0;
                         this.setState({data: [],dataxx: {values: {}},datalist:[],loading:false, zy:false,fz:false,cy:false,});
                    };
            },
            error: (err) =>{alert('api错误');}
    });
  },

    fetch_kzxx() {//详细信息（tab）数据处理方法，不能使用switch，否则会发生未知错误
      this.setState({kzloading:true,})
      let tabkey =this.state.tabkey //获取当前tab标签的key
      if (tabkey==1) {
        req({
        url: this.state.urls.herf_xxzl,//从主查询获取的后台dataProvider路径
        method: 'get',
        type: 'json',
        success: (result) => {
          this.setState({
            dataxx: result.data,
            datalist: result.data.ryjl,//简历的data
          });
        },error:  (err) =>{alert('api错误');}
      });
      }else if (tabkey==2) {
        req({url: this.state.urls.herf_bgjl,method: 'get',type: 'json',
          success: (result) => {
            this.setState({datalist: result.data,kzloading:false, })
          },error: (err) =>{alert('api错误');}
        });
      }else if (tabkey==3) {
         req({url: this.state.urls.herf_zsjl,method: 'get',type: 'json',
          success: (result) => {
            this.setState({datalist: result.data,kzloading:false, })
          },error: (err) =>{alert('api错误');}
        });
      }else if (tabkey==4) {
        req({url: this.state.urls.herf_zjjl,method: 'get',type: 'json',
          success: (result) => {
            this.setState({datalist: result.data,kzloading:false, })
          },error: (err) =>{alert('api错误');}
        });
      }else if (tabkey==5) {
        req({url: this.state.urls.herf_zzjl,method: 'get',type: 'json',
          success: (result) => {
            this.setState({datalist: result.data,kzloading:false, })
          },error: (err) =>{alert('api错误');}
        });
      }else if (tabkey==6) {
         req({ url: this.state.urls.herf_spzt,method: 'get',type: 'json',
        success: (result) => {
            this.setState({ spzt: result.data})//状态是个字符串
        },error: (err) =>{alert('api错误');}
      });
      }else if (tabkey==7) {
        req({url: this.state.urls.herf_njjl,method: 'get',type: 'json',
          success: (result) => {
            this.setState({datalist: result.data,kzloading:false, })
          },error: (err) =>{alert('api错误');}
        });
      };
    },
    handleTableChange(pagination, filters, sorter) {//onChange方法，分页、排序、筛选变化时触发，必须三个参数才能准确获取
          const tablewhere = this.state.where;
          tablewhere.sfield = sorter.field;
          tablewhere.sorder = sorter.order;
          const paper = this.state.pagination;     //把this.state.pagination指向paper，与setState异曲同工，目的是更改单一属性数据
          paper.pageSize = pagination.pageSize;
          paper.current = pagination.current;
          this.fetch_rycx({//调用主查询
                pagenum: pagination.current,
                pagesize: pagination.pageSize,
                where:encodeURIComponent(JSON.stringify(tablewhere)),
          })
  },

    onSelect(record){//主查询记录被选中方法
       this.state.urls=record._links;
       const dm = record.rysfdm;
       this.setState({ zy:false,fz:false,cy:false,});
     if (dm==2) {//判断人员身份代码
      this.setState({fz:true});
        }else if (dm==3) {
           this.setState({cy:true});
        }else{
          this.setState({zy:true});
     };
        this.fetch_kzxx();
    },

    handleSearchToggle(){//点击查询按钮，显示查询form
        this.setState({searchToggle: !this.state.searchToggle});
    }, 

    handleOk(value) {//点击搜索按钮触发事件
      this.setState({where:value});
      const paper = this.state.pagination;     //把当前页重置为1
        paper.current = 1;
       this.fetch_rycx({//调用主查询
        pagenum: 1,
        pagesize: this.state.pagination.pageSize,
        where:encodeURIComponent(JSON.stringify(value)),
      })
  },

  callback(key) {//tab标签变化返回值与方法
      this.state.tabkey=key;
      this.fetch_kzxx();
},

  onClickZy(){//执业税务师快捷查询按钮
      const sfbz={};
      sfbz.rysfdm=1;
      this.onClickSf(sfbz);
  },
  onClickFz(){//非执业税务师快捷查询按钮
      const sfbz={};
      sfbz.rysfdm=2;
      this.onClickSf(sfbz);
  },
  onClickCy(){//从业人员快捷查询按钮
     const sfbz={};
      sfbz.rysfdm=3;
      this.onClickSf(sfbz);
  }, 
  onClickAll(){//全部人员快捷查询按钮
      const sfbz={};
      this.onClickSf(sfbz);
  },
  onClickSf(sf){//快捷查询按钮主方法
     const paper = this.state.pagination;     //把当前页重置为1
     paper.current = 1;
      this.fetch_rycx({//调用主查询
            pagenum: 1,
            pagesize: this.state.pagination.pageSize,
            where:encodeURIComponent(JSON.stringify(sf)),
      });
    },

  componentDidMount() { //REACT提供懒加载方法，懒加载时使用，且方法名必须为componentDidMount
      this.fetch_rycx(); //异步调用后台服务器方法fetch_rycx
    },

    render() {
      
        let toolbar = <ToolBar>
            <Button onClick={this.handleSearchToggle}>
                <Icon type="search"/>查询
                { this.state.searchToggle ? <Icon className="toggle-tip" type="arrow-up"/> :
                  <Icon className="toggle-tip" type="arrow-down"/>}
            </Button>

            <ButtonGroup>
                <Button onClick={this.onClickAll}>全部人员</Button>
                <Button onClick={this.onClickZy}>执业人员</Button>
                <Button onClick={this.onClickFz}>非执业人员</Button>
                <Button onClick={this.onClickCy}>从业人员</Button>
            </ButtonGroup>
        </ToolBar>;

      return <div className="rycx">
<div className="wrap">
   <div className="dataGird">
     <Panel   toolbar={toolbar}>

          {this.state.searchToggle && <SearchForm
          onSubmit={this.handleOk}/>}

              <Table columns={Model.columns} 
              dataSource={this.state.data} 
              pagination={this.state.pagination}
              onChange={this.handleTableChange} 
              onRowClick={this.onSelect}
              loading={this.state.loading}  bordered   />
        </Panel>
    </div>

      <Panel >
          {this.state.zy && <Tabs type="line" onChange={this.callback} >
                <TabPane tab="详细信息" key="1"><CompBaseTable data = {this.state.dataxx}  model ={Model.autoform} bordered striped /><p className="nbjgsz">人员简历：</p><Table columns={Model.ryjl} dataSource={this.state.datalist} bordered  size="small" /></TabPane>
                <TabPane tab="变更记录" key="2"><Table columns={Model.columnsZyrybgjl} dataSource={this.state.datalist} loading={this.state.kzloading}  bordered  size="small" /></TabPane>
                <TabPane tab="转所记录" key="3"><Table columns={Model.columnsZyryzsjl} dataSource={this.state.datalist} loading={this.state.kzloading}  bordered  size="small" /></TabPane>
                <TabPane tab="转籍记录" key="4"><Table columns={Model.columnsZyryzjjl} dataSource={this.state.datalist} loading={this.state.kzloading}  bordered  size="small" /></TabPane>
                <TabPane tab="转执记录" key="5"><Table columns={Model.columnsZyryzzjl} dataSource={this.state.datalist} loading={this.state.kzloading}  bordered  size="small" /></TabPane>
                <TabPane tab="审批状态" key="6"><Row><Col  offspan="8"><p>审批状态：{this.state.spzt} </p></Col></Row></TabPane>
                <TabPane tab="年检记录" key="7"><Table columns={Model.columnsZyrynjjl} dataSource={this.state.datalist} loading={this.state.kzloading}  bordered  size="small" /></TabPane>
          </Tabs>}
          {this.state.fz && <Tabs type="line" onChange={this.callback}>
                <TabPane tab="详细信息" key="1"><CompBaseTable data = {this.state.dataxx}  model ={Model.autoformFzy} bordered striped /><p className="nbjgsz">人员简历：</p><Table columns={Model.ryjl} dataSource={this.state.datalist} bordered  size="small" /></TabPane>
                <TabPane tab="变更记录" key="2"><Table columns={Model.columnsZyrybgjl} dataSource={this.state.datalist} loading={this.state.kzloading}  bordered  size="small" /></TabPane>
                <TabPane tab="注销记录" key="3"><Table columns={Model.columnsFzyryzxjl} dataSource={this.state.datalist} loading={this.state.kzloading}  bordered  size="small" /></TabPane>
                <TabPane tab="转籍记录" key="4"><Table columns={Model.columnsFzyryzjjl} dataSource={this.state.datalist} loading={this.state.kzloading}  bordered  size="small" /></TabPane>
                <TabPane tab="转非记录" key="5"><Table columns={Model.columnsFzyryzfjl} dataSource={this.state.datalist} loading={this.state.kzloading}  bordered  size="small" /></TabPane>
          </Tabs>}
          {this.state.cy && <Tabs type="line" onChange={this.callback}>
                <TabPane tab="详细信息" key="1"><CompBaseTable data = {this.state.dataxx}  model ={Model.autoformCy} bordered striped /><p className="nbjgsz">人员简历：</p><Table columns={Model.ryjl} dataSource={this.state.datalist} bordered  size="small" /></TabPane>
                <TabPane tab="变更记录" key="2"><Table columns={Model.columnsZyrybgjl} dataSource={this.state.datalist} loading={this.state.kzloading}  bordered  size="small" /></TabPane>
          </Tabs>}
                </Panel>
          </div>  
      </div>
        
    }
})
module.exports = rycx;


