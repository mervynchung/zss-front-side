import React from 'react'
import './style.css'

const detailBox = React.createClass({

    render(){
        const obj = this.props.data;
        

        return <div className="fix-table table-bordered table-striped">
            <table>
                <tbody>
                <tr>
                    <td style={{width:300}}>事务所名称：{obj.dwmc}</td>                   
                    <td>机构性质:{obj.jgxz}</td>
                    <td>邮政编码：{obj.yzbm}</td>
                    <td></td>
                </tr>
                <tr style={{textAlign:'LEFT'}}>
                    <td colSpan="2">自检：</td>
                    <td colSpan="2">{obj.ZJ}</td>
                
                </tr>
                
                <tr>
                    <td>年检处理</td>
                    <td>{obj.njcl}</td>
                    <td>年检状态</td>
                    <td>{obj.njzt}</td>
                    
                    
                </tr>
                <tr>
                    <td colSpan>所长</td>
                    <td>{obj.SZ}</td>
                    <td>自检日期</td>
                    <td style={{width:300}}>{obj.zjrq}</td>
                </tr>
                </tbody>
            </table>
        </div>
    }
});

module.exports = detailBox;