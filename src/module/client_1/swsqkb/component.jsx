import React from 'react'
import {Table, Modal, Row, Col, Button, Icon, Alert} from 'antd'
import CompPageHead from 'component/CompPageHead'
import Panel from 'component/compPanel'
import {handleRowButton, columns, entityModel} from './model'
import req from 'reqwest';
import SearchForm from './searchForm'
import Add from './Add'
import Update from './Update'
import auth from 'common/auth'
import config from 'common/configuration'
import BaseTable from 'component/compBaseTable'
import {entityFormat} from 'common/utils'
import DetailBox from './detailbox.jsx'


const API_URL = config.HOST + config.URI_API_PROJECT + '/add/swsjbb';
const URL = config.HOST + config.URI_API_PROJECT + '/addswsjbb';
const URL_ok = config.HOST + config.URI_API_PROJECT + '/add/swsjbbok';

const ToolBar = Panel.ToolBar;
const ButtonGroup = Button.Group;




const swsjbb = React.createClass({
    //初始化state
    getInitialState() {
        return {
            data: [],
            datatwo:[],
             one: [],
            two: [],
            pagination: {
                current: 1,
                showSizeChanger: true,
                pageSize: 5,
                showQuickJumper: true,
                pageSizeOptions: ['5', '10', '20'],
                alert: ''

            },
            searchToggle: false,
            detailViewToggle: false,
            where: '',
            helper: false,
            entity: '',
           checkTJ:[{}],
          jg_id:{},
           usid:{},
            detailHide: true,
            add: true,
            update: true,
            
        }
    },

    //改变页码
        handleChange(pagination, filters, sorter) {
        const pager = this.state.pagination;
        pager.current = pagination.current;
        pager.pageSize = pagination.pageSize;
        this.setState({ pagination: pager, detailHide: true });

        this.fetchDatanew({
            page: pager.current,
            pageSize: pager.pageSize,
            where: encodeURIComponent(JSON.stringify(this.state.where))
        }).then(resp=>{                    
            const p = this.state.pagination;
            p.total = resp.one.total > 1000 ? 1000 : resp.one.total;
            p.showTotal = total => {
                return `共 ${resp.one.total} 条`                
            };
          this.setState({
                data: resp.one.data,
                pagination: p,
                loading: false,                    
        })     
        }) ;
    },

    //查询按钮
    handleSearchToggle() {
        this.setState({ searchToggle: !this.state.searchToggle, detailHide: true ,});
    },


    //刷新按钮
    handleRefresh() {
        const pager = this.state.pagination;
        pager.current = 1;
        this.setState({ pagination: pager, where: '', detailHide: true,update:true });
        this.fetchDatanew().then(resp=>{                    
            const p = this.state.pagination;
            p.total = resp.one.total > 1000 ? 1000 : resp.one.total;
            p.showTotal = total => {
                return `共 ${resp.one.total} 条`                
            };
          this.setState({
                data: resp.one.data,
                pagination: p,
                loading: false,                    
        })     
        }) ;
    },

    //帮助按钮
    handleHelper() {
        this.setState({ helper: !this.state.helper ,})
    },
    //打开添加表
    handleAdd() {
        this.setState({ add: !this.state.add, detailHide: true ,update: true})
       
    },
    //打开修改表
    handleUpdate() {
        this.setState({update: !this.state.update,detailHide: true});
        
    },
   

    //手动关闭帮助提示
    handleHelperClose() {
        this.setState({ helper: false })
    },

    //点击提交
    handleOk(e) {
       
        let vv = e;
        vv.ztbj = '1';          
        this.fetchHandle(vv);
            this.handleAdd();   
    },
    fetchHandle(value) {
        req({
            url: URL,
            type: 'json',
            method: 'post',
            data: JSON.stringify(value),
            headers:{'x-auth-token':auth.getToken()},
            contentType: 'application/json',
        }).then(resp => {
            Modal.success({
                title: '操作成功',
                content: (
                    <div>
                        <p>操作成功！</p>
                    </div>),      
            });
        }).fail(err => {
            message.error('Status Code:' + err.status + '  api错误 ')
        })
    },
 
    //点击保存
    handleSubmit(value) {
        let vv = value;
        vv.ztbj = '0';
        this.fetchHandle(vv); 
        this.handleAdd();
    },
    
     //点击编辑提交
    handleOk1(e) {
       let vv = e;
        vv.ztbj = '1'
        this.fetchHandle1(vv);
        this.handleUpdate();
      
    },
    fetchHandle1(value) {     
        req({
            url: URL + '/' + value.id,
            type: 'json',
            method: 'put',
            data: JSON.stringify(value),
            headers:{'x-auth-token':auth.getToken()},
            contentType: 'application/json',
        }).then(resp => {
            Modal.success({
                title: '操作成功',
                content: (
                    <div>
                        <p>操作成功！</p>
                    </div>)
            });
            
        }).fail(err => {
            message.error('Status Code:' + err.status + '  api错误 ')
        })
    },
 
    //点击编辑保存
    handleSubmit1(value) {
        let vv = value;
        vv.ztbj = '0';
        this.fetchHandle1(vv);
        this.handleUpdate();
       
    },

    //提交条件查询
    
    handleSearchSubmit(value) {
        const pager = this.state.pagination;
        pager.current = 1;
        const params = {
            page: 1,
            pageSize: pager.pageSize,
            where: encodeURIComponent(JSON.stringify(value))
        };
        this.setState({ pagination: pager, where: value });
        this.fetchDatanew(params).then(resp=>{                    
            const p = this.state.pagination;
            p.total = resp.one.total > 1000 ? 1000 : resp.one.total;
            p.showTotal = total => {
                return `共 ${resp.one.total} 条`                
            };
          this.setState({
                data: resp.one.data,
                pagination: p,
                loading: false,                    
        })     
        }) ;
        this.setState({ searchToggle: false })
    },


    //点击某行
    fetchData2(record) {
        
        req({
            url: API_URL + '/' + record.id,
            type: 'json',
            method: 'get'
        }).then(resp => {
            let entity = entityFormat(resp, entityModel);
            this.setState({ entity: entity, detailHide: false });
            
        }).fail(err => {
            Modal.error({
                title: '数据获取错误',
                content: (
                    <div>
                        <p>无法从服务器返回数据，需检查应用服务工作情况</p>
                        <p>Status: {err.status}</p>
                    </div>)
            });
        })
    },  
    //明细表关闭
    handleDetailClose() {
        this.setState({ detailHide: true })
    },


    //通过API获取数据
    fetchData(params = { page: 1, pageSize: this.state.pagination.pageSize }) {
       
        return req({
            url: API_URL,
            type: 'json',
            method: 'get',
            data: params,
            headers:{'x-auth-token':auth.getToken()},
           contentType:'application/json',
           
        })/*.then(resp => {
            const p = this.state.pagination;
            p.total = resp.total > 1000 ? 1000 : resp.total;
            p.showTotal = total => {
                return `共 ${resp.total} 条`
                
            };
            this.setState({
                data: resp.data,
                pagination: p,
                loading: false
            })
        }).fail(err => {
            this.setState({ loading: false });
            Modal.error({
                title: '数据获取错误',
                content: (
                    <div>
                        <p>无法从服务器返回数据，需检查应用服务工作情况</p>
                        <p>Status: {err.status}</p>
                    </div>)
            });
        })*/
    },
        //判断是否可填
    fetchOK(){
        
        return req({
            url: URL_ok + '/' + auth.getJgid(),
            type: 'json',
            method: 'get',
             headers:{'x-auth-token':auth.getToken()},
        }
        )
          
    },    
 
    //异步获取多条数据
    async fetchDatanew(params = { page: 1, pageSize: this.state.pagination.pageSize }){     
        let [one, two] = await Promise.all([this.fetchData(params),this.fetchOK()]);     
        return {one: one, two: two}
    },

    componentDidMount() {
        this.setState({ loading: true });       
        this.fetchDatanew().then(resp=>{ 
            // console.log("机构ID",auth.getJgid()),  
            // console.log("数据",resp)                 
            const p = this.state.pagination;
            p.total = resp.one.total > 1000 ? 1000 : resp.one.total;
            p.showTotal = total => {
                return `共 ${resp.one.total} 条`
                
            };
            this.setState({
                data: resp.one.data,
                pagination: p,
                loading: false,
                checkTJ:resp.two.upyear,
                usid:resp.one,
                jg_id:resp.one,  
        })
        }) 
        },
    
    
testee(text,record,index){

    var that = this;
function ddd() {
   
     req({
            url: API_URL + '/' + record.id,
            type: 'json',
            method: 'get'
        }).then(resp => {
          
         
            that.setState({update: !that.state.update,detailHide: true,entity:resp,});
           
        }).fail(err => {
            Modal.error({
                title: '数据获取错误',
                content: (
                    <div>
                        <p>无法从服务器返回数据，需检查应用服务工作情况</p>
                        <p>Status: {err.status}</p>
                    </div>)
            });
        })
   
}
function look() {
    
     that.fetchData2(record)
     that.setState({update: true})
}
if(record.ZTBJ=="通过" || record.ZTBJ=="提交"){
     return ( <span> 
    <Button disabled size="small" onClick={ddd} >
    
    <Icon type="edit" />编辑
  </Button>
  <Button size="small" onClick={look} >
    <Icon type="book" />查看
  </Button>
  </span>
  )
}else{
     return ( <span> 
    <Button   size="small" onClick={ddd} >
    
    <Icon type="edit" />编辑
  </Button>
  <Button size="small" onClick={look} >
    <Icon type="book" />查看
  </Button>
  </span>
  )
}
   
},


    render() {
const column1=[
        {title: '序号', dataIndex: 'key', key: 'key'},  
        {title: '年度', dataIndex: 'nd', key: 'nd'},       
        {title: '法人', dataIndex: 'FRDBXM', key: 'FRDBXM'},  
        {title: '组织形式', dataIndex: 'JGXZ', key: 'JGXZ'}, 
        {title: '股东人数', dataIndex: 'CZRS', key: 'CZRS'},  
        {title: '人员人数', dataIndex: 'RYZS', key: 'RYZS'}, 
        {title: '执业人数', dataIndex: 'ZYZCSWSRS', key: 'ZYZCSWSRS'}, 
        {title: '注册资金（单位：万元）', dataIndex: 'ZCZJ', key: 'ZCZJ'},           
        {title: '状态', key: 'ZTBJ', dataIndex: 'ZTBJ'},
       
        {
        title: '操作',
    key: 'operation',
     render:this.testee,
} ];
        //定义工具栏内容
            var checkTJ = '';
            var d = new Date();
            var str = (d.getFullYear()-1)
 
              if(this.state.checkTJ.length<=0)
            {     checkTJ=true;}
           else  if (this.state.checkTJ[0].ND==str && this.state.checkTJ[0].TIMEVALUE=="1"){ 
               checkTJ=false;}           
          else {
              checkTJ=true;
          }; 
          
        let toolbar = <ToolBar>
            { this.state.add && <Button onClick={this.handleSearchToggle}>
                <Icon type="search"/>查询
                { this.state.searchToggle ? <Icon className="toggle-tip" type="circle-o-up"/> :
                    <Icon className="toggle-tip" type="circle-o-down"/>}
            </Button>}

            {  this.state.add && <ButtonGroup>
                <Button type="primary" onClick={this.handleHelper}><Icon type="question"/></Button>
                <Button type="primary" onClick={this.handleRefresh}><Icon type="reload"/></Button>
            </ButtonGroup>
            }

       <Button disabled={checkTJ} onClick={this.handleAdd}>
                <Icon type="primary"  />{this.state.add ? "添加" : "返回"}
                { this.state.add ? <Icon className="toggle-tip" type="plus-square"  /> :
                    <Icon className="toggle-tip" type="arrow-left"/>}
            </Button>

        </ToolBar>;

        //定义提示内容
        let helper = [];
        helper.push(<p key="helper-0">点击查询结果查看事务所基本情况表明细</p>);
        helper.push(<p key="helper-1">也可以添加修改和提交事务所基本情况表</p>);
        helper.push(<p key="helper-2">如果不能添加则要添加财务报表，否则不能添加</p>);
        return <div className="swsjbb">
            <div className="wrap">
                {this.state.helper && <Alert message="事务所基本情况表检索查询帮助"
                    description={helper}
                    type="info"
                    closable
                    onClose={this.handleHelperClose}/>}


                <Panel title="事务所基本情况表" toolbar={toolbar}>
                    {this.state.searchToggle && <SearchForm
                        onSubmit={this.handleSearchSubmit}/>}
                    { this.state.add &&  <div className="h-scroll-table">

                        <Table columns={column1}
                            dataSource={this.state.data}
                            pagination={this.state.pagination}
                            loading={this.state.loading}
                            onChange={this.handleChange}
                            onRowClick={this.handleRowClick}/>
                    </div>}
                    {!this.state.add && <Add onSubmit={this.handleSubmit} handleOk={this.handleOk} data2={this.state.checkTJ} />}
                    {!this.state.update && <Panel title="修改"  onClose={this.handleDetailClose}
                    closable> 
                    <Update onSubmit={this.handleSubmit1} handleOk={this.handleOk1} data1={this.state.entity} />
                    </Panel>}
                </Panel>
                {this.state.detailHide ? null : <Panel title="事务所基本情况表明细"
                    onClose={this.handleDetailClose}
                    closable>
                    <DetailBox data={this.state.entity}/>
                </Panel>}
            </div>
        </div>
    }
});

module.exports = swsjbb;