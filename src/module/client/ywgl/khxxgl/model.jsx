import React from 'react'
import {Icon} from 'antd'

module.exports = {
    columns: [
        {title: '客户单位名称', dataIndex: 'DWMC', key: 'DWMC'},
        {title: '联系地址', dataIndex: 'DWDZ', key: 'DWDZ'},
        {title: '联系人', dataIndex: 'LXR', key: 'LXR'},
        {title: '联系电话', dataIndex: 'LXDH', key: 'LXDH'},
        {title: '纳税人识别号', dataIndex: 'NSRSBH', key: 'NSRSBH'},
        {title: '地税纳税人识别号', dataIndex: 'NSRSBHDF', key: 'NSRSBHDF'},
        {
            title: '纳税人性质',
            dataIndex: 'NSRXZ',
            key: 'NSRXZ',
            render(text){
                if (text == 0) {
                    return '一般纳税人'
                } else if(text == 1){
                    return '小规模纳税人'
                } else{
                    return ''
                }
            }

        }
    ]
};