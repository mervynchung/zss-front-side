import numeral from 'Numeral'
const model = {
    columns: [
        {title: '序号', dataIndex: 'key', key: 'key'},
        {title: '事务所名称', dataIndex: 'dwmc', key: 'dwmc'},
        {title: '统计年度', dataIndex: 'ND', key: 'ND'},
        {title: '人员总数', key: 'RYZS_RY_ZJ', dataIndex: 'RYZS_RY_ZJ'},
        {title: '执业税务师总数', key: 'ZYSWS_RY_ZJ', dataIndex: 'ZYSWS_RY_ZJ'},
        {title: '其他从业人数', key: 'QTCYRY_RY_ZJ', dataIndex: 'QTCYRY_RY_ZJ'},
        {title: '上报日期', key: 'sbsj', dataIndex: 'sbsj'},
        {title: '状态', key: 'bbzt', dataIndex: 'bbzt'},
    ],
};

module.exports = model;