import React from 'react'
import {Col, Input,Row,Button,Icon,Form,Modal,Checkbox } from 'antd'
import {SelectorYear,SelectorXZ} from 'component/compSelector'
import './style.css'

const ButtonGroup = Button.Group;
const createForm = Form.create;
const FormItem = Form.Item;
let Addswsnj = React.createClass({
    getDefaultProps(){
        return {
            onSubmit: {}
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
    }
   // console.log('收到表单值：', value);
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
            let obj =[{}];
         if(this.props.data.length!=0){
              obj = this.props.data;
         }; 
              
        return <div className="add">
        <div className="fix-table table-bordered table-striped" >
        <Form horizontal onSubmit={this.handleSubmit}>
            
            
                
                



<Row>
<Col span="12">
<FormItem labelCol={{span: 9}} wrapperCol={{span:12}}
label="姓名：">
<Input{...getFieldProps('XMING')}/>
</FormItem>
</Col>
<Col span="12">
<FormItem labelCol={{span: 9}} wrapperCol={{span:12}} label="事务所名称">
<Input{...getFieldProps('dwmc')}/>
</FormItem>
</Col>
</Row>



<Row>
<Col span="12">
<FormItem labelCol={{span: 9}} wrapperCol={{span:12}} label="机构注册号码：">
<Input{...getFieldProps('nd')}/>
</FormItem>
</Col>
<Col span="12">
<FormItem labelCol={{span: 9}} wrapperCol={{span:12}} label="所长姓名：">
<Input{...getFieldProps('dwmc')}/>
</FormItem>

</Col>
</Row>

<Row>
<Col span="12">
<FormItem labelCol={{span: 9}} wrapperCol={{span:12}} label="注册资金：">
<Input{...getFieldProps('nd')}/>
</FormItem>
</Col>
<Col span="12">
<FormItem labelCol={{span: 9}} wrapperCol={{span:12}} label="俩系电话：">
<Input{...getFieldProps('dwmc')}/>
</FormItem>

</Col>
</Row>

<Row>
<Col span="12">
<FormItem labelCol={{span: 9}} wrapperCol={{span:12}} label="办公地点">
<Input{...getFieldProps('nd')}/>
</FormItem>
</Col>
<Col span="12">
<FormItem labelCol={{span: 9}} wrapperCol={{span:12}} label="邮编">
<Input{...getFieldProps('dwmc')}/>
</FormItem>

</Col>
</Row>

<Row>
<Col span="12">
<FormItem labelCol={{span: 9}} wrapperCol={{span:12}} label="组织形式：">
<Input{...getFieldProps('nd')}/>
</FormItem>
</Col>
<Col span="12">
<FormItem labelCol={{span: 9}} wrapperCol={{span:12}} label="机构正式成立时间：">
<Input{...getFieldProps('dwmc')}/>
</FormItem>

</Col>
</Row>

<Row>
<Col span="12">
<FormItem labelCol={{span: 9}} wrapperCol={{span:12}} label="总人数：">
<Input{...getFieldProps('nd')}/>
</FormItem>
</Col>
<Col span="12">
<FormItem labelCol={{span: 9}} wrapperCol={{span:12}} label="执业注册税务师人数：">
<Input{...getFieldProps('dwmc')}/>
</FormItem>
</Col>
</Row>

<Row>
<Col span="9">
<FormItem labelCol={{span: 6}} label="参加后续教育"></FormItem>
</Col>
<Col span="5">
<FormItem wrapperCol={{span:6}} > <Input{...getFieldProps('dwmc')}/><span>人应参加</span></FormItem>
</Col>
<Col span="5">
<FormItem wrapperCol={{span:6}} > <Input{...getFieldProps('dwmc')}/><span>人实参加</span></FormItem>
</Col>
<Col span="5">
<FormItem wrapperCol={{span:6}} > <Input{...getFieldProps('dwmc')}/><span>未参加</span></FormItem>
</Col>
</Row>

<Row>
<Col span="12">
<FormItem labelCol={{span: 9}} wrapperCol={{span:12}} label="注册税务师变动情况：">
<span>增加</span><Input{...getFieldProps('nd')}/>
<span>减少</span><Input{...getFieldProps('nd')}/>
</FormItem>
</Col>
<Col span="12">
<FormItem labelCol={{span: 9}} wrapperCol={{span:12}} label="本年度报备份数：">
<Input{...getFieldProps('dwmc')}/><span>份</span>
</FormItem>
</Col>
</Row>


<Row>
<Col span="24">
<FormItem labelCol={{span: 9}} wrapperCol={{span:12}} label="分所数：">
<Input{...getFieldProps('nd')}/>
</FormItem>
</Col>
</Row>

<Row>
<Col span="7">
<FormItem labelCol={{span: 9}}  label="年检选项：">
</FormItem>
</Col>
<Col span="7">
<FormItem labelCol={{span: 9}}  label="违规条款"><span>(违规请打勾)</span>
</FormItem>
</Col>
<Col span="7">
<FormItem labelCol={{span: 9}}  label="所自检"><Checkbox></Checkbox>
</FormItem>
</Col>
</Row>

//执业税务师自检部分
<Row>
<Col span="7">
<FormItem labelCol={{span: 9}}  label="自检情况：">
</FormItem>
</Col>
<Col span="7">
<FormItem labelCol={{span: 9}}  label="违规条款"><span>(违规请打勾)</span>
</FormItem>
</Col>
<Col span="7">
<FormItem labelCol={{span: 9}}  label="自检"><Checkbox></Checkbox>
</FormItem>
</Col>
</Row>


<Row>
<Col span="7">
<FormItem labelCol={{span: 9}}  label="">
</FormItem>
</Col>
<Col span="7">
<FormItem labelCol={{span: 9}}  label="允许或默认他人或本人名义作为税务师税务所出资人出资的">
</FormItem>
</Col>
<Col span="7">
<FormItem labelCol={{span: 9}}  label=""><Checkbox></Checkbox>
</FormItem>
</Col>
</Row>


<Row>
<Col span="7">
<FormItem labelCol={{span: 9}}  label="">
</FormItem>
</Col>
<Col span="7">
<FormItem labelCol={{span: 9}}  label="同时在两个以上税务师事务所出资的">
</FormItem>
</Col>
<Col span="7">
<FormItem labelCol={{span: 9}}  label=""><Checkbox></Checkbox>
</FormItem>
</Col>
</Row>


<Row>
<Col span="7">
<FormItem labelCol={{span: 9}}  label="">
</FormItem>
</Col>
<Col span="7">
<FormItem labelCol={{span: 9}}  label="允许或默认他人以本人名义接受税务师事务所其他出资人转让股份的">
</FormItem>
</Col>
<Col span="7">
<FormItem labelCol={{span: 9}}  label=""><Checkbox></Checkbox>
</FormItem>
</Col>
</Row>

<Row>
<Col span="7">
<FormItem labelCol={{span: 9}}  label="">
</FormItem>
</Col>
<Col span="7">
<FormItem labelCol={{span: 9}}  label="同时在两个以上税务师事务所执业又坚持不改正的">
</FormItem>
</Col>
<Col span="7">
<FormItem labelCol={{span: 9}}  label=""><Checkbox></Checkbox>
</FormItem>
</Col>
</Row>


<Row>
<Col span="7">
<FormItem labelCol={{span: 9}}  label="">
</FormItem>
</Col>
<Col span="7">
<FormItem labelCol={{span: 9}}  label="连续2年有不良职业记录的">
</FormItem>
</Col>
<Col span="7">
<FormItem labelCol={{span: 9}}  label=""><Checkbox></Checkbox>
</FormItem>
</Col>
</Row>


<Row>
<Col span="7">
<FormItem labelCol={{span: 9}}  label="">
</FormItem>
</Col>
<Col span="7">
<FormItem labelCol={{span: 9}}  label="连续2年未参加年检的">
</FormItem>
</Col>
<Col span="7">
<FormItem labelCol={{span: 9}}  label=""><Checkbox></Checkbox>
</FormItem>
</Col>
</Row>

<Row>
<Col span="7">
<FormItem labelCol={{span: 9}}  label="">
</FormItem>
</Col>
<Col span="7">
<FormItem labelCol={{span: 9}}  label="无正当理由拒绝在规定年限内参加年检的">
</FormItem>
</Col>
<Col span="7">
<FormItem labelCol={{span: 9}}  label=""><Checkbox></Checkbox>
</FormItem>
</Col>
</Row>

<Row>
<Col span="7">
<FormItem labelCol={{span: 9}}  label="">
</FormItem>
</Col>
<Col span="7">
<FormItem labelCol={{span: 9}}  label="明知委托人对重要涉税事项的处理与国家税收法律、法规及有关规定相抵触，而不予指明">
</FormItem>
</Col>
<Col span="7">
<FormItem labelCol={{span: 9}}  label=""><Checkbox></Checkbox>
</FormItem>
</Col>
</Row>

<Row>
<Col span="7">
<FormItem labelCol={{span: 9}}  label="">
</FormItem>
</Col>
<Col span="7">
<FormItem labelCol={{span: 9}}  label="明知委托人对重要涉税事项的处理会损害报告使用人或者其他利害关系人的合法权益，而予以隐瞒或者作不实的报告">
</FormItem>
</Col>
<Col span="7">
<FormItem labelCol={{span: 9}}  label=""><Checkbox></Checkbox>
</FormItem>
</Col>
</Row>

<Row>
<Col span="7">
<FormItem labelCol={{span: 9}}  label="">
</FormItem>
</Col>
<Col span="7">
<FormItem labelCol={{span: 9}}  label="明知委托人对重要涉税事项的处理会导致报告使用人或者其他利害关系人产生重大误解，而不予以指明">
</FormItem>
</Col>
<Col span="7">
<FormItem labelCol={{span: 9}}  label=""><Checkbox></Checkbox>
</FormItem>
</Col>
</Row>


<Row>
<Col span="7">
<FormItem labelCol={{span: 9}}  label="">
</FormItem>
</Col>
<Col span="7">
<FormItem labelCol={{span: 9}}  label="明知委托人对重要涉税事项有其他不实内容，而不予以证明">
</FormItem>
</Col>
<Col span="7">
<FormItem labelCol={{span: 9}}  label=""><Checkbox></Checkbox>
</FormItem>
</Col>
</Row>

<Row>
<Col span="7">
<FormItem labelCol={{span: 9}}  label="">
</FormItem>
</Col>
<Col span="7">
<FormItem labelCol={{span: 9}}  label="执业期间，买卖委托人的股票、债券">
</FormItem>
</Col>
<Col span="7">
<FormItem labelCol={{span: 9}}  label=""><Checkbox></Checkbox>
</FormItem>
</Col>
</Row>

<Row>
<Col span="7">
<FormItem labelCol={{span: 9}}  label="">
</FormItem>
</Col>
<Col span="7">
<FormItem labelCol={{span: 9}}  label="索取、收受委托合同约定以外的酬金或者其他财务，或者利用执业之便，牟取其他不正当的利益">
</FormItem>
</Col>
<Col span="7">
<FormItem labelCol={{span: 9}}  label=""><Checkbox></Checkbox>
</FormItem>
</Col>
</Row>

<Row>
<Col span="7">
<FormItem labelCol={{span: 9}}  label="">
</FormItem>
</Col>
<Col span="7">
<FormItem labelCol={{span: 9}}  label="允许他人以本人名义执业">
</FormItem>
</Col>
<Col span="7">
<FormItem labelCol={{span: 9}}  label=""><Checkbox></Checkbox>
</FormItem>
</Col>
</Row>

<Row>
<Col span="7">
<FormItem labelCol={{span: 9}}  label="">
</FormItem>
</Col>
<Col span="7">
<FormItem labelCol={{span: 9}}  label="向税务机关工作人员行贿或者指使、诱导委托人行贿">
</FormItem>
</Col>
<Col span="7">
<FormItem labelCol={{span: 9}}  label=""><Checkbox></Checkbox>
</FormItem>
</Col>
</Row>

<Row>
<Col span="7">
<FormItem labelCol={{span: 9}}  label="">
</FormItem>
</Col>
<Col span="7">
<FormItem labelCol={{span: 9}}  label="其他违反法律、行政法规的行为">
</FormItem>
</Col>
<Col span="7">
<FormItem labelCol={{span: 9}}  label=""><Checkbox></Checkbox>
</FormItem>
</Col>
</Row>

<Row>
<Col span="7">
<FormItem labelCol={{span: 9}}  label="">
</FormItem>
</Col>
<Col span="7">
<FormItem labelCol={{span: 9}}  label="以个人名义承接业务或者收费的">
</FormItem>
</Col>
<Col span="7">
<FormItem labelCol={{span: 9}}  label=""><Checkbox></Checkbox>
</FormItem>
</Col>
</Row>


<Row>
<Col span="7">
<FormItem labelCol={{span: 9}}  label="">
</FormItem>
</Col>
<Col span="7">
<FormItem labelCol={{span: 9}}  label="泄露委托人商业秘密的">
</FormItem>
</Col>
<Col span="7">
<FormItem labelCol={{span: 9}}  label=""><Checkbox></Checkbox>
</FormItem>
</Col>
</Row>

<Row>
<Col span="7">
<FormItem labelCol={{span: 9}}  label="">
</FormItem>
</Col>
<Col span="7">
<FormItem labelCol={{span: 9}}  label="利用职业之便，牟取不正当利益的">
</FormItem>
</Col>
<Col span="7">
<FormItem labelCol={{span: 9}}  label=""><Checkbox></Checkbox>
</FormItem>
</Col>
</Row>

<Row>
<Col span="7">
<FormItem labelCol={{span: 9}}  label="">
</FormItem>
</Col>
<Col span="7">
<FormItem labelCol={{span: 9}}  label="出具虚假涉税文书">
</FormItem>
</Col>
<Col span="7">
<FormItem labelCol={{span: 9}}  label=""><Checkbox></Checkbox>
</FormItem>
</Col>
</Row>

<Row>
<Col span="7">
<FormItem labelCol={{span: 9}}  label="">
</FormItem>
</Col>
<Col span="7">
<FormItem labelCol={{span: 9}}  label="违反税收法律、行政法规，造成委托人未缴或者少缴税款的">
</FormItem>
</Col>
<Col span="7">
<FormItem labelCol={{span: 9}}  label=""><Checkbox></Checkbox>
</FormItem>
</Col>
</Row>


<Row>
<Col span="7">
<FormItem labelCol={{span: 9}}  label="">
</FormItem>
</Col>
<Col span="7">
<FormItem labelCol={{span: 9}}  label="未按规定缴纳个人会费">
</FormItem>
</Col>
<Col span="7">
<FormItem labelCol={{span: 9}}  label=""><Checkbox></Checkbox>
</FormItem>
</Col>
</Row>

<Row>
<Col span="7">
<FormItem labelCol={{span: 9}}  label="">
</FormItem>
</Col>
<Col span="7">
<FormItem labelCol={{span: 9}}  label="未按规定办理个人登记、变更手续">
</FormItem>
</Col>
<Col span="7">
<FormItem labelCol={{span: 9}}  label=""><Checkbox></Checkbox>
</FormItem>
</Col>
</Row>

<Row>
<Col span="7">
<FormItem labelCol={{span: 9}}  label="">
</FormItem>
</Col>
<Col span="7">
<FormItem labelCol={{span: 9}}  label="未参加继续教育情况">
</FormItem>
</Col>
<Col span="7">
<FormItem labelCol={{span: 9}}  label=""><Checkbox></Checkbox>
</FormItem>
</Col>
</Row>

<Row>
<Col span="8">
<FormItem labelCol={{span: 9}}  label="年检总结">
</FormItem>
</Col>
<Col span="16">
<FormItem labelCol={{span: 9}}  label=""><Input type="textarea" placeholder="自适应内容高度" autosize />
</FormItem>
</Col>

</Row>

<Row>
<Col span="4">
<FormItem labelCol={{span: 6}}  label="事务所负责人意见">
</FormItem>
</Col>
<Col span="6">
<FormItem  label=""><Input type="textarea" placeholder="自适应内容高度" autosize />
</FormItem>
</Col>
<Col span="6">
<FormItem >
<span>时间</span><Input />

</FormItem>
</Col>
<Col span="6"><FormItem>
<span>负责人签名</span><Input />
</FormItem>
</Col>
</Row>



                <Row>
                         <Col span="8">    
                        <Button type="primary" onClick={this.handleSubmit}> <Icon type="check"/>保存</Button>
                                      
                      
                      </Col>
                       
                        <Col span="8"> 
                         <Button type="primary" onClick={this.showModal}> <Icon type="arrow-up"/>提交</Button>
                                       <Modal title="你确定要提交吗？" visible={this.state.visible}
                                             onOk={this.handleOk} onCancel={this.handleCancel}>
                                                 <p>提交后就不能修改了！！！</p>
                                                 
                                          
        </Modal>
                        </Col>
                        
                      <Col span="8"> 
                        <Button type="primary" onClick={this.handleReset}><Icon type="cross"/>重置</Button>
                      
                       
                      
                    </Col>
               
            </Row>
            </Form>

        </div>
        </div>
    }
});
Addswsnj = Form.create({
    mapPropsToFields(props) {
        let result = {};
        for (let prop in props.data) {
            result[prop] = {value: props.data[prop]}
        }
        return result;
    }
})(Addswsnj);


   

    

 

module.exports = Addswsnj;