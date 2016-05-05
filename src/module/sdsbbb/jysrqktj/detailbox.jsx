import React from 'react'
import {Row,Col} from 'antd'
import './style.css'

const detailBox = React.createClass({
    render(){
        const obj = this.props.data;

        return <div className="fix-table table-bordered table-striped">
        <h1 style={{textAlign:'center'}}>{obj.nd}年度税务师事务所基本情况统计表（表1)</h1>
            <Row><Col  span="12">编制地区(单位）：{obj.dwmc}</Col><Col  span="8">上报时间：{obj.sbsj}</Col><Col  span="4">单位：万元、人</Col></Row>
            <table>
                <tbody>
                
                <tr style={{textAlign:'center'}}>
                    <th colSpan="4">机构名称</th>
                    <th>组织形式</th>
                    <th>法定代表人</th>
                    <th>股东人数</th>
                    <th>合伙人数</th>
                    <th>人员总数</th>
                    <th colSpan="2">执业税务师人数</th>
                    <th>注册资金</th>
                    <th>运营资金</th>
                    <th>资产总额</th>
                    <th>收入总额</th>
                    <th>利润总额</th>
                    <th>机构所在地</th>
                    <th>委托人户数</th>
                </tr>
                <tr>
                    <td colSpan="4">{obj.dwmc}</td>
                    <td>{obj.jgxz}</td>
                    <td>{obj.frdbxm}</td>
                    <td>{obj.czrs}</td>
                    <td>{obj.hhrs}</td>
                    <td>{obj.ryzs}</td>
                    <td colSpan="2">{obj.zyzcswsrs}</td>
                    <td>{obj.zczj}</td>
                    <td>{obj.yysr}</td>
                    <td>{obj.zcze}</td>
                    <td>{obj.srze}</td>
                    <td>{obj.lrze}</td>
                    <td>{obj.cs}</td>
                    <td>{obj.wths}</td>
                </tr>
                </tbody>
            </table>
            <Row><Col  span="8">填报人：{obj.tianbiaoren}</Col><Col  offspan="16">所长：{obj.suozhang}</Col></Row>
            <div >
                <p>填表说明：</p>
                <p>1、本表统计数据截止为统计年度的12月31日；上报截止期为次年3月31日。（具体时间以各省通知为准）</p>
                <p>2、  机构所在地栏埴写XX地区（市）XX县（市、区）。</p>
               <p> 3、  分所按属地管理的原则填列。</p>
               <p> 4、  异地分所是指跨省、自治区、直辖市和计划单列市设立的分所。</p>
               <p> 5、  法定代表人栏，异地分所填写负责人姓名。</p>
            </div>
        </div>
    }
});

module.exports = detailBox;