import React from 'react'

module.exports = {
    columns: [
        {title: '用户名', dataIndex: 'username', key: 'username'},
        {title: '登录名', dataIndex: 'uname', key: 'uname'},
        {title: 'Email', dataIndex: 'email', key: 'email'},
        {title: '账户有效', dataIndex: 'accountEnabled', key: 'accountEnabled'},
        {title: '账户过期', dataIndex: 'accountExpired', key: 'accountExpired'},
        {title: '锁定', dataIndex: 'accountLocked', key: 'accountLocked'},
        {title: '密码过期', dataIndex: 'credentialsExpired', key: 'credentialsExpired'},
        {title: '账户描述', dataIndex: 'names', key: 'names'},
        {title: '创建时间', dataIndex: 'createTime', key: 'createTime'},
        {
            title: '操作',
            key: 'operation',
            render: (text, record) => {
                return <span> <a>编辑</a></span>
            }
        }
    ],
    pagination: {
        pageSize: 10
    }

};