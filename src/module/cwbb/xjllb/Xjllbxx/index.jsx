 import React from 'react'
 import './style.css'

  const Xjllbxx = React.createClass({

    render() {
    	const data =this.props.data;
        return <div className="cwbb-table table-bordered" >
        <div><p></p></div>
            <table>
            <colgroup>
            <col className ="col-17"></col>
            <col className="col-2"></col>
            <col className="col-5"></col>
            </colgroup>
            <tbody>
             <tr className="bb-table-title">
            <td >编制地区（单位）：{data.DWMC} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 时间：{data.JSSJ}</td>
            <td ></td>
            <td colSpan="3">单位：元</td>
            </tr>
            <tr>
            <td>项目</td>
            <td>行次</td>
            <td>金额</td>
            </tr>

            <tr>
            <td>一、经营活动产生的现金流量：</td>
            <td></td>
            <td></td>         
            </tr>
            
            <tr>
            <td>&nbsp;&nbsp;&nbsp; 销售商品、提供劳务收到的现金</td>
            <td>1</td>
            <td>{data.JYHD_XJLR_XSLW}</td>         
            </tr>
            
            <tr>
            <td>&nbsp;&nbsp;&nbsp; 收到的税费返还</td>
            <td>2</td>
            <td>{data.JYHD_XJLR_SKFH}</td>         
            </tr>
            
            <tr>
            <td>&nbsp;&nbsp;&nbsp; 收到的其它与经营活动有关的现金</td>
            <td>3</td>
            <td>{data.JYHD_XJLR_QTJY}</td>         
            </tr>
             
            <tr>
            <td>&nbsp;&nbsp;&nbsp; 现金流入小计</td>
            <td>4</td>
            <td>{data.JYHD_XJLR_XJ}</td>         
            </tr>
            
             <tr>
            <td>&nbsp;&nbsp;&nbsp; 购买商品、接收劳务支付的现金</td>
            <td>5</td>
            <td>{data.JYHD_XJLC_GMLW}</td>         
            </tr>
            

            </tbody>
            </table>

        </div>
    }
})

  module.exports =Xjllbxx