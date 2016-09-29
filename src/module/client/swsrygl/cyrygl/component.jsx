import React from 'react'
import CompBaseTable from 'component/compBaseTable';
import CompInputBaseTable from 'component/compInputBaseTable';
import config from 'common/configuration'
import Panel from 'component/compPanel'
import './style.css'
import req from 'reqwest'
import auth from 'common/auth'
import Model from './model.js' 
import SearchForm from './searchForm'
import { Link } from 'react-router'
import {  DatePicker,Modal,Form, Input, Select,Table, Icon,Tabs,Button,Row,Col,message,Dropdown,Menu,Spin,Radio,Upload }from 'antd'
// 标签定义
const TabPane = Tabs.TabPane;
const API_URL = config.HOST+config.URI_API_PROJECT + '/swsrycx/cyry';
const API_URL_BG = config.HOST+config.URI_API_PROJECT + '/spapi/fspsq/cyrybgsq';
const API_URL_ZFZY= config.HOST+config.URI_API_PROJECT + '/spapi/fspsq/zyzfzysq';
const API_URL_ZX = config.HOST+config.URI_API_PROJECT + '/spapi/fspsq/zyzxsq';
const API_URL_ZJ = config.HOST+config.URI_API_PROJECT + '/spapi/fspsq/zyzjsq';
const API_URL_FS = config.HOST+config.URI_API_PROJECT + '/spapi/fspsq/zyzrfs';
const API_URL_ZC = config.HOST+config.URI_API_PROJECT + '/spapi/spsq/zyzcsq';
const API_URL_ZS = config.HOST+config.URI_API_PROJECT + '/spapi/spsq/zyzssq';
const API_URL_GX = config.HOST + config.URI_API_PROJECT + '/rygl/ryxpgx/';
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
            searchToggle: false,
            where:{},
            czAll:0,
            activeKey:"",
            ryid:"",
            xpPath:"",

      };
    },

  fetch_rycx(params = {pagenum: this.state.pagination.current, pagesize: this.state.pagination.pageSize}) {
     this.setState({loading:true,});//主查询加载状态
      req({
            url: API_URL,//默认数据查询后台返回JSON
            method: 'get',
            type: 'json',
            data: params,
            headers:{'x-auth-token':auth.getToken()},
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
                    }else{//空数据处理
                         const pagination = this.state.pagination;
                         pagination.total = 0;
                         this.setState({data: [],dataxx: {values: {}},datalist:[],loading:false, });
                    };
            },
            error: (err) =>{alert('api错误');}
    });
  },

    fetch_kzxx(tabkey) {//详细信息（tab）数据处理方法，不能使用switch，否则会发生未知错误
      this.setState({sloading: true, })
      if (tabkey==13) {
        req({
        url: this.state.urls.herf_xxzl,//从主查询获取的后台dataProvider路径
        method: 'get',
        type: 'json',
        headers:{'x-auth-token':auth.getToken()},
        success: (result) => {
          this.setState({
            dataxx: result.data,
            datalist: result.data.ryjl,//简历的data
            sloading: false
          });
        },error:  (err) =>{alert('api错误');}
      });
      }else if (tabkey==14) {
        req({url: this.state.urls.herf_bgjl,method: 'get',type: 'json',
          headers:{'x-auth-token':auth.getToken()},
          success: (result) => {
            if (result.data.length!=0) {
            this.setState({datalist: result.data,sloading: false})
            }else{
               this.setState({datalist:[],sloading: false})
             }
          },error: (err) =>{alert('api错误');this.setState({datalist:[],sloading: false});}
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
          });
  },

    onSelect(record){//主查询记录被选中方法
       this.state.urls=record._links;
        this.setState({activeKey:13,ryid:record.ryid});
       this.callback(13);
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
    this.setState({activeKey:key});
      this.fetch_kzxx(key);
    },
    handleCZ(lx,e){//操作入口
    e.preventDefault();
    this.setState({czAll:lx});
    
    },
    handleReturn(){//返回按钮
    this.setState({czAll:0,valueFS: ''});
    this.callback(13);
},
    handleBGSubmit(value){
        this.setState({bgLoading:true});
            var ls = value;
            let squrls="";
            switch(this.state.czAll){
                case 1: squrls=API_URL_BG;ls.xppath=(!this.state.xpPath?this.state.dataxx.xpian:this.state.xpPath);break;
                case 2: squrls=API_URL_ZFZY;break;
                case 3: squrls=API_URL_ZX;break;
                case 4: squrls=API_URL_ZJ;break;
                case 6: squrls=API_URL_ZS;break;
            }
            ls.ryid=this.state.ryid;
             req({
                url: squrls,
                type: 'json',
                method: 'put',
                data: JSON.stringify(ls),
                contentType: 'application/json',
                headers:{'x-auth-token':auth.getToken()},
            }).then(resp=> {
                Modal.success({
                    title: '提交成功',
                    content: (
                        <div>
                            <p>提交成功</p>
                        </div>  ),
                    onOk() {
                              window.location.reload();
                            },
                });
                 this.setState({bgLoading:false});
            }).fail(err=> {
                Modal.error({
                    title: '数据获取错误',
                    content: (
                        <div>
                        {this.state.czAll==6?<p>请检查事务所名称和网络情况</p>:
                          <p>无法从服务器返回数据，需检查应用服务工作情况</p>}
                            <p>Status: {err.status}</p>
                        </div>  )
                });
                this.setState({bgLoading:false});
            })
        },
    columRender(text, row, index) {
          var that = this;
          if (row.ryztdm==3) {
                return <span>
                          <a >重新申请备案</a>
                        </span>
            };
          const menu = (
                    <Menu >
                      <Menu.Item key="0">
                        <a onClick={that.handleCZ.bind(this,4)}>转籍出省</a>
                      </Menu.Item>
                      <Menu.Item key="1">
                        <a onClick={that.handleCZ.bind(this,5)}>转入分所</a>
                      </Menu.Item>
                      <Menu.Divider />
                      <Menu.Item key="2">
                        <a onClick={that.handleCZ.bind(this,6)}>转所</a>
                      </Menu.Item>
                      <Menu.Item key="3">
                        <a onClick={that.handleCZ.bind(this,7)}>转出</a>
                      </Menu.Item>
                    </Menu>
                  );
          return  <span>
                        <a onClick={that.handleCZ.bind(this,1)}>信息变更</a>
                        <span className="ant-divider" ></span>
                        <a onClick={that.handleCZ.bind(this,2)}>转执业</a>
                        <span className="ant-divider"></span>
                        <a onClick={that.handleCZ.bind(this,3)}>注销备案</a>
                        <span className="ant-divider"></span>
                        <Dropdown overlay={menu} trigger={['click']}>
                        <a  className="ant-dropdown-link">
                          人员调动 <Icon type="down" />
                        </a></Dropdown>
                      </span>
    },

  componentDidMount() { //REACT提供懒加载方法，懒加载时使用，且方法名必须为componentDidMount
      this.fetch_rycx(); //异步调用后台服务器方法fetch_rycx
    },

    render() {
      const columns = [{ //设定列
                  title: '序号', //设定该列名称
                  dataIndex: 'xh', //设定该列对应后台字段名
                  key: 'xh', //列key，必须设置，建议与字段名相同
                }, {
                  title: '人员名称',
                  dataIndex: 'xm',
                  key: 'xm',
                  sorter: true, //是否可以排序，需后台写排序方法
                }, {
                  title: '性别',
                  dataIndex: 'xb',
                  key: 'xb',
                },{
                  title: '身份证号码',
                  dataIndex: 'sfzh',
                  key: 'sfzh',
                },  {
                  title: '城市',
                  dataIndex: 'cs',
                  key: 'cs',
                }, {
                  title: '学历',
                  dataIndex: 'xl',
                  key: 'xl',
                  sorter: true,
                }, {
                  title: '职务（职称）',
                  dataIndex: 'zw',
                  key: 'zw',
                  sorter: true,
                }, {
              title: '操作',
              key: 'operation',
              render:this.columRender,
              width:260,
            }];
        var that =this;
        const props = {
            showUploadList: false,
            name: 'file',
            action: '/api/upload',
            headers: {'x-auth-token': auth.getToken()},
            onChange(info) {
                if (info.file.status == 'uploading') {
                    that.setState({sloading: true});
                }
                if (info.file.status == 'done') {
                    that.setState({sloading: false,xpPath:info.file.response.text});
                    Modal.success({
                        title: '上传成功',
                    });
                } else if (info.file.status == 'error') {
                    that.setState({sloading: false});
                    Modal.error({
                        title: '上传失败',
                        content: (<p>{info.file.name}上传失败</p>)
                    });
                }
            },
            beforeUpload(file) {
                if (file.type.indexOf('image')<0) {
                    message.error('只能上传图片类型文件');
                    return false;
                }
                if (file.size>1048576) {
                    message.error('文件大小不能超过1M');
                    return false;
                }
                return true;
            }
        };
         let toolbar = <ToolBar>
                <Button type="ghost" onClick={this.handleCZ.bind(this,8)}>添加从业人员</Button>
        </ToolBar>; 
        let toolbar2 = <ToolBar>
                <Button type="ghost" onClick={this.handleReturn}>返回</Button>
        </ToolBar>;   
      return <div className="rycx">
            <div className="wrap">
               <div className="dataGird">
                 <Panel title="从业人员管理" toolbar={toolbar} >

                      {this.state.searchToggle && <SearchForm onSubmit={this.handleOk}/>}

                          <Table columns={columns} 
                          dataSource={this.state.data} 
                          pagination={this.state.pagination}
                          onChange={this.handleTableChange} 
                          onRowClick={this.onSelect}
                          loading={this.state.loading}  bordered   />
                    </Panel>
                </div>

                  <Panel >
                      {this.state.czAll==0 &&<Spin spinning={this.state.sloading}><Panel >
                               <Tabs type="line" activeKey={this.state.activeKey} onChange={this.callback} key="A">
                                    
                                    <TabPane tab="详细信息" key="13" >
                                    <div style={{float:"right",width:"143px",height:"175px",backgroundColor: "#fff",border: "1px solid #e9e9e9"}}>
                                            {!this.state.dataxx.xpian? <p>未上传相片</p> : <img src={this.state.dataxx.xpian} style={{padding:"5px"}}/>}
                                      </div>
                                      <CompBaseTable data = {this.state.dataxx}  model ={Model.autoformCy} bordered striped />
                                    <p className="nbjgsz">人员简历：</p>
                                    <Table columns={Model.ryjl.rows} dataSource={this.state.datalist} bordered  size="small" pagination={false} />
                                    </TabPane>
                                    <TabPane tab="变更记录" key="14"><Table columns={Model.columnsZyrybgjl} dataSource={this.state.datalist} bordered  size="small" /></TabPane>
                              </Tabs>
                                    </Panel></Spin>}
                    {this.state.czAll==1 &&<Panel title="信息变更" toolbar={toolbar2}>
                                    <Spin spinning={this.state.sloading}>
                                    <div style={{float:"right",}}>
                                    <div style={{width:"143px",height:"175px",backgroundColor: "#fff",border: "1px solid #e9e9e9"}}>
                                            {!this.state.xpPath?!this.state.dataxx.xpian? <p>未上传相片</p> :
                                             <img src={this.state.dataxx.xpian} style={{padding:"5px"}}/>:
                                             <img src={this.state.xpPath} style={{padding:"5px"}}/> }
                                      </div><Upload {...props}><Button >更改照片</Button></Upload><p>（文件大小不能超过1M）</p></div>
                                    <CompInputBaseTable data={this.state.dataxx}  model={Model.autoformCy2} bordered striped showConfirm bglx 
                                     onSubmit={this.handleBGSubmit}  disabled={this.state.onSubmitZT} nbsj={this.state.datalist}
                                      submitLoading={this.state.bgLoading} title='您是否确认要提交以上变更信息？'  nbjgsz={Model.ryjl} nbTitle="人员简历："
                                      content='变更后数据将更新' />
                                     </Spin></Panel>}
                    {this.state.czAll==8 &&<Panel title="添加从业人员" toolbar={toolbar2}>
                                    <Spin spinning={this.state.sloading}>
                                    <div style={{float:"right",}}>
                                    <div style={{width:"143px",height:"175px",backgroundColor: "#fff",border: "1px solid #e9e9e9"}}>
                                            {!this.state.xpPath? <p>未上传相片</p> : <img src={this.state.xpPath} style={{padding:"5px"}}/>}
                                      </div><Upload {...props}><Button >更改照片</Button></Upload><p>（文件大小不能超过1M）</p></div>
                                    <CompInputBaseTable data={[]}  model={Model.autoformCy2} bordered striped showConfirm  
                                     onSubmit={this.handleBGSubmit} nbjgsz={Model.ryjl} nbTitle="人员简历："
                                      submitLoading={this.state.bgLoading} title='您是否确认要提交以上人员信息？'  
                                      content='提交后该人员将在管理中心备案' />
                                     </Spin></Panel>}
                            </Panel>
                      </div>  
                  </div>
        
    }
})
module.exports = rycx;

