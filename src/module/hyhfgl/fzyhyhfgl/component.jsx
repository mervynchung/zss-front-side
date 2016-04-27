/* 
 引入依赖库 
  */
import 'common/lib.js'
import React from 'react'
import {Input, Form, Col, Row, Button} from 'antd'
import ReactDom from 'react-dom'
import BaseTable from 'component/compBaseTable'
import req from 'reqwest'
import './style.css'
import {
    Table, Icon
}
from 'antd'
import Panel from 'component/compPanel'

const createForm = Form.create;
const FormItem = Form.Item;



/* 
定义组件A 
 */
const columns = [{
    title: '序号',
    dataIndex: 'xh',
    key: 'xh',
}, {
        title: '年度',
        dataIndex: 'ND',
        key: 'ND',
        sorter: true,
    }, {
        title: '地区',
        dataIndex: 'DQ',
        key: 'DQ',
    }, {
        title: '事务所名称',
        dataIndex: 'JGNAME',
        key: 'JGNAME',
    }, {
        title: '总缴费金额',
        dataIndex: 'SEX',
        key: 'SEX',
    }, {
        title: '缴费时间',
        dataIndex: 'JFSJ',
        key: 'JFSJ',
    }, {
        title: '操作',
        key: 'operation',
        render(text) {
            return (
                <span>
                    <a href="#">查看</a>
                </span>
            );
        }
    }];

const Hflb = React.createClass({

    render() {
        return <div>
            <Table columns={this.columms}
                bordered size="small" />
        </div>
    }
})


/* 
 * 组件B 
 */

let Hfxx = React.createClass({
    render() {
        const { getFieldProps } = this.props.form;
        const formItemLayout = {
            labelCol: { span: 9 },
            wrapperCol: { span: 4 },
        };

        return (
            <Form horizontal >
            <Row>
             <Col span="4">
                <FormItem
                    {...formItemLayout}
                    label="年度："
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 10 }}>
                    <Input  {...getFieldProps('ND') }  />
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="地区："
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 10 }}>
                    <Input  {...getFieldProps('DQ') }/>
                </FormItem>
                 </Col>
                  <Col span="10">
                <FormItem
                    {...formItemLayout}
                    label="事务所名称："
                    labelCol={{ span: 5 }}
                    wrapperCol={{ span: 16 }}>
                    <Input  {...getFieldProps('JGNAME') }  />
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="姓名："
                    labelCol={{ span: 5 }}
                    wrapperCol={{ span: 16 }}>
                    <Input type="textarea" id="control-textarea"  rows="5" {...getFieldProps('NAME') } />
                </FormItem>
                </Col>
                <Col span="10">
                <FormItem
                    {...formItemLayout}
                    label="个人会费："
                    labelCol={{ span: 5 }}
                    wrapperCol={{ span: 10 }}>
                    <Input   {...getFieldProps('MONEY') }/>
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="总缴费金额："
                    labelCol={{ span: 5 }}
                    wrapperCol={{ span: 10 }}>
                    <Input  {...getFieldProps('SEX') } />
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="缴费日期："
                    labelCol={{ span: 5 }}
                    wrapperCol={{ span: 10 }}>
                    <Input  {...getFieldProps('SQDATE') } />
                </FormItem>
                </Col>
                </Row>
            </Form>
        );
    },
});
Hfxx = createForm({
    mapPropsToFields(props) {
        let result = {};
        for (let prop in props.data) {
            result[prop] = { value: props.data[prop] }
        }
        
        return result;
    }
})(Hfxx)



/* 
组件compWrap 
 */
const zyhyhfgl = React.createClass({
    //==============初始化事件================== 
    getInitialState() {
        return {
            data: [],
            pagination: {},
            urls: '',
            ret: {},
        };
    },

    //**********事件处理**************** 

    //==========生命周期事件===================== 

    handleTableChange(pagination, filters, sorter) {
        req({
            url: '/api/grhf?pagenum=' + pagination.current + '&pagesize=' + pagination.pageSize + '&sfield=' + sorter.field + '&sorder=' + sorter.order,
            method: 'get',
            type: 'json',
            success: (result) => {
                const paper = this.state.pagination;
                paper.pageSize = pagination.pageSize;
                this.setState({
                    data: result.Data,
                });
            }
        });
    },
    fetch_hflb() {
        req({
            url: '/api/grhf?pagenum=1&pagesize=5&sfield=unll&sorder=unll',
            method: 'get',
            type: 'json',
            success: (result) => {
                function showTotal() {
                    return "共" + pagination.total + "条";
                }
                const pagination = this.state.pagination;
                pagination.total = result.Page.total_number1;
                pagination.pageSize = 5;
                pagination.showSizeChanger = true;
                pagination.showTotal = showTotal;
                pagination.showQuickJumper = true;
                pagination.size = 'small';
                pagination.pageSizeOptions = ['5', '10', '20', '30', '40'];

                this.setState({
                    data: result.Data,
                });
            }
        });
    },

    fetch_hfxx() {
        req({
            url: '/api/grhf/xx/' + this.state.urls,
            method: 'get',
            type: 'json',
            success: (result) => {
                this.setState({
                    ret: result.xx.Data,
                });
            }
        });
    },

    onSelect(record) {
        this.state.urls = record.ID;
        this.fetch_hfxx();
    },

    componentDidMount() {
        this.fetch_hflb();
    },

    // =========样式渲染================== 
    render() {
        return <div className = "zyhyhfgl">
        <div className ="wrap">
        <Panel>

            <Table columns={columns}
                dataSource={this.state.data}
                pagination={this.state.pagination}
                onChange={this.handleTableChange}
                onRowClick={this.onSelect}
                bordered size="small" />
                </Panel>
                <Panel>
            <div className="from1">
            <Row>
            <Col span="10" offset="10">执业会员会费信息</Col>
            </Row>
           <Hfxx data={this.state.ret}/>
            </div>
            </Panel>
            </div>
        </div>
    }
})

module.exports = zyhyhfgl;
