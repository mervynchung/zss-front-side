import React from 'react'
import CompBaseTable from 'component/compBaseTable';
import CompPageHead from 'component/CompPageHead'
import Panel from 'component/compPanel'
import Te from './cx-from'
import './style.css'
import './until.js'
import req from 'reqwest'
import Model from './model.js' 
import {  DatePicker,Modal,Form, Input, Select,Table, Icon,Tabs,Button,Row,Col,message }from 'antd'
// 标签定义
const TabPane = Tabs.TabPane;
const FormItem = Form.Item;
const Option = Select.Option;

let jgcx = React.createClass({

  getInitialState() { //初始化State状态，使用传入参数
      return {
        //这些都是dataset
            dataxx: {values: {}},//用于详细信息autoform数据格式
            datalist:[],//用于其他详细table数据格式
            data: [],//用于主查询
            pagination: Model.pageSetting,//从model加载常量
            showtotal:Model.pageSetting.showTotal,
            urls:{},//详细信息URL
            loading:true,//主查询加载状态
            tabkey:1,//默认tab状态
            visible: false,//条件查询框默认状态
            form:{},//条件查询框获取数据dataset
      };
    },

handleTableChange(pagination, filters, sorter) {//onChange方法，分页、排序、筛选变化时触发，必须三个参数才能准确获取
 req({
      url: '/api/zs/jgs?pagenum='+pagination.current+'&pagesize='+pagination.pageSize+'&sfield='+sorter.field+'&sorder='+sorter.order+'&dwmc='
      +this.state.form.dwmc+'&zsbh='+this.state.form.zsbh+'&zczj='+this.state.form.zczj+'&cs='+this.state.form.cs+'&swsxz='+this.state.form.swsxz+'&zczj2='
      +this.state.form.zczj2+'&zrs='+this.state.form.zrs+'&zrs2='+this.state.form.zrs2+'&clsj='+this.formatDate(this.state.form.clsj)
      +'&clsj2='+this.formatDate(this.state.form.clsj2),//后台URL，dataProvider路径
      method: 'get',//后台交互方式
      type: 'json',//返回数据形式
      success: (result) => {//成功时处理方法，result为后台返回数据
        const paper = this.state.pagination;     //把this.state.pagination指向paper，与setState异曲同工，目的是更改单一属性数据
         paper.pageSize = pagination.pageSize;//把页面Size更改为前端相应Size
        this.setState({
          data: result.data,//传入后台获取数据
          urls:result.data[0]._links,//传入后台获取数据
        });
        this.fetch_jgxx()//联动详细信息，重新调用方法
      },
       error: (err) =>{alert('api错误');}//错误处理
    });
  },

  fetch_jgcx() {
    req({
      url: '/api/zs/jgs?pagesize='+this.state.pagination.pageSize+'&pagenum=1&sfield=null&sorder=null&dwmc=null&zsbh=null&zczj=null&cs=null&swsxz=null&zczj2=null&zrs=null&zrs2=null&clsj=null&clsj2=null',//默认数据查询后台返回JSON
      method: 'get',
      type: 'json',
      success: (result) => {

if (this.state.pagination.page){//判断是否进行分页
    const pagination = this.state.pagination;
        pagination.total = result.page.pageTotal;//要求后台返回json写法有属性page，该属性包含pageTotal（总条数值）
              if (this.state.showtotal){//判断是否显示总条数
                   function showTotal() {
                      return "共"+pagination.total+"条";
                    }
                    pagination.showTotal = showTotal;//调用总条数返回方法
                  }else{
                    pagination.showTotal = null;//不显示总条数处理
                  }
  }else{
    const pagination = this.state.pagination;
        pagination.total = result;//不分页总条数处理
  }

  //以上判断目的是方便查询table样式根据model更改
        this.setState({
          data: result.data,//传入后台获取数据，table组件要求每条查询记录必须拥有字段'key'
          urls:result.data[0]._links,
          loading:false,//关闭加载状态
        });
        this.fetch_jgxx();
      },
      error: (err) =>{alert('api错误');}
    });
  },

    fetch_jgxx() {//详细信息（tab）数据处理方法，不能使用switch，否则会发生未知错误
      let tabkey =this.state.tabkey //获取当前tab标签的key
      if (tabkey==1) {;
        req({
        url: this.state.urls.herf_sws,//从主查询获取的后台dataProvider路径
        method: 'get',
        type: 'json',
        success: (result) => {
          this.setState({
            dataxx: result.data,
            datalist: result.data.nbjgsz
          })
        },error:  (err) =>{alert('api错误');}
      });
      }else if (tabkey==2) {
        req({
        url: this.state.urls.herf_zyry,
        method: 'get',
        type: 'json',
        success: (result) => {
          this.setState({
            datalist: result.data
          })
        },error: (err) =>{alert('api错误');}
      });
      }else if (tabkey==3) {
        req({
        url: this.state.urls.herf_cyry,
        method: 'get',
        type: 'json',
        success: (result) => {
          this.setState({
            datalist: result.data
          })
        },error: (err) =>{alert('api错误');}
      });
      }else if (tabkey==4) {
        req({
        url: this.state.urls.herf_czrylb,
        method: 'get',
        type: 'json',
        success: (result) => {
          this.setState({
            datalist: result.data
          })
        },error: (err) =>{alert('api错误');}
      });
      }else if (tabkey==5) {
        req({
        url: this.state.urls.herf_swsbgxx,
        method: 'get',
        type: 'json',
        success: (result) => {
          this.setState({
            datalist: result.data
          })
        },error: (err) =>{alert('api错误');}
      });
      }else if (tabkey==6) {
         req({
        url: this.state.urls.herf_njjl,
        method: 'get',
        type: 'json',
        success: (result) => {
          this.setState({
            datalist: result.data
          })
        },error: (err) =>{alert('api错误');}
      });
      };
    },
    
    onSelect(record){//主查询记录被选中方法
       this.state.urls=record._links
       this.fetch_jgxx()
    },

    callback(key) {//tab标签变化返回值与方法
      this.state.tabkey=key;
     this.fetch_jgxx()
},

showModal() {//查询按钮表单显示状态
    this.setState({
      visible: true
    });
  },

  formatDate (strTime) {//格式化日期
    if (strTime) {
  
    };
    
},

handleOk() {//点击搜索按钮触发事件
    this.setState({
      confirmLoading: true
    });
     req({
      url: '/api/zs/jgs?pagesize='+this.state.pagination.pageSize+'&pagenum=1&sfield=null&sorder=null&dwmc='
      +this.props.form.getFieldsValue().dwmc+'&zsbh='+this.props.form.getFieldsValue().zsbh+'&zczj='+this.props.form.getFieldsValue().zczj
      +'&cs='+this.props.form.getFieldsValue().cs+'&swsxz='+this.props.form.getFieldsValue().swsxz+'&zczj2='+this.props.form.getFieldsValue().zczj2
      +'&zrs='+this.props.form.getFieldsValue().zrs+'&zrs2='+this.props.form.getFieldsValue().zrs2+'&clsj='+this.formatDate(this.props.form.getFieldsValue().clsj)
      +'&clsj2='+this.formatDate(this.props.form.getFieldsValue().clsj2),
      method: 'get',
      type: 'json',
      success: (result) => {
        if (result.data.length!=0) {//判断是否空数据
const pagination = this.state.pagination;
        pagination.total = result.page.pageTotal;
        this.setState({
          urls:result.data[0]._links,
      data: result.data,
        visible: false,
        confirmLoading: false,
    });
        }
        else{//空数据情况，清空数据记录
          const pagination = this.state.pagination;
        pagination.total = 0;
 this.setState({
      data: null,
        visible: false,
        confirmLoading: false,
    });
        };
        
         this.fetch_jgxx();//联动详细信息
          this.state.form=this.props.form.getFieldsValue();//锁定搜索条件
          this.props.form.resetFields();//清空表单组件值
      },error: (err) =>{alert('api错误');}
    })
  },

  handleCancel() {//取消按钮
    this.setState({//关闭表单
      visible: false
    });
 this.props.form.resetFields();//清空表单组件值
  },

  disabledStartDate(rule, value, callback) {//日期校验规则方法
     const form = this.props.form;
     if (value && value.getTime() >= Date.now()) {
      callback(new Error('这是个将来的时间'));
    } else if (form.getFieldValue('clsj2')) {
       if (value.getTime() > form.getFieldValue('clsj2').getTime() ) {
      callback(new Error('最小时间大于最大时间'));
    } else {
      callback();
    }
     }else {
      callback();
    };
 
  },
  disabledEndDate(rule, value, callback) {//日期校验规则方法
    const form = this.props.form;
    if (form.getFieldValue('clsj')) {
       if (value.getTime() < form.getFieldValue('clsj').getTime() ) {
      callback(new Error('最大时间小于最小时间'));
    }else {
      callback();
    }
    }else {
      callback();
    };
   
  },

    componentDidMount() { //REACT提供懒加载方法，懒加载时使用，且方法名必须为componentDidMount
      this.fetch_jgcx(); //异步调用后台服务器方法fetch_jgcx
    },

    render() {
       const formItemLayout = {//表单样式
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    };
    const { getFieldProps } = this.props.form;//获取表单输入组件值的特定写法
      const clsj = getFieldProps('clsj', {//设置日期输入组件校验规则
      rules: [
        { 
           type: 'date', 
           message: '请输入最小时间',
         },{
          validator: this.disabledStartDate,
        }
      ]
    });
       const clsj2 = getFieldProps('clsj2', {//设置日期输入组件校验规则
      rules: [
        {
          type: 'date', 
          message: '请输入最大时间'
           },
        { validator: this.disabledEndDate, }
      ]
    });
      return <div className="jgcx">
      <CompPageHead heading="事务所查询" />

        <div className="wrap">
         <Row>
      <Col  offset="22">
      <Button type="primary" className="buttonCX" onClick={this.showModal}>查询</Button>
      <Modal title="请输入查询条件"
          visible={this.state.visible}
          onOk={this.handleOk}
          confirmLoading={this.state.confirmLoading}
          onCancel={this.handleCancel} okText="搜索" >
          <Row>
          <Form  form={this.props.form}>
      <FormItem
      id="cx-dwmc"
      label="单位名称："
      {...formItemLayout}>
      <Input id="cx-dwmc" {...getFieldProps('dwmc')} placeholder="请输入搜索条件" />
    </FormItem>

    <FormItem
      id="cx-zsbh"
      label="证书编号："
      {...formItemLayout}>
      <Input id="cx-zsbh" {...getFieldProps('zsbh')} placeholder="请输入搜索条件" />
    </FormItem> 

    <FormItem
      id="cx-cs"
      label="城市："
      {...formItemLayout}>
      <Select showSearch id="cx-cs"  {...getFieldProps('cs')} style={{ width: 200 }} optionFilterProp="children" notFoundContent="无法找到" placeholder="请选择城市">
        <Option value="1">广州市</Option>
        <Option value="2">珠海市</Option>
        <Option value="3" >汕头市</Option>
        <Option value="4">韶关市</Option>
        <Option value="5">佛山市</Option>
        <Option value="6">江门市</Option>
        <Option value="7">湛江市</Option>
        <Option value="8">茂名市</Option>
        <Option value="9">肇庆市</Option>
        <Option value="10">惠州市</Option>
        <Option value="11">梅州市</Option>
        <Option value="12">汕尾市</Option>
        <Option value="13">河源市</Option>
        <Option value="14">阳江市</Option>
        <Option value="15">清远市</Option>
        <Option value="16">东莞市</Option>
        <Option value="17">中山市</Option>
        <Option value="18">潮州市</Option>
        <Option value="19">揭阳市</Option>
        <Option value="20">云浮市</Option>
      </Select>
    </FormItem>

<FormItem
      id="cx-swsxz"
      label="机构性质："
      {...formItemLayout}>
      <Select showSearch id="cx-swsxz"  {...getFieldProps('swsxz')} style={{ width: 200 }} placeholder="请选择机构性质" >
        <Option value="1">合伙事务所</Option>
        <Option value="2">有限公司</Option>
        <Option value="3" >无</Option>
      </Select>
    </FormItem>

      <FormItem
      id="cx-zczj"
      label="注册资金："
      {...formItemLayout}>
       <Row>
        <Col span="9">
          <Input id="zj1" {...getFieldProps('zczj')} placeholder="请输入金额"/>
        </Col>
        <Col span="2">
          <p className="ant-form-split">至</p>
        </Col>
        <Col span="9">
           <Input id="zj2"  {...getFieldProps('zczj2')} placeholder="请输入金额"/>
        </Col>
        <Col span="4">
          <p className="ant-form-split">万元</p>
        </Col>
      </Row>
    </FormItem>
    <FormItem
      id="cx-zrs"
      label="总人数："
      {...formItemLayout}>
       <Row>
        <Col span="11">
          <Input id="zrs1" {...getFieldProps('zrs')} placeholder="请输入人数"/>
        </Col>
        <Col span="2">
          <p className="ant-form-split">至</p>
        </Col>
        <Col span="11">
           <Input id="zrs2" {...getFieldProps('zrs2')} placeholder="请输入人数"/>
        </Col>
        
      </Row>
    </FormItem>
    <FormItem
      id="cx-zyrs"
      label="执业人数："
      {...formItemLayout}>
       <Row>
        <Col span="11">
          <Input id="zyrs1" {...getFieldProps('zyrs')} placeholder="请输入人数"/>
        </Col>
        <Col span="2">
          <p className="ant-form-split">至</p>
        </Col>
        <Col span="11">
           <Input id="zyrs2" {...getFieldProps('zyrs2')} placeholder="请输入人数"/>
        </Col>
        
      </Row>
    </FormItem>
    <FormItem
      id="cx-clsj"
      label="成立日期："
      {...formItemLayout}>
        <Col span="11">
        <FormItem>
        <DatePicker id="clsj1"  placeholder="请选择日期" {...clsj} /></FormItem>
        </Col>
        <Col span="2">
          <p className="ant-form-split">至</p>
        </Col>
        <Col span="11">
         <FormItem>
            <DatePicker id="clsj2" placeholder="请选择日期"  {...clsj2} /></FormItem>
        </Col>
    </FormItem>
</Form>
</Row>
      </Modal>
        </Col>
        </Row>
   <div className="dataGird">
    <Panel > <Table columns={Model.columns} 
           dataSource={this.state.data} 
          pagination={this.state.pagination}
           onChange={this.handleTableChange} 
           onRowClick={this.onSelect}
        loading={this.state.loading}  bordered   /></Panel>
                 </div>

       <Panel ><Tabs type="line" onChange={this.callback}>
    <TabPane tab="事务所信息" key="1"><CompBaseTable data = {this.state.dataxx}  model ={Model.data} bordered striped /><p className="nbjgsz">内部机构设置：</p><Table columns={Model.nbjgsz} dataSource={this.state.datalist} bordered  size="small" /></TabPane>
    <TabPane tab="执业人员信息" key="2"><Table columns={Model.columnsZyry} dataSource={this.state.datalist} bordered  size="small" /></TabPane>
   <TabPane tab="从业人员信息" key="3"><Table columns={Model.columnsCyry} dataSource={this.state.datalist} bordered  size="small" /></TabPane>
   <TabPane tab="出资人列表" key="4"><Table columns={Model.columnsCzrlb} dataSource={this.state.datalist} bordered  size="small" /></TabPane>
   <TabPane tab="事务所变更信息" key="5"><Table columns={Model.columnsSwsbgxx} dataSource={this.state.datalist} bordered  size="small" /></TabPane>
   <TabPane tab="年检记录" key="6"><Table columns={Model.columnsNjjl} dataSource={this.state.datalist} bordered  size="small" /></TabPane>
        </Tabs></Panel>
          </div>

        </div>
        
    }
})
jgcx = Form.create()(jgcx);
module.exports = jgcx;


