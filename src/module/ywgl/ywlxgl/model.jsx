/**
 * Created by ming on 2016/4/11.
 */
import React from 'react'
import {Tag} from 'antd'
function openlink(record){

}
const model = {
    setfunc(func){
        openlink = func
    },
    columns: [{
        title: '名称',
        dataIndex: 'MC',
        key: 'MC',
        width: 300
    },{
        title: '是否启用',
        dataIndex: 'ISQY',
        key: 'ISQY',
        width: 100,
        render(text, record){
            if(text == 1){
                return <Tag color="green">启用中</Tag>
            }else {
                return <Tag color="red">关闭</Tag>
            }
        }
    },{
        title: '操作',
        dataIndex: 'action',
        key: 'action',
        width: 100,
        render(text,record){
            return <a onClick={()=> {openlink(record)}}>修改</a>
        }
    }]
};

module.exports = model;