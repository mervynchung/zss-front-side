/**
 * Created by ming on 2016/4/11.
 */

const model = {
    columns: [{
        title: '年度',
        dataIndex: 'nd',
        key: 'nd',
        width: 60
    }, {
        title: '事务所名称',
        dataIndex: 'swsmc',
        key: 'swsmc',
        width: 300
    }, {
        title: '申请退回原因',
        dataIndex: 'sqthyy',
        key: 'sqthyy',
        width: 150,
        render(text,record){
            if(!!text && text.length > 10){
                text = text.substr(0,20)+'...'
            }
            return text
        }
    }, {
        title: '业务类型',
        key: 'ywlx',
        dataIndex: 'ywlx',
        width: 220
    }, {
        title: '报备号码',
        key: 'bbhm',
        dataIndex: 'bbhm',
        width:150
    }, {
        title: '报备日期',
        key: 'bbrq',
        dataIndex: 'bbrq',
        width:100
    }, {
        title: '业务状态',
        key: 'ywzt',
        dataIndex: 'ywzt'
    }]
};

module.exports = model;