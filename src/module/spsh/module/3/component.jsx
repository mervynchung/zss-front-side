import React from 'react'
import SPXX from '../spxx.jsx'
import C_JG from '../model.js'

const wspcx = React.createClass({
      getInitialState(){
                  return {
                    entity:[],
                  }},
      makebg(data){
        this.setState({entity:data});
      },
    render(){
        //定义工具栏内容
       const obj = this.state.entity;
      const bgxmOptions = obj.map(spxm => <tbody key={spxm.ID}>
                <tr >
                    <td ><b>申请合并事务所双方名称：</b></td>
                    <td>{spxm.SFMC}</td> </tr>
                    <tr >
                    <td><b>新事务所单位名称：</b></td>
                    <td >{spxm.XSWSMC}</td>
                 </tr>
                    <tr >
                    <td><b>工商名称预核编号：</b></td>
                    <td >{spxm.GSMCYHBH}</td>
                 </tr>
                    <tr >
                    <td><b>合并时间：</b></td>
                    <td >{spxm.HBSJ}</td>
                 </tr>
                    <tr >
                    <td><b>申请人：</b></td>
                    <td >{spxm.SQR}</td>
                 </tr></tbody>);
        return <div className="wspxm-spsh">
            <div className="wrap">
          <SPXX wspcxurl='/spapi/wspcx/3' spmxurl='/spapi/spmxxx/jghbsp' mxbg={bgxmOptions} getbg={this.makebg}
                          columns={C_JG.jg} titleTop="待审合并申请" titleSecond="合并申请明细"
          />
            </div>
        </div>
    }
});
module.exports = wspcx;