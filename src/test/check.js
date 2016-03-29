/**
 * Created by ming on 2016/3/29.
 */
var columns = [{
    title: '姓名',
    dataIndex: 'name',
    key: 'name'
}, {
    title: '年龄',
    dataIndex: 'age',
    key: 'age'
}, {
    title: '住址',
    dataIndex: 'address',
    key: 'address'
}, {
    title: '操作',
    key: 'operation',
}];

var newcol = columns.concat();
console.log(newcol)