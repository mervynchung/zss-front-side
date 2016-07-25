import React from 'react'
import {Col, Input,Row,Button,Icon,Form,Modal,DatePicker  } from 'antd'
import {SelectorYear,SelectorXZ,SelectorJGXZ,SelectorCS} from 'component/compSelector'
import './style.css'

const ButtonGroup = Button.Group;
const createForm = Form.create;
const FormItem = Form.Item;

Date.prototype.Format = function (fmt) { //时间格式化函数
    var o = {
        "M+": this.getMonth() + 1, //月份 
        "d+": this.getDate(), //日 
        "h+": this.getHours(), //小时 
        "m+": this.getMinutes(), //分 
        "s+": this.getSeconds(), //秒 
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
        "S": this.getMilliseconds() //毫秒 
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));//补0处理
    return fmt;
}

let Addjysrqkb = React.createClass({
    getDefaultProps(){
        return {
            onSubmit: {},
           
        }
    },
    handleSubmit(e) {
    e.preventDefault();
    var mp = {};
    let value=this.props.form.getFieldsValue()
    for(var key in value){
        if(!value[key]){
            value[key]=null;
        }
          if(Object.prototype.toString.call(value[key])=="[object Date]"){//时间格式化
                    var dd = value[key].Format("yyyy-MM-dd");
                    value[key]=dd;
                }
        
    }
    console.log('收到表单值：', value);
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
         if(Object.prototype.toString.call(value[key])=="[object Date]"){//时间格式化
                    var dd = value[key].Format("yyyy-MM-dd");
                    value[key]=dd;
                }
     }
     
    this.setState({
      visible: true,
      okValue:value,
    });
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
         let data =[{}];
         if(this.props.data2.length!=0){
              data = this.props.data2;             
         };
      
        return <div className="add">
        <div className="fix-table table-bordered table-striped" >
        <Form horizontal onSubmit={this.handleSubmit}>
           <table>
               <colgroup>
                    <col className ="ant-col-6"></col>
                    <col className="ant-col-3"></col>
                     <col className ="ant-col-2"></col> 
                     <col className ="ant-col-4"></col> 
                     <col className ="ant-col-2"></col> 
                     <col className ="ant-col-4"></col> 
                    <col className ="ant-col-3"></col>                                
                </colgroup>
                <tbody>
                
                 <tr>
                        <td >单位: {data[0].DWMC}</td>                                                                                                    
                        <td  >  <Col 
                          label="年度：">
                            <SelectorYear  { ...getFieldProps('nd')}/>
                        </Col>
                        </td>
                        <td>制表人:</td>
                           
                           <td ><Input   {...getFieldProps('tbr')}/> </td>
                            <td>所长：</td>
                           <td ><Input   {...getFieldProps('sz')}/> </td> 
                       <td>单位：万元、户</td>                
                      </tr>    
                
                <tr style={{textAlign:'center'}}>
                    <th rowSpan="2">项目</th>
                    <th colSpan="3">上年数</th>
                    <th colSpan="3">本年数</th>               
                </tr>
                <tr>
                    <th  colSpan="2">户次</th>
                    <th >金额</th>
                    <th colSpan="2">户次</th>
                    <th>金额</th>                   
                </tr>
                <tr>
                    <td ><b>一、收人总额</b></td>
                    <td  colSpan="2">----</td>
                    <td><Input   {...getFieldProps('srze0', { initialValue:data[0].SRZE})}/></td>
                    <td  colSpan="2">----</td>
                    <td><Input   {...getFieldProps('srze')}/></td>
                </tr>
                <tr>
                    <td><b>（一）主营业务合计</b></td>
                    <td  colSpan="2"><Input   {...getFieldProps('zyywsrhj_hs0', { initialValue:data[0].ZYYWSRHJ_HS})}/></td>
                    <td><Input   {...getFieldProps('zyywsrhj_je0', { initialValue:data[0].ZYYWSRHJ_JE})}/></td>
                    <td colSpan="2"><Input   {...getFieldProps('zyywsrhj_hs')}/></td>
                    <td><Input   {...getFieldProps('zyywsrhj_je')}/></td>
                </tr>
                <tr>
                    <td>1、涉税服务业务</td>
                     <td colSpan="2"><Input   {...getFieldProps('ssfwyw_hs0', { initialValue:data[0].SSFWYW_HS})}/></td>
                    <td><Input   {...getFieldProps('ssfwyw_je0', { initialValue:data[0].SSFWYW_JE})}/></td>
                    <td colSpan="2"><Input   {...getFieldProps('ssfwyw_hs')}/></td>
                    <td><Input   {...getFieldProps('ssfwyw_je')}/></td>
                </tr>
                <tr>
                    <td>(1)代理税务登记</td>
                   <td colSpan="2"><Input   {...getFieldProps('dlswdj_hs0', { initialValue:data[0].DLSWDJ_HS})}/></td>
                    <td><Input   {...getFieldProps('dlswdj_je0', { initialValue:data[0].DLSWDJ_JE})}/></td>
                    <td colSpan="2"><Input   {...getFieldProps('dlswdj_hs')}/></td>
                    <td><Input   {...getFieldProps('dlswdj_je')}/></td>
                </tr>
                <tr>
                    <td>(2)代理纳税申报</td>
                    <td colSpan="2"><Input   {...getFieldProps('dlnssb_hs0', { initialValue:data[0].DLNSSB_HS})}/></td>
                    <td><Input   {...getFieldProps('dlnssb_je0', { initialValue:data[0].DLNSSB_JE})}/></td>
                    <td colSpan="2"><Input   {...getFieldProps('dlnssb_hs')}/></td>
                    <td><Input   {...getFieldProps('dlnssb_je')}/></td>
                </tr>
                <tr>
                    <td>(3)代理建帐记帐</td>
                    <td colSpan="2"><Input   {...getFieldProps('dljzjz_hs0', { initialValue:data[0].DLJZJZ_HS})}/></td>
                    <td><Input   {...getFieldProps('dljzjz_je0', { initialValue:data[0].DLJZJZ_JE})}/></td>
                    <td colSpan="2"><Input   {...getFieldProps('dljzjz_hs')}/></td>
                    <td><Input   {...getFieldProps('dljzjz_je')}/></td>
                </tr>
                <tr>
                    <td>(4)代理申请减、免、退税</td>
                   <td colSpan="2"><Input   {...getFieldProps('dlsqjmts_hs0', { initialValue:data[0].DLSQJMTS_HS})}/></td>
                    <td><Input   {...getFieldProps('dlsqjmts_je0', { initialValue:data[0].DLSQJMTS_JE})}/></td>
                    <td colSpan="2"><Input   {...getFieldProps('dlsqjmts_hs')}/></td>
                    <td><Input   {...getFieldProps('dlsqjmts_je')}/></td>
                </tr>
                <tr>
                    <td>(5)代理申请增值税一般纳税人资格认定</td>
                    <td colSpan="2"><Input   {...getFieldProps('dlzgrd_hs0', { initialValue:data[0].DLZGRD_HS})}/></td>
                    <td><Input   {...getFieldProps('dlzgrd_je0', { initialValue:data[0].DLZGRD_JE})}/></td>
                    <td colSpan="2"><Input   {...getFieldProps('dlzgrd_hs')}/></td>
                    <td><Input   {...getFieldProps('dlzgrd_je')}/></td>
                </tr>
                <tr>
                    <td>(6)代理制作涉税文书</td>
                   <td colSpan="2"><Input   {...getFieldProps('dlzzssws_hs0', { initialValue:data[0].DLZZSSWS_HS})}/></td>
                    <td><Input   {...getFieldProps('dlzzssws_je0', { initialValue:data[0].DLZZSSWS_JE})}/></td>
                    <td colSpan="2"><Input   {...getFieldProps('dlzzssws_hs')}/></td>
                    <td><Input   {...getFieldProps('dlzzssws_je')}/></td>
                </tr>
                <tr>
                    <td>(7)代理一机多卡业务</td>
                   <td colSpan="2"><Input   {...getFieldProps('dlyjdk_hs0', { initialValue:data[0].DLYJDK_HS})}/></td>
                    <td><Input   {...getFieldProps('dlyjdk_je0', { initialValue:data[0].DLYJDK_JE})}/></td>
                    <td colSpan="2"><Input   {...getFieldProps('dlyjdk_hs')}/></td>
                    <td><Input   {...getFieldProps('dlyjdk_je')}/></td>
                </tr>
                <tr>
                    <td>(8)受聘税务顾问咨珣</td>
                    <td colSpan="2"><Input   {...getFieldProps('spswgwzx_hs0', { initialValue:data[0].SPSWGWZX_HS})}/></td>
                    <td><Input   {...getFieldProps('spswgwzx_je0', { initialValue:data[0].SPSWGWZX_JE})}/></td>
                    <td colSpan="2"><Input   {...getFieldProps('spswgwzx_hs')}/></td>
                    <td><Input   {...getFieldProps('spswgwzx_je')}/></td>
                </tr>
                <tr>
                    <td>(9)代理税收筹划</td>
                   <td colSpan="2"><Input   {...getFieldProps('dlssch_hs0', { initialValue:data[0].DLSSCH_HS})}/></td>
                    <td><Input   {...getFieldProps('dlssch_je0', { initialValue:data[0].DLSSCH_JE})}/></td>
                    <td colSpan="2"><Input   {...getFieldProps('dlssch_hs')}/></td>
                    <td><Input   {...getFieldProps('dlssch_je')}/></td>
                </tr>
                <tr>
                    <td>(10)涉税培训业务</td>
                   <td colSpan="2"><Input   {...getFieldProps('sspx_hs0', { initialValue:data[0].SSPX_HS})}/></td>
                    <td><Input   {...getFieldProps('sspx_je0', { initialValue:data[0].SSPX_JE})}/></td>
                    <td colSpan="2"><Input   {...getFieldProps('sspx_hs')}/></td>
                    <td><Input   {...getFieldProps('sspx_je')}/></td>
                </tr>
                <tr>
                    <td>(11)其他涉税服务业务小计</td>
                    <td colSpan="2"><Input   {...getFieldProps('qtssfwywxj_hs0', { initialValue:data[0].QTSSFWYWXJ_HS})}/></td>
                    <td><Input   {...getFieldProps('qtssfwywxj_je0', { initialValue:data[0].QTSSFWYWXJ_JE})}/></td>
                    <td colSpan="2"><Input   {...getFieldProps('qtssfwywxj_hs')}/></td>
                    <td><Input   {...getFieldProps('qtssfwywxj_je')}/></td>
                </tr>
                <tr>
                    <td>2、涉税鉴证业务</td>
                    <td colSpan="2"><Input   {...getFieldProps('ssjzyw_hs0', { initialValue:data[0].SSJZYW_HS})}/></td>
                    <td><Input   {...getFieldProps('ssjzyw_je0', { initialValue:data[0].SSJZYW_JE})}/></td>
                    <td colSpan="2"><Input   {...getFieldProps('ssjzyw_hs')}/></td>
                    <td><Input   {...getFieldProps('ssjzyw_je')}/></td>
                </tr>
                <tr>
                    <td>(1)企业所得税汇算清缴纳税申报鉴证业务</td>
                    <td colSpan="2"><Input   {...getFieldProps('sdshsqj_hs0', { initialValue:data[0].SDSHSQJ_HS})}/></td>
                    <td><Input   {...getFieldProps('sdshsqj_je0', { initialValue:data[0].SDSHSQJ_JE})}/></td>
                    <td colSpan="2"><Input   {...getFieldProps('sdshsqj_hs')}/></td>
                    <td><Input   {...getFieldProps('sdshsqj_je')}/></td>
                </tr>
                <tr>
                    <td>(2)企业税前弥补亏损鉴证业务</td>
                    <td colSpan="2"><Input   {...getFieldProps('mbks_hs0', { initialValue:data[0].MBKS_HS})}/></td>
                    <td><Input   {...getFieldProps('mbks_je0', { initialValue:data[0].MBKS_JE})}/></td>
                    <td colSpan="2"><Input   {...getFieldProps('mbks_hs')}/></td>
                    <td><Input   {...getFieldProps('mbks_je')}/></td>
                </tr>
                <tr>
                    <td>(3)企业资产损失税前税前扣除鉴证业务</td>
                    <td colSpan="2"><Input   {...getFieldProps('ccsssqkc_hs0', { initialValue:data[0].CCSSSQKC_HS})}/></td>
                    <td><Input   {...getFieldProps('ccsssqkc_je0', { initialValue:data[0].CCSSSQKC_JE})}/></td>
                    <td colSpan="2"><Input   {...getFieldProps('ccsssqkc_hs')}/></td>
                    <td><Input   {...getFieldProps('ccsssqkc_je')}/></td>
                </tr>
                <tr>
                    <td>(4)土地增值税清算鉴证业务</td>
                   <td colSpan="2"><Input   {...getFieldProps('tt_hs0', { initialValue:data[0].TT_HS})}/></td>
                    <td><Input   {...getFieldProps('tt_je0', { initialValue:data[0].TT_JE})}/></td>
                    <td colSpan="2"><Input   {...getFieldProps('tt_hs')}/></td>
                    <td><Input   {...getFieldProps('tt_je')}/></td>
                </tr>
                <tr>
                    <td>(5)其他涉税鉴证业务小计</td>
                   <td colSpan="2"><Input   {...getFieldProps('qtssjz_hs0', { initialValue:data[0].QTSSJZ_HS})}/></td>
                    <td><Input   {...getFieldProps('qtssjz_je0', { initialValue:data[0].QTSSJZ_JE})}/></td>
                    <td colSpan="2"><Input   {...getFieldProps('qtssjz_hs')}/></td>
                    <td><Input   {...getFieldProps('qtssjz_je')}/></td>
                </tr>
                <tr>
                    <td style={{paddingLeft:'5em'}}>⑴</td>
                    <td colSpan="2"><Input   {...getFieldProps('qtssywsr_hs10', { initialValue:data[0].QTSSYWSR_HS1})}/></td>
                    <td><Input   {...getFieldProps('qtssywsr_je10', { initialValue:data[0].QTSSYWSR_JE1})}/></td>
                    <td colSpan="2"><Input   {...getFieldProps('qtssywsr_hs1')}/></td>
                    <td><Input   {...getFieldProps('qtssywsr_je1')}/></td>
                </tr>
                <tr>
                    <td style={{paddingLeft:'5em'}}>⑵</td>
                    <td colSpan="2"><Input   {...getFieldProps('qtssywsr_hs20', { initialValue:data[0].QTSSYWSR_HS2})}/></td>
                    <td><Input   {...getFieldProps('qtssywsr_je20', { initialValue:data[0].QTSSYWSR_JE2})}/></td>
                    <td colSpan="2"><Input   {...getFieldProps('qtssywsr_hs2')}/></td>
                    <td><Input   {...getFieldProps('qtssywsr_je2')}/></td>
                </tr>
                <tr>
                    <td style={{paddingLeft:'5em'}}>⑶</td>
                    <td colSpan="2"><Input   {...getFieldProps('qtssywsr_hs30', { initialValue:data[0].QTSSYWSR_HS3})}/></td>
                    <td><Input   {...getFieldProps('qtssywsr_je30', { initialValue:data[0].QTSSYWSR_JE3})}/></td>
                    <td colSpan="2"><Input   {...getFieldProps('qtssywsr_hs3')}/></td>
                    <td><Input   {...getFieldProps('qtssywsr_je3')}/></td>
                </tr>
                <tr>
                    <td><b>（二）其他收人合计</b></td>
                     <td colSpan="3"><Col span={12} offset={6}><Input  {...getFieldProps('qtywsrhj0', { initialValue:data[0].QTYWSRHJ})}/></Col></td>
                     
                    <td colSpan="3"><Col span={12} offset={6}><Input  {...getFieldProps('qtywsrhj')}/></Col></td>
                </tr>
                <tr>
                    <td><b>二、支出总额</b></td>
                    <td colSpan="3"><Col span={12} offset={6}><Input  {...getFieldProps('zcze0', { initialValue:data[0].ZCZE})}/></Col></td>
                    <td colSpan="3"><Col span={12} offset={6}><Input  {...getFieldProps('zcze')}/></Col></td>
                </tr>
                <tr>
                    <td>（一）主营业务成本</td>
                    <td colSpan="3"><Col span={12} offset={6}><Input  {...getFieldProps('zyywcb0', { initialValue:data[0].ZYYWCB})}/></Col></td>
                    <td colSpan="3"><Col span={12} offset={6}><Input  {...getFieldProps('zyywcb')}/></Col></td>
                </tr>
                <tr>
                    <td>（二）主营业务税金及附加</td>
                    <td colSpan="3"><Col span={12} offset={6}><Input  {...getFieldProps('zyywsjfj0', { initialValue:data[0].ZYYWSJFJ})}/></Col></td>
                    <td colSpan="3"><Col span={12} offset={6}><Input  {...getFieldProps('zyywsjfj')}/></Col></td>
                </tr>
                <tr>
                    <td>（三）营业费用</td>
                    <td colSpan="3"><Col span={12} offset={6}><Input  {...getFieldProps('yyfy0', { initialValue:data[0].YYFY})}/></Col></td>
                    <td colSpan="3"><Col span={12} offset={6}><Input  {...getFieldProps('yyfy')}/></Col></td>
                </tr>
                <tr>
                    <td>（四）管理费用</td>
                    <td colSpan="3"><Col span={12} offset={6}><Input  {...getFieldProps('glfy0', { initialValue:data[0].GLFY})}/></Col></td>
                    <td colSpan="3"><Col span={12} offset={6}><Input  {...getFieldProps('glfy')}/></Col></td>
                </tr>
                <tr>
                    <td>（五）财务费用</td>
                    <td colSpan="3"><Col span={12} offset={6}><Input  {...getFieldProps('cwfy0', { initialValue:data[0].CWFY})}/></Col></td>
                    <td colSpan="3"><Col span={12} offset={6}><Input  {...getFieldProps('cwfy')}/></Col></td>
                </tr>
                <tr>
                    <td>（六）营业外支出</td>
                    <td colSpan="3"><Col span={12} offset={6}><Input  {...getFieldProps('yywzc0', { initialValue:data[0].YYWZC})}/></Col></td>
                    <td colSpan="3"><Col span={12} offset={6}><Input  {...getFieldProps('yywzc')}/></Col></td>
                </tr>
                <tr>
                    <td>（七）其他支出</td>
                    <td colSpan="3"><Col span={12} offset={6}><Input  {...getFieldProps('qtzc0', { initialValue:data[0].QTZC})}/></Col></td>
                    <td colSpan="3"><Col span={12} offset={6}><Input  {...getFieldProps('qtzc')}/></Col></td>
                </tr>
                <tr>
                    <td><b>三、利润总额</b></td>
                    <td colSpan="3"><Col span={12} offset={6}><Input  {...getFieldProps('lrze0', { initialValue:data[0].LRZE})}/></Col></td>
                    <td colSpan="3"><Col span={12} offset={6}><Input  {...getFieldProps('lrze')}/></Col></td>
                </tr>
                </tbody>
                 <tbody>
                    <tr >                      
                              <td  colSpan="2" style={{textAlign:'center'}}>               
                        <Button type="primary" onClick={this.handleSubmit}> <Icon type="check"/>保存</Button>
                         </td>
                         <td  colSpan="3" style={{textAlign:'center'}}> 
                         <Button type="primary" onClick={this.showModal}> <Icon type="arrow-up"/>提交</Button>
                                       <Modal title="你确定要提交吗？" visible={this.state.visible}
                                             onOk={this.handleOk} onCancel={this.handleCancel}>
                                                 <p>提交后就不能修改了！！！</p>                             
                                        </Modal>
                        </td>
                      <td  colSpan="3" style={{textAlign:'center'}}> 
                        <Button type="primary" onClick={this.handleReset}><Icon type="cross"/>重置</Button>
                      </td> 
                    </tr>
                </tbody>
            </table>
            </Form>

        </div>
           <div >
                 <p>填表说明：</p>
            <p>1.各项收入数均截止到统计年度12月31日。</p>
            <p>2.  ”其他涉税鉴证业务"是指除所得税汇算清缴、弥补亏损鉴证业务、企业资产损失税前扣除鉴证业务、土地增值税渚笪鉴证业务以外的涉税鉴证业务。</p>
            <p>  3.  ”其他收入"是指投资收益、补贴收入、营业外收入等非主营业务收入。</p>
              
            </div>
        </div>
    }
});
Addjysrqkb = Form.create({
    mapPropsToFields(props) {
        let result = {};
        for (let prop in props.data) {
            result[prop] = {value: props.data[prop]}
        }
        return result;
    }
})(Addjysrqkb);


module.exports = Addjysrqkb;