import React from 'react'
import {Col, Input,Row,Button,Icon,Form,Modal,Select } from 'antd'
import {SelectorYear,SelectorXZ} from 'component/compSelector'
import './style.css'

const ButtonGroup = Button.Group;
const createForm = Form.create;
const FormItem = Form.Item;
const Option = Select.Option;
 
let Updatejgnjb = React.createClass({
    getDefaultProps(){
        return {
            onSubmit: {}
        }
    },
    handleSubmit(e) {
    const obj = this.props.data1;
    e.preventDefault();
    var mp = {};
    let value=this.props.form.getFieldsValue()
    for(var key in value){
        if(!value[key]){
            value[key]=null;
        }
    }

    value.id = obj.ID;
      
    this.props.onSubmit(value);
  },

     handleReset(e) {
        e.preventDefault();
        this.props.form.resetFields();
    },
    //Modal
   getInitialState() {
    return { visible: false };
  },
  showModal(e) {
    e.preventDefault();
    var mp={};
    let value=this.props.form.getFieldsValue()
     for(var key in value){
         if(!value[key]){
             value[key]=null;
            
         }
     }
    this.setState({
      visible: true,
      okValue:value,
     
    });
    const obj = this.props.data1;
    value.id = obj.ID;   
    value.jg_id=obj.JG_ID;
     
  },
  handleOk(e) {
    // console.log('点击了确定',this.state.okValue);
    this.props.handleOk(this.state.okValue)
    this.setState({
      visible: false
    });
  },
  handleCancel(e) {
    
    this.setState({
      visible: false
    });
  },

    render() {
         
         const { getFieldProps } = this.props.form;
         const data = this.props.data1;  
        return <div className="add">
        <div className="fix-table table-bordered table-striped" >
        <Form horizontal onSubmit={this.handleSubmit}>
            <table>
            
                
                <colgroup>
                    <col className ="col-2"></col>
                    <col className="col-9"></col>
                    <col className="col-2"></col>
                    <col className="col-3"></col>
                    <col className="col-4"></col>
                    <col className="col-2"></col>
                    <col className="col-2"></col>
                </colgroup>

                <tbody>
                    <tr>
                        <td>单位：</td>
                        <td>{data.DWMC}</td>
                        <td></td>
                        <td>时间</td>
                        <td> <Col
                         
                          label="年度：">
                            <SelectorYear  { ...getFieldProps('nd', { initialValue:data.ND })}/>
                        </Col>
                           </td>
                        <td>
                             <Select  { ...getFieldProps('timevalue', { initialValue: data.TIMEVALUE})} >
                            <Option value="0">半年</Option>
                            <Option value="1">全年</Option>
                           
                        </Select>
                           </td>
                        <td>单位：元</td>
                    </tr>
                    <tr>
                        <td style={{textAlign:'center'}} colSpan="3">项目</td>
                        <td>行次</td>
                        <td >本月数</td>
                        <td colSpan="2">本年累计数</td>                   
                    </tr>
                    <tr>
                        <td style={{textAlign:'center'}} colSpan="3">一、主营业务收入</td>
                        <td>1</td>
                        <td >   <Input   {...getFieldProps('zgywsr1', { initialValue:data.ZGYWSR1 })}/> </td>
                        <td colSpan="2">   <Input   {...getFieldProps('zgywsr', { initialValue:data.ZGYWSR })}/> </td>                  
                    </tr> 
                    <tr>
                        <td style={{textAlign:'center'}} colSpan="3">减：主营业务成本</td>
                        <td>2</td>
                        <td > <Input   {...getFieldProps('zgywcb1', { initialValue:data.ZGYWCB1 })}/> </td>
                        <td colSpan="2">  <Input   {...getFieldProps('zgywcb', { initialValue:data.ZGYWCB })}/></td>                 
                    </tr> 
                    <tr>
                        <td style={{textAlign:'center'}} colSpan="3">主营业务税金及附加</td>
                        <td>3</td>
                        <td > <Input   {...getFieldProps('zgywsj1', { initialValue:data.ZGYWSJ1 })}/></td>
                        <td colSpan="2"> <Input   {...getFieldProps('zgywsj', { initialValue:data.ZGYWSJ })}/></td>                 
                    </tr> 
                     <tr>
                        <td style={{textAlign:'center'}} colSpan="3">二、主营业务利润（亏损以“—”号填列）</td>
                        <td>4</td>
                       <td > <Input   {...getFieldProps('zgwylr1', { initialValue:data.ZGWYLR1 })}/></td>
                        <td colSpan="2"> <Input   {...getFieldProps('zgwylr', { initialValue:data.ZGWYLR })}/></td>                 
                    </tr>
                    
                    <tr>
                        <td style={{textAlign:'center'}} colSpan="3">加：其它业务利润（亏损以“—”号填列）</td>
                        <td>5</td>
                         <td > <Input   {...getFieldProps('qtywlr1', { initialValue:data.QTYWLR1 })}/></td>
                        <td colSpan="2"> <Input   {...getFieldProps('qtywlr', { initialValue:data.QTYWLR })}/></td>               
                    </tr>
                    
                    <tr>
                        <td style={{textAlign:'center'}} colSpan="3">减：营业费用</td>
                        <td>6</td>
                         <td > <Input   {...getFieldProps('yyfy1', { initialValue:data.YYFY1 })}/></td>
                        <td colSpan="2"> <Input   {...getFieldProps('yyfy', { initialValue:data.YYFY })}/></td>                  
                    </tr>
                    
                    <tr>
                        <td style={{textAlign:'center'}} colSpan="3">管理费用</td>
                        <td>7</td>
                       <td > <Input   {...getFieldProps('glfy1', { initialValue:data.GLFY1 })}/></td>
                        <td colSpan="2"> <Input   {...getFieldProps('glfy', { initialValue:data.GLFY })}/></td>                 
                    </tr>
                    
                    <tr>
                        <td style={{textAlign:'center'}} colSpan="3">财务费用</td>
                        <td>8</td>
                         <td > <Input   {...getFieldProps('cwfy1', { initialValue:data.CWFY1 })}/></td>
                        <td colSpan="2"> <Input   {...getFieldProps('cwfy', { initialValue:data.CWFY })}/></td>                  
                    </tr>
                    
                    <tr>
                        <td style={{textAlign:'center'}} colSpan="3">三、营业利润（亏损以“—”号填列）</td>
                        <td>9</td>
                         <td > <Input   {...getFieldProps('yylr1', { initialValue:data.YYLR1 })}/></td>
                        <td colSpan="2"> <Input   {...getFieldProps('yylr', { initialValue:data.YYLR })}/></td>                 
                    </tr>
                    
                    <tr>
                        <td style={{textAlign:'center'}} colSpan="3">加：投资收益（损失以“—”号填列）</td>
                        <td>10</td>
                         <td > <Input   {...getFieldProps('tzsy1', { initialValue:data.TZSY1 })}/></td>
                        <td colSpan="2"> <Input   {...getFieldProps('tzsy', { initialValue:data.TZSY })}/></td>                 
                    </tr>
                    
                    <tr>
                        <td style={{textAlign:'center'}} colSpan="3">补贴收入</td>
                        <td>11</td>
                        <td > <Input   {...getFieldProps('btsr1', { initialValue:data.BTSR1 })}/></td>
                        <td colSpan="2"> <Input   {...getFieldProps('btsr', { initialValue:data.BTSR })}/></td>                 
                    </tr>
                    
                    <tr>
                        <td style={{textAlign:'center'}} colSpan="3">营业外收入</td>
                        <td>12</td>
                       <td > <Input   {...getFieldProps('yywsr1', { initialValue:data.YYWSR1 })}/></td>
                        <td colSpan="2"> <Input   {...getFieldProps('yywsr', { initialValue:data.YYWSR })}/></td>                  
                    </tr>
                    
                    <tr>
                        <td style={{textAlign:'center'}} colSpan="3">减：营业外支出</td>
                        <td>13</td>
                       <td > <Input   {...getFieldProps('yywzc1', { initialValue:data.YYWZC1 })}/></td>
                        <td colSpan="2"> <Input   {...getFieldProps('yywzc', { initialValue:data.YYWZC })}/></td>                 
                    </tr>
                    
                    <tr>
                        <td style={{textAlign:'center'}} colSpan="3">四、利润总额（亏损总额以“—”号填列）</td>
                        <td>14</td>
                        <td > <Input   {...getFieldProps('lrze1', { initialValue:data.LRZE1 })}/></td>
                        <td colSpan="2"> <Input   {...getFieldProps('lrze', { initialValue:data.LRZE })}/></td>                 
                    </tr>
                    
                    <tr>
                        <td style={{textAlign:'center'}} colSpan="3">减：所得税</td>
                        <td>15</td>
                          <td > <Input   {...getFieldProps('sds1', { initialValue:data.SDS1 })}/></td>
                        <td colSpan="2"> <Input   {...getFieldProps('sds', { initialValue:data.SDS })}/></td>                 
                    </tr>
                    
                    <tr>
                        <td style={{textAlign:'center'}} colSpan="3">五、净利润（亏损以“—”号填列）</td>
                        <td>16</td>
                         <td > <Input   {...getFieldProps('jlr1', { initialValue:data.JLR1 })}/></td>
                        <td colSpan="2"> <Input   {...getFieldProps('jlr', { initialValue:data.JLR })}/></td>                  
                    </tr>
                    
                     <tr>
                        <td style={{textAlign:'center'}} colSpan="3">补充资料</td>
                        <td></td>
                        <td colSpan="3"> </td>                                       
                    </tr> 
                    
                     <tr>
                        <td style={{textAlign:'center'}} colSpan="3">项目</td>
                        <td></td>
                        <td > 本年累计数</td>
                        <td colSpan="2"> 上年累计数</td>                 
                    </tr>
                    
                      <tr>
                        <td style={{textAlign:'center'}} colSpan="3">1、出售、处置部门或被投资单位所得收益</td>
                        <td></td>
                        <td > <Input   {...getFieldProps('csczsy1', { initialValue:data.CSCZSY1 })}/></td>
                        <td colSpan="2"> <Input   {...getFieldProps('csczsy', { initialValue:data.CSCZSY })}/></td>                 
                    </tr>
                    
                    <tr>
                        <td style={{textAlign:'center'}} colSpan="3">2、自然灾害发生的损失</td>
                        <td></td>
                       <td > <Input   {...getFieldProps('zhss1', { initialValue:data.ZHSS1 })}/></td>
                        <td colSpan="2"> <Input   {...getFieldProps('zhss', { initialValue:data.ZHSS })}/></td>                
                    </tr>
                    
                     <tr>
                        <td style={{textAlign:'center'}} colSpan="3">3、会计政策变更增加（或减少）利润总额</td>
                        <td></td>
                        <td > <Input   {...getFieldProps('zcbglr1', { initialValue:data.ZCBGLR1 })}/></td>
                        <td colSpan="2"> <Input   {...getFieldProps('zcbglr', { initialValue:data.ZCBGLR })}/></td>                 
                    </tr>
                    
                     <tr>
                        <td style={{textAlign:'center'}} colSpan="3">4、会计估计变更增加（或减少）利润总额</td>
                        <td></td>
                        <td > <Input   {...getFieldProps('gjbglr1', { initialValue:data.GJBGLR1 })}/></td>
                        <td colSpan="2"> <Input   {...getFieldProps('gjbglr', { initialValue:data.GJBJLR })}/></td>                  
                    </tr>
                    
                     <tr>
                        <td style={{textAlign:'center'}} colSpan="3">5、债务重组损失</td>
                        <td></td>
                        <td > <Input   {...getFieldProps('zwczss1', { initialValue:data.ZWCZSS1 })}/></td>
                        <td colSpan="2"> <Input   {...getFieldProps('zwczss', { initialValue:data.ZWCZSS })}/></td>                 
                    </tr>
                    
                     <tr>
                        <td style={{textAlign:'center'}} colSpan="3">6、其它</td>
                        <td></td>
                       <td > <Input   {...getFieldProps('qt1', { initialValue:data.QT1 })}/></td>
                        <td colSpan="2"> <Input   {...getFieldProps('qt', { initialValue:data.QT })}/></td>                  
                    </tr>
                    
                     <tr>
                        <td style={{textAlign:'center'}} colSpan="3">主营业务收入项目</td>
                        <td></td>
                        <td > 本月数</td>
                        <td colSpan="2"> 本年累计数</td>                 
                    </tr>
                    
                    <tr>
                        <td style={{textAlign:'center'}} colSpan="2">代理税务登记收入</td>
                        <td>户数</td>
                       <td > <Input   {...getFieldProps('dlswdjhs', { initialValue:data.DLSWDJHS })}/></td>
                       <td > <Input   {...getFieldProps('dlswdjsr1', { initialValue:data.DLSWDJSR1 })}/></td>
                       <td colSpan="2"> <Input   {...getFieldProps('dlswdjsr', { initialValue:data.DLSWDJSR })}/></td>                 
                    </tr>
                    
                    <tr>
                        <td style={{textAlign:'center'}} colSpan="2">代理纳税申报收入</td>
                        <td>户数</td>
                        <td > <Input   {...getFieldProps('dlnssbhs', { initialValue:data.DLNSSBHS })}/></td>
                       <td > <Input   {...getFieldProps('dlnssbsr1', { initialValue:data.DLNSSBSR1 })}/></td>
                       <td colSpan="2"> <Input   {...getFieldProps('dlnssbsr', { initialValue:data.DLNSSBSR })}/></td>               
                    </tr>
                    
                     <tr>
                        <td style={{textAlign:'center'}} colSpan="2">代理纳税审查收入</td>
                        <td>户数</td>
                        <td > <Input   {...getFieldProps('dlnsschs', { initialValue:data.DLNSSCHS })}/></td>
                       <td > <Input   {...getFieldProps('dlnsscsr1', { initialValue:data.DLNSSCSR1 })}/></td>
                       <td colSpan="2"> <Input   {...getFieldProps('dlnsscsr', { initialValue:data.DLNSSCSR })}/></td>              
                    </tr>
                    
                     <tr>
                        <td style={{textAlign:'center'}} colSpan="2">代理建帐建制收入</td>
                        <td>户数</td>
                       <td > <Input   {...getFieldProps('dljzjzhs', { initialValue:data.DLJZJZHS })}/></td>
                       <td > <Input   {...getFieldProps('dljzjzsr1', { initialValue:data.DLJZJZSR1 })}/></td>
                       <td colSpan="2"> <Input   {...getFieldProps('dljzjzsr', { initialValue:data.DLJZJZSR })}/></td>               
                    </tr>
                    
                    <tr>
                        <td style={{textAlign:'center'}} colSpan="2">受聘顾问咨询收入</td>
                        <td>户数</td>
                        <td > <Input   {...getFieldProps('spgwzxhs', { initialValue:data.SPGWZXHS })}/></td>
                       <td > <Input   {...getFieldProps('spgwzxsr1', { initialValue:data.SPGWZXSR1 })}/></td>
                       <td colSpan="2"> <Input   {...getFieldProps('spgwzxsr', { initialValue:data.SPGWZXSR })}/></td>                
                    </tr>
                    
                    <tr>
                        <td style={{textAlign:'center'}} colSpan="2">代理申请税务复议收入</td>
                        <td>户数</td>
                        <td > <Input   {...getFieldProps('dlsqswfyhs', { initialValue:data.DLSQSWFYHS })}/></td>
                       <td > <Input   {...getFieldProps('dlsqswfysr1', { initialValue:data.DLSQSWFYSR1 })}/></td>
                       <td colSpan="2"> <Input   {...getFieldProps('dlsqswfysr', { initialValue:data.DLSQSWFYSR })}/></td>                
                    </tr>
                    
                    <tr>
                        <td style={{textAlign:'center'}} colSpan="2">培训收入</td>
                        <td>户数</td>
                        <td > <Input   {...getFieldProps('pxhs', { initialValue:data.PXHS })}/></td>
                       <td > <Input   {...getFieldProps('pxsr1', { initialValue:data.PXSR1 })}/></td>
                       <td colSpan="2"> <Input   {...getFieldProps('pxsr', { initialValue:data.PXSR })}/></td>                 
                    </tr>
                    
                    <tr>
                        <td style={{textAlign:'center'}} colSpan="2">其它主营业务收入</td>
                        <td>户数</td>
                        <td > <Input   {...getFieldProps('qtzyywsrhs', { initialValue:data.QTZYYWSRHS })}/></td>
                       <td > <Input   {...getFieldProps('qtzyywsr1', { initialValue:data.QTZYYWSR1 })}/></td>
                       <td colSpan="2"> <Input   {...getFieldProps('qtzyywsr', { initialValue:data.QTZYYWSR })}/></td>                 
                    </tr>
                    
                     <tr>
                    
                        <td >  所长：</td>
                        
                        
                               
                          <td> <Input  {...getFieldProps('sz', { initialValue:data.SZ })} />  </td> 
                          
                        
                        <td>主管会计</td>
                        
                         <td > <Input   {...getFieldProps('zgkj', { initialValue:data.ZGKJ })}/></td>
                        <td style={{textAlign:'center'}}  colSpan="3">
                        
                        <Row>
                                 <Col span="3" offset="6">制表：</Col>
                                <Col span="5" ><Input  {...getFieldProps('zbr', { initialValue:data.ZBR })} />  </Col>
                          </Row>
                         </td>              
                    </tr>
                    
                </tbody>
                
                 <tbody>
                    <tr >
                       <td></td>
                       
                        
                              <td>               
                       <Button type="primary" onClick={this.handleSubmit}> <Icon type="check"/>保存</Button>
                      </td>
                      
                       <td style={{textAlign:'center'}}>
                        
                         <Button type="primary" onClick={this.showModal}> <Icon type="arrow-up"/>提交</Button>
                                       <Modal title="你确定要提交吗？" visible={this.state.visible}
                                             onOk={this.handleOk} onCancel={this.handleCancel}>
                                                 <p>提交后就不能修改了！！！</p>
                                                
                                          
        </Modal>
                        </td>
                        
                      <td>
                       
                      
                       </td>
                      
                    </tr>
                </tbody>
               
            </table>
            </Form>

        </div>
        </div>
    }
});


Updatejgnjb = Form.create({
    mapPropsToFields(props) {
        let result = {};
        for (let prop in props.data) {
            result[prop] = {value: props.data[prop]}
        }
        return result;
    }
})(Updatejgnjb);
   

    

 

module.exports = Updatejgnjb