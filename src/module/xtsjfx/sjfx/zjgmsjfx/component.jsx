import React from 'react'
import {Table,Modal,Row,Col,Button,Icon,Alert} from 'antd'
import Panel from 'component/compPanel'
import {columns,entityModel} from './model'
import req from 'common/request';
import config from 'common/configuration'
import {entityFormat} from 'common/utils'



const API_URL = config.HOST + config.URI_API_PROJECT + '/zjgmsjfx';
const ToolBar = Panel.ToolBar;
const ButtonGroup = Button.Group;


const zjgmsjfx = React.createClass({
    //初始化state
    getInitialState(){
        return {
            data: [],
           
           pagination: {
                current: 1,
                showSizeChanger: true,
               pageSize: 25,
                showQuickJumper: true,
                pageSizeOptions: ['5', '10', '20']

            },
           
            detailViewToggle: false,
            where: '',
            helper: false,
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
            page: pager.current,
            pageSize: pager.pageSize,
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

    //帮助按钮
    handleHelper(){
        this.setState({helper: !this.state.helper})
    },
    //手动关闭帮助提示
    handleHelperClose(){
        this.setState({helper: false})
    },

    //提交条件查询
    handleSearchSubmit(value){
        const pager = this.state.pagination;
        pager.current = 1;
        const params = {
            page: 1,
            pageSize: pager.pageSize,
            where: encodeURIComponent(JSON.stringify(value))
        };
        this.setState({pagination: pager, where: value});
        this.fetchData(params);
        this.setState({searchToggle: false})
    },

    //点击某行
    handleRowClick(record){
        req({
            url: API_URL + '/' + record.id,
            type: 'json',
            method: 'get'
        }).then(resp=> {
            let entity = entityFormat(resp,entityModel);
            this.setState({entity: entity,detailHide:false});
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
    //明细表关闭
    handleDetailClose(){
        this.setState({detailHide: true})
    },

    //通过API获取数据
    fetchData(params = {page: 1,pageSize:this.state.pagination.pageSize}){
        this.setState({loading: true});
        req({
            url: API_URL,
            method: 'get',
            data: params,
        }).then(resp=> {
            this.setState({
                data: resp.data,
               // pagination: p,
                loading: false
            })
        }).catch(err=> {
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

    render(){
        

        
        return <div className="jgsjfx-zjgmsjfx">
            <div className="wrap">
                
                <Panel title="资金规模数据分析" >
                  
                    <div className="h-scroll-table">
                        <Table columns={columns}
                               dataSource={this.state.data}
                               
                               pagination={!this.state.pagination}
                               rowKey={resp=>resp.ID}
                               loading={this.state.loading}
                               onChange={this.handleChange}
                               />
                    </div>
                </Panel>
                
            </div>
        </div>
    }
});

module.exports = zjgmsjfx;
