import React from 'react'
import {Col, Input, Row, Button, Icon, Form, Modal, Checkbox } from 'antd'
import {SelectorYear, SelectorXZ} from 'component/compSelector'
import './style.css'



const ButtonGroup = Button.Group;
const createForm = Form.create;
const FormItem = Form.Item;
let Addswsnj = React.createClass({
    getDefaultProps() {
        return {
            onSubmit: {}
        }
    },
    handleSubmit(e) {
        e.preventDefault();
        var mp = {};
        let value = this.props.form.getFieldsValue()
        let arr = [];

        for (var key in value) {

            if (!value[key]) {
                value[key] = null;
            }
            if (key.indexOf('wg') != -1) {
                if (value[key]) {
                    let length = key.length - 2;
                    let str = key.substr(2, length);
                    arr.push(str);

                }
            }

        }
        let wg = arr.join(',');
        if (wg == '') {
            value['wg'] = null;
        } else {
            value['wg'] = wg;
        }
        console.log(value);
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
        var mp = {};
        let value = this.props.form.getFieldsValue()
        let arr = [];
        for (var key in value) {
            if (!value[key]) {
                value[key] = null;
            }
            if (key.indexOf('wg') != -1) {
                if (value[key]) {
                    let length = key.length - 2;
                    let str = key.substr(2, length);
                    arr.push(str);

                }
            }


        }
        let wg = arr.join(',');
        if (wg == '') {
            value['wg'] = null;
        } else {
            value['wg'] = wg;
        }
        this.setState({
            visible: true,
            okValue: value,
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

        const { getFieldProps} = this.props.form;
        //年检总结意见校验
        const textareaProps = getFieldProps('ZJ', {
            rules: [
                { required: true, message: '年检总结不能为空' },
            ],
        });
        //应教育人数校验
        const yjyrsProps = getFieldProps('yjyrs', {
            rules: [
                { required: true,  message: '应教育人数不能为空' },
            ],
        });
        //实际教育人数校验
        const sjjyrsProps  = getFieldProps('sjjyrs', {
            rules: [
                { required: true, message: '实际教育人数不能为空' },
            ],
        });
        //未教育人数校验
        const wjyrsProps = getFieldProps('wjyrs', {
            rules: [
                { required: true, message: '未教育人数不能为空' },
            ],
        });
        //注册税务师变动情况增加校验
        const zcswsbzjProps = getFieldProps('ZCSWSBZJ', {
            rules: [
                { required: true, whitespace: true, message: '增加情况不能为空' },
            ],
        });
        //注册税务师变动情况减少校验
        const zcswsbjsProps = getFieldProps('ZCSWSBJS', {
            rules: [
                { required: true, whitespace: true, message: '减少情况不能为空' },
            ],
        });
        //股东变动情况增加校验
        const gdbdqkzjProps = getFieldProps('GDBDQKZJ', {
            rules: [
                { required: true, whitespace: true, message: '未教育人数不能为空' },
            ],
        });
        //股东变动情况减少校验
        const gdbdqkjsProps = getFieldProps('GDBDQKJS', {
            rules: [
                { required: true, whitespace: true, message: '未教育人数不能为空' },
            ],
        });
       //分所数校验
        const fssProps = getFieldProps('FSS', {
            rules: [
                { required: true, whitespace: true, message: '分所数不能为空' },
            ],
        });


        //事务所负责人意见修改校验
        const fzryjProps = getFieldProps('NJZJ', {
            rules: [
                { required: true, whitespace: true, message: '负责人意见不能为空' },
            ],
        });
        
         //签证时间校验
        const sjProps = getFieldProps('qzrq', {
            rules: [
                { required: true, whitespace: true, message: '处理时间不能为空' },
            ],
        });
        //负责人签名验证
        const qmProps = getFieldProps('FZR', {
            rules: [
                { required: true, whitespace: true, message: '负责人签名不能为空' },
            ],
        });



       const obj=this.props.data[0];


        // let obj = {};
        // if (this.props.data.length != 0) {
        //     obj = this.props.data[0];

        // };

        return <div className="fix-table table-bordered table-striped">

            <Form horizontal onSubmit={this.handleSubmit} form={this.props.form}>


                <Row>
                    <Col span="8">
                        <FormItem labelCol={{ span: 9 }} wrapperCol={{ span: 13 }}
                            label="年度">
                    
                            <Input  {...getFieldProps('nd') }/>
                        </FormItem>
                    </Col>
                    <Col span="8">
                        <FormItem labelCol={{ span: 9 }} wrapperCol={{ span: 13 }} label="事务所名称">
                            <Input {...getFieldProps('dwmc',{ initialValue: obj.dwmc }) }disabled/>
                        </FormItem>
                    </Col>
                    <Col span="8">
                        <FormItem labelCol={{ span: 9 }} wrapperCol={{ span: 13 }} label="机构注册号码：">
                            <Input {...getFieldProps('jgzchm',{initialValue:obj.zsbh}) }disabled/>
                        </FormItem>
                    </Col>



                </Row>



                <Row>

                    <Col span="8">
                        <FormItem labelCol={{ span: 9 }} wrapperCol={{ span: 13 }} label="所长姓名：">
                            <Input {...getFieldProps('sz',{initialValue:obj.SZ}) }disabled/>
                        </FormItem>

                    </Col>
                    <Col span="8">
                        <FormItem labelCol={{ span: 9 }} wrapperCol={{ span: 13 }} label="注册资金：">
                            <Input {...getFieldProps('zczj',{initialValue:obj.ZCZJ}) }disabled/>
                        </FormItem>
                    </Col>
                    <Col span="8">
                        <FormItem labelCol={{ span: 9 }} wrapperCol={{ span: 13 }} label="联系电话：">
                            <Input {...getFieldProps('dhhm',{initialValue:obj.dhhm}) }disabled/>
                        </FormItem>

                    </Col>

                </Row>

                <Row>
                    <Col span="8">
                        <FormItem labelCol={{ span: 9 }} wrapperCol={{ span: 13 }} label="办公地点">
                            <Input {...getFieldProps('bgdz',{initialValue:obj.bgdz}) }disabled/>
                        </FormItem>
                    </Col>
                    <Col span="8">
                        <FormItem labelCol={{ span: 9 }} wrapperCol={{ span: 13 }} label="邮编">
                            <Input {...getFieldProps('yzbm',{initialValue:obj.yzbm}) }disabled/>
                        </FormItem>

                    </Col>
                    <Col span="8">
                        <FormItem labelCol={{ span: 9 }} wrapperCol={{ span: 13 }} label="组织形式：">
                            <Input {...getFieldProps('jgxz',{initialValue:obj.jgxz}) }disabled/>
                        </FormItem>
                    </Col>
                </Row>

                <Row>

                    <Col span="8">
                        <FormItem labelCol={{ span: 9 }} wrapperCol={{ span: 13 }} label="机构正式成立时间：">
                            <Input {...getFieldProps('clsj',{initialValue:obj.clsj}) }disabled/>
                        </FormItem>

                    </Col>
                    <Col span="8">
                     <FormItem  labelCol={{ span: 9 }} wrapperCol={{ span: 13 }} label="本年度报备份数：" ><Input {...getFieldProps('BAFS',{initialValue:obj.BAFS}) }disabled/></FormItem>
                        
                    </Col>
                    <Col span="8">
                        <FormItem labelCol={{ span: 9 }} wrapperCol={{ span: 13 }} label="执业注册税务师人数：">
                            <Input {...getFieldProps('zyrs') }/>
                        </FormItem>
                    </Col>
                </Row>
                <Row>
                    <Col span="8">
                       <FormItem labelCol={{ span: 9 }} wrapperCol={{ span: 13 }} label="总人数：">  <Input {...getFieldProps('zrs') }/>
                        </FormItem>
                    </Col>
                    <Col span="8">
                        <FormItem labelCol={{ span: 9 }} wrapperCol={{ span: 13 }} label="分所数："><Input {...fssProps }/></FormItem>
                    </Col>

                </Row>


                <Row >
                    <Col span="3">
                        <FormItem  labelCol={{ span: 22 }} label="参加后续教育:"></FormItem>
                    </Col>
                    <Col span="2">
                        <FormItem  > <Input {...yjyrsProps}/></FormItem>
                    </Col>
                    <Col span="2">
                        <FormItem  ><span>人应参加</span></FormItem>
                    </Col>
                    <Col span="2">
                        <FormItem  > <Input {...sjjyrsProps }/></FormItem>
                    </Col>
                    <Col span="2">
                        <FormItem  ><span>人实参加</span></FormItem>
                    </Col>
                    <Col span="2">
                        <FormItem  ><Input {...wjyrsProps}/></FormItem>
                    </Col>
                    <Col span="2">
                        <FormItem  ><span>未参加</span></FormItem>
                    </Col>
                </Row>

                <Row>
                    <Col span="3">
                        <FormItem labelCol={{ span: 22 }}label="注册税务师变动情况："></FormItem>
                    </Col>

                    <Col span="2">
                        <FormItem  > <Input {...zcswsbzjProps }/></FormItem>
                    </Col>
                    <Col span="2">
                        <FormItem  ><span>增加</span></FormItem>
                    </Col>

                    <Col span="2">
                        <FormItem  > <Input {...zcswsbjsProps}/></FormItem>
                    </Col>
                    <Col span="2">
                        <FormItem  ><span>减少</span></FormItem>

                    </Col>

                </Row>
                <Row>
                    <Col span="3">
                        <FormItem labelCol={{ span: 22 }}label="股东变动情况："></FormItem>
                    </Col>

                    <Col span="2">
                        <FormItem  > <Input {...gdbdqkzjProps}/></FormItem>
                    </Col>
                    <Col span="2">
                        <FormItem  ><span>增加</span></FormItem>
                    </Col>

                    <Col span="2">
                        <FormItem  > <Input {...gdbdqkjsProps }/></FormItem>
                    </Col>
                    <Col span="2">
                        <FormItem  ><span>减少</span></FormItem>

                    </Col>

                </Row>

                <div className="fix-table table-bordered table-striped">
                    <table>
                        <tbody>
                            <tr className="add">
                                <th>年检选项：</th>
                                <th>违规条款（违规请打勾）</th>
                                <th>所自检<Checkbox></Checkbox></th>
                            </tr>
                            <tr>
                                <td><h3>执业资格</h3></td>
                                <td>1.本所存在注册税务师人数未达到规定的标准</td>
                                <td><Checkbox {...getFieldProps('wg1') }></Checkbox></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>2.本所有发起人或合伙人以及出资人不按规定出资</td>
                                <td><Checkbox {...getFieldProps('wg2') }></Checkbox></td>
                            </tr>

                            <tr>
                                <td></td>
                                <td>3.本所注册资本或经营资金不到位，出资人（股东）的出资不符合规定</td>
                                <td><Checkbox {...getFieldProps('wg3') }></Checkbox></td>
                            </tr>

                            <tr>
                                <td></td>
                                <td>4.本所事项变更存在未按归定和程序办理相关的手续</td>
                                <td><Checkbox {...getFieldProps('wg4') }></Checkbox></td>
                            </tr>

                            <tr>
                                <td></td>
                                <td>5.本所办公地点和税务机关在一起</td>
                                <td><Checkbox {...getFieldProps('wg5') }></Checkbox></td>
                            </tr>

                            <tr>
                                <td></td>
                                <td>6.本所存在拒绝在规定的时间参加年检</td>
                                <td><Checkbox {...getFieldProps('wg6') }></Checkbox></td>
                            </tr>

                            <tr>
                                <td><h3>执业质量</h3></td>
                                <td>7.本所存在采取强迫、欺诈等不正当的手段招揽业务</td>
                                <td> <Checkbox {...getFieldProps('wg7') }></Checkbox></td>
                            </tr>

                            <tr>
                                <td></td>
                                <td>8.本所没有与委托人签订协议书或协议书有不规范的行为</td>
                                <td><Checkbox {...getFieldProps('wg8') }></Checkbox></td>
                            </tr>


                            <tr>
                                <td></td>
                                <td>9.本所收到《注册税务师管理暂行办法》第四十三、四十四条所列行政处罚</td>
                                <td><Checkbox {...getFieldProps('wg9') }></Checkbox></td>
                            </tr>


                            <tr>
                                <td></td>
                                <td>10.本所存在未按照《注册税务师管理暂行办法》归定承办相关业务</td>
                                <td> <Checkbox {...getFieldProps('wg10') }></Checkbox></td>
                            </tr>


                            <tr>
                                <td></td>
                                <td>11.本所存在未按协议规定履行义务</td>
                                <td><Checkbox {...getFieldProps('wg11') }></Checkbox></td>
                            </tr>

                            <tr>
                                <td></td>
                                <td>12.本所未按照财务会计制度核算，内部管理较不好</td>
                                <td><Checkbox {...getFieldProps('wg12') }></Checkbox></td>
                            </tr>

                            <tr>
                                <td></td>
                                <td>13.本所利用职务之便，牟取不正当利益</td>
                                <td><Checkbox {...getFieldProps('wg13') }></Checkbox></td>
                            </tr>

                            <tr>
                                <td></td>
                                <td>14.本所有采取夸大宣传、诋毁同行、以低于成本价收费等不正当方式承接业务</td>
                                <td><Checkbox {...getFieldProps('wg14') }></Checkbox></td>
                            </tr>

                            <tr>
                                <td></td>
                                <td>15.本所有允许以本所名义承接相关业务</td>
                                <td><Checkbox {...getFieldProps('wg15') }></Checkbox></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>16.本所有出具虚假涉税文书，造成委托人未缴或少缴税款</td>
                                <td><Checkbox {...getFieldProps('wg16') }></Checkbox></td>
                            </tr>

                            <tr>
                                <td></td>
                                <td>17.本所有违反税收法律，行政法规，造成委托人未缴或少缴税款</td>
                                <td> <Checkbox {...getFieldProps('wg17') }></Checkbox></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>28.连续两年以上未开展任何业务的</td>
                                <td> <Checkbox {...getFieldProps('wg28') }></Checkbox></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>29.未执行全省统一涉税鉴证收费标准的</td>
                                <td><Checkbox {...getFieldProps('wg29') }></Checkbox></td>
                            </tr>
                            <tr>
                                <td><h3>收费管理</h3></td>
                                <td>18.本所财务会计制度不健全，会计核算不符合规定要求</td>
                                <td><Checkbox {...getFieldProps('wg18') }></Checkbox></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>19.本所有隐藏，转移业务收入，虚报经营亏损</td>
                                <td><Checkbox {...getFieldProps('wg19') }></Checkbox></td>
                            </tr>


                            <tr>
                                <td></td>
                                <td>20.本所有弄虚作假高额支付租赁房屋，设备等费用</td>
                                <td><Checkbox {...getFieldProps('wg20') }></Checkbox></td>
                            </tr>

                            <tr>
                                <td></td>
                                <td>21.本所未按规定进行纳税申报以及缴纳税款</td>
                                <td><Checkbox {...getFieldProps('wg21') }></Checkbox></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>22.本所有偷税行为</td>
                                <td><Checkbox {...getFieldProps('wg22') }></Checkbox></td>
                            </tr>
                            <tr>
                                <td><h3>其他方面</h3></td>
                                <td>23.本所有未经批准自行设立分支机构</td>
                                <td><Checkbox {...getFieldProps('wg23') }></Checkbox></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>24.本所有未经批准自行挂靠或者接受挂靠</td>
                                <td><Checkbox {...getFieldProps('wg24') }></Checkbox></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>25.本所有对分支机构只收管理费</td>
                                <td><Checkbox {...getFieldProps('wg25') }></Checkbox></td>
                            </tr>

                            <tr>
                                <td></td>
                                <td>26.本所分支机构执业资质不符合要求</td>
                                <td><Checkbox {...getFieldProps('wg26') }></Checkbox></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>27.本所分支机构一年内有两次以上执业质量问题</td>
                                <td> <Checkbox {...getFieldProps('wg27') }></Checkbox></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>30.未按照规定缴纳团体会费</td>
                                <td><Checkbox {...getFieldProps('wg30') }></Checkbox></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>31.未按照规定办理团体会员登记、变更手续</td>
                                <td> <Checkbox {...getFieldProps('wg31') }></Checkbox></td>
                            </tr>
                            <tr>
                                <td><b>评级选项</b></td>
                                <td><b>年检及格A级单位</b></td>
                                <td><b>自评级</b><Checkbox></Checkbox></td>
                            </tr>

                        </tbody>
                    </table>


                    <Row>
                        <Col> 
                        <FormItem></FormItem>
                        </Col>
                    </Row>


                    <Row>
                        <Col span="24">
                            <FormItem labelCol={{ span: 2 }}wrapperCol={{ span: 22 }} label="年检总结">  <Input {...textareaProps}  type="textarea"/>
                            </FormItem>
                        </Col>



                    </Row>


                    <Row>
                        <Col span="16">

                            <FormItem labelCol={{ span: 4}} wrapperCol={{ span: 20}} label="事务所负责人意见:" ><Input {...fzryjProps } type="textarea"/></FormItem>



                        </Col>



                        <Col span="3" >
                            <FormItem labelCol={{ span: 8 }} wrapperCol={{ span: 16 }} label="时间:" ><Input {...sjProps }/></FormItem>

                        </Col>
                        <Col span="5">
                            <FormItem labelCol={{ span: 8 }} wrapperCol={{ span: 16 }} label="负责人签名:" >
                                <Input {...qmProps }></Input>
                            </FormItem>
                        </Col>



                    </Row>


                    <Row>
                        <Col span="4">
                            <Button type="primary" onClick={this.handleSubmit}> <Icon

                                type="check"/>保存</Button>


                        </Col>

                        <Col span="4">
                            <Button type="primary" onClick={this.showModal}> <Icon

                                type="arrow-up"/>提交</Button>
                            <Modal title="你确定要提交吗？" visible=

                                {this.state.visible}
                                onOk={this.handleOk} onCancel=

                                {this.handleCancel}>
                                <p>提交后就不能修改了！！！</p>


                            </Modal>
                        </Col>

                        <Col span="4">
                            <Button type="primary" onClick={this.handleReset}><Icon

                                type="cross"/>重置</Button>



                        </Col>

                    </Row>

                </div>
            </Form>


        </div>
    }
});
Addswsnj = Form.create({
    mapPropsToFields(props) {
        let result = {};
        for (let prop in props.data) {
            result[prop] = { value: props.data[prop] }
        }
        return result;
    }
})(Addswsnj);








module.exports = Addswsnj;