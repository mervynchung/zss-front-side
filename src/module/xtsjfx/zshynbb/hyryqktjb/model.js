import React from 'react'
const columns = [
        {title: '项目', dataIndex: 'xmmc', key: 'xmmc'},
        {title: '总计', dataIndex: 'zrs', key: 'zrs'},
        {title: '其中：女', dataIndex: 'v_zrs', key: 'v_zrs'},
        {title: '男', dataIndex: 'n_zrs', key: 'n_zrs'},
        {title: '研究生以上', dataIndex: 'yjs_zrs', key: 'yjs_zrs'},
        {title: '大学本科', dataIndex: 'bk_zrs', key: 'bk_zrs'},
        {title: '大专', dataIndex: 'dz_zrs', key: 'dz_zrs'},
        {title: '中专及以下', dataIndex: 'zz_zrs', key: 'zz_zrs'},
        {title: '35岁以下', dataIndex: '35_zrs', key: '35_zrs'},
        {title: '36-50岁', dataIndex: '50_zrs', key: '50_zrs'},
        {title: '51-60岁', dataIndex: '60_zrs', key: '60_zrs'},
        {title: '60岁以上', dataIndex: '61_zrs', key: '61_zrs'},
        {title: '备注', dataIndex: 'bz', key: 'bz'},
    ];

const model = {
  columns:columns,
} 
module.exports = model