/**
 * Created by admin on 2016/9/23.
 */

const model = {
    columns: [{
        title: '姓名',
        dataIndex: 'xming',
        key: 'xming',
        width: 60
    }, {
        title: '性别',
        dataIndex: 'xb',
        key: 'xb',
        width: 300
    }, {
        title: '年龄',
        key: 'age',
        dataIndex: 'age',
        width:300
    }, {
        title: '学历',
        key: 'xl',
        dataIndex: 'xl',
        width: 220
    }, {
        title: '出资额',
        key: 'cze',
        dataIndex: 'cze',
        width:150
    }, {
        title: '出资比率',
        key: 'bl',
        dataIndex: 'bl',
        width:100
    }]
};

module.exports = model;