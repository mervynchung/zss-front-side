 import React from 'react'
 import './style.css'

  const Jzywtjbxx = React.createClass({

    render() {
    	const data =this.props.data;
        return <div className="fix-table table-bordered table-striped" >
         <h1 style={{textAlign:'center'}}>{data.nd}年度注册税务师行业鉴证业务情况统计表（表6)</h1>
            <table>
            
            <tbody>
            <tr >
            <td colSpan="5">编制地区（单位）：{data.dwmc}</td>
            <td colSpan="4">上报时间：{data.SBRQ}</td>
            <td >单位：万元、户</td>
            </tr>
            </tbody>
            <colgroup>
                    <col className ="col-1.5"></col>
                    <col className="col-6.5"></col>
                    <col className="col-1.5"></col>
                    <col className ="col-1.5"></col>
                    <col className="col-1.5"></col>
                    <col className="col-1.5"></col>
                    <col className ="col-2"></col>
                    <col className="col-2"></col>
                    <col className="col-3"></col>
                    <col className ="col-3"></col>   
                </colgroup> 
                <tbody>
                <tr>
                        <td rowSpan="2">序号</td>
                        <td rowSpan="2">项目</td>
                        <td colSpan="2">上半年数</td>          
                        <td colSpan="2">本年数</td>                        
                        <td colSpan="2">比上年增减额</td>                      
                        <td colSpan="2">增减%</td>
                       
                   </tr>
                    <tr>
                        
                        <td>户数</td>
                        <td>金额</td>
                        <td>户数</td>
                        <td>金额</td>
                        <td>户数</td>
                        <td>金额</td>
                        <td>户数</td>
                        <td>金额</td>   
                   </tr>
                    <tr>
                        
                        <td>1</td>
                        <td>企业所得税汇算清缴总户数</td>
                        <td>--</td>
                        <td>--</td>
                        <td>--</td>
                        <td>--</td>
                        <td>--</td>
                        <td>--</td>
                        <td>--</td>
                        <td>--</td>  
                   </tr>
                   
                     <tr>
                        
                        <td>2</td>
                        <td>企业所得税汇算清缴纳税申报鉴证业务</td>
                        <td>{data.HSQJJE_HS0}</td>
                        <td>{data.HSQJJE_JE0}</td>
                        <td>{data.HSQJJE_HS}</td>
                        <td>{data.HSQJJE_JE}</td>
                        <td>{data.HSZJE2}</td>
                        <td>{data.JEZJE2}</td>
                        <td>{data.HSZZB2}</td>
                        <td>{data.JEZZB2}</td>
                        
                   </tr>
                   
                     <tr>
                        
                        <td>3</td>
                        <td>其中：（1）调增应纳所得税税额</td>
                        <td>{data.TZYNSDSE_HS0}</td>
                        <td>{data.TZYNSDSE_JE0}</td>
                        <td>{data.TZYNSDSE_HS}</td>
                        <td>{data.TZYNSDSE_JE}</td>
                        <td>{data.HSZJE3}</td>
                        <td>{data.JEZJE3}</td>
                        <td>{data.HSZZB3}</td>
                        <td>{data.JEZZB3}</td>
                        
                   </tr>
                   
                    <tr>
                        
                        <td>4</td>
                        <td> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;（2）调减应纳所得税税额</td>
                        <td>{data.TJYNSDSE_HS0}</td>
                        <td>{data.TJYNSDSE_JE0}</td>
                        <td>{data.TJYNSDSE_HS}</td>
                        <td>{data.TJYNSDSE_JE}</td>
                        <td>{data.HSZJE4}</td>
                        <td>{data.JEZJE4}</td>
                        <td>{data.HSZZB4}</td>
                        <td>{data.JEZZB4}</td>
                        
                   </tr>
                   
                    <tr>
                        
                        <td>5</td>
                        <td>企业税前弥补亏损鉴证业务</td>
                        <td>{data.MBKSJE_HS0}</td>
                        <td>{data.MBKSJE_JE0}</td>
                        <td>{data.MBKSJE_HS}</td>
                        <td>{data.MBKSJE_JE}</td>
                        <td>{data.HSZJE5}</td>
                        <td>{data.JEZJE5}</td>
                        <td>{data.HSZZB5}</td>
                        <td>{data.JEZZB5}</td>
                        
                   </tr>
                   
                   <tr>
                        
                        <td>6</td>
                        <td>企业资产损失税前扣除鉴证业务</td>
                        <td>{data.CCSSKC_HS0}</td>
                        <td>{data.CCSSKC_JE0}</td>
                        <td>{data.CCSSKC_HS}</td>
                        <td>{data.CCSSKC_JE}</td>
                        <td>{data.HSZJE6}</td>
                        <td>{data.JEZJE6}</td>
                        <td>{data.HSZZB6}</td>
                        <td>{data.JEZZB6}</td>
                        
                   </tr>
                   
                    <tr>
                        
                        <td>7</td>
                        <td>土地增值税清算鉴证业务</td>
                        <td>{data.TDZZSQSJZ_HS0}</td>
                        <td>{data.TDZZSQSJZ_JE0}</td>
                        <td>{data.TDZZSQSJZ_HS}</td>
                        <td>{data.TDZZSQSJZ_JE}</td>
                        <td>{data.HSZJE7}</td>
                        <td>{data.JEZJE7}</td>
                        <td>{data.HSZZB7}</td>
                        <td>{data.JEZZB7}</td>
                        
                   </tr>
                   
                    <tr>
                        
                        <td>8</td>
                        <td>其他鉴证业务小计</td>
                        <td>{data.QTJZ_HS0}</td>
                        <td>{data.QTJZ_JE0}</td>
                        <td>{data.QTJZ_HS}</td>
                        <td>{data.QTJZ_JE}</td>
                        <td>{data.HSZJE8}</td>
                        <td>{data.JEZJE8}</td>
                        <td>{data.HSZZB8}</td>
                        <td>{data.JEZZB8}</td>
                        
                   </tr>
                   
                    <tr>
                        
                        <td>9</td>
                        <td>其中：（1）高新技术企业认定鉴证业务</td>
                        <td>{data.GXJSQYRDQZYW_HS0}</td>
                        <td>{data.GXJSQYRDQZYW_JE0}</td>
                        <td>{data.GXJSQYRDQZYW_HS}</td>
                        <td>{data.GXJSQYRDQZYW_JE}</td>
                        <td>{data.HSZJE9}</td>
                        <td>{data.JEZJE9}</td>
                        <td>{data.HSZZB9}</td>
                        <td>{data.JEZZB9}</td>
                        
                   </tr>
                   
                   <tr>
                        
                        <td>10</td>
                        <td>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;（2）企业注销税务登记税款清算鉴证业务</td>
                        <td>{data.QYZXSWDESKJSJZYW_HS0}</td>
                        <td>{data.QYZXSWDESKJSJZYW_JE0}</td>
                        <td>{data.QYZXSWDESKJSJZYW_HS}</td>
                        <td>{data.QYZXSWDESKJSJZYW_JE}</td>
                        <td>{data.HSZJE10}</td>
                        <td>{data.JEZJE10}</td>
                        <td>{data.HSZZB10}</td>
                        <td>{data.JEZZB10}</td>
                        
                   </tr>
                   
                    <tr>
                        
                        <td>11</td>
                        <td>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;（3）研发费加计扣除鉴证业务</td>
                        <td>{data.YFFJJKCJZYW_HS0}</td>
                        <td>{data.YFFJJKCJZYW_JE0}</td>
                        <td>{data.YFFJJKCJZYW_HS}</td>
                        <td>{data.YFFJJKCJZYW_JE}</td>
                        <td>{data.HSZJE11}</td>
                        <td>{data.JEZJE11}</td>
                        <td>{data.HSZZB11}</td>
                        <td>{data.JEZZB11}</td>
                        
                   </tr>
                   
                    <tr>
                        
                        <td>12</td>
                        <td>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;（4）其他</td>
                        <td>{data.QT_HS0}</td>
                        <td>{data.QT_JE0}</td>
                        <td>{data.QT_HS}</td>
                        <td>{data.QT_JE}</td>
                        <td>{data.HSZJE12}</td>
                        <td>{data.JEZJE12}</td>
                        <td>{data.HSZZB12}</td>
                        <td>{data.JEZZB12}</td>
                        
                   </tr>
                   
                </tbody>
                
                <tbody>
                
                   <tr>                        
                        <td colSpan="4">填报人：{data.TIANBIAOREN}</td>
                        <td colSpan="6">所长：{data.SUOZHANG}</td>
                        
                   </tr>
                
                </tbody>
            
            </table>

        </div>
    }
})

  module.exports =Jzywtjbxx