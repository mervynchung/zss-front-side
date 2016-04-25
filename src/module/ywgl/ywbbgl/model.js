/**
 * Created by ming on 2016/4/11.
 */
const model = {
    columns: [{
        title: '序号',
        dataIndex: 'key',
        key: 'key'
    }, {
        title: '年度',
        dataIndex: 'nd',
        key: 'nd',
        width: '60px'
    }, {
        title: '事务所名称',
        dataIndex: 'swsmc',
        key: 'swsmc',
    }, {
        title: '业务发生地',
        key: 'cs',
        dataIndex: 'cs',
    }, {
        title: '业务类型',
        key: 'ywlx',
        dataIndex: 'ywlx',
        width: '100px',
    }, {
        title: '报告文号',
        key: 'bgwh',
        dataIndex: 'bgwh',
    }, {
        title: '协议金额',
        key: 'xyje',
        dataIndex: 'xyje',
    }, {
        title: '实际收取金额',
        key: 'sjsqje',
        dataIndex: 'sjsqje',
    }, {
        title: '报备号码',
        key: 'bbhm',
        dataIndex: 'bbhm',
    }, {
        title: '报备日期',
        key: 'bbrq',
        dataIndex: 'bbrq',
    }, {
        title: '验证码',
        key: 'yzm',
        dataIndex: 'yzm',
    }],
    entityModel:{
        colGroupNum:2,
        props:[{
            id: 'XYWH',
            name: '协议文号'
        }, {
            id: 'XYH',
            name: '协议报备号码'
        }, {
            id: 'WTDWMC',
            name: '委托单位名称'
        }, {
            id: 'DJHM_GS',
            name: '委托企业国税税务登记证号'
        }, {
            id: 'DJHM_DS',
            name: '委托企业地税税务登记证号'
        }, {
            id: 'JFLXR',
            name: '甲方联系人--委托企业联系人'
        }, {
            id: 'JFTELEPHONE',
            name: '甲方电话号码'
        }, {
            id: 'JFADDRESS',
            name: '甲方地址--委托企业联系地址',
            groupspan: 2

        }, {
            id: 'SWSMC',
            name: '事务所名称'
        }]
    }
};

module.exports = model;