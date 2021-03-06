import React from 'react'
import {Table,Modal,Row,Col,Button,Icon,Alert} from 'antd'
import Panel from 'component/compPanel'
import {columns} from './model'
import req from 'reqwest';
import SearchForm from './searchForm'
import config from 'common/configuration'


const API_URL = config.HOST + config.URI_API_PROJECT + '/wsbbbcx1';
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
            where: '',
            helper: true,
            entity: '',
            detailHide: true,
            tables:false,
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
            pagenum: 1,
            pagesize: pager.pageSize,
            where: encodeURIComponent(JSON.stringify(value))
        };
        this.setState({pagination: pager, where: value});
        this.fetchData(params)
    },


    //通过API获取数据
    fetchData(params = {pagenum: 1, pagesize: this.state.pagination.pageSize}){
        this.setState({loading: true});
        req({
            url: API_URL,
            type: 'json',
            method: 'get',
            data: params
        }).then(resp=> {
            const p = this.state.pagination;
            p.total = resp.page.pageTotal > 1000 ? 1000 : resp.page.pageTotal;
            p.showTotal = total => {
                return `共 ${resp.page.pageTotal} 条，显示前 ${total} 条`
            };
            this.setState({
                data: resp.data,
                pagination: p,
                loading: false,
                tables:true,
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


    render(){
        //定义工具栏内容
        let toolbar = <ToolBar>

            <ButtonGroup>
                <Button type="primary" onClick={this.handleHelper}><Icon type="question"/></Button>
            </ButtonGroup>
        </ToolBar>;

        //定义提示内容
        let helper = [];
        helper.push(<p key="helper-0">选择报表类型和年度，<b>点击查询按钮</b>，查看该类报表当年度未上报报表事务所及其信息</p>);
        helper.push(<p key="helper-1">系统默认选择当前时间应上报报表年度，默认类型为税务师事务所基本情况统计表（表1)</p>);

        return <div className="cwbb-lrb">
            <div className="wrap">
                {this.state.helper && <Alert message="未上报报表查询帮助"
                                             description={helper}
                                             type="info"
                                             closable
                                             onClose={this.handleHelperClose}/>}

                <Panel title="事务所基本情况表" toolbar={toolbar}>
                    {this.state.searchToggle && <SearchForm
                        onSubmit={this.handleSearchSubmit}/>}
                    <div className="h-scroll-table">
                      {this.state.tables && <Table columns={columns}
                               dataSource={this.state.data}
                               pagination={this.state.pagination}
                               loading={this.state.loading}
                               onChange={this.handleChange} />}
                    </div>
                </Panel>
            </div>
        </div>
    }
});

module.exports = lrb;
  