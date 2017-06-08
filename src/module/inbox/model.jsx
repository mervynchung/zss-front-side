/**
 * Created by ming on 2016/4/11.
 */
import React from 'react'
import {Icon} from 'antd'
function openlink(record){

}
const model = {
    setfunc(func){
        openlink = func
    },
    columns: [{
        title: '时间',
        dataIndex: 'create_time',
        key: 'create_time',
        width: 130
    },{
        title:'状态',
        dataIndex:'zt',
        key:'zt',
        width:50,
        render(text,record){
            if(text == 1){
                return <Icon type="mail" className="ms-orange"/>
            }else{
                return <Icon type="mail" className="ms-gray"/>
            }
        }
    },{
        title: '标题',
        dataIndex: 'title',
        key: 'title',
        width: 300,
        render(text,record){
            return <a onClick={()=> {openlink(record)}}>{text}</a>
        }
    },{
        title: '类型',
        dataIndex: 'type',
        key: 'type',
        width: 100
    }]
};

module.exports = model;

