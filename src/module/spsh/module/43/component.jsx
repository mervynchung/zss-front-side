import React from 'react'
import SPXX from '../spxx.jsx'
import C_JG from '../model.js'
import {  Table }from 'antd'
import Panel from 'component/compPanel'
      
const wspcx = React.createClass({
      getInitialState() {
            return {
                  entity: { fzjl: [] },
                  dl: '',
            }
      },
      makebg(data, rowData) {
            this.setState({ entity: data, dl: rowData });
      },
      render() {
            //定义工具栏内容
            const obj = this.state.entity;
            var mxbg = <div >
                 
            </div>
            return <div className="wspxm-spsh">
                  <div className="wrap">
                        <SPXX wspcxurl='/spapi/wspcx/ry/43' spmxurl='/spapi/spmxxx/fzyba' mxbg={mxbg} getbg={this.makebg} isJG={false}
                              columns={C_JG.ry} titleTop="待审其他从业人员注销申请" titleSecond="其他从业人员注销申请明细"
                              />
                  </div>
            </div>
      }
});
module.exports = wspcx;