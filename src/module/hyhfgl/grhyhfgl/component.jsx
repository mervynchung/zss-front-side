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
import {
    Table, Icon
}
from 'antd'
import Panel from 'component/compPanel'
import CompToolBar from 'component/compToolBar'

const createForm = Form.create;
const FormItem = Form.Item;
const Option = Select.Option;



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
        return <div >
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
const grhyhfgl = React.createClass({
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
                    data: result.data,
                    urls:result.data[0].ID,
                });
                 this.fetch_hfxx()
            },
           
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
                pagination.total = result.page.total_number1;
                pagination.pageSize = 5;
                pagination.showSizeChanger = true;
                pagination.showTotal = showTotal;
                pagination.showQuickJumper = true;
                pagination.size = 'small';
                pagination.pageSizeOptions = ['5', '10', '20', '30', '40'];

                this.setState({
                    data: result.data,
                   urls:result.data[0].ID,
                     
                });
               this.fetch_hfxx();
            },
            error: (err) =>{alert('api错误');}
        });
    },

    fetch_hfxx() {
        req({
            url: '/api/grhf/xx/' + this.state.urls,
            method: 'get',
            type: 'json',
            success: (result) => {
              
                this.setState({
                    ret: result.xx.data,

                });
            }
        });
    },

    onSelect(record) {
      
        this.state.urls = record.ID;
          console.log(record);
        this.fetch_hfxx();
    },
    showModal() { 
     this.setState({ 
       visible: true 
     }); 
   }, 
   handleCancel() {
    this.setState({
      visible: false
    });
   },

    componentDidMount() {
        this.fetch_hflb();
    },
  
  


    // =========样式渲染================== 
    render() {
             const formItemLayout = {//表单样式 
            labelCol: { span: 6 }, 
             wrapperCol: { span: 14 }, 
               }; 
            

      
        return <div className = "grhyhfgl">
        <div className ="wrap">
        <Panel>
        <CompToolBar
                    tip="检索所有记录，可按条件查询"
                    onClick={this.showModal}/>    
             <Modal title="请输入查询条件" 
           visible={this.state.visible} 
           onOk={this.handleOk} 
           confirmLoading={this.state.confirmLoading} 
          onCancel={this.handleCancel} okText="搜索" > 
         
          
           <Form  form={this.props.form}> 
       <FormItem 
       id="" 
       label="年度：" 
       {...formItemLayout}> 
      <Input id="cx-dwmc"placeholder="请输入搜索条件" /> 
     </FormItem> 
 
     <FormItem 
       id="" 
      label="单位名称：" 
      {...formItemLayout}> 
       <Input id="cx-zsbh"  placeholder="请输入搜索条件" /> 
     </FormItem>  
 
     <FormItem 
       id="" 
      label="缴费情况：" 
       {...formItemLayout}> 
       <Select showSearch id=""   style={{ width: 200 }} optionFilterProp="children" notFoundContent="无法找到" placeholder="请选择"> 
         <Option value="1">多交</Option> 
         <Option value="2">欠交</Option> 
         <Option value="3" >趸交</Option> 
       </Select> 
     </FormItem> 
                  </Form>
      </Modal>
            <Table columns={columns}
                dataSource={this.state.data}
                pagination={this.state.pagination}
                onChange={this.handleTableChange}
                onRowClick={this.onSelect}
                bordered size="small" />      
                </Panel>
                <Panel title="执业会员会费信息查看">
            <div className="from1">
           
           <Hfxx data={this.state.ret}/>
            </div>
            </Panel>
            </div>
        </div>
    }
})

module.exports = grhyhfgl;
