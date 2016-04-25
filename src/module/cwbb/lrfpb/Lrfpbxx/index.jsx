 import React from 'react'
 import './style.css'

  const Lrfpbxx = React.createClass({

    render() {
    	const data =this.props.data;
        return <div className="cwbb-table table-bordered" >
        <div><p></p></div>
            <table>
            <colgroup>
            <col className ="col-13"></col>
            <col className="1"></col>
            <col className="5"></col>
            <col className="5"></col>
            </colgroup>
            <tbody>
             <tr className="bb-table-title">
            <td colSpan="2">编制地区（单位）：{data.DWMC}</td>
            <td>时间：{data.SJ}</td>
            <td>单位：元</td>
            </tr>
            <tr>
            <td>项目</td>
            <td>1</td>
            <td>本年实际</td>
            <td>上年实际</td>
            </tr>

            <tr>
            <td>一、净利润</td>
            <td>2</td>
            <td>{data.JLR}</td>
            <td>{data.JLRUPYEAR}</td>
            </tr>

             <tr>
            <td> 加：年初未分配利润</td>
            <td>3</td>
            <td>{data.NCWFPLR}</td>
            <td>{data.NCWFPLRUPYEAR}</td>
            </tr>

             <tr>
            <td>    其他转入</td>
            <td>4</td>
            <td>{data.QTZR}</td>
            <td>{data.QTZRUPYEAR}</td>
            </tr>

            <tr>
            <td>二、可供分配的利润</td>
            <td>4</td>
            <td>{data.KFPLR}</td>
            <td>{data.KFPLRUPYEAR}</td>
            </tr>

            <tr>
            <td>减：提取盈余公积</td>
            <td>5</td>
            <td>{data.YYGJ}</td>
            <td>{data.YYGJUPYEAR}</td>
            </tr>

            <tr>
            <td>提取职工奖励福利基金</td>
            <td>6</td>
            <td>{data.JLFLJJ}</td>
            <td>{data.JLFLJJUPYEAR}</td>
            </tr>

             <tr>
            <td>提取储备基金</td>
            <td>7</td>
            <td>{data.CBJJ}</td>
            <td>{data.CBJJUPYEAR}</td>
            </tr>

             <tr>
            <td>提取企业发展基金</td>
            <td>8</td>
            <td>{data.QYFZJJ}</td>
            <td>{data.QYFZJJUPYEAR}</td>
            </tr>

            <tr>
            <td>利润归还投资</td>
            <td>9</td>
            <td>{data.LRGHTZ}</td>
            <td>{data.LRGHTZUPYEAR}</td>
            </tr>

            <tr>
            <td>三、可供投资者分配的利润</td>
            <td>10</td>
            <td>{data.TZZFPLR}</td>
            <td>{data.TZZFPLRUPYEAR}</td>
            </tr>

            <tr>
            <td>减：应付优先股股利</td>
            <td>11</td>
            <td>{data.YXGL}</td>
            <td>{data.YXGLUPYEAR}</td>
            </tr>

            <tr>
            <td>应付普通股股利</td>
            <td>12</td>
            <td>{data.PTGL}</td>
            <td>{data.PTGLUPYEAR}</td>
            </tr>

            <tr>
            <td>转作资本（或股本）的普通股股利</td>
            <td>13</td>
            <td>{data.ZHPTGL}</td>
            <td>{data.ZHPTGLUPYEAR}</td>
            </tr>

            <tr>
            <td>四、未分配利润</td>
            <td>14</td>
            <td>{data.WFPLR}</td>
            <td>{data.WFPLRUPYEAR}</td>
            </tr>

            <tr className="bb-table-title">
            <td >单位负责人：{data.DWFZR}</td>
            <td>财会负责人：{data.CKFZR}</td>
            <td>复核：{data.FHR}</td>
            <td>制表：{data.ZBR}</td>
            </tr>
            

            </tbody>
            </table>

        </div>
    }
})

  module.exports = Lrfpbxx