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
      const bgxmOptions = obj.map(bgxm => <tbody key={bgxm.MC}>
                <tr >
                    <td ><b>变更前{bgxm.MC}：</b></td>
                    <td>{bgxm.JZHI}</td> </tr>
                    <tr >
                    <td><b>变更后{bgxm.MC}：</b></td>
                    <td >{bgxm.XZHI}</td>
                 </tr></tbody>);
        return <div className="wspxm-spsh">
            <div className="wrap">
          <SPXX wspcxurl='/spapi/wspcx/2' spmxurl='/spapi/spmxxx/jgbgsp' mxbg={bgxmOptions} getbg={this.makebg}
                          columns={C_JG.jg} titleTop="待审变更申请" titleSecond="变更申请明细"
          />
            </div>
        </div>
    }
});
module.exports = wspcx;