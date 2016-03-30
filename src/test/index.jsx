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
    colGroupNum: 2,
    keys: [{
        id: 'name',
        name: '姓名',
    }, {
        id: 'age',
        name: '年龄',
    }, {
        id: 'sex',
        name: '性别'
    }, {
        id: 'xl',
        name: '学历',
        groupspan: '2'
    }, {
        id: 'cs',
        name: '城市'
    }, {
        id: 'dz',
        name: '地址'
    }, {
        id: 'byyx',
        name: '毕业院校',
        groupspan: '2'
    }, {
        id: 'zgzh',
        name: '证书编号',
        groupspan: '2'
    }, {
        id: 'barq',
        name: '备案日期'
    }]
}
const TrWrapper = React.createClass({
    render(){
        return <tr>{this.props.children}</tr>
    }
})

const BaseTable = React.createClass({
    render(){
        let colCount = 0;
        const colgroup = [];
        const tr = [];
        let td = [];
        const colGroupNum = this.props.data.colGroupNum;
        //设置colgroup样式
        for (let i = 0; i < (colGroupNum < 3 ? colGroupNum : 2); i++) {
            let spanKey = 24 / (colGroupNum * 3);
            let spanValue = 24 * 2 / (colGroupNum * 3);
            colgroup.push(<col key={'c-k-'+i} className={'col-'+spanKey}></col>);
            colgroup.push(<col key={'c-v-'+i} className={'col-'+spanValue}></col>);
        }
        //将实体内容以key:value放置到对应的td组中，再按照colGroupNum分列
        for (let i = 0; i < this.props.data.keys.length; i++) {
            let key = this.props.data.keys[i];
            if(key.groupspan){
                if(colGroupNum < colCount+key.groupspan ){
                    tr.push(<TrWrapper key={'tr-'+tr.length+1}>{td}</TrWrapper>);
                    td=[];colCount=0;
                }
                td.push(<td key={'td-k-'+key.id}>{key.name}</td>);
                td.push(<td key={'td-v-'+key.id} colSpan={key.groupspan*2-1}>{this.props.data.values[key.id]}</td>);
                colCount+=key.groupspan
            }else{
                td.push(<td key={'td-k-'+key.id}>{key.name}</td>);
                td.push(<td key={'td-v-'+key.id}>{this.props.data.values[key.id]}</td>);
                colCount+=1;
            }
            if (0 == colCount % colGroupNum ) {
                tr.push(<TrWrapper key={'tr-'+tr.length+1}>{td}</TrWrapper>);
                td = [];colCount=0;
            }else if(i==this.props.data.keys.length-1){
                tr.push(<TrWrapper key={'tr-'+tr.length+1}>{td}</TrWrapper>);
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