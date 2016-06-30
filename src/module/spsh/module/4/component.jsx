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
      const bgxmOptions = obj.map(zxxx => <tbody key={zxxx.zxyy}>
                <tr >
                    <td ><b>注销原因说明：</b></td>
                    <td>{zxxx.zxsm}</td> </tr>
                    <tr >
                    <td><b>注销类别：</b></td>
                    <td >{zxxx.zxyy}</td>
                 </tr></tbody>);
        return <div className="wspxm-spsh">
            <div className="wrap">
          <SPXX wspcxurl='/spapi/wspcx/4' spmxurl='/spapi/spmxxx/jgzxsp' mxbg={bgxmOptions} getbg={this.makebg}
                          columns={C_JG.jg} titleTop="待审注销申请" titleSecond="注销申请明细"
          />
            </div>
        </div>
    }
});
module.exports = wspcx;