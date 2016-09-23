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
        title: '资格证编号',
        key: 'zyzgzsbh',
        dataIndex: 'zyzgzsbh',
        width:300
    }, {
        title: '执业注师编号',
        key: 'zyzsbh',
        dataIndex: 'zyzsbh',
        width: 220
    }, {
        title: '学历',
        key: 'xl',
        dataIndex: 'xl',
        width:150
    }, {
        title: '职位',
        key: 'zw',
        dataIndex: 'zw',
        width:100
    }]
};

module.exports = model;