/**
 * 单实体数据表格展示组件
 * @props.data {Object} 实体数据集
 * @props.model {Object} 描述实体的属性定义，以及每行显示的属性组数
 * @props.header {Object} 描述表格的表头列
 * @props.bordered {boolean} 是否有边框
 * @props.loading {Object} 是否加载数据
 * 参考用法: const demo = <CompTable data={data} model={model} header={header} loading={loading} bordered/>
 */
import React from 'react'
import ReactDom from 'react-dom'
import {Spin} from 'antd'
import './style.css'

const TrWrapper = React.createClass({
    render(){
        return <tr>{this.props.children}</tr>
    }
})

const compTable = React.createClass({
    onClick(value){
        this.props.onColumnClick;
    },
    render(){
        let headerCol=this.props.header;//表头列
        let dataCol=this.props.columns;//数据列
        let datalist=this.props.dataSource;//数据集
        let size=this.props.size;
        let headerCount = headerCol.length;//表头列的个数
        let colCount = dataCol.length;//数据列的个数
        let sizeClass="ant-table-large";
        const colgroup = [];
        const th=[];
        const tr = [];
        let td = [];
        let lbj=0;//列序号
        let rowbj=1;//行序号
        let xCol=[];//记录合并行的列
        let xCount=0;//需要添加计算的列数
        
        if(size=="small"){
            sizeClass="ant-table-small";
        }else if(size=="middle"){
            sizeClass="ant-table-middle";
        }

        //渲染colgroup
        for (let i = 0; i < colCount; i++) {
            colgroup.push(<col key={'col-'+dataCol[i].key}></col>);
        }
        
        //渲染表格表头
        for(let i=0;i<headerCount;i++){
            let colSpan=headerCol[i].colSpan;
            let rowSpan=headerCol[i].rowSpan;
            if(!colSpan){colSpan=1};
            if(!rowSpan){rowSpan=1};
            if(rowSpan>1){xCol.push({row:rowSpan-1,col:colSpan})};
            if(rowSpan==1){
                if(colSpan==1){
                    td.push(<th key={'th-'+headerCol[i].key} >{headerCol[i].title}</th>);
                }else{
                    td.push(<th key={'th-'+headerCol[i].key} colSpan={colSpan}>{headerCol[i].title}</th>);
                }
            }else{
                if(colSpan==1){
                    td.push(<th key={'th-'+headerCol[i].key} rowSpan={rowSpan}>{headerCol[i].title}</th>);
                }else{
                    td.push(<th key={'th-'+headerCol[i].key} rowSpan={rowSpan} colSpan={colSpan}>{headerCol[i].title}</th>);
                }
            }
            lbj+=colSpan;
            if(lbj%colCount==0){
                th.push(<tr>{td}</tr>);
                lbj=0;
                rowbj++;
                for(let j=0;j<xCol.length;j++){
                if(xCol[j].row>0){ xCount+=xCol[j].col;}}
                lbj+=xCount;
                for(let j=0;j<xCol.length;j++){
                xCol[j].row=xCol[j].row-1}
                xCount=0;
                td=[];
            }
        }
          
        //渲染数据
        if(datalist.length==0){
            td.push(<td key="empty" colSpan={colCount}>
            <div className="ant-table-placeholder">
            <span>
            <i className="anticon anticon-frown"></i>
            <span>暂无数据</span>
            </span>
            </div>
            </td>);
            tr.push(<tr className="ant-table-row  ant-table-row-level-0">{td}</tr>);
            td=[];
        }else{
            for(let i=0;i<datalist.length;i++){
                let data=datalist[i];
                for(let j=0;j<colCount;j++){
                    td.push(<td key={dataCol[j].key}>{data[dataCol[j].key]}</td>);
                }
                tr.push(<tr className="ant-table-row  ant-table-row-level-0">{td}</tr>);
                td=[];
            }
        }
        

        return <Spin spinning={this.props.loading}>
        <div className={"ant-table "+ sizeClass+ " ant-table-scroll-position-left "+
             (this.props.bordered?' comp-table ant-table-bordered  ':' ')}>

        <div className={"ant-table-body "}>

        <table>
        <colgroup>{colgroup}</colgroup>
        <thead className={"ant-table-thead comp-table"}>{th}</thead>
        <tbody className={"ant-table-tbody"}>{tr}</tbody>
        </table>
        </div>
        </div>
        </Spin>
    }
});

module.exports=compTable;