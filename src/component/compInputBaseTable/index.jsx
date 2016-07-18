import React from 'react'
import {Row,Col,Form,Checkbox,Button,Input,DatePicker,Modal  } from 'antd'
import './style.css'

const FormItem = Form.Item;
const createForm = Form.create;
const TrWrapper = React.createClass({
    render(){
        return <tr>{this.props.children}</tr>
    }
})

let baseTable = React.createClass({
    render(){
        const { getFieldProps } = this.props.form;
        let colCount = 0;
        const colgroup = [];
        const tr = [];
        let td = [];
        const colGroupNum = this.props.model.colGroupNum < 5 ? this.props.model.colGroupNum : 2
        //设置colgroup样式
        for (let i = 0; i < colGroupNum; i++) {
            let spanKey = 24 / (colGroupNum * 3);
            let spanValue = 24 * 2 / (colGroupNum * 3);
            if (colGroupNum == 3) {
                spanKey = 3;
                spanValue = 5;
            }
            colgroup.push(<col key={'c-k-'+i} className={'col-'+spanKey}></col>);
            colgroup.push(<col key={'c-v-'+i} className={'col-'+spanValue}></col>);
        }
        //将实体内容以key:value放置到对应的td组中，再按照colGroupNum分列
        for (let i = 0; i < this.props.model.props.length; i++) {
            let prop = this.props.model.props[i];
            //处理跨列项目
            if (prop.groupspan) {
                if (colGroupNum < colCount + prop.groupspan) {
                    tr.push(<TrWrapper key={'tr-'+tr.length+1}>{td}</TrWrapper>);
                    td = [];
                    colCount = 0;
                }
                td.push(<td style={{'width':'200px'}} key={'td-k-'+prop.id} className="prop-name">{prop.name}</td>);
                td.push(<td key={'td-v-'+prop.id} colSpan={prop.groupspan*2-1}>{this.props.data[prop.id]}</td>);
                colCount += prop.groupspan
                //处理非跨列项目
            } else {
                td.push(<td key={'td-k-'+prop.id} style={{'width':'200px'}} className="prop-name">{prop.name}</td>);
                // td.push(<td key={'td-v-'+prop.id}>{this.props.data[prop.id]}</td>);
                if (!!prop.inputType) {
                    if (prop.inputType=="date") {
                         td.push(<td key={'td-v-'+prop.id}><DatePicker { ...getFieldProps(prop.id, { initialValue: this.props.data[prop.id],rules: [{ required: !!prop.required}]})}></DatePicker></td>);
                    };
                }else{
                 td.push(<td key={'td-v-'+prop.id}><Input { ...getFieldProps(prop.id, { initialValue: this.props.data[prop.id],rules: [{ required: !!prop.required}]})}></Input></td>);
                };
                colCount += 1;
            }
            if (colCount == colGroupNum) {
                tr.push(<TrWrapper key={'tr-'+tr.length+1}>{td}</TrWrapper>);
                td = [];
                colCount = 0;
            } else if (i == this.props.model.props.length - 1) {
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
baseTable = createForm()(baseTable);
module.exports = baseTable;