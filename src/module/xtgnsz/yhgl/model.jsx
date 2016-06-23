import React from 'react'

module.exports = {
    columns: [
        {title: '用户名', dataIndex: 'name', key: 'name'},
        {
            title: '描述',
            dataIndex: 'username',
            key: 'description'

        }, {
            title: '操作',
            key: 'operation',
            render:(text, record) =>{
                return <span> <a onClick={()=>foo(record)}>修改</a></span>
            }
        }
    ],
    pagination: {
        pageSize: 10
    }

};