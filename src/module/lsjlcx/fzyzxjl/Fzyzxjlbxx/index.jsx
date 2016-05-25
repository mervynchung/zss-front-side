import React from 'react'
import './style.css'

const Fzyzxjlbxx = React.createClass({

    render() {
        const data = this.props.data;
        return <div className="fix-table  " >
            <table>
            
                <tbody>
                    <tr >
                    <td></td>
                        <td >预警信息：&nbsp; &nbsp; &nbsp; &nbsp;无</td>
                         <td colSpan="2"></td>
                    </tr>
                     <tr >
                       <td></td>
                          <td >姓名：&nbsp; &nbsp; &nbsp; &nbsp;{data.XMING}</td>
                          <td colSpan="2"></td>
                    </tr>
                    
                     <tr  >
                     <td></td>
                        <td >注销类别：&nbsp; &nbsp; &nbsp; &nbsp;{data.yy}</td>
                         <td colSpan="2"></td>
                    </tr>
                     <tr  >
                        <td></td>
                         <td >注销原因：&nbsp; &nbsp; &nbsp; &nbsp;{data.ZXYY}</td>
                          <td colSpan="2"></td>
                    </tr>
                    
                </tbody>
                
                 <colgroup>
                    <col className ="col-6"></col>
                    <col className="col-6"></col>
                    <col className ="col-6"></col>
                    <col className="col-6"></col>
                </colgroup>
               

            
            </table>

        </div>
    }
})

module.exports = Fzyzxjlbxx