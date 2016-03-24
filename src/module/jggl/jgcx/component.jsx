import {
  Button, message
}
from 'antd'
import React from 'react'
import req from 'reqwest'
import ReactDOM from 'react-dom'
import {
  Table, Icon
}
from 'antd'


const columns = [{
  title: '序号',
  dataIndex: 'xh',
  key: 'xh',
},{
  title: '机构名称',
  dataIndex: 'dwmc',
  key: 'dwmc',
  sorter:true,
}, {
  title: '注册资金',
  dataIndex: 'zczj',
  key: 'zczj',
  sorter:true,
},{
  title: '法定代表人',
  dataIndex: 'fddbr',
  key: 'fddbr',
    sorter:true,
}, {
  title: '证书编号',
  dataIndex: 'zsbh',
  key: 'zsbh',
},{
  title: '事务所性质',
  dataIndex: 'swsxz',
  key: 'swsxz',
},{
  title: '城市',
  dataIndex: 'cs',
  key: 'cs',
},{
  title: '总人数',
  dataIndex: 'zrs',
  key: 'zrs',
}, {
  title: '执业注税师人数',
  dataIndex: 'zyrs',
  key: 'zyrs',
}, {
  title: '成立时间',
  dataIndex: 'clsj',
  key: 'clsj',
   sorter:true,
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

const jgcx = React.createClass({
   getInitialState() {
        return {
            data: [],
            pagination: {},
        };
    },

handleTableChange(pagination, filters, sorter) {
 req({
      url: '/api/zs/jgs?pagenum='+pagination.current+'&pagesize='+pagination.pageSize+'&sfield='+sorter.field+'&sorder='+sorter.order,
      method: 'get',
      type: 'json',
      success: (result) => {
        const paper = this.state.pagination;     
         paper.pageSize = pagination.pageSize;
        this.setState({
          data: result.data,
        });
      }
    });
  },

  fetch_jgcx() {
    req({
      url: '/api/zs/jgs?pagenum=1&pagesize=5&sfield=null&sorder=null',
      method: 'get',
      type: 'json',
      success: (result) => {
function showTotal() {
  return "共"+pagination.total+"条";
}
        const pagination = this.state.pagination;
        pagination.total = result.page.pageTotal;
         pagination.pageSize = 5;
        pagination.showSizeChanger = true;
          pagination.showTotal = showTotal;
        pagination.showQuickJumper = true;
        pagination.size = 'small';
        pagination.pageSizeOptions = ['5', '10', '20', '30', '40'];
      
        this.setState({
          data: result.data,
        });
      }
    });
  },
componentDidMount() {
    this.fetch_jgcx();
  },

  render() {
    return <div className="wrap">
           <Table columns={columns} 
           dataSource={this.state.data} 
           pagination={this.state.pagination}
           onChange={this.handleTableChange} 
        bordered size="small" />

        </div>
  }
})

module.exports = jgcx;

