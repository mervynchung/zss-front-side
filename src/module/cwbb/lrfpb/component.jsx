/* 
 引入依赖库 
 */
import 'common/lib.js'
import React from 'react'
import {Input, Form, Col, Row, Select, Modal, Button} from 'antd'
import ReactDom from 'react-dom'
import BaseTable from 'component/compBaseTable'
import req from 'reqwest'
import './style.css'
import { Table, Icon} from 'antd'
import Panel from 'component/compPanel'
import config from 'common/configuration'

import Lrfpbxx from './Lrfpbxx'


const API_URL = config.URI_API_PROJECT + '/lrfp';

/* 
 定义组件A
 */
const columns = [{
    title: '序号',
    dataIndex: 'JG_ID',
    key: 'JG_ID',
}, {
    title: '事务所名称',
    dataIndex: 'DWMC',
    key: 'DWMC',
}, {
    title: '统计时间',
    dataIndex: 'TJSJ',
    key: 'TJSJ',
}, {
    title: '单位负责人',
    dataIndex: 'DWFZR',
    key: 'DWFZR',
}, {
    title: '财会负责人',
    dataIndex: 'CKFZR',
    key: 'CKFZR',
}, {
    title: '状态',
    dataIndex: 'ZTBJ',
    key: 'ZTBJ',
}, {
    title: '操作',
    key: 'operation',
    render(text) {
        return (
            <span>
                    <a href="#">打印</a>
                </span>
        );
    }
}];

const Lrfpb = React.createClass({

    render() {
        return <div >
            <Table columns={this.columms}
                   bordered size="small"/>
        </div>
    }
})


/*
 组件compWrap
 */
const lrfp = React.createClass({
    //初始化
    getInitialState() {
        return {
            data: [],
            pagination: {},
            urls: '',
            ret: {}
        };
    },

    handleTableChange(pagination, filters, sorter) {
        const pager = pagination;
        pager.current = pagination.current;
        pager.pageSize = pagination.pageSize;
        this.setState({pagination: pager});
        req({
            url: API_URL,
            method: 'get',
            type: 'json',
            data: {pagenum: pager.current, pagesize: pager.pageSize},
            success: (result) => {
                const paper = this.state.pagination;
                paper.pageSize = pagination.pageSize;
                this.setState({
                    data: result.data,
                    urls: result.data[0].id,

                });
                this.fetch_lrfpbxx()
            },

        });
    },
    fetch_lrfpb() {
        req({
            url: API_URL+'?pagenum=1&pagesize=5',
            method: 'get',
            type: 'json',
            success: (result) => {
                function showTotal() {
                    return "共" + pagination.total + "条";
                }

                const pagination = this.state.pagination;
                pagination.total = result.page.total_number1;
                pagination.pageSize = 5;
                pagination.showSizeChanger = true;
                pagination.showTotal = showTotal;
                pagination.showQuickJumper = true;
                pagination.size = 'small';
                pagination.pageSizeOptions = ['5', '10', '20', '30', '40'];

                this.setState({
                    data: result.data,
                    urls: result.data[0].id,
                });
                this.fetch_lrfpbxx();
            },
            error: (err) => {
                alert('api错误');
            }
        });
    },
    fetch_lrfpbxx() {
        req({
            url: '/api/lrfp/xx/' + this.state.urls,
            method: 'get',
            type: 'json',
            success: (result) => {

                this.setState({
                    ret: result.xx.data,

                });
                console.log(result);
            }
        });
    },

    onSelect(record) {

        this.state.urls = record.id;
        console.log(record);
        this.fetch_lrfpbxx();
    },

    componentDidMount() {
        this.fetch_lrfpb();
    },


    // =========样式渲染================== 
    render() {

        return <div className="lrfp">
            <div className="wrap">
                <Panel>
                    <Table columns={columns}
                           dataSource={this.state.data}
                           pagination={this.state.pagination}
                           onChange={this.handleTableChange}
                           onRowClick={this.onSelect}
                           bordered size="small"/>
                </Panel>

                <Panel title="利润分配表信息查看">
                    <Lrfpbxx data={this.state.ret}/>
                </Panel>

            </div>
        </div>
    }
})

module.exports = lrfp;
