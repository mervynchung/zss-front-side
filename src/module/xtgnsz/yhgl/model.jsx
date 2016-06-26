import React from 'react'
import {Icon} from 'antd'

module.exports = {
    columns: [
        {title: '用户名', dataIndex: 'username', key: 'username'},
        {title: '登录名', dataIndex: 'uname', key: 'uname'},
        {title: 'Email', dataIndex: 'email', key: 'email'},
        {
            title: '账户有效',
            dataIndex: 'accountEnabled',
            key: 'accountEnabled',
            render(text){
                if (text == 1) {
                    return <Icon type="check-circle" style={{color:'#60BE29'}}/>
                } else {
                    return <Icon type="info-circle" style={{color:'#E01515'}}/>
                }
            }

        }, {
            title: '账户过期',
            dataIndex: 'accountExpired',
            key: 'accountExpired',
            render(text){
                if (text == 1) {
                    return <Icon type="info-circle" style={{color:'#E01515'}}/>
                } else {
                    return <Icon type="check-circle" style={{color:'#60BE29'}}/>
                }
            }
        }, {
            title: '锁定',
            dataIndex: 'accountLocked',
            key: 'accountLocked',
            render(text){
                if (text == 1) {
                    return <Icon type="info-circle" style={{color:'#E01515'}}/>
                } else {
                    return <Icon type="check-circle" style={{color:'#60BE29'}}/>
                }
            }
        }, {
            title: '密码过期',
            dataIndex: 'credentialsExpired',
            key: 'credentialsExpired',
            render(text){
                if (text == 1) {
                    return <Icon type="info-circle" style={{color:'#E01515'}}/>
                } else {
                    return <Icon type="check-circle" style={{color:'#60BE29'}}/>
                }
            }
        },
        {title: '账户描述', dataIndex: 'names', key: 'names'},
        {title: '创建时间', dataIndex: 'createTime', key: 'createTime'},
        {
            title: '操作',
            key: 'operation',
            render: (text, record) => {
                return <span> <a>编辑</a></span>
            }
        }
    ]
};