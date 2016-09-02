import React from 'react'
import './style.css'

const detailBox = React.createClass({

    render(){
        const obj = this.props.data;
        

        return <div className="fix-table table-bordered table-striped">
            <table>
                <tbody>
                <tr>
                    <td style={{width:300}} colSpan="2">事务所名称：{obj.dwmc}</td>                   
                    <td>机构性质:{obj.jgxz}</td>
                    <td>邮政编码：{obj.yzbm}</td>
                 
                </tr>
                <tr style={{textAlign:'LEFT'}}>
                    <td >自检：</td>
                    <td colSpan="3" style={{width:500,textAlign:'LEFT'}}>{obj.ZJ}</td>
                
                </tr>
                
                <tr>
                    <td>年检处理</td>
                    <td>{obj.njcl}</td>
                    <td>年检状态</td>
                    <td>{obj.njzt}</td>
                    
                    
                </tr>
                <tr>
                <td>自检具体情况：</td>
                <td colSpan="3">{obj.ZJWGDM}(说明：数字的意义对应于执行添加操作时，年检选项违规条款前的数字对应的选项)</td>

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