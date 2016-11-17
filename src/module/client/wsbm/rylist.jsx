import React from 'react'
import {Table} from 'antd'

const c = React.createClass({
    //表格中的复选框勾选
    handleSelectedRowChange(selectedRowKeys){
        this.props.onSelected(selectedRowKeys)
    },
    render(){
        const columns = {
            columns: [{
                title: '姓名',
                dataIndex: 'xming',
                key: 'xh',
                width: 50
            }, {
                title: '性别',
                dataIndex: 'xb_dm',
                key: 'xb_dm',
                width: 250
            },{
                title: '职务',
                key: 'zw_dm',
                dataIndex: 'zw_dm',
                width:90
            },{
                title: '移动电话',
                key: 'yddh',
                dataIndex: 'yddh',
                width: 90
            },{
                title: '入住时间',
                key: 'rzsj',
                dataIndex: 'rzsj',
                width: 90
            }, {
                title: '离开时间',
                key: 'lksj',
                dataIndex: 'lksj',
                width:80
            }, {
                title: '房型',
                key: 'fjlx',
                dataIndex: 'fjlx',
                width:80,
            }, {
                title: '就餐类型',
                key: 'jclx',
                dataIndex: 'jclx',
            }]
        };
        const {data} = this.props;
        const rowSelection = {
            type: 'checkbox',
            selectedRowKeys: this.state.selectedRowKeys,
            onChange: this.handleSelectedRowChange
        };
        return <div >
            <Table dataSource={data} columns={columns} pagination={false} rowSelection={rowSelection}/>
        </div>

    }
})