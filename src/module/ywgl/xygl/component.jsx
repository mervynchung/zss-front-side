import React from 'react'
import {Table,Modal,Row,Col,Button,Icon} from 'antd'
import CompPageHead from 'component/CompPageHead'
import Panel from 'component/compPanel'
import model from './model'
import req from 'reqwest';
import SearchForm from 'component/compSearch'
import config from 'common/configuration'

const API_URL = config.URI_API_PREFIX + config.URI_API_PROJECT + 'xygl';
const ToolBar  = Panel.ToolBar;


const xygl = React.createClass({
    getInitialState(){
        return {
            data: [],
            pagination: {
                showSizeChanger: true,
                defaultPageSize: 8,
                showQuickJumper: true,
                pageSizeOptions:['8','10','30','50'],
                showTotal (total) {
                    return `共 ${total} 条`
                }
            },
            searchToggle:false
        }
    },
    handleChange(pagination, filters, sorter){
        const pager = this.state.pagination;
        pager.current = pagination.current;
        pager.pageSize = pagination.pageSize;
        this.setState({pagination: pager}) //此行语句是为符合不直接修改state的语意，并不影响逻辑。

        this.fetchData({
            page: pagination.current,
            pageSize: pagination.pageSize
        })
    },
    handleSearchToggle(){
        this.setState({searchToggle:!this.state.searchToggle});
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
        let toolbar = <ToolBar>
            <Button  onClick={this.handleSearchToggle}>
                <Icon type="search"/>查询
                { this.state.searchToggle ? <Icon type="up" />:<Icon classtype="down" />}
            </Button>
            <Button  ><Icon type="copy"/>打印</Button>
            <Button  ><Icon type="copy"/>导出</Button>
        </ToolBar>;

        return <div className="xygl">
            <div className="wrap">

                <Panel title="协议检索" toolbar ={toolbar}>
                    {this.state.searchToggle&&<SearchForm
                        visible={this.state.visible}
                        title="协议搜索"
                        width="800"/>}
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