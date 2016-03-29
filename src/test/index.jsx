import '../common/lib.js';
import {Button,message} from 'antd';
import ReactDOM from 'react-dom';
import React from 'react';
import { Table, Icon } from 'antd';
import req from 'reqwest'
import { Tabs } from 'antd';

import { Form, Input, Button, Checkbox } from 'antd';
const FormItem = Form.Item;

let Demo = React.createClass({
  handleSubmit(e) {
    e.preventDefault();
    console.log('收到表单值：', this.props.form.getFieldsValue());
  },

  render() {
    const { getFieldProps } = this.props.form;
    return (
      <Form inline onSubmit={this.handleSubmit}>
        <FormItem
          label="账户：">
          <Input placeholder="请输入账户名"
            {...getFieldProps('userName')} />
        </FormItem>
        <FormItem
          label="密码：">
          <Input type="password" placeholder="请输入密码"
            {...getFieldProps('password')} />
        </FormItem>
        <FormItem>
          <label className="ant-checkbox-inline">
            <Checkbox
              {...getFieldProps('agreement')} />记住我
          </label>
        </FormItem>
        <Button type="primary" htmlType="submit">登录</Button>
      </Form>
    );
  }
});

Demo = Form.create()(Demo);

ReactDOM.render(<Demo />, mountNode);



ReactDOM.render(<Tabs onChange={callback} type="line">
    <TabPane tab="选项卡一" key="1">选项卡一内容</TabPane>
    <TabPane tab="选项卡二" key="2">选项卡二内容</TabPane>
    <TabPane tab="选项卡三" key="3">选项卡三内容</TabPane>
  </Tabs>
, document.getElementById('react-content'));

//ReactDOM.render(<Demo />,document.getElementById('react-content'));

//分页
/*import { Table } from 'antd';

const columns = [{
  title: '姓名',
  dataIndex: 'name',
  render(text) {
    return <a href="#">{text}</a>;
  }
}, {
  title: '年龄',
  dataIndex: 'age'
}, {
  title: '住址',
  dataIndex: 'address'
}];

const data = [];
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    name: `李大嘴${i}`,
    age: 32,
    address: `西湖区湖底公园${i}号`
  });
}

const pagination = {
  total: data.length,
  current: 1,
  showSizeChanger: true,
  onShowSizeChange(current, pageSize) {
    console.log('Current: ', current, '; PageSize: ', pageSize);
  },
  onChange(current) {
    console.log('Current: ', current);
  }
};

ReactDOM.render(<Table columns={columns} dataSource={data} pagination={pagination} />
, mountNode);*/

//头固定
/*import { Table } from 'antd';

const columns = [{
  title: '姓名',
  dataIndex: 'name',
  width: 150,
}, {
  title: '年龄',
  dataIndex: 'age',
  width: 150,
}, {
  title: '住址',
  dataIndex: 'address',
}];

const data = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    name: `李大嘴${i}`,
    age: 32,
    address: `西湖区湖底公园${i}号`
  });
}

ReactDOM.render(
  <Table columns={columns} dataSource={data} pagination={{ pageSize: 50 }} useFixedHeader />
, mountNode);*/