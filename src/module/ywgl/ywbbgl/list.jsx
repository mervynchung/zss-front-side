import React from 'react'
import {Table, Row, Col, Button, Icon, notification, Alert} from 'antd'
import Panel from 'component/compPanel'
import req from 'reqwest';
import SearchForm from './searchForm'
import {isEmptyObject,jsonCopy} from 'common/utils'


const ToolBar = Panel.ToolBar;
const ButtonGroup = Button.Group;


const list = React.createClass({
    //初始化state
    getInitialState(){
        return {
            loading: false,
            data: [],
            entity: '',
            where: {},
            searchToggle: false,
            helper: false,
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
        const {apiUrl} = this.props;
        let where = {};
        if(!isEmptyObject(params.where)){
            where = jsonCopy(params.where);
            params.where = encodeURIComponent(JSON.stringify(params.where))
        }
        req({
            url: apiUrl,
            type: 'json',
            method: 'get',
            data: params
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
            where:this.state.where
        };
        this.fetchData(param)
    },

    //查询按钮开关
    handleSearchToggle(){
        this.setState({searchToggle: !this.state.searchToggle});
    },
    //查询提交
    handleSearchSubmit(commitValues){
        //首先处理搜索表单提交的信息，将字符串去首尾空格，将空值的搜索条件丢弃
        const values = {};
        for (let prop in commitValues) {
            if (commitValues[prop]) {
                if (typeof commitValues[prop] == 'string' && !!commitValues[prop].trim()) {
                    values[prop] = commitValues[prop].trim()
                } else {
                    values[prop] = commitValues[prop]
                }
            }
        }
        const p = this.state.pagination;
        const param = {
            page: 1,
            pageSize: p.pageSize,
            where: values
        };
        fetchData(param);
    },

    //刷新按钮
    handleRefresh(){
        const p = this.state.pagination;
        this.fetchData({page: 1, pagesize: p.pageSize});
    },

    //帮助按钮开关
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
        console.log(record.id)
    },
    render(){
        const {title, helperTitle, helperDesc, scrollx,keyCol,columns} = this.props;
        let toolbar = <ToolBar>
            <Button onClick={this.handleSearchToggle}>
                <Icon type="search"/>查询
                { this.state.searchToggle ? <Icon className="toggle-tip" type="circle-o-up"/> :
                    <Icon className="toggle-tip" type="circle-o-down"/>}
            </Button>

            <ButtonGroup>
                <Button type="primary" onClick={this.helperToggle}><Icon type="question"/></Button>
                <Button type="primary" onClick={this.handleRefresh}><Icon type="reload"/></Button>
            </ButtonGroup>
        </ToolBar>;
        return <div>
            {this.state.helper && <Alert message={helperTitle}
                                         description={helperDesc}
                                         type="info"
                                         closable
                                         onClose={this.helperClose}/>}
            <Panel title={title} toolbar={toolbar}>
                {this.state.searchToggle && <SearchForm
                    onSubmit={this.handleSearchSubmit}/>}
                <Table columns={columns}
                       dataSource={this.state.data}
                       pagination={this.state.pagination}
                       loading={this.state.loading}
                       onChange={this.handleChange}
                       rowKey={record => record[keyCol]}
                       onRowClick={this.handleRowClick} scroll={{x: scrollx}}/>
            </Panel>
        </div>

    }
});

module.exports = list;