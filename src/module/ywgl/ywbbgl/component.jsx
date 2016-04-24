import React from 'react'
import {Table,Modal,Row,Col,Button,Icon,Alert} from 'antd'
import CompPageHead from 'component/CompPageHead'
import Panel from 'component/compPanel'
import model from './model'
import req from 'reqwest';
import SearchForm from './searchForm'
import config from 'common/configuration'

const API_URL = config.HOST + config.URI_API_PROJECT + '/ywbb';
const ToolBar = Panel.ToolBar;
const ButtonGroup = Button.Group;


const xygl = React.createClass({
    //初始化state
    getInitialState(){
        return {
            data: [],
            pagination: {
                current: 1,
                showSizeChanger: true,
                pageSize: 5,
                showQuickJumper: true,
                pageSizeOptions: ['5', '10', '20'],
                showTotal (total) {
                    return `共 ${total} 条`
                }
            },
            searchToggle: false,
            where: '',
            helper: false
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
        this.setState({pagination:pager,where: value});
        this.fetchData(params);
        this.setState({searchToggle: false})
    },

    //点击某行
    handleRowClick(record,value){
        console.log('record',record)
        console.log('value',value)

    },

    //通过API获取数据
    fetchData(params = {page: 1, pageSize: this.state.pagination.pageSize}){
        this.setState({loading: true});
        req({
            url: API_URL,
            type: 'json',
            method: 'get',
            data: params
        }).then(resp=> {
            const p = this.state.pagination;
            p.total = resp.total;
            this.setState({data: resp.data, pagination: p, loading: false})
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

    render(){
        let toolbar = <ToolBar>
            <Button onClick={this.handleSearchToggle}>
                <Icon type="search"/>查询
                { this.state.searchToggle ? <Icon className="toggle-tip" type="circle-o-up"/> :
                  <Icon className="toggle-tip" type="circle-o-down"/>}
            </Button>

            <ButtonGroup>
                <Button type="primary" onClick={this.handleHelper}><Icon type="question"/></Button>
                <Button type="primary" onClick={this.handleRefresh}><Icon type="reload"/></Button>
            </ButtonGroup>

        </ToolBar>;

        let helper = [];
        helper.push(<p key="helper-0">本功能主要提供本年度业务备案查询</p>);
        helper.push(<p key="helper-1">本功能主要提供本年度业务备案查询2</p>);

        return <div className="xygl">
            <div className="wrap">
                {this.state.helper && <Alert message="业务报备使用帮助"
                                             description={helper}
                                             type="info"
                                             closable
                                             onClose={this.handleHelperClose}/>}

                <Panel title="业务备案数据检索" toolbar={toolbar}>
                    {this.state.searchToggle && <SearchForm
                      onSubmit={this.handleSearchSubmit}/>}
                    <div className="h-scroll-table">
                        <Table columns={model}
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

module.exports = xygl;