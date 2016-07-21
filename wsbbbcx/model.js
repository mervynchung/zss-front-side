import numeral from 'Numeral'
const model = {
    columns: [
             {title: '序号', dataIndex: 'key', key: 'key'},
        {title: '报表年度', dataIndex: 'nd', key: 'nd'},
        {title: '事务所名称', dataIndex: 'dwmc', key: 'dwmc'},
        {title: '证书编号', key: 'zsbh', dataIndex: 'zsbh'},
        {title: '城市', key: 'cs', dataIndex: 'cs'},
        {title: '联系电话', key: 'dhhm', dataIndex: 'dhhm'},
        {title: '通讯员姓名', key: 'txyxm', dataIndex: 'txyxm'},
        {title: '通讯员联系电话', key: 'txyyddh', dataIndex: 'txyyddh'},
        {title: '上报状态', key: 'sbzt', dataIndex: 'sbzt'},
    ],
};

module.exports = model;