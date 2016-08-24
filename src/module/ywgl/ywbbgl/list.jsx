import React from 'react'
import {Table, Row, Col, Button, Icon, notification} from 'antd'
import Panel from 'component/compPanel'
import req from 'reqwest';
import SearchForm from './searchForm'
import config from 'common/configuration'

const API_URL = config.HOST + config.URI_API_PROJECT + '/ywbb';
const ToolBar = Panel.ToolBar;
const ButtonGroup = Button.Group;


const list = React.createClass({
    //初始化state
    getInitialState(){
        return {
            loading:false,
            data: [],
            entity: '',
            where: '',
            searchToggle: false,
            helper: false,
            pagination: {
                current: 1,
                showSizeChanger: true,
                pageSize: 10,
                showQuickJumper: true,
                pageSizeOptions: ['10', '20', '40'],
                showTotal (total) {
                    return `共 ${total} 条`
                }
            }
        }
    },
    //通过API获取数据
    fetchData(params = {page: 1, pageSize: 10,where:this.state.where}){
        req({
            url: API_URL,
            type: 'json',
            method: 'get',
            data: params
        }).then(resp=> {
            const p = this.state.pagination;
            p.total = resp.total;
            this.setState({data: resp.data, pagination: p, loading: false})
        }).fail(e=> {
            this.setState({loading: false});
        })
    },

    //改变页码
    handleChange(pagination, filters, sorter){
        this.fetchData({
            page: pagination.current,
            pageSize: pagination.pageSize,
            where: encodeURIComponent(JSON.stringify(this.state.where))
        })
    },

    //查询按钮
    handleSearchToggle(){
        this.setState({searchToggle: !this.state.searchToggle});
    },
    //查询提交
    handleSearchSubmit(commitValues){
        const values = new Object();
        for (let prop in commitValues) {
            if (typeof commitValues[prop] == 'string'){
                values[prop] = commitValues[prop].trim();
            }else {
                values[prop] = commitValues[prop]
            }
        }
        this.setState({loading:true});
        const pager = this.state.pagination;
        const param = {
            page:1,
            pageSize:pager.pageSize,
            jid:jid,
            where: encodeURIComponent(JSON.stringify(values))
        };
        fetchData(param).then(resp=>{
            pager.total = resp.total > 1000 ? 1000 : resp.total;
            pager.showTotal = total => {
                return `共 ${resp.total} 条，显示前 ${total} 条`
            };
            pager.current = 1;
            this.setState({customers:resp.data,where:values, pagination: pager,loading:false})
        })
    },

    //刷新按钮
    handleRefresh(){
        const p = this.state.pagination;
        pager.current = 1;
        this.setState({pagination: pager, where: ''});
        this.fetchData({});
    },

    //帮助按钮
    helperToggle(){
        this.setState({helper: !this.state.helper})
    },
    //手动关闭帮助提示
    helperClose(){
        this.setState({helper: false})
    },
    //组件加载时读取数据
    componentDidMount(){
        this.fetchData();
    },
    //行点击处理
    handleRowClick(record){

    },
    render(){
        const {title} = this.props;
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
        return <Panel title={title} toolbar={toolbar}>
            {this.state.searchToggle && <SearchForm
                onSubmit={this.handleSearchSubmit}/>}
                <Table columns={this.state.columns}
                       dataSource={this.state.data}
                       pagination={this.state.pagination}
                       loading={this.state.loading}
                       onChange={this.handleChange}
                       onRowClick={this.handleRowClick}/>
        </Panel>
    }
});

module.exports = list;