import React from 'react'
import {Table,Modal,Row,Col,Button,Icon,Alert} from 'antd'
import Panel from 'component/compPanel'
import {columns,setCol,setDate,expCol} from './model'
import req from 'reqwest';
import auth from 'common/auth'
import  './style.css';
import SearchForm from './searchForm'
import config from 'common/configuration'
import Export from 'component/ComExcelExperss';


const API_URL = config.HOST + config.URI_API_PROJECT + '/jggl/swsbgqktj';
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
            helper: false,
            entity: '',
            detailHide: true,
            mixCol:[],
            mixDate:[]
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

    //提交条件查询
    handleSearchSubmit(value){
        const pager = this.state.pagination;
        pager.current = 1;
        const params = {
            pagenum: 1,
            pagesize: pager.pageSize,
            where: encodeURIComponent(JSON.stringify(value))
        };
        this.setState({pagination: pager, where: value,data:[],mixCol: [],mixDate: [],});
        this.fetchData(params)
    },


    //通过API获取数据
    fetchData(params = {pagenum: 1, pagesize: this.state.pagination.pageSize}){
        this.setState({loading: true});
        req({
            url: API_URL,
            type: 'json',
            method: 'get',
            data: params,
            headers:{'x-auth-token':auth.getToken()}
        }).then(resp=> {
            if (resp.data.length != 0) {
                const p = this.state.pagination;
                p.total = resp.page.pageTotal 
                p.showTotal = total => {
                    return `共 ${resp.page.pageTotal} 条`
                };
                let col=[];
                let date=[];
                let currData={};
                let add,addDate=1;
                const dataColums=resp.data.slice(0,resp.data.length);
                dataColums.forEach(
                    function(currentValue, index, array){
                        if(index==0){
                            col[index]=1;
                            date[index]=1;
                        }else if(currentValue.JGZCH==currData.JGZCH){
                            add+=1;
                            col[index]=0;
                            if(index==array.length-1){
                                col[(array.length-add)]=add;
                            }
                        }else{
                            col[(index-add)]=add;
                            add=1;
                        }

                        if(currentValue.SJ==currData.SJ){
                            addDate+=1;
                            date[index]=0;
                            if(index==array.length-1){
                                date[(array.length-addDate)]=addDate;
                            }
                        }else{
                            date[(index-addDate)]=addDate;
                            addDate=1;
                        }
                        currData=currentValue;
                    }
                );
                this.setState({
                    data: resp.data,
                    pagination: p,
                    loading: false,
                    mixCol:col,
                    mixDate:date
                })
            }else {//空数据处理
                    const pagination = this.state.pagination;
                    pagination.total = 0;
                    this.setState({data: [], mixCol: [],mixDate: [], loading: false,});
                }
        }).fail(err=> {
            this.setState({loading: false,data: [], mixCol: [],mixDate: [],});
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
    getExpHeader(){
        const date=new Date();
        let exportHead="税务师事务所情况表,\n"+"所属时间："+this.state.where.YEAR+
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
            <Export resData={this.state.data} butName="导出" model={expCol} fileName={'税务师事务所情况表'}
                     header={this.getExpHeader()} doAllEx={this.expAll} all />
            <Button onClick={this.handleSearchToggle}>
                <Icon type="search"/>查询
                { this.state.searchToggle ? <Icon className="toggle-tip" type="circle-o-up"/> :
                    <Icon className="toggle-tip" type="circle-o-down"/>}
            </Button>
        </ToolBar>;
        setCol(this.state.mixCol);
        setDate(this.state.mixDate);
        return <div className="jggl-swsbgqktj">
            <div className="wrap">
                <Panel title="事物所变更情况统计" toolbar={toolbar}>
                    {this.state.searchToggle && <SearchForm
                        onSubmit={this.handleSearchSubmit}/>}
                    <div className="h-scroll-table">
                        <Table columns={columns}
                               dataSource={this.state.data}
                               pagination={this.state.pagination}
                               loading={this.state.loading}
                               onChange={this.handleChange}
                               onRowClick={this.handleRowClick} bordered/>
                    </div>
                </Panel>
                
            </div>
        </div>
    }
});

module.exports = lrb;