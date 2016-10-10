import React from 'react'
import {Col, Input,Row,Button,Icon,Form,Modal,DatePicker,InputNumber  } from 'antd'
import {SelectorYear,SelectorXZ} from 'component/compSelector'
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

let Addzcmxb = React.createClass({
    getDefaultProps(){
        return {
            onSubmit: {},
           
        }
    },
   getInitialState() {
    return { visible: false };
  },
    handleSubmit(e) {
    e.preventDefault();
    let value=this.props.form.getFieldsValue()
    for(var key in value){
        if(!value[key]&&Object.prototype.toString.call(value[key])!="[object Number]"){
            value[key]=null;
        }
          if(Object.prototype.toString.call(value[key])=="[object Date]"){//时间格式化
                    var dd = value[key].Format("yyyy-MM-dd");
                    value[key]=dd;
                }
        
    }
    value.zyywcb1=this.mixNums(["gzfy1","flf1","jyf1","ghjf1","shtc1",'bgf1','clf1',"hf1",'pxzlf1','hwf1',"zpf1","zj1","zfgjj1","gwzxf1","qt1"]);
    value.zyywcb=this.mixNums(["gzfy","flf","jyf","ghjf","shtc",'bgf','clf',"hf",'pxzlf','hwf',"zpf","zj","zfgjj","gwzxf","qt"]);
    value.glfy1=this.mixNums(["glfy_gzfy1","glfy_flf1","glfy_ywzdf1","glfy_bgf1","glfy_qtsj1",'glfy_qcfy1','glfy_zyfxjj1',"glfy_zyzrbx1",'glfy_clf1','glfy_qtfy1']);
    value.glfy=this.mixNums(["glfy_gzfy","glfy_flf","glfy_ywzdf","glfy_bgf","glfy_qtsj",'glfy_qcfy','glfy_zyfxjj',"glfy_zyzrbx",'glfy_clf','glfy_qtfy']);
    value.zczj1=this.mixNums(["zyywsjfj1","qtywzc1","cwfy1","yywzc1"])+Number(value.zyywcb1)+Number(value.glfy1);
    value.zczj=this.mixNums(["zyywsjfj","qtywzc","cwfy","yywzc"])+Number(value.zyywcb)+Number(value.glfy);
    this.props.onSubmit(value);
  },
 mixNums(names){
    let numBuild=this.props.form.getFieldsValue(names);
    let num=0;
    for (var key in numBuild) {
      num+=Number(numBuild[key]);
    };
    return num;
  },
     handleReset(e) {
        e.preventDefault();
        this.props.form.resetFields();
    },

  showModal(e) {  
    e.preventDefault();
    let value=this.props.form.getFieldsValue()
     for(var key in value){
         if(!value[key]&&Object.prototype.toString.call(value[key])!="[object Number]"){
             value[key]=null;
         }
         if(Object.prototype.toString.call(value[key])=="[object Date]"){//时间格式化
                    var dd = value[key].Format("yyyy-MM-dd");
                    value[key]=dd;
                }
     }
     value.zyywcb1=this.mixNums(["gzfy1","flf1","jyf1","ghjf1","shtc1",'bgf1','clf1',"hf1",'pxzlf1','hwf1',"zpf1","zj1","zfgjj1","gwzxf1","qt1"]);
    value.zyywcb=this.mixNums(["gzfy","flf","jyf","ghjf","shtc",'bgf','clf',"hf",'pxzlf','hwf',"zpf","zj","zfgjj","gwzxf","qt"]);
    value.glfy1=this.mixNums(["glfy_gzfy1","glfy_flf1","glfy_ywzdf1","glfy_bgf1","glfy_qtsj1",'glfy_qcfy1','glfy_zyfxjj1',"glfy_zyzrbx1",'glfy_clf1','glfy_qtfy1']);
    value.glfy=this.mixNums(["glfy_gzfy","glfy_flf","glfy_ywzdf","glfy_bgf","glfy_qtsj",'glfy_qcfy','glfy_zyfxjj',"glfy_zyzrbx",'glfy_clf','glfy_qtfy']);
    value.zczj1=this.mixNums(["zyywsjfj1","qtywzc1","cwfy1","yywzc1"])+Number(value.zyywcb1)+Number(value.glfy1);
    value.zczj=this.mixNums(["zyywsjfj","qtywzc","cwfy","yywzc"])+Number(value.zyywcb)+Number(value.glfy);
    this.setState({
      visible: true,
      okValue:value,
    });
  },
  
  
  handleOk(e) {
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
        const year = new Date().getFullYear();
         const { getFieldProps } = this.props.form;
              let obj =[{}];
         if(this.props.data.length!=0){
              obj = this.props.data;
         }; 
          
        return <div className="add">
        <div className="fix-table table-bordered table-striped" >
        <Form horizontal onSubmit={this.handleSubmit}>
            <table>    
                <colgroup>
                    <col className ="col-4"></col>
                    <col className="col-2"></col>
                    <col className="col-3"></col>
                    <col className="col-3"></col>
                    <col className ="col-4"></col>
                    <col className ="col-2"></col>  
                    <col className ="col-3"></col>
                    <col className ="col-3"></col>                 
                </colgroup>
                <tbody>
                    <tr>
                        <td colSpan="2">单位：{obj[0].DWMC}</td>
                        
                        <td colSpan="4">统计截止时间段：
                                          <SelectorXZ style={{width:'150px'}} { ...getFieldProps('timevalue', { initialValue:'0'})}/>
                        </td>
                         
                           
                        <td  >  <Col 
                          label="年度：">
                            <SelectorYear  { ...getFieldProps('nd', { initialValue:year})} allowClear={false}/>
                        </Col>
                           </td>
                       <td>单位：元</td>
                    </tr>
                    
                      <tr>
                        <td style={{textAlign:'center'}} >项目</td>
                        <td>行次</td>
                        <td > 本期数</td>
                        <td > 本年累计数</td>   
                        <td style={{textAlign:'center'}} >项目</td>   
                        <td  >行次</td>      
                        <td > 本期数数</td>
                        <td > 本年累计数</td>       
                    </tr> 
                    
                    
                    <tr>
                        <td style={{textAlign:'center'}} >一、主营业务成本</td>
                        <td>1</td>
                        <td ></td>
                       <td ></td>
                        <td style={{textAlign:'center'}} >二、主营业务税金及附加</td>   
                        <td>17</td>      
                        <td ><InputNumber min={0}  step={0.01}   {...getFieldProps('zyywsjfj1', { initialValue:0})}/></td>
                        <td ><InputNumber min={0}  step={0.01}   {...getFieldProps('zyywsjfj', { initialValue:0})}/></td>      
                    </tr>
                    
                    <tr>
                        <td style={{textAlign:'center'}} >1、工资费用</td>
                        <td>2</td>
                        <td ><InputNumber min={0}  step={0.01}   {...getFieldProps('gzfy1', { initialValue:0})}/> </td>
                       <td ><InputNumber min={0}  step={0.01}   {...getFieldProps('gzfy', { initialValue:0})}/> </td>
                        <td style={{textAlign:'center'}} >三、其他业务支出</td>   
                        <td>18</td>      
                        <td ><InputNumber min={0}  step={0.01}   {...getFieldProps('qtywzc1', { initialValue:0})}/></td>
                        <td ><InputNumber min={0}  step={0.01}   {...getFieldProps('qtywzc', { initialValue:0})}/></td>      
                    </tr>
                    
                    <tr>
                        <td style={{textAlign:'center'}} >2、福利费</td>
                        <td>3</td>
                        <td ><InputNumber min={0}  step={0.01}   {...getFieldProps('flf1', { initialValue:0})}/> </td>
                       <td ><InputNumber min={0}  step={0.01}   {...getFieldProps('flf', { initialValue:0})}/> </td>
                        <td style={{textAlign:'center'}} >四、管理费用</td>   
                        <td>19</td>      
                        <td ></td>
                        <td ></td>      
                    </tr>
                    
                     <tr>
                        <td style={{textAlign:'center'}} >3、教育费</td>
                        <td>4</td>
                        <td ><InputNumber min={0}  step={0.01}   {...getFieldProps('jyf1', { initialValue:0})}/> </td>
                       <td ><InputNumber min={0}  step={0.01}   {...getFieldProps('jyf', { initialValue:0})}/> </td>
                        <td style={{textAlign:'center'}} >1、工资费</td>   
                        <td>20</td>      
                        <td ><InputNumber min={0}  step={0.01}   {...getFieldProps('glfy_gzfy1', { initialValue:0})}/></td>
                        <td ><InputNumber min={0}  step={0.01}   {...getFieldProps('glfy_gzfy', { initialValue:0})}/></td>      
                    </tr>
                    
                     <tr>
                        <td style={{textAlign:'center'}} >4、公会经费</td>
                        <td>5</td>
                        <td ><InputNumber min={0}  step={0.01}   {...getFieldProps('ghjf1', { initialValue:0})}/> </td>
                       <td ><InputNumber min={0}  step={0.01}   {...getFieldProps('ghjf', { initialValue:0})}/> </td>
                        <td style={{textAlign:'center'}} >2、福利费</td>   
                        <td>21</td>      
                        <td ><InputNumber min={0}  step={0.01}   {...getFieldProps('glfy_flf1', { initialValue:0})}/></td>
                        <td ><InputNumber min={0}  step={0.01}   {...getFieldProps('glfy_flf', { initialValue:0})}/></td>      
                    </tr>
                    
                    <tr>
                        <td style={{textAlign:'center'}} >5、社会统筹</td>
                        <td>6</td>
                        <td ><InputNumber min={0}  step={0.01}   {...getFieldProps('shtc1', { initialValue:0})}/> </td>
                       <td ><InputNumber min={0}  step={0.01}   {...getFieldProps('shtc', { initialValue:0})}/> </td>
                        <td style={{textAlign:'center'}} >3、业务招待费</td>   
                        <td>22</td>      
                        <td ><InputNumber min={0}  step={0.01}   {...getFieldProps('glfy_ywzdf1', { initialValue:0})}/></td>
                        <td ><InputNumber min={0}  step={0.01}   {...getFieldProps('glfy_ywzdf', { initialValue:0})}/></td>      
                    </tr>
                    
                    <tr>
                        <td style={{textAlign:'center'}} >6、办公费</td>
                        <td>7</td>
                        <td ><InputNumber min={0}  step={0.01}   {...getFieldProps('bgf1', { initialValue:0})}/> </td>
                       <td ><InputNumber min={0}  step={0.01}   {...getFieldProps('bgf', { initialValue:0})}/> </td>
                        <td style={{textAlign:'center'}} >4、办公费</td>   
                        <td>23</td>      
                        <td ><InputNumber min={0}  step={0.01}   {...getFieldProps('glfy_bgf1', { initialValue:0})}/></td>
                        <td ><InputNumber min={0}  step={0.01}   {...getFieldProps('glfy_bgf', { initialValue:0})}/></td>      
                    </tr>
                    
                     <tr>
                        <td style={{textAlign:'center'}} >7、差旅费</td>
                        <td>8</td>
                        <td ><InputNumber min={0}  step={0.01}   {...getFieldProps('clf1', { initialValue:0})}/> </td>
                       <td ><InputNumber min={0}  step={0.01}   {...getFieldProps('clf', { initialValue:0})}/> </td>
                        <td style={{textAlign:'center'}} >5、其他税金</td>   
                        <td>24</td>      
                        <td ><InputNumber min={0}  step={0.01}   {...getFieldProps('glfy_qtsj1', { initialValue:0})}/></td>
                        <td ><InputNumber min={0}  step={0.01}   {...getFieldProps('glfy_qtsj', { initialValue:0})}/></td>      
                    </tr>
                    
                     <tr>
                        <td style={{textAlign:'center'}} >8、会费</td>
                        <td>9</td>
                        <td ><InputNumber min={0}  step={0.01}   {...getFieldProps('hf1', { initialValue:0})}/> </td>
                       <td ><InputNumber min={0}  step={0.01}   {...getFieldProps('hf', { initialValue:0})}/> </td>
                        <td style={{textAlign:'center'}} >6、汽车费用</td>   
                        <td>25</td>      
                        <td ><InputNumber min={0}  step={0.01}   {...getFieldProps('glfy_qcfy1', { initialValue:0})}/></td>
                        <td ><InputNumber min={0}  step={0.01}   {...getFieldProps('glfy_qcfy', { initialValue:0})}/></td>      
                    </tr>
                    
                     <tr>
                        <td style={{textAlign:'center'}} >9、培训及资料费</td>
                        <td>10</td>
                        <td ><InputNumber min={0}  step={0.01}   {...getFieldProps('pxzlf1', { initialValue:0})}/> </td>
                       <td ><InputNumber min={0}  step={0.01}   {...getFieldProps('pxzlf', { initialValue:0})}/> </td>
                        <td style={{textAlign:'center'}} >7、职业风险基金</td>   
                        <td>26</td>      
                        <td ><InputNumber min={0}  step={0.01}   {...getFieldProps('glfy_zyfxjj1', { initialValue:0})}/></td>
                        <td ><InputNumber min={0}  step={0.01}   {...getFieldProps('glfy_zyfxjj', { initialValue:0})}/></td>      
                    </tr>
                    
                      <tr>
                        <td style={{textAlign:'center'}} >10、会务费</td>
                        <td>11</td>
                        <td ><InputNumber min={0}  step={0.01}   {...getFieldProps('hwf1', { initialValue:0})}/> </td>
                       <td ><InputNumber min={0}  step={0.01}   {...getFieldProps('hwf', { initialValue:0})}/> </td>
                        <td style={{textAlign:'center'}} >8、职业责任保险</td>   
                        <td>27</td>      
                        <td ><InputNumber min={0}  step={0.01}   {...getFieldProps('glfy_zyzrbx1', { initialValue:0})}/></td>
                        <td ><InputNumber min={0}  step={0.01}   {...getFieldProps('glfy_zyzrbx', { initialValue:0})}/></td>      
                    </tr>
                    
                    <tr>
                        <td style={{textAlign:'center'}} >11、租凭费</td>
                        <td>12</td>
                        <td ><InputNumber min={0}  step={0.01}   {...getFieldProps('zpf1', { initialValue:0})}/> </td>
                       <td ><InputNumber min={0}  step={0.01}   {...getFieldProps('zpf', { initialValue:0})}/> </td>
                        <td style={{textAlign:'center'}} >9、差旅费</td>   
                        <td>28</td>      
                        <td ><InputNumber min={0}  step={0.01}   {...getFieldProps('glfy_clf1', { initialValue:0})}/></td>
                        <td ><InputNumber min={0}  step={0.01}   {...getFieldProps('glfy_clf', { initialValue:0})}/></td>      
                    </tr>
                    
                    <tr>
                        <td style={{textAlign:'center'}} >12、折旧</td>
                        <td>13</td>
                        <td ><InputNumber min={0}  step={0.01}   {...getFieldProps('zj1', { initialValue:0})}/> </td>
                       <td ><InputNumber min={0}  step={0.01}   {...getFieldProps('zj', { initialValue:0})}/> </td>
                        <td style={{textAlign:'center'}} >10、其他费用</td>   
                        <td>29</td>      
                        <td ><InputNumber min={0}  step={0.01}   {...getFieldProps('glfy_qtfy1', { initialValue:0})}/></td>
                        <td ><InputNumber min={0}  step={0.01}   {...getFieldProps('glfy_qtfy', { initialValue:0})}/></td>      
                    </tr>
                    
                    <tr>
                        <td style={{textAlign:'center'}} >13、住房公积金</td>
                        <td>14</td>
                        <td ><InputNumber min={0}  step={0.01}   {...getFieldProps('zfgjj1', { initialValue:0})}/> </td>
                       <td ><InputNumber min={0}  step={0.01}   {...getFieldProps('zfgjj', { initialValue:0})}/> </td>
                        <td style={{textAlign:'center'}} >五、财务费用</td>   
                        <td>30</td>      
                        <td ><InputNumber min={0}  step={0.01}   {...getFieldProps('cwfy1', { initialValue:0})}/></td>
                        <td ><InputNumber min={0}  step={0.01}   {...getFieldProps('cwfy', { initialValue:0})}/></td>      
                    </tr>
                    
                      <tr>
                        <td style={{textAlign:'center'}} >14、顾问咨询费</td>
                        <td>15</td>
                        <td ><InputNumber min={0}  step={0.01}   {...getFieldProps('gwzxf1', { initialValue:0})}/> </td>
                       <td ><InputNumber min={0}  step={0.01}   {...getFieldProps('gwzxf', { initialValue:0})}/> </td>
                        <td style={{textAlign:'center'}} >六、营业外支出</td>   
                        <td>31</td>      
                        <td ><InputNumber min={0}  step={0.01}   {...getFieldProps('yywzc1', { initialValue:0})}/></td>
                        <td ><InputNumber min={0}  step={0.01}   {...getFieldProps('yywzc', { initialValue:0})}/></td>      
                    </tr>
                    
                      <tr>
                        <td style={{textAlign:'center'}} >15、其他</td>
                        <td>16</td>
                        <td ><InputNumber min={0}  step={0.01}   {...getFieldProps('qt1', { initialValue:0})}/> </td>
                       <td ><InputNumber min={0}  step={0.01}   {...getFieldProps('qt', { initialValue:0})}/> </td>
                        <td style={{textAlign:'center'}} >支出总计</td>   
                        <td>32</td>      
                        <td ></td>
                        <td ></td>      
                    </tr>
                    
                    <tr>
                       <td></td>
                        <td style={{textAlign:'center'}} >所长：</td>
                       
                        <td ><Input   {...getFieldProps('sz')}/> </td>
                       <td style={{textAlign:'center'}} >主管会计：</td>
                       <td ><Input   {...getFieldProps('agkj')}/> </td>
                        <td style={{textAlign:'center'}} >制表人：</td>  
                         <td ><Input   {...getFieldProps('zb')}/> </td> 
                           <td></td>
                           
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
                                                 <p>提交后将不能修改</p>
                                                 
                                          
        </Modal>
                        </td>
                        
                      <td>
                        <Button type="primary" onClick={this.handleReset}><Icon type="cross"/>重置</Button>
                      
                       </td>
                      
                    </tr>
                </tbody>
               
            </table>
            </Form>

        </div>
        </div>
    }
});
Addzcmxb = Form.create({
    mapPropsToFields(props) {
        let result = {};
        for (let prop in props.data) {
            result[prop] = {value: props.data[prop]}
        }
        return result;
    }
})(Addzcmxb);


module.exports = Addzcmxb