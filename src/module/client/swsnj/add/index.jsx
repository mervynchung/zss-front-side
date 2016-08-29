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
                    let length = key.length - 3;
                    let str = key.substr(3, length);
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
        for (var key in value) {
            if (!value[key]) {
                value[key] = null;
            }
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

        const textareaProps = getFieldProps('ZJ', {
            rules: [
                { required: true, message: '真的不打算写点什么吗？' },
            ],
        });
        //应教育人数校验
        const yjyrsProps = getFieldProps('yjyrs', {
            rules: [
                { required: true, whitespace: true, message: '应教育人数不能为空' },
            ],
        });
        //实际教育人数校验
        const sjjyrsProps = getFieldProps('sjjyrs', {
            rules: [
                { required: true, whitespace: true, message: '实际教育人数不能为空' },
            ],
        });
        //未教育人数校验
        const wjyrsProps = getFieldProps('wjyrs', {
            rules: [
                { required: true, whitespace: true, message: '未教育人数不能为空' },
            ],
        });


        let obj = [{}];
        if (this.props.data.length != 0) {
            obj = this.props.data;

        };

        return <div className="add">

                <Form horizontal onSubmit={this.handleSubmit} form={this.props.form}>


                    <Row>
                        <Col span="10">
                            <FormItem labelCol={{ span: 9 }} wrapperCol={{ span: 13 }}
                                label="年度" {...obj.nd}>
                                <Input  {...getFieldProps('nd') }/>
                            </FormItem>
                        </Col>
                        <Col span="10">
                            <FormItem labelCol={{ span: 9 }} wrapperCol={{ span: 13 }} label="事务所名称">
                                <Input {...getFieldProps('dwmc') }/>
                            </FormItem>
                        </Col>
                    </Row>



                    <Row>
                        <Col span="10">
                            <FormItem labelCol={{ span: 9 }} wrapperCol={{ span: 13 }} label="机构注册号码：">
                                <Input {...getFieldProps('nd') }/>
                            </FormItem>
                        </Col>
                        <Col span="10">
                            <FormItem labelCol={{ span: 9 }} wrapperCol={{ span: 13 }} label="所长姓名：">
                                <Input {...getFieldProps('sz') }/>
                            </FormItem>

                        </Col>
                    </Row>

                    <Row>
                        <Col span="10">
                            <FormItem labelCol={{ span: 9 }} wrapperCol={{ span: 13 }} label="注册资金：">
                                <Input {...getFieldProps('zczj') }/>
                            </FormItem>
                        </Col>
                        <Col span="10">
                            <FormItem labelCol={{ span: 9 }} wrapperCol={{ span: 13 }} label="联系电话：">
                                <Input {...getFieldProps('dwmc') }/>
                            </FormItem>

                        </Col>
                    </Row>

                    <Row>
                        <Col span="10">
                            <FormItem labelCol={{ span: 9 }} wrapperCol={{ span: 13 }} label="办公地点">
                                <Input {...getFieldProps('nd') }/>
                            </FormItem>
                        </Col>
                        <Col span="10">
                            <FormItem labelCol={{ span: 9 }} wrapperCol={{ span: 13 }} label="邮编">
                                <Input {...getFieldProps('dwmc') }/>
                            </FormItem>

                        </Col>
                    </Row>

                    <Row>
                        <Col span="10">
                            <FormItem labelCol={{ span: 9 }} wrapperCol={{ span: 13 }} label="组织形式：">
                                <Input {...getFieldProps('nd') }/>
                            </FormItem>
                        </Col>
                        <Col span="10">
                            <FormItem labelCol={{ span: 9 }} wrapperCol={{ span: 13 }} label="机构正式成立时间：">
                                <Input {...getFieldProps('dwmc') }/>
                            </FormItem>

                        </Col>
                    </Row>

                    <Row>
                        <Col span="10">
                            <FormItem labelCol={{ span: 9 }} wrapperCol={{ span: 13 }} label="总人数：">
                                <Input {...getFieldProps('zrs') }/>
                            </FormItem>
                        </Col>
                        <Col span="10">
                            <FormItem labelCol={{ span: 9 }} wrapperCol={{ span: 13 }} label="执业注册税务师人数：">
                                <Input {...getFieldProps('zyrs') }/>
                            </FormItem>
                        </Col>
                    </Row>

                    <Row>
                        <Col span="3">
                            <FormItem labelCol={{ span: 30 }} label="参加后续教育"></FormItem>
                        </Col>
                        <Col span="4">
                            <FormItem  > <Input {...yjyrsProps}/></FormItem>
                        </Col>
                        <Col span="3">
                            <FormItem  ><span>人应参加</span></FormItem>
                        </Col>
                        <Col span="4">
                            <FormItem  > <Input {...sjjyrsProps}/></FormItem>
                        </Col>
                        <Col span="3">
                            <FormItem  ><span>人实参加</span></FormItem>
                        </Col>
                        <Col span="4">
                            <FormItem  > <Input {...wjyrsProps}/></FormItem>
                        </Col>
                        <Col span="3">
                            <FormItem  ><span>未参加</span></FormItem>
                        </Col>
                    </Row>


                    <Row>
                        <Col span="4">
                            <FormItem label="注册税务师变动情况："></FormItem>
                        </Col>
                        <Col span="1" offset="1">
                            <FormItem><span>增加: </span></FormItem>
                        </Col>
                        <Col span="3">
                            <FormItem><Input {...getFieldProps('ZCSWSBZJ') }/></FormItem>
                        </Col>
                        <Col span="1" offset="1">
                            <FormItem><span>减少: </span></FormItem>
                        </Col>
                        <Col span="3">
                            <FormItem><Input {...getFieldProps('ZCSWSBJS') }/></FormItem>
                        </Col>
                        <Col span="3" offset="1">
                            <FormItem  label="本年度报备份数："></FormItem>
                        </Col>
                        <Col span="3">
                            <FormItem><Input {...getFieldProps('BAFS') }/></FormItem>
                        </Col>
                        <Col span="1" >
                            <FormItem><span>份</span></FormItem>
                        </Col>
                    </Row>


                    <Row>
                        <Col span="3">
                            <FormItem labelCol={{ span: 9 }} wrapperCol={{ span: 13 }} label="分所数："></FormItem>
                        </Col>
                        <Col span="3">
                            <FormItem>
                                <Input {...getFieldProps('FSS') }/>
                            </FormItem>
                        </Col>
                    </Row>

                    <Row>
                        <Col span="5">
                            <FormItem labelCol={{ span: 9 }}  label="年检选项：">
                            </FormItem>
                        </Col>
                        <Col span="16">
                            <FormItem labelCol={{ span: 9 }}  label="违规条款"><span>(违规请打勾) </span>
                            </FormItem>
                        </Col>
                        <Col span="3">
                            <FormItem labelCol={{ span: 9 }}  label="所自检"><Checkbox></Checkbox>
                            </FormItem>
                        </Col>
                    </Row>

                    <Row>
                        <Col span="5">
                            <FormItem labelCol={{ span: 9 }}  label="执业资格">
                            </FormItem>
                        </Col>

                        <Col span="16">
                            <FormItem labelCol={{ span: 9 }}  label="本所存在注册税务师人数未达到规定的标准">
                            </FormItem>
                        </Col>

                        <Col span="3">
                            <FormItem labelCol={{ span: 9 }}  label=""> <Checkbox {...getFieldProps('wg1') }></Checkbox>
                            </FormItem>
                        </Col>
                    </Row>


                    <Row>
                        <Col span="5">
                            <FormItem labelCol={{ span: 9 }}  label="">
                            </FormItem>
                        </Col>

                        <Col span="16">
                            <FormItem labelCol={{ span: 9 }}  label="本所有发起人或合伙人以及出资人不安规定出资">
                            </FormItem>
                        </Col>

                        <Col span="3">
                            <FormItem labelCol={{ span: 9 }}  label=""> <Checkbox {...getFieldProps('wg3') }></Checkbox>
                            </FormItem>
                        </Col>
                    </Row>


                    <Row>
                        <Col span="5">
                            <FormItem labelCol={{ span: 9 }}  label="">
                            </FormItem>
                        </Col>

                        <Col span="16">
                            <FormItem labelCol={{ span: 9 }}  label="本所注册资本或经营资金不到位，出资人（股东）的出资不符合规定">
                            </FormItem>
                        </Col>

                        <Col span="3">
                            <FormItem labelCol={{ span: 9 }}  label=""> <Checkbox {...getFieldProps('wg3') }></Checkbox>
                            </FormItem>
                        </Col>
                    </Row>

                    <Row>
                        <Col span="5">
                            <FormItem labelCol={{ span: 9 }}  label="">
                            </FormItem>
                        </Col>

                        <Col span="16">
                            <FormItem labelCol={{ span: 9 }}  label="本所事项变更存在未按归定和程序办理相关的手续">
                            </FormItem>
                        </Col>

                        <Col span="3">
                            <FormItem labelCol={{ span: 9 }}  label=""> <Checkbox></Checkbox>
                            </FormItem>
                        </Col>
                    </Row>


                    <Row>
                        <Col span="5">
                            <FormItem labelCol={{ span: 9 }}  label="">
                            </FormItem>
                        </Col>

                        <Col span="16">
                            <FormItem labelCol={{ span: 9 }}  label="本所办公地点和税务机关在一起">
                            </FormItem>
                        </Col>

                        <Col span="3">
                            <FormItem labelCol={{ span: 9 }}  label=""> <Checkbox></Checkbox>
                            </FormItem>
                        </Col>
                    </Row>

                    <Row>
                        <Col span="5">
                            <FormItem labelCol={{ span: 9 }}  label="">
                            </FormItem>
                        </Col>

                        <Col span="16">
                            <FormItem labelCol={{ span: 9 }}  label="本所存在拒绝在规定的时间参加年检">
                            </FormItem>
                        </Col>

                        <Col span="3">
                            <FormItem labelCol={{ span: 9 }}  label=""> <Checkbox></Checkbox>
                            </FormItem>
                        </Col>
                    </Row>

                    <Row>
                        <Col span="5">
                            <FormItem labelCol={{ span: 9 }}  label="执业质量">
                            </FormItem>
                        </Col>

                        <Col span="16">
                            <FormItem labelCol={{ span: 9 }}  label="本所存在采取强迫、欺诈等不正当的手段招揽业务">
                            </FormItem>
                        </Col>

                        <Col span="3">
                            <FormItem labelCol={{ span: 9 }}  label=""> <Checkbox></Checkbox>
                            </FormItem>
                        </Col>
                    </Row>

                    <Row>
                        <Col span="5">
                            <FormItem labelCol={{ span: 9 }}  label="">
                            </FormItem>
                        </Col>

                        <Col span="16">
                            <FormItem labelCol={{ span: 9 }}  label="本所没有与委托人签订协议书或协议书有不规范的行为">
                            </FormItem>
                        </Col>

                        <Col span="3">
                            <FormItem labelCol={{ span: 9 }}  label=""> <Checkbox></Checkbox>
                            </FormItem>
                        </Col>
                    </Row>

                    <Row>
                        <Col span="5">
                            <FormItem labelCol={{ span: 9 }}  label="">
                            </FormItem>
                        </Col>

                        <Col span="16">
                            <FormItem labelCol={{ span: 9 }}  label="本所收到《注册税务师管理暂行办法》第四十三、四十四条所列行政处罚">
                            </FormItem>
                        </Col>

                        <Col span="3">
                            <FormItem labelCol={{ span: 9 }}  label=""> <Checkbox></Checkbox>
                            </FormItem>
                        </Col>
                    </Row>


                    <Row>
                        <Col span="5">
                            <FormItem labelCol={{ span: 9 }}  label="">
                            </FormItem>
                        </Col>

                        <Col span="16">
                            <FormItem labelCol={{ span: 9 }}  label="本所存在未按照《注册税务师管理暂行办法》归定承办相关业务">
                            </FormItem>
                        </Col>

                        <Col span="3">
                            <FormItem labelCol={{ span: 9 }}  label=""> <Checkbox></Checkbox>
                            </FormItem>
                        </Col>
                    </Row>



                    <Row>
                        <Col span="5">
                            <FormItem labelCol={{ span: 9 }}  label="">
                            </FormItem>
                        </Col>

                        <Col span="16">
                            <FormItem labelCol={{ span: 9 }}  label="本所存在未按协议规定履行义务">
                            </FormItem>
                        </Col>

                        <Col span="3">
                            <FormItem labelCol={{ span: 9 }}  label=""> <Checkbox></Checkbox>
                            </FormItem>
                        </Col>
                    </Row>

                    <Row>
                        <Col span="5">
                            <FormItem labelCol={{ span: 9 }}  label="">
                            </FormItem>
                        </Col>

                        <Col span="16">
                            <FormItem labelCol={{ span: 9 }}  label="本所未按照财务会计制度核算，内部管理较不好">
                            </FormItem>
                        </Col>

                        <Col span="3">
                            <FormItem labelCol={{ span: 9 }}  label=""> <Checkbox></Checkbox>
                            </FormItem>
                        </Col>
                    </Row>

                    <Row>
                        <Col span="5">
                            <FormItem labelCol={{ span: 9 }}  label="">
                            </FormItem>
                        </Col>

                        <Col span="16">
                            <FormItem labelCol={{ span: 9 }}  label="本所利用职务之便，牟取不正当利益">
                            </FormItem>
                        </Col>

                        <Col span="3">
                            <FormItem labelCol={{ span: 9 }}  label=""> <Checkbox></Checkbox>
                            </FormItem>
                        </Col>
                    </Row>

                    <Row>
                        <Col span="5">
                            <FormItem labelCol={{ span: 9 }}  label="">
                            </FormItem>
                        </Col>

                        <Col span="16">
                            <FormItem labelCol={{ span: 9 }}  label="本所有采取夸大宣传、诋毁同行、以低于成本价收费等不正当方式承接业务">
                            </FormItem>
                        </Col>

                        <Col span="3">
                            <FormItem labelCol={{ span: 9 }}  label=""> <Checkbox></Checkbox>
                            </FormItem>
                        </Col>
                    </Row>


                    <Row>
                        <Col span="5">
                            <FormItem labelCol={{ span: 9 }}  label="">
                            </FormItem>
                        </Col>

                        <Col span="16">
                            <FormItem labelCol={{ span: 9 }}  label="本所有允许以本所名义承接相关业务">
                            </FormItem>
                        </Col>

                        <Col span="3">
                            <FormItem labelCol={{ span: 9 }}  label=""> <Checkbox></Checkbox>
                            </FormItem>
                        </Col>
                    </Row>


                    <Row>
                        <Col span="5">
                            <FormItem labelCol={{ span: 9 }}  label="">
                            </FormItem>
                        </Col>

                        <Col span="16">
                            <FormItem labelCol={{ span: 9 }}  label="本所有出具虚假涉税文书，造成委托人未缴或少缴税款">
                            </FormItem>
                        </Col>

                        <Col span="3">
                            <FormItem labelCol={{ span: 9 }}  label=""> <Checkbox></Checkbox>
                            </FormItem>
                        </Col>
                    </Row>

                    <Row>
                        <Col span="5">
                            <FormItem labelCol={{ span: 9 }}  label="">
                            </FormItem>
                        </Col>

                        <Col span="16">
                            <FormItem labelCol={{ span: 9 }}  label="本所有违反税收法律，行政法规，造成委托人未缴或少缴税款">
                            </FormItem>
                        </Col>

                        <Col span="3">
                            <FormItem labelCol={{ span: 9 }}  label=""> <Checkbox></Checkbox>
                            </FormItem>
                        </Col>
                    </Row>

                    <Row>
                        <Col span="5">
                            <FormItem labelCol={{ span: 9 }}  label="">
                            </FormItem>
                        </Col>

                        <Col span="16">
                            <FormItem labelCol={{ span: 9 }}  label="连续两年以上未开展任何业务的">
                            </FormItem>
                        </Col>

                        <Col span="3">
                            <FormItem labelCol={{ span: 9 }}  label=""> <Checkbox></Checkbox>
                            </FormItem>
                        </Col>
                    </Row>

                    <Row>
                        <Col span="5">
                            <FormItem labelCol={{ span: 9 }}  label="">
                            </FormItem>
                        </Col>

                        <Col span="16">
                            <FormItem labelCol={{ span: 9 }}  label="未执行全省统一涉税鉴证收费标准的">
                            </FormItem>
                        </Col>

                        <Col span="3">
                            <FormItem labelCol={{ span: 9 }}  label=""> <Checkbox></Checkbox>
                            </FormItem>
                        </Col>
                    </Row>


                    <Row>
                        <Col span="5">
                            <FormItem labelCol={{ span: 9 }}  label="收费管理">
                            </FormItem>
                        </Col>

                        <Col span="16">
                            <FormItem labelCol={{ span: 9 }}  label="本所财务会计制度不健全，会计核算不符合规定要求">
                            </FormItem>
                        </Col>

                        <Col span="3">
                            <FormItem labelCol={{ span: 9 }}  label=""> <Checkbox></Checkbox>
                            </FormItem>
                        </Col>
                    </Row>

                    <Row>
                        <Col span="5">
                            <FormItem labelCol={{ span: 9 }}  label="">
                            </FormItem>
                        </Col>

                        <Col span="16">
                            <FormItem labelCol={{ span: 9 }}  label="本所有隐藏，转移业务收入，虚报经营亏损">
                            </FormItem>
                        </Col>

                        <Col span="3">
                            <FormItem labelCol={{ span: 9 }}  label=""> <Checkbox></Checkbox>
                            </FormItem>
                        </Col>
                    </Row>

                    <Row>
                        <Col span="5">
                            <FormItem labelCol={{ span: 9 }}  label="">
                            </FormItem>
                        </Col>

                        <Col span="16">
                            <FormItem labelCol={{ span: 9 }}  label="本所有弄虚作假高额支付租赁房屋，设备等费用">
                            </FormItem>
                        </Col>

                        <Col span="3">
                            <FormItem labelCol={{ span: 9 }}  label=""> <Checkbox></Checkbox>
                            </FormItem>
                        </Col>
                    </Row>

                    <Row>
                        <Col span="5">
                            <FormItem labelCol={{ span: 9 }}  label="">
                            </FormItem>
                        </Col>

                        <Col span="16">
                            <FormItem labelCol={{ span: 9 }}  label="本所未按规定进行纳税申报以及缴纳税款">
                            </FormItem>
                        </Col>

                        <Col span="3">
                            <FormItem labelCol={{ span: 9 }}  label=""> <Checkbox></Checkbox>
                            </FormItem>
                        </Col>
                    </Row>

                    <Row>
                        <Col span="5">
                            <FormItem labelCol={{ span: 9 }}  label="">
                            </FormItem>
                        </Col>

                        <Col span="16">
                            <FormItem labelCol={{ span: 9 }}  label="本所有偷税行为">
                            </FormItem>
                        </Col>

                        <Col span="3">
                            <FormItem labelCol={{ span: 9 }}  label=""> <Checkbox></Checkbox>
                            </FormItem>
                        </Col>
                    </Row>


                    <Row>
                        <Col span="5">
                            <FormItem labelCol={{ span: 9 }}  label="其他方面">
                            </FormItem>
                        </Col>

                        <Col span="16">
                            <FormItem labelCol={{ span: 9 }}  label="本所有未经批准自行设立分支机构">
                            </FormItem>
                        </Col>

                        <Col span="3">
                            <FormItem labelCol={{ span: 9 }}  label=""> <Checkbox></Checkbox>
                            </FormItem>
                        </Col>
                    </Row>


                    <Row>
                        <Col span="5">
                            <FormItem labelCol={{ span: 9 }}  label="">
                            </FormItem>
                        </Col>

                        <Col span="16">
                            <FormItem labelCol={{ span: 9 }}  label="本所有未经批准自行挂靠或者接受挂靠">
                            </FormItem>
                        </Col>

                        <Col span="3">
                            <FormItem labelCol={{ span: 9 }}  label=""> <Checkbox></Checkbox>
                            </FormItem>
                        </Col>
                    </Row>


                    <Row>
                        <Col span="5">
                            <FormItem labelCol={{ span: 9 }}  label="">
                            </FormItem>
                        </Col>

                        <Col span="16">
                            <FormItem labelCol={{ span: 9 }}  label="本所有对分支机构只收管理费">
                            </FormItem>
                        </Col>

                        <Col span="3">
                            <FormItem labelCol={{ span: 9 }}  label=""> <Checkbox></Checkbox>
                            </FormItem>
                        </Col>
                    </Row>

                    <Row>
                        <Col span="5">
                            <FormItem labelCol={{ span: 9 }}  label="">
                            </FormItem>
                        </Col>

                        <Col span="16">
                            <FormItem labelCol={{ span: 9 }}  label="本所分支机构执业资质不符合要求">
                            </FormItem>
                        </Col>

                        <Col span="3">
                            <FormItem labelCol={{ span: 9 }}  label=""> <Checkbox></Checkbox>
                            </FormItem>
                        </Col>
                    </Row>

                    <Row>
                        <Col span="5">
                            <FormItem labelCol={{ span: 9 }}  label="">
                            </FormItem>
                        </Col>

                        <Col span="16">
                            <FormItem labelCol={{ span: 9 }}  label="本所分支机构一年内有两次以上执业质量问题">
                            </FormItem>
                        </Col>

                        <Col span="3">
                            <FormItem labelCol={{ span: 9 }}  label=""> <Checkbox></Checkbox>
                            </FormItem>
                        </Col>
                    </Row>

                    <Row>
                        <Col span="5">
                            <FormItem labelCol={{ span: 9 }}  label="">
                            </FormItem>
                        </Col>

                        <Col span="16">
                            <FormItem labelCol={{ span: 9 }}  label="未按照规定缴纳团体会费">
                            </FormItem>
                        </Col>

                        <Col span="3">
                            <FormItem labelCol={{ span: 9 }}  label=""> <Checkbox></Checkbox>
                            </FormItem>
                        </Col>
                    </Row>

                    <Row>
                        <Col span="5">
                            <FormItem labelCol={{ span: 9 }}  label="">
                            </FormItem>
                        </Col>

                        <Col span="16">
                            <FormItem labelCol={{ span: 9 }}  label="未按照规定办理团体会员登记、变更手续">
                            </FormItem>
                        </Col>

                        <Col span="3">
                            <FormItem labelCol={{ span: 9 }}  label=""> <Checkbox></Checkbox>
                            </FormItem>
                        </Col>
                    </Row>

                    <Row>
                        <Col span="5">
                            <FormItem labelCol={{ span: 9 }}  label="">
                            </FormItem>
                        </Col>

                        <Col span="34">
                            <FormItem labelCol={{ span: 34 }}  label="">
                            </FormItem>
                        </Col>

                    </Row>


                    <Row>
                        <Col span="5">
                            <FormItem labelCol={{ span: 9 }}  label="评级选项">
                            </FormItem>
                        </Col>

                        <Col span="16">
                            <FormItem labelCol={{ span: 9 }}  label="年检及格A级单位">
                            </FormItem>
                        </Col>

                        <Col span="3">
                            <FormItem labelCol={{ span: 13 }}  label="自评级"> <Checkbox></Checkbox>
                            </FormItem>
                        </Col>
                    </Row>

                    <Row>
                        <Col span="4">
                            <FormItem labelCol={{ span: 9 }}  label="年检总结">
                            </FormItem>
                        </Col>

                        <Col span="18">
                            <FormItem  >
                                <Input {...textareaProps}  type="textarea"/>
                            </FormItem>
                        </Col>

                    </Row>

                    <Row>
                        <Col span="6">
                            <FormItem labelCol={{ span: 13 }}  label="事务所负责人意见">
                            </FormItem>
                        </Col>

                        <Col span="10">
                            <FormItem  >
                                <Input {...getFieldProps('NJZJ') } type="textarea"/>
                            </FormItem>
                        </Col>

                        <Col span="3" offset="1">
                            <FormItem  ><span>时间</span></FormItem>
                        </Col>
                        <Col span="3">
                            <FormItem>
                                <Input {...getFieldProps('FSS') }></Input>
                            </FormItem>
                        </Col>
                        <Col span="3" offset="1">
                            <FormItem>
                                <span>负责人签名</span>
                            </FormItem>
                        </Col>
                        <Col span="3">
                            <FormItem>
                                <Input {...getFieldProps('FZR') }></Input>
                            </FormItem>
                        </Col>


                    </Row>
                    <Row>
                        <Col span="8">
                            <Button type="primary" onClick={this.handleSubmit}> <Icon

                                type="check"/>保存</Button>


                        </Col>

                        <Col span="8">
                            <Button type="primary" onClick={this.showModal}> <Icon

                                type="arrow-up"/>提交</Button>
                            <Modal title="你确定要提交吗？" visible=

                                {this.state.visible}
                                onOk={this.handleOk} onCancel=

                                {this.handleCancel}>
                                <p>提交后就不能修改了！！！</p>


                            </Modal>
                        </Col>

                        <Col span="8">
                            <Button type="primary" onClick={this.handleReset}><Icon

                                type="cross"/>重置</Button>



                        </Col>

                    </Row>
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