const model = {
    columns: [
        { title: '姓名', dataIndex: 'xming', key: 'xming' },
        { title: '单位名称', dataIndex: 'dwmc', key: 'dwmc' },
        { title: '资格证书编号', dataIndex: 'zyzgzsbh', key: 'zyzgzsbh' },
        { title: '执业注册编号', key: 'zyzsbh', dataIndex: 'zyzsbh' },
        { title: '身份证号', key: 'sfzh', dataIndex: 'sfzh' },
        { title: '状态', key: 'spzt', dataIndex: 'zt' },
    ],
    expCol: [
        { title: '序号', dataIndex: 'key', key: 'key' },
        {
            title: '通过时间',
            dataIndex: 'SJ',
            key: 'SJ',
        },
        {
            title: '姓名',
            dataIndex: 'XMING',
            key: 'XMING',
        },
        {
            title: '性别',
            key: 'MC',
            dataIndex: 'MC',
        },
        {
            title: '身份证号码',
            key: 'SFZH',
            dataIndex: 'SFZH',
        },
        {
            title: '所属事务所',
            key: 'DWMC',
            dataIndex: 'DWMC',
        },
        { title: '变更事项', key: 'BGSX', dataIndex: 'BGSX' },
        { title: '变更内容', key: 'BGNR', dataIndex: 'BGNR' },
    ],
};

module.exports = model;