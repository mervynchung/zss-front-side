/**
 * Created by ming on 2016/4/11.
 */

const model = {
    columns: [{
        title: '序号',
        dataIndex: 'key',
        key: 'key',
        width: 60
    }, {
        title: '企业名称',
        dataIndex: 'nd',
        key: 'nd',
        width: 50
    },{
        title: '税务登记证号',
        key: 'ZTBJ',
        dataIndex: 'ZTBJ',
        width:80
    },{
        title: '业务发生地',
        key: 'HSQJJE_HS',
        dataIndex: 'HSQJJE_HS',
        width: 120
    }, {
        title: '报告文号',
        key: 'HSQJJE_JE',
        dataIndex: 'HSQJJE_JE',
        width:120
    }, {
        title: '报备号码',
        key: 'TZYNSDSE_HS',
        dataIndex: 'TZYNSDSE_HS',
        width: 100
    }, {
        title: '一级复核',
        key: 'TZYNSDSE_JE',
        dataIndex: 'TZYNSDSE_JE',
        width:100
    }, {
        title: '二级复核',
        key: 'TJYNSDSE_HS',
        dataIndex: 'TJYNSDSE_HS',
        width:100
    }, {
        title: '三级复核',
        key: 'TJYNSDSE_JE',
        dataIndex: 'TJYNSDSE_JE'
    }, {
        title: '签名注师',
        key: 'TJYNSDSE_JE',
        dataIndex: 'TJYNSDSE_JE'
    }, {
        title: '税别',
        key: 'TJYNSDSE_JE',
        dataIndex: 'TJYNSDSE_JE'
    }, {
        title: '主管税务机关',
        key: 'TJYNSDSE_JE',
        dataIndex: 'TJYNSDSE_JE'
    }, {
        title: '协议收费金额',
        key: 'TJYNSDSE_JE',
        dataIndex: 'TJYNSDSE_JE'
    }, {
        title: '实际收费金额',
        key: 'TJYNSDSE_JE',
        dataIndex: 'TJYNSDSE_JE'
    }, {
        title: '报备时间',
        key: 'TJYNSDSE_JE',
        dataIndex: 'TJYNSDSE_JE'
    }]
};

module.exports = model;