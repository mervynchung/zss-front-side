import React from 'react'
import SPXX from '../spxx.jsx'
import C_JG from '../model.js'
import {  Table }from 'antd'
import Panel from 'component/compPanel'

const ryjl = [{ //设定列
      title: '起止年月', //设定该列名称
      dataIndex: 'qzny', //设定该列对应后台字段名
      key: 'qzny', //列key，必须设置，建议与字段名相同
      }, {
            title: '何时何地单位工作学习及职称（职务）',
            dataIndex: 'xxxx',
            key: 'xxxx',

      }, {
            title: '证明人',
            dataIndex: 'zmr',
            key: 'zmr',

      }]
      
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
                  <table >
                        <tbody >
                              <tr>
                                    <td ><b>姓 名：</b></td>
                                    <td>{obj.XMING}</td>
                                    <td ><b>工作所在地：</b></td>
                                    <td>{obj.CS}</td>
                                    <td rowSpan="7" style={{ 'textAlign': 'center' }}>{!obj.XPIAN ? "未上传相片" : <img src={obj.XPIAN}  width="116px" height="160px"/>}</td>
                              </tr>
                              <tr>
                                    <td ><b>性 别：</b></td>
                                    <td>{obj.XB}</td>
                                    <td ><b>民 族：</b></td>
                                    <td>{obj.MZ}</td>
                              </tr>
                              <tr>
                                    <td ><b>出生年月：</b></td>
                                    <td>{obj.SRI}</td>
                                    <td ><b>学 历：</b></td>
                                    <td>{obj.XL}</td>
                              </tr>
                              <tr>
                                    <td ><b>身份证号：</b></td>
                                    <td>{obj.SFZH}</td>
                                    <td ><b>政治面貌：</b></td>
                                    <td>{obj.ZZMM}</td>
                              </tr>
                              <tr>
                                    <td ><b>通讯地址：</b></td>
                                    <td>{obj.TXDZ}</td>
                                    <td ><b>移动电话：</b></td>
                                    <td>{obj.YDDH}</td>
                              </tr>
                              <tr>
                                    <td ><b>邮政编码：</b></td>
                                    <td>{obj.YZBM}</td>
                                    <td ><b>职务（职称）：</b></td>
                                    <td>{obj.ZW}</td>
                              </tr>
                              <tr>
                                    <td ><b>电话号码：</b></td>
                                    <td>{obj.DHHM}</td>
                                    <td ><b>毕业院校：</b></td>
                                    <td>{obj.BYYX}</td>
                              </tr>
                              <tr>
                                    <td ><b>资格证书编号：</b></td>
                                    <td>{obj.ZYZGZSBH}</td>
                                    <td ><b>毕业时间：</b></td>
                                    <td colSpan="2">{obj.BYSJ}</td>
                              </tr>
                              <tr>
                                    <td ><b>非执业会员编号：</b></td>
                                    <td>{obj.FZYHYBH}</td>
                                    <td ><b>入会时间：</b></td>
                                    <td colSpan="2">{obj.RHSJ}</td>
                              </tr>
                              <tr>
                                    <td ><b>工作单位：</b></td>
                                    <td>{obj.ZZDW}</td>
                                    <td ><b>职业证书签发日期：</b></td>
                                    <td colSpan="2">{obj.ZGZSQFRQ}</td>
                              </tr>
                        </tbody>
                  </table>
                  <p className="nbjgsz">个人简介：</p>
                  <Table columns={ryjl} dataSource={obj.fzjl} bordered  size="small" rowKey={record => record.id} pagination={false} />

            </div>
            return <div className="wspxm-spsh">
                  <div className="wrap">
                        <SPXX wspcxurl='/spapi/wspcx/ry/20' spmxurl='/spapi/spmxxx/fzyba' mxbg={mxbg} getbg={this.makebg} isJG={false}
                              columns={C_JG.ry} titleTop="待审非执业税务师备案申请" titleSecond="非执业税务师备案申请明细"
                              />
                  </div>
            </div>
      }
});
module.exports = wspcx;