import React from 'react'
import {Table, Row, Col, Button, Icon, notification, Alert} from 'antd'
import Panel from 'component/compPanel'
import req from 'reqwest';
import SearchForm from './sdSearchForm'
import merge from 'lodash/merge';
import {isEmptyObject,jsonCopy} from 'common/utils'
import auth from 'common/auth'
import Export from 'component/ComExcelExperss';

const ToolBar = Panel.ToolBar;
const ButtonGroup = Button.Group;

const list = React.createClass({
    //初始化state
    getInitialState(){
        return {
            loading: false,
            data: [],
            entity: {},
            where: this.props.defaultWhere,
            searchToggle: false,
            helper: false,
            selectedRowKeys:[],
            pagination: {
                current: 1,
                showSizeChanger: true,
                pageSize: this.props.pageSize,
                showQuickJumper: true,
                pageSizeOptions: ['10', '20', '40'],
                showTotal (total) {
                    return `共 ${total} 条`
                }
            }
        }
    },
    //通过API获取数据
    fetchData(params = {page: 1, pagesize: this.props.pageSize}){
        this.setState({loading: true});
        const token = auth.getToken();
        const {apiUrl,defaultWhere} = this.props;
        let where = merge(jsonCopy(defaultWhere),params.where);
        if(!isEmptyObject(where)){
            params.where = encodeURIComponent(JSON.stringify(where))
        }
        req({
            url: apiUrl,
            type: 'json',
            method: 'get',
            data: params ,
            headers: {'x-auth-token': token}
        }).then(resp=> {
            const p = this.state.pagination;
            p.current = params.page;
            p.pageSize = params.pagesize;
            p.total = resp.total > 1000 ? 1000 : resp.total;
            p.showTotal = total => {
                return `共 ${resp.total} 条，显示前 ${total} 条`
            };
            this.setState({data: resp.data, pagination: p, loading: false,where:where})
        }).fail(e=> {
            this.setState({loading: false});
            notification.error({
                duration: 2,
                message: '数据读取失败',
                description: '可能网络访问原因，请稍后尝试'
            });
        })
    },

    //改变页码
    handleChange(pagination, filters, sorter){
        let param = {
            page: pagination.current,
            pagesize: pagination.pageSize,
            where:this.state.where,
            sortField:sorter.field,
            sortOrder: sorter.order
        };
        this.fetchData(param)
    },

    //查询按钮开关
    handleSearchToggle(){
        this.setState({searchToggle: !this.state.searchToggle});
    },
    //查询提交
    handleSearchSubmit(values){
        const p = this.state.pagination;
        const param = {
            page: 1,
            pagesize: p.pageSize,
            where: values
        };
        this.fetchData(param);
    },
    //生成全部导出url
    genAllApi(){
        let {apiUrl} = this.props;
        let where = encodeURIComponent(JSON.stringify(this.state.where));
        if(!!where) {
            let str = apiUrl + '?page=1&pagesize=65535';
            return str
        }
    },
    //刷新按钮
    handleRefresh(){
        const p = this.state.pagination;
        this.fetchData({page:1, pagesize: p.pageSize});
    },
    //刷新当前页
    refreshCurrent(){
        const p = this.state.pagination;
        this.fetchData({page: p.current, pagesize: p.pageSize});
    },

    //组件加载时读取数据
    componentDidMount(){
        this.props.onMount();
        if(isEmptyObject(this.props.stateShot)){
            this.fetchData();
        }else{
            this.setState({...this.props.stateShot})
        }
    },
    componentWillUnmount(){

    },
    //行点击处理
    handleRowClick(record){
        this.state.entity = record;
        this.setState({entity:record})
    },
    //表格中的复选框勾选
    handleSelectedRowChange(selectedRowKeys){
        this.setState({selectedRowKeys: selectedRowKeys})
    },
    //重置选择
    resetSelect(){
        this.setState({selectedRowKeys:[]})
    },
    //资质锁定对话框
    unlock(){
        const token = auth.getToken();
        const {apiUrl,refreshList} = this.props;
        let params =JSON.stringify({id:this.state.selectedRowKeys}) ;
        req({
            url: apiUrl,
            type: 'json',
            method: 'put',
            data: params,
            contentType:'application/json',
            headers: {'x-auth-token': token}
        }).then(resp=>{
            refreshList();
            this.setState({selectedRowKeys:[]})
        }).fail(e=> {
            this.setState({loading: false});
            notification.error({
                duration: 2,
                message: '操作失败',
                description: '网络访问故障，请稍后尝试'
            });
        })
    },
    render(){
        const rowSelection = {
            type: 'checkbox',
            selectedRowKeys: this.state.selectedRowKeys,
            onChange: this.handleSelectedRowChange,
            getCheckboxProps: record => ({
                disabled: record.yxbz === false    // 配置无法勾选的列
            }),

        };
        const {title, scrollx,keyCol,columns} = this.props;
        let toolbar = <ToolBar>
            <Button onClick={this.handleSearchToggle}>
                <Icon type="search"/>查询
                { this.state.searchToggle ? <Icon className="toggle-tip" type="circle-o-up"/> :
                    <Icon className="toggle-tip" type="circle-o-down"/>}
            </Button>
            <Export resData={this.state.data} butName="导出" model={columns} fileName={'人员资质锁定记录'}
                    getAllApi={this.genAllApi()} all />

            <ButtonGroup>
                <Button type="default" onClick={this.handleRefresh}><Icon type="reload"/></Button>
                <Button type="default" onClick={this.resetSelect}><Icon type="retweet" />重置选择</Button>
                <Button type="primary" onClick={this.unlock}><Icon type="unlock" />解除锁定</Button>
            </ButtonGroup>
        </ToolBar>;


        return <Panel title={title} toolbar={toolbar}>

                {this.state.searchToggle && <SearchForm
                    onSubmit={this.handleSearchSubmit}/>}
                <Table columns={columns}
                       dataSource={this.state.data}
                       pagination={this.state.pagination}
                       loading={this.state.loading}
                       onChange={this.handleChange}
                       rowKey={record => record[keyCol]}
                       rowClassName={(record)=>{return record.id==this.state.entity.id?'row-selected':''}}
                       rowSelection={rowSelection}
                       onRowClick={this.handleRowClick} scroll={{x: scrollx}}/>
            </Panel>

    }
});

module.exports = list;