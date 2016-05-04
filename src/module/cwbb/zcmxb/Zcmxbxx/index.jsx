 import React from 'react'
 import './style.css'

  const Zcmxbxx = React.createClass({

    render() {
    	const data =this.props.data;
        return <div className="fix-table table-bordered table-striped" >
        
            <table>
         
            <tbody>
             <tr >
            <td colSpan="3">编制地区（单位）：{data.DWMC}</td>
            <td >统计时间：{data.KSSJ}</td>
            <td colSpan="3">至：{data.JSSJ}</td>
            <td >单位：元</td>
            </tr>
            </tbody>
               <colgroup>
            <col className ="col-4"></col>
            <col className="col-2"></col>
            <col className="col-2"></col>
            <col className="col-4"></col>
            <col className ="col-4"></col>
            <col className="col-2"></col>
            <col className="col-3"></col>
            <col className="col-3"></col>
            </colgroup>
            
            
            <tbody>
            <tr>
            <td>项目</td>
            <td>行次</td>
            <td>本期数</td>
            <td>本年累计数</td>
            <td>项目</td>
            <td>行次</td>
            <td>本期数</td>
            <td>本年累计数</td>
            </tr>

            <tr>
            <td>一、主营业务成本</td>
            <td>1</td>
            <td>{data.ZYYWCB1}</td>
            <td>{data.ZYYWCB}</td>
            <td>一、主营业务税金及附加</td>
            <td>17</td>
            <td>{data.ZYYWSJFJ1}</td>
            <td>{data.ZYYWSJFJ}</td>
            </tr>
            
             <tr>
            <td>&nbsp;&nbsp;&nbsp;1、工资费用</td>
            <td>2</td>
            <td>{data.GZFY1}</td>
            <td>{data.GZFY}</td>
            <td>三、其他业务支出</td>
            <td>18</td>
            <td>{data.QTYWZC1}</td>
            <td>{data.QTYWZC}</td>
            </tr>
            
            <tr>
            <td>&nbsp;&nbsp;&nbsp;2、福利费</td>
            <td>3</td>
            <td>{data.FLF1}</td>
            <td>{data.FLF}</td>
            <td>四、管理费用</td>
            <td>19</td>
            <td>{data.GLFY1}</td>
            <td>{data.GLFY}</td>
            </tr>
            
            <tr>
            <td>&nbsp;&nbsp;&nbsp;3、教育费</td>
            <td>4</td>
            <td>{data.JYF1}</td>
            <td>{data.JYF}</td>
            <td>&nbsp;&nbsp;&nbsp;1、工资费</td>
            <td>20</td>
            <td>{data.GLFY_GZFY1}</td>
            <td>{data.GLFY_GZFY}</td>
            </tr>
            
             <tr>
            <td>&nbsp;&nbsp;&nbsp;4、公会经费</td>
            <td>5</td>
            <td>{data.GHJF1}</td>
            <td>{data.GHJF}</td>
            <td>&nbsp;&nbsp;&nbsp;2、福利费</td>
            <td>21</td>
            <td>{data.GLFY_FLF1}</td>
            <td>{data.GLFY_FLF}</td>
            </tr>
            
             <tr>
            <td>&nbsp;&nbsp;&nbsp;5、社会统筹</td>
            <td>6</td>
            <td>{data.SHTC1}</td>
            <td>{data.SHTC}</td>
            <td>&nbsp;&nbsp;&nbsp;3、业务招待费</td>
            <td>22</td>
            <td>{data.GLFY_YWZDF1}</td>
            <td>{data.GLFY_YWZDF}</td>
            </tr>
            
            <tr>
            <td>&nbsp;&nbsp;&nbsp;6、办公费</td>
            <td>7</td>
            <td>{data.BGF1}</td>
            <td>{data.BGF}</td>
            <td>&nbsp;&nbsp;&nbsp;4、办公费</td>
            <td>23</td>
            <td>{data.GLFY_BGF1}</td>
            <td>{data.GLFY_BGF}</td>
            </tr>
            
            <tr>
            <td>&nbsp;&nbsp;&nbsp;7、差旅费</td>
            <td>8</td>
            <td>{data.CLF1}</td>
            <td>{data.CLF}</td>
            <td>&nbsp;&nbsp;&nbsp;5、其他税金</td>
            <td>24</td>
            <td>{data.GLFY_QTSJ1}</td>
            <td>{data.GLFY_QTSJ}</td>
            </tr>
            
            <tr>
            <td>&nbsp;&nbsp;&nbsp;8、会费</td>
            <td>9</td>
            <td>{data.HF1}</td>
            <td>{data.HF}</td>
            <td>&nbsp;&nbsp;&nbsp;6、汽车费用</td>
            <td>25</td>
            <td>{data.GLFY_QCFY1}</td>
            <td>{data.GLFY_QCFY}</td>
            </tr>
            
            <tr>
            <td>&nbsp;&nbsp;&nbsp;9、培训及资料费</td>
            <td>10</td>
            <td>{data.PXZLF1}</td>
            <td>{data.PXZLF}</td>
            <td>&nbsp;&nbsp;&nbsp;7、职业风险基金</td>
            <td>26</td>
            <td>{data.GLFY_ZYFXJJ1}</td>
            <td>{data.GLFY_ZYFXJJ}</td>
            </tr>
            
            <tr>
            <td>&nbsp;&nbsp;&nbsp;10、会务费</td>
            <td>11</td>
            <td>{data.HWF1}</td>
            <td>{data.HWF}</td>
            <td>&nbsp;&nbsp;&nbsp;8、职业责任保险</td>
            <td>27</td>
            <td>{data.GLFY_ZYZRBX1}</td>
            <td>{data.GLFY_ZYZRBX}</td>
            </tr>
            
            <tr>
            <td>&nbsp;&nbsp;&nbsp;11、租凭费</td>
            <td>12</td>
            <td>{data.ZPF1}</td>
            <td>{data.ZPF}</td>
            <td>&nbsp;&nbsp;&nbsp;9、差旅费</td>
            <td>28</td>
            <td>{data.GLFY_CLF1}</td>
            <td>{data.GLFY_CLF}</td>
            </tr>
            
            <tr>
            <td>&nbsp;&nbsp;&nbsp;12、折旧</td>
            <td>13</td>
            <td>{data.ZJ1}</td>
            <td>{data.ZJ}</td>
            <td>&nbsp;&nbsp;&nbsp;10、其他费用</td>
            <td>29</td>
            <td>{data.GLFY_QTFY1}</td>
            <td>{data.GLFY_QTFY}</td>
            </tr>
            
             <tr>
            <td>&nbsp;&nbsp;&nbsp;13、住房公积金</td>
            <td>14</td>
            <td>{data.ZFGJJ1}</td>
            <td>{data.ZFGJJ}</td>
            <td>五、财务费用 </td>
            <td>30</td>
            <td>{data.CWFY1}</td>
            <td>{data.CWFY}</td>
            </tr>
            
            <tr>
            <td>&nbsp;&nbsp;&nbsp;14、顾问咨询费</td>
            <td>15</td>
            <td>{data.GWZXF1}</td>
            <td>{data.GWZXF}</td>
            <td>六、营业外支出 </td>
            <td>31</td>
            <td>{data.YYWZC1}</td>
            <td>{data.YYWZC}</td>
            </tr>
            
            <tr>
            <td>&nbsp;&nbsp;&nbsp;15、其他</td>
            <td>16</td>
            <td>{data.QT1}</td>
            <td>{data.QT}</td>
            <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;支出总计 </td>
            <td>32</td>
            <td>{data.ZCZJ1}</td>
            <td>{data.ZCZJ}</td>
            </tr>
            </tbody>
            
            <tbody>
            <tr >
            <td colSpan="3">所长（主任）：{data.SZ}</td>
            <td colSpan="2">主管会计：{data.AGKJ}</td>
            <td colSpan="3">制表人：{data.ZB}</td>
            </tr>
            </tbody>
            
          

            
            </table>

        </div>
    }
})

  module.exports =Zcmxbxx