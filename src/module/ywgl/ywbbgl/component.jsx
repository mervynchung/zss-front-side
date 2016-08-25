import React from 'react'
import {Table, Modal, Row, Col, Button, Icon, Alert} from 'antd'
import List from './list'
import model from './model'
import config from 'common/configuration'
import {jsonCopy} from 'common/utils'


const c = React.createClass({

    componentDidMount(){
    },
    getColWidth(model){
        let v = 0;
        model.columns.map(item=>{
            v=item.width?v+item.width:v+100;
        });
        return v;
    },
    render(){
        //重新复制一个model对象，令它可以在每次
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