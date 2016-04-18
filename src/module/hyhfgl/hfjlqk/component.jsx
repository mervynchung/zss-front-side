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
import Panel from 'component/compPanel'


const columns = [{
  title: '序号',
  dataIndex: 'ID',
  key: 'ID',
},{
  title: '年度',
  dataIndex: 'ND',
  key: 'ND',
  sorter:true,
}, {
  title: '机构名称',
  dataIndex: 'JGNAME',
  key: 'JGNAME',
  sorter:true,
},{
  title: '主营业务收入',
  dataIndex: 'ZYYWSR',
  key: 'ZYYWSR',
}, {
  title: '总缴纳额',
  dataIndex: 'ZJNE',
  key: 'ZJNE',
},{
  title: '应缴团体会费',
  dataIndex: 'YJTTHF',
  key: 'YJTTHF',
},{
  title: '已缴团体会费',
  dataIndex: 'YJTTHF1',
  key: 'YJTTHF1',
},{
  title: '欠交团体会费',
  dataIndex: 'QJTTHF',
  key: 'QJTTHF',
}, {
  title: '应缴个人会费',
  dataIndex: 'YJGRHF',
  key: 'YJGRHF',
}, {
  title: '已缴个人会费',
  dataIndex: 'YJGRHF2',
  key: 'YJGRHF2',
},{
  title: '欠交个人会费',
  dataIndex: 'QJGRHF',
  key: 'QJGRHF',
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

const hfjlqk = React.createClass({
   getInitialState() {
        return {
            data: [],
            pagination: {},
        };
    },

  handleTableChange(pagination, filters, sorter) {
    req({
      url: '/api/hfjnqk?pagenum='+pagination.current+'&pagesize='+pagination.pageSize+'&sfield='+sorter.field+'&sorder='+sorter.order,
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
    fetch_hfjlqk() {
    req({
      url: '/api/hfjnqk?pagenum=1&pagesize=5&sfield=unll&sorder=unll',
      method: 'get',
      type: 'json',
      success: (result) => {
function showTotal() {
  return "共"+pagination.total+"条";
}
 const pagination = this.state.pagination;
        pagination.total = result.page.total_number;
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
    this.fetch_hfjlqk();
  },

 render() {
    return <div className="wrap">
          <Panel>
           <Table columns={columns} 
           dataSource={this.state.data} 
           pagination={this.state.pagination}
           onChange={this.handleTableChange} 
        bordered size="small" />
          </Panel>
        </div>
  }
})

module.exports = hfjlqk;

