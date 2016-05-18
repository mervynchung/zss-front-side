import React from 'react'
import {Row,Col,Checkbox,Button } from 'antd'
import './style.css'
// import Top from'./toTop.jsx'

const detailBox = React.createClass({
    render(){
        const obj = this.props.data;
       const bgxmOptions = obj.bgxm.map(bgxm => <tr key={bgxm.key}>
                    <td ><b>变更前{bgxm.MC}：</b></td>
                    <td>{bgxm.JZHI}</td>
                    <td><b>变更后{bgxm.MC}：</b></td>
                    <td >{bgxm.XZHI}</td>
                 </tr>);
        return <div className="fix-table table-bordered table-striped">
         
            <table >
                <tbody>
                
                <tr>
                    <td ><b>姓名：</b></td>
                    <td>{obj.xm}</td>
                    <td><b>亊务所名称：</b></td>
                    <td >{obj.dwmc}</td>
                 </tr>
                 {bgxmOptions}
                </tbody>
            </table>
            
        </div>
        
    }
});

module.exports = detailBox;

