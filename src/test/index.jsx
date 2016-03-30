import 'common/lib.js'
import React from 'react'
import {Col,Row} from 'antd'
import ReactDom from 'react-dom'
import BaseTable from 'component/compBaseTable'
import './style.css'

const data = {
        name: '胡延兵',
        age: '23',
        sex: '男',
        xl: '本科',
        cs: '广州',
        dz: '中山三路中山三路中山三路中山三路中山三路中山三路',
        byyx: '北京大学',
        zgzh: '34454394',
        barq: '2016-01-01'

    }
const model= {
    colGroupNum: 3,
    props: [{
        id: 'name',
        name: '姓名'
    }, {
        id: 'age',
        name: '年龄'
    }, {
        id: 'sex',
        name: '性别'
    }, {
        id: 'xl',
        name: '学历'
    }, {
        id: 'cs',
        name: '城市'
    }, {
        id: 'dz',
        name: '地址'
    }, {
        id: 'byyx',
        name: '毕业院校'
    }, {
        id: 'zgzh',
        name: '证书编号',
        groupspan: '2'
    }, {
        id: 'barq',
        name: '备案日期'
    }]
}

const demo = <div className="wrapper"><BaseTable data={data} model={model} bordered striped/></div>

ReactDom.render(demo, document.getElementById('react-content'));