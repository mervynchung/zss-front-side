import React from 'react'
import './dy.css'
import {Row, Col, Modal} from 'antd'

const confirm = Modal.confirm;
let dy = React.createClass({
    onClick(){
        window.print();
        confirm({
            title: '打印信息',
            content: '是否打印完成？',
            okText: "是",
            cancelText: "否",
            onOk() {
                window.close();
            },
            onCancel() {
            },
        });
    },
    render(){
        console.log(this.props.location.query.data)
        let data = JSON.parse(this.props.location.query.data)
        const nowy = new Date();
        return <div className="dy-ywcover">
            <div>
                <table cellSpacing="0" cellPadding="0" width="100%">
                    <tbody>
                    <tr>
                        <td></td>
                    </tr>
                    <tr>
                        <td>
                            <table cellSpacing="0" cellPadding="0" width="100%">
                                <tbody>
                                <tr height="260">
                                    <td>
                                        <div id="page1">
                                            <table cellSpacing="0" cellPadding="0" width="660"
                                                   style={{margin: '0 auto'}}>
                                                <tbody>
                                                <tr>
                                                    <td align="center">
                                                        <div className="ztit">
                                                            佛山汉堂济方中药科技有限公司<br/>高新技术企业认定专项鉴证报告<br/>
                                                            <div style={{
                                                                fontSize: '23px',
                                                                fontFamily: 'FangSong_GB2312',
                                                                fontWeight: '500',
                                                                paddingBottom: '1px',
                                                                margin: '1px',
                                                                lineHeight: '30px'
                                                            }}>
                                                                2015年01月01日-2015年12月31日
                                                            </div>
                                                            <span style={{fontSize: '30px'}}>(高新技术产品（服务）收入专项鉴证报告)</span>
                                                        </div>
                                                        {/*企业所税汇算清缴、个人所得税汇算清缴 的标头打印位置*/}
                                                        <div style={{borderBottom: '#ccc 2px solid'}} height="2"></div>
                                                        <table height="60" cellSpacing="0" cellPadding="0" width="100"
                                                               border="0">
                                                            <tbody>
                                                            <tr>
                                                                <td>&nbsp;</td>
                                                            </tr>
                                                            </tbody>
                                                        </table>
                                                        <table className="table1" cellSpacing="10" cellPadding="0"
                                                               width="80%" border="0">
                                                            <tbody>
                                                            <tr>
                                                                <td>【</td>
                                                                <td className="fsdq" width="32%">防伪条形码</td>
                                                                <td>】：</td>
                                                                <td align="left">
                                                                    <img border="0" alt="/bcimages/20161023112291.png"
                                                                         src="ywbbAction_files/20161023112291.png"
                                                                         align="absMiddle"/>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>【</td>
                                                                <td className="fsdq">报备号码</td>
                                                                <td>】：</td>
                                                                <th align="left"><span
                                                                    className="fontfs">20161023112291&nbsp;</span></th>
                                                            </tr>
                                                            <tr>
                                                                <td>【</td>
                                                                <td className="fsdq">报告文号</td>
                                                                <td>】：</td>
                                                                <th align="left"><span className="fontfs">中海粤专字（2016）第434号&nbsp;</span>
                                                                </th>
                                                            </tr>
                                                            <tr>
                                                                <td>【</td>
                                                                <td className="fsdq">企业名称</td>
                                                                <td>】：</td>
                                                                <th align="left"><span
                                                                    className="fontfs">佛山汉堂济方中药科技有限公司&nbsp;</span></th>
                                                            </tr>
                                                            <tr>
                                                                <td>【</td>
                                                                <td className="fsdq">税务登记证号</td>
                                                                <td>】：</td>
                                                                <th align="left"><span className="fontfs">914406043040095490&nbsp;</span>
                                                                </th>
                                                            </tr>
                                                            <tr>
                                                                <td>【</td>
                                                                <td className="fsdq">主管税务机关</td>
                                                                <td>】：</td>
                                                                <th align="left"><span
                                                                    className="fontfs">佛山市禅城区国家税务局&nbsp; </span></th>
                                                            </tr>
                                                            <tr>
                                                                <td>【</td>
                                                                <td className="fsdq">事务所名称</td>
                                                                <td>】：</td>
                                                                <th align="left"><span className="fontfs">广州中海粤税务师事务所有限公司&nbsp;</span>
                                                                </th>
                                                            </tr>
                                                            <tr>
                                                                <td>【</td>
                                                                <td className="fsdq">报告日期</td>
                                                                <td>】：</td>
                                                                <th align="left"><span
                                                                    className="fontfs">2016年10月10日&nbsp;</span></th>
                                                            </tr>
                                                            <tr>
                                                                <td>【</td>
                                                                <td className="fsdq">报备日期</td>
                                                                <td>】：</td>
                                                                <th align="left"><span
                                                                    className="fontfs">2016年10月10日&nbsp;</span></th>
                                                            </tr>
                                                            <tr>
                                                                <td>【</td>
                                                                <td className="fsdq">签名税务师</td>
                                                                <td>】：</td>
                                                                <th align="left"><span
                                                                    className="fontfs">李秋玲,何燕&nbsp;</span></th>
                                                            </tr>
                                                            </tbody>
                                                        </table>
                                                        <table height="80" cellSpacing="0" cellPadding="0" width="100"
                                                               border="0">
                                                            <tbody>
                                                            <tr>
                                                                <td>&nbsp;</td>
                                                            </tr>
                                                            </tbody>
                                                        </table>
                                                        <table className="table2" cellSpacing="0" cellPadding="0"
                                                               width="80%" align="center" border="0">
                                                            <tbody>
                                                            <tr>
                                                                <td className="fontht" width="100" align="right">事务所电话
                                                                </td>
                                                                <td width="5">：</td>
                                                                <td align="left"><span
                                                                    className="fontfs">020-37601656&nbsp;</span></td>
                                                            </tr>
                                                            <tr>
                                                                <td className="fontht" align="right">传真</td>
                                                                <td>：</td>
                                                                <td align="left"><span className="fontfs">020-37601656-810&nbsp;</span>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="fontht" align="right">通信地址</td>
                                                                <td>：</td>
                                                                <td align="left"><span className="fontfs">广州市越秀区寺右新马路111-115号1520房&nbsp;</span>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="fontht" align="right">电子邮件</td>
                                                                <td>：</td>
                                                                <td align="left"><span className="fontfs">lzl19832003@163.com&nbsp;</span>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="fontht" align="right">事务所网址</td>
                                                                <td>：</td>
                                                                <td><span className="fontfs">&nbsp;</span></td>
                                                            </tr>
                                                            </tbody>
                                                        </table>
                                                        <div className="sxxan"><img border="0"
                                                                                    src="ywbbAction_files/sy03.gif"
                                                                                    align="absMiddle"/></div>
                                                        <span className="dijiao">防伪查询网址：http://www.gdcta.net</span>
                                                    </td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <div>
                <button className="noprint" type="button" onClick={this.onClick}
                        style={{'position': 'relative', 'left': '45%', 'width': '60px', 'top': '100%'}}>打印
                </button>
            </div>
        </div>
    }
});
module.exports = dy;