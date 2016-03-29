import 'common/lib.js'
import React from 'react'
import {Col,Row} from 'antd'
import ReactDom from 'react-dom'
import './style.css'

const data = {
    values: {
        name: '胡延兵',
        age: '23',
        sex: '男',
        xl: '本科',
        cs: '广州',
        dz: '中山三路中山三路中山三路中山三路中山三路中山三路',
        byyx: '北京大学',
        zgzh: '34454394',
        barq: '2016-01-01'
    },
    groupNum: 1,
    keys: {
        name: '姓名',
        age: '年龄',
        sex: '性别',
        xl: '学历',
        cs: '城市',
        dz: '地址',
        byyx: '毕业院校',
        zgzh: '证书编号',
        barq: '备案日期'
    }
}
const TrWrapper = React.createClass({
    render(){
        return <tr>{this.props.children}</tr>
    }
})

const BaseTable = React.createClass({
    render(){
        const colgroup = [];
        const tr = [];
        let td = [];
        const groupNum = this.props.data.groupNum;
        //设置colgroup样式
        for (let i = 0; i < (groupNum < 3 ? groupNum : 2); i++) {
            var spanKey = 24 / (groupNum * 3);
            var spanValue = 24 * 2 / (groupNum * 3);
            colgroup.push(<col key={'c-k-'+i} className={'col-'+spanKey}></col>);
            colgroup.push(<col key={'c-v-'+i} className={'col-'+spanValue}></col>);
        }
        //将实体内容以key:value放置到对应的td组中，再按照groupNum分列
        for (let prop in this.props.data.keys) {
            td.push(<td key={'td-k-'+prop}>{this.props.data.keys[prop]}</td>);
            td.push(<td key={'td-v-'+prop}>{this.props.data.values[prop]}</td>);
            if (td.length == groupNum * 2) {
                tr.push(<TrWrapper key={'tr-'+tr.length+1}>{td}</TrWrapper>);
                td = []
            }
        }
        return <div className={'base-table '+
             (this.props.bordered?'table-bordered ':' ')+
             (this.props.striped?'table-striped ':' ')}>
            <table>
                <colgroup>
                    {colgroup}
                </colgroup>
                <tbody>
                {tr}
                </tbody>
            </table>
        </div>
    }
})

const demo = <div className="wrapper"><BaseTable data={data} bordered striped/></div>

ReactDom.render(demo, document.getElementById('react-content'));