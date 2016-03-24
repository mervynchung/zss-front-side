import '../common/lib.js';
import {Button,message} from 'antd';
import ReactDOM from 'react-dom';
import React from 'react';
import { Table, Icon } from 'antd';
import req from 'reqwest'

const columns = [{
  title: '姓名',
  dataIndex: 'name',
  key: 'name',
  render(text) {
    return <a href="#">{text}</a>;
  }
}, {
  title: '年龄',
  dataIndex: 'age',
  key: 'age',
}, {
  title: '住址',
  dataIndex: 'address',
  key: 'address',
}, {
  title: '操作',
  key: 'operation',
  render(text, record) {
    return (
      <span>
        <a href="#">操作一{record.name}</a>
        <span className="ant-divider"></span>
        <a href="#">操作二</a>
        <span className="ant-divider"></span>
        <a href="#" className="ant-dropdown-link">
          更多 <Icon type="down" />
        </a>
      </span>
    );
  }
}];
const data =  req({
            url:'/api/zs/jgs?pagenum=2&pagesize=3',
            type:'json',
            method:'get'
        })
        .then((resp) => {
            return(resp.data);
        })
        .fail((err,msg)=>{
             message.error('api错误')
        });

ReactDOM.render(<Table columns={columns} dataSource={data} />
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