import React from 'react'
import {Table, Modal, Row, Col, Button, Icon, Alert} from 'antd'
import List from './list'
import model from './model'
import config from 'common/configuration'
import {jsonCopy} from 'common/utils'


const c = React.createClass({

    componentDidMount(){
    },
    /*计算column里定义的width总和，没有定义width的列宽按100(px)计算*/
    getColWidth(model){
        let w = 0;
        model.columns.map(item=> {
            w = item.width ? w + item.width : w + 100;
        });
        return w;
    },

    render(){
        //重新复制一个model对象，使修改不会影响原model对象，避免每次组件渲染时给原model对象累积赋值
        const m = jsonCopy(model);
        m.columns.push({
            title: '操作',
            key: 'action',
            fixed: 'right',
            width: 100,
            render(){
                return <span><a>退回</a></span>
            }
        });

        const listSetting = {
            title: '业务报备管理',
            helperTitle: '业务报备使用帮助',
            helperDesc: <div><p>本功能主要提供本年度业务备案查询</p></div>,
            scrollx: this.getColWidth(model),
            keyCol: 'id',
            pageSize: 2,
            columns: m.columns,
            apiUrl: config.HOST + config.URI_API_PROJECT + '/ywbb'
        };

        return <div className="ywbbgl">
            <div className="wrap">
                <List {...listSetting}/>
            </div>
        </div>
    }
});

module.exports = c;