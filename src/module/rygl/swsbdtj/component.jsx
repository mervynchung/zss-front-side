import React from 'react'
import {Table,Modal,Row,Col,Button,Icon,Alert} from 'antd'
import Panel from 'component/compPanel'
import {expCol} from './model'
import req from 'reqwest';
import auth from 'common/auth'
import SearchForm from './searchForm'
import config from 'common/configuration'
import Export from 'component/ComExcelExperss';


const API_URL = config.HOST + config.URI_API_PROJECT + '/rygl/swsbdtj';
const ToolBar = Panel.ToolBar;
const ButtonGroup = Button.Group;


const lrb = React.createClass({
    //初始化state
    getInitialState(){
        return {
            data: [],
            pagination: {
                current: 1,
                showSizeChanger: true,
                pageSize: 5,
                showQuickJumper: true,
                pageSizeOptions: ['5', '10', '20']
                 },
            searchToggle: true,
            where: {YEAR:new Date().getFullYear()},
            entity: '',
            detailHide: true
        }
    },

    //改变页码
    handleChange(pagination, filters, sorter){
        const pager = this.state.pagination;
        pager.current = pagination.current;
        pager.pageSize = pagination.pageSize;
        this.setState({pagination: pager});

        this.fetchData({
            pagenum: pager.current,
            pagesize: pager.pageSize,
            where: encodeURIComponent(JSON.stringify(this.state.where))
        })
    },

    //查询按钮
    handleSearchToggle(){
        this.setState({searchToggle: !this.state.searchToggle});
    },

    //刷新按钮
    handleRefresh(){
        const pager = this.state.pagination;
        pager.current = 1;
        this.setState({pagination: pager, where: ''});
        this.fetchData();
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
        this.setState({pagination: pager, where: value});
        this.fetchData(params)
    },

  

    //通过API获取数据
    fetchData(params = {pagenum: 1,
              pagesize: this.state.pagination.pageSize,
              where: encodeURIComponent(JSON.stringify(this.state.where))
            }){
        this.setState({loading: true});
        req({
            url: API_URL,
            type: 'json',
            method: 'get',
            data: params,
            headers:{'x-auth-token':auth.getToken()}
        }).then(resp=> {
            const p = this.state.pagination;
            p.total = resp.page.pageTotal > 1000 ? 1000 : resp.page.pageTotal;
            p.showTotal = total => {
                return `共 ${resp.page.pageTotal} 条，显示前 ${total} 条`
            };
            this.setState({
                data: resp.data,
                pagination: p,
                loading: false
            })
        }).fail(err=> {
            this.setState({loading: false});
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
    getExpHeader(){
        const date=new Date();
        let exportHead="注册税务师情况表,\n"+"所属时间："+this.state.where.YEAR+
                        "年"+(!this.state.where.MON?'':this.state.where.MON+"月份")+",,,编制地区(单位)：广东省注册税务师管理中心,,,编制时间："
                        +date.getFullYear()+"年"+(date.getMonth()+1)+"月"+date.getDate()+"日"+"\n\n";
        return exportHead;
    },
   async expAll(){
        let data=null;
         await req({
            url: API_URL,
            type: 'json',
            method: 'get',
            data: {
                    pagenum: 1,
                    pagesize: 10000,
                    where: encodeURIComponent(JSON.stringify(this.state.where))
                },
            headers:{'x-auth-token':auth.getToken()}
        }).then(resp=>{
            data=resp.data;
        })
        return data;
    },

    render(){
        //定义工具栏内容
        
        let toolbar = <ToolBar>
            <Export resData={this.state.data} butName="导出" model={expCol} fileName={'注册税务师情况表'}
                     header={this.getExpHeader()} doAllEx={this.expAll} all />
            <Button onClick={this.handleSearchToggle}>
                <Icon type="search"/>查询
                { this.state.searchToggle ? <Icon className="toggle-tip" type="circle-o-up"/> :
                    <Icon className="toggle-tip" type="circle-o-down"/>}
            </Button>

            <ButtonGroup>
                <Button type="primary" onClick={this.handleRefresh}><Icon type="reload"/></Button>
            </ButtonGroup>
        </ToolBar>;


        return <div className="snbdjil">
            <div className="wrap">
                <Panel title="注册税务师情况表" toolbar={toolbar}>
                    {this.state.searchToggle && <SearchForm
                        onSubmit={this.handleSearchSubmit}/>}
                    <div className="h-scroll-table">
                        <Table columns={expCol}
                               dataSource={this.state.data}
                               pagination={this.state.pagination}
                               loading={this.state.loading}
                               onChange={this.handleChange}
                               onRowClick={this.handleRowClick}/>
                    </div>
                </Panel>
            </div>
        </div>
    }
});

module.exports = lrb;