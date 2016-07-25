import React from 'react'
import {Row,Col,Form,Checkbox,Button,Input,DatePicker,Modal  } from 'antd'
import {SelectorCS,SelectorMZ,SelectorXL,SelectorZZMM,SelectorXB,SelectorZW,SelectorIS} from 'component/compSelector'
import './untils.js'

const FormItem = Form.Item;
const createForm = Form.create;
const TrWrapper = React.createClass({
    render(){
        return <tr>{this.props.children}</tr>
    }
})

let baseTable = React.createClass({
    handleReset(e) {
        this.props.form.resetFields();
    },

    // componentWillReceiveProps(nextProps){
    //     if (this.props.re!=nextProps.re) {
    //         this.handleReset();
    //     };
    // },
    handleSubmit(){
        this.props.form.validateFieldsAndScroll((errors, values) => {//条件校验处理
              if (!!errors) {
                    Modal.info({ title: '提示', content: (<div><p><b>请填写所有必填项</b></p> </div>)});
                return;
            }

            let value = this.props.form.getFieldsValue();
            var ls = [];
            const old = this.props.data;
            for(var key in value){
                    if(Object.prototype.toString.call(value[key])=="[object Date]"){//时间格式化
                        var dd = value[key].Format("yyyy-MM-dd");
                        value[key]=dd;
                    };
                    if (old[key]!=value[key]) {//是否变更数据
                                if(Object.prototype.toString.call(value[key])=="[object Number]"){//变更项代码--名称转换
                                ls.push({mc:this.props.bgmc.props[key],jzhi:this.props.bgmc.dzb[key][old[key]],xzhi:this.props.bgmc.dzb[key][value[key]]});
                            }else{
                                ls.push({mc:this.props.bgmc.props[key],jzhi:old[key],xzhi:value[key]});
                            };
                    };
            };

            if (ls.length!=0) {
                value.bgjl=ls;
                // this.props.onSubmit(value);
                console.log(value);
            }else{
                Modal.info({ title: '提示', content: (<div><p>没有变更数据，请检查后提交</p> </div>)});
                return;
            };

            });
    },
    showConfirm(e) {
            e.preventDefault();
            var that=this;
              Modal.confirm({
                title: '您是否确认要提交以上变更信息？',
                content: '变更项目提交后将提交中心管理端审批，在变更审批完成前，将不能再进行变更操作',
                onOk() {
                  that.handleSubmit();
                },
              });
            },
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
                if (prop.required) {
                td.push(<td key={'td-k-'+prop.id} style={{'width':'200px'}} className="prop-name"><span style={{'color':'red',fontSize:'large'}}>*</span>{prop.name}</td>);
                }else{
                td.push(<td key={'td-k-'+prop.id} style={{'width':'200px'}} className="prop-name">{prop.name}</td>);
                };
                if (!!prop.inputType) {
                    switch(prop.inputType){
                        case "date":
                                 td.push(<td key={'td-v-'+prop.id}><DatePicker { ...getFieldProps(prop.id, {rules: [{ type: prop.type,required: !!prop.required}]})}></DatePicker></td>);break;
                        case "cs":
                                 td.push(<td key={'td-v-'+prop.id}><SelectorCS style={{'width':'200px'}} { ...getFieldProps(prop.id, { rules: [{ type: prop.type,required: !!prop.required}]})}></SelectorCS></td>);break;
                        case "mz":
                                 td.push(<td key={'td-v-'+prop.id}><SelectorMZ style={{'width':'200px'}} { ...getFieldProps(prop.id, { rules: [{ type: prop.type,required: !!prop.required}]})}></SelectorMZ></td>);break;
                        case "xl":
                                 td.push(<td key={'td-v-'+prop.id}><SelectorXL style={{'width':'200px'}} { ...getFieldProps(prop.id, { rules: [{ type: prop.type,required: !!prop.required}]})}></SelectorXL></td>);break;
                        case "xb":
                                 td.push(<td key={'td-v-'+prop.id}><SelectorXB style={{'width':'100px'}} { ...getFieldProps(prop.id, { rules: [{ type: prop.type,required: !!prop.required}]})}></SelectorXB></td>);break;
                        case "zzmm":
                                 td.push(<td key={'td-v-'+prop.id}><SelectorZZMM style={{'width':'200px'}} { ...getFieldProps(prop.id, { rules: [{ type: prop.type,required: !!prop.required}]})}></SelectorZZMM></td>);break;
                        case "zw":
                                 td.push(<td key={'td-v-'+prop.id}><SelectorZW style={{'width':'200px'}} { ...getFieldProps(prop.id, { rules: [{ type: prop.type,required: !!prop.required}]})}></SelectorZW></td>);break;
                        case "is":
                                 td.push(<td key={'td-v-'+prop.id}><SelectorIS style={{'width':'100px'}} { ...getFieldProps(prop.id, { rules: [{ type: prop.type,required: !!prop.required}]})}></SelectorIS></td>);break;
                    }
                }else{
                 td.push(<td key={'td-v-'+prop.id}><Input { ...getFieldProps(prop.id, { rules: [{type: prop.type, required: !!prop.required}]})}></Input></td>);
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
                <tbody key="0001">
                {tr}
                </tbody>
                <tbody key="0002">
                <tr key="0003"><td key="0004" colSpan='10'><div style={{float:'right'}}>
                <Button type="primary"  htmlType="submit" onClick={this.showConfirm} loading={this.props.submitLoading}>提交</Button><span className="ant-divider"></span>
                <Button type="ghost"  htmlType="submit" onClick={this.handleReset} >重置</Button>
                </div></td></tr>
                </tbody>
                
            </table>
        </div>
    }
})
baseTable = createForm({
    mapPropsToFields(props) {
        let result = {};
        for (let i = 0; i < props.model.props.length; i++) {
            let prop = props.model.props[i];
            if (prop.inputType=="date") {
                var dd = null;
                if (!!props.data[prop.id]) {
                         dd = new Date(props.data[prop.id].toString().replace(/-/g, "/"));
                 };
                result[prop.id] = {value: dd};
            }else{
            result[prop.id] = {value: props.data[prop.id]}
            };
        };
        return result;
    }
})(baseTable);
module.exports = baseTable;