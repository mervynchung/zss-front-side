 import React from 'react'
 import './style.css'

  const Jygmtjbxx = React.createClass({

    render() {
    	const data =this.props.data;
        return <div className="fix-table table-bordered table-striped" >
         <h1 style={{textAlign:'center'}}>{data.nd}年度税务师事务所规模情况统计表（表5)</h1>
            <table>
            
            <tbody>
            <tr >
            <td colSpan="4">编制地区（单位）：{data.dwmc}</td>
            <td colSpan="3">上报时间：{data.SBRQ}</td>
            <td >单位：万元</td>
            </tr>
            </tbody>
            <colgroup>
                    <col className ="col-2"></col>
                    <col className="col-8"></col>
                    <col className="col-2"></col>
                    <col className ="col-2"></col>
                    <col className="col-2"></col>
                    <col className="col-2"></col>
                    <col className="col-3"></col>
                    <col className="col-3"></col>
                      
                </colgroup> 
                <tbody>
              
                    <tr>
                        <td rowSpan="2">序号</td>
                        <td rowSpan="2">机构名称</td>
                        <td colSpan="4">本年度总收入额</td>          
                        <td rowSpan="2">上年收入总额</td>                        
                        <td rowSpan="2">比上年增长%</td>                           
                   </tr>
                   
                    <tr>
                        
                        <td>合计</td>
                        <td>涉税服务收入</td>
                        <td>涉税鉴证收入</td>
                        <td>其他收入</td> 
                   </tr>
                   
                    <tr>
                        
                        <td>1</td>
                        <td>{data.dwmc}</td>
                        <td>{data.BNSRZE_HJ}</td>
                        <td>{data.BNSRZE_SSFW}</td>
                        <td>{data.BNSRZE_SSJZ}</td>
                        <td>{data.BNSRZE_QTYW}</td>
                        <td>{data.SNSRZE}</td>
                        <td>{data.ZZB}</td>                        
                   </tr>
                   
                </tbody>
                
                <tbody>
                
                   <tr>                        
                        <td colSpan="3">填报人：{data.TBR}</td>
                        <td colSpan="5">所长：{data.SZ}</td>
                        
                   </tr>
                
                </tbody>
            
            </table>
            
            <div >
                <p>填表说明：</p>
                <p>1、本表统计数据截止为统计年度的12月31日；上报截止期为次年3月31日。（具体时间以各省通知为准）</p>
                <p>2、“涉税服务收入”、“涉税鉴证收入”、“其他收入”按表4的口径填写。</p>
               <p> 3、报表填列年度收入总额1000万元以上的税务师事务所。编报地区年度收入总额1000万以上的税务师事务所不足10个，填列年度收入总额排名本地区前10的税务师事务所。</p>
            </div>

        </div>
    }
})

  module.exports =Jygmtjbxx