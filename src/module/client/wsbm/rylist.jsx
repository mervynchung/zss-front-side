import React from 'react'
import {Table} from 'antd'

const c = React.createClass({
    render(){
        const columns = {
            columns: [{
                title: '姓名',
                dataIndex: 'xh',
                key: 'xh',
                width: 50
            }, {
                title: '性别',
                dataIndex: 'bt',
                key: 'bt',
                width: 250
            },{
                title: '职务',
                key: 'pxkssj',
                dataIndex: 'pxkssj',
                width:90
            },{
                title: '结束时间',
                key: 'pxjssj',
                dataIndex: 'pxjssj',
                width: 90
            }, {
                title: '联系人',
                key: 'pxlxr',
                dataIndex: 'pxlxr',
                width:80
            }, {
                title: '报名截止日',
                key: 'bmjzsj',
                dataIndex: 'bmjzsj',
                width: 90
            }, {
                title: '发布状态',
                key: 'fbzt',
                dataIndex: 'fbzt',
                width:80,
                render(text, record){
                    if(text == 1){
                        return <Progress type="circle" percent={100} format={percent =>'已截至'} width={30} />
                    }else {
                        return <Progress type="circle" percent={75} format={percent => `报名中`} width={30} />
                    }
                }
            }, {
                title: '报名状态',
                key: 'isbm',
                dataIndex: 'isbm',
                render(text, record){
                    if(text == 1){
                        return <Tag color="green">已报名</Tag>
                    }else {
                        return <Tag color="red">未报名</Tag>
                    }
                }
            }]
        };
        const {data} = this.props;
        return <Table dataSource={data} columns={columns}/>
    }
})