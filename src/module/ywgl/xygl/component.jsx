import React from 'react'
import {Table,Modal} from 'antd'
import CompPageHead from 'component/CompPageHead'
import Panel from 'component/compPanel'
import model from './model'
import req from 'reqwest';
import CompToolBar from 'component/compToolBar'
import SearchForm from 'component/compSearch'
import config from 'common/configuration'

const API_URL = config.URI_API_PREFIX + config.URI_API_PROJECT + 'xygl';

const xygl = React.createClass({
    getInitialState(){
        return {
            data: [],
            pagination: {
                showSizeChanger: true,
                defaultPageSize: 8,
                showQuickJumper: true,
                pageSizeOptions:[8,10,30,50],
                showTotal (total) {
                    return `共 ${total} 条`
                }
            },
        }
    },
    handleClick(){
        this.setState({
            visible: true
        })
    },
    handleCancel(){
        this.setState({
            visible: false
        })
    },
    handleChange(pagination, filters, sorter){
        const pager = this.state.pagination;
        pager.current = pagination.current;
        pager.pageSize = pagination.pageSize;
        this.setState({pagination: pager})
        this.fetchData({
            page: pagination.current,
            pageSize: pagination.pageSize
        })
    },
    fetchData(params = {page: 1, pageSize: this.state.pagination.defaultPageSize}){
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
        return <div className="xygl">
            {this.state.errorAlert}
            <div className="wrap">
                <CompToolBar
                    tip="检索所有协议记录，可按条件查询"
                    onClick={this.handleClick}/>
                <SearchForm
                    visible={this.state.visible}
                    title="协议搜索"
                    width="800"
                    onCancel={this.handleCancel}/>
                <Panel>
                    <div className="h-scroll-table table-border ">
                        <Table columns={model}
                               dataSource={this.state.data}
                               pagination={this.state.pagination}
                               loading={this.state.loading}
                               onChange={this.handleChange}/>
                    </div>
                </Panel>
            </div>
        </div>
    }
});

module.exports = xygl;