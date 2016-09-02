import React from 'react'
import {Col, Input, Row, Button, Icon, Form, Modal, Select, Checkbox } from 'antd'
import {SelectorYear, SelectorXZ} from 'component/compSelector'
import './style.css'

const ButtonGroup = Button.Group;
const createForm = Form.create;
const FormItem = Form.Item;
const Option = Select.Option;

let Updatejgnjb = React.createClass({
    getDefaultProps() {
        return {
            onSubmit: {}
        }
    },
    handleSubmit(e) {
        const obj = this.props.data1;
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
        const obj = this.props.data1;
        value.id = obj.ID;
        value.jg_id = obj.JG_ID;

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
        const data = this.props.data;
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
                                <td>{data.dwmc}</td>
                                <td>时间</td>
                                <td> <Col

                                    label="年度：">
                                    <SelectorYear  { ...getFieldProps('nd', { initialValue: data.ND }) }/>
                                </Col>
                                </td>
                                <td>组织形式：{data.jgxz}</td>
                            </tr>

                            <tr>
                                <td style={{ width: 120 }}>所长姓名</td>
                                <td>{data.SZ}</td>
                                <td>注册资金</td>
                                <td>{data.ZCZJ}</td>
                                <td>邮政编码：{data.yzbm}</td>
                            </tr>
                            <tr>
                                <td style={{ width: 150 }}>办公地点</td>
                                <td>{data.bgdz}</td>
                                <td>联系电话</td>
                                <td>{data.dhhm}</td>
                                <td>本年度报备份数：{data.BAFS}份</td>

                            </tr>
                            <tr>
                                <td>总人数：</td>
                                <td><Input {...getFieldProps('ZRS') }/></td>
                                <td>执业注册税务师人数：</td>
                                <td><Input {...getFieldProps('zyrs') }/></td>
                                <td></td>


                            </tr>



                            <tr>
                                <td>参加后续教育：</td>
                                <td><Input {...getFieldProps('yjyrs') }/>人应参加</td>
                                <td><Input {...getFieldProps('sjjyrs') }/>人实参加</td>
                                <td><Input {...getFieldProps('wjyrs') }/>未参加</td>
                                <td></td>


                            </tr>
                            <tr>

                                <td>注册税务师变动情况：</td>
                                <td>增加：<Input{...getFieldProps('ZCSWSBZJ') }/></td>
                                <td>减少：<Input{...getFieldProps('ZCSWSBJS') }/></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr >

                                <td>股东变动情况：</td>
                                <td colSpan="4" >增加：<Input{...getFieldProps('GDBDQKZJ') }/>
                                    减少：<Input{...getFieldProps('GDBDQKJS') }/>
                                </td>
                            </tr>
                            <tr>
                                <td> 分所数: </td>
                                <td colSpan="4"><Input{...getFieldProps('FSS') }/></td>
                            </tr>

                            <tr>
                                <td>自检选项：</td>
                                <td colSpan="3">违规条款</td>
                                <td>所自检：<Checkbox></Checkbox></td>
                            </tr>

                            <tr>
                                <td>执业资格：</td>
                                <td colSpan="3">本所存在注册税务师人数未达到规定的标准</td>
                                <td><Checkbox {...getFieldProps('wg1') }> </Checkbox></td>
                            </tr>



                            <tr>
                                <td></td>
                                <td colSpan="3">

                                    本所有发起人或合伙人以及出资人不按规定出资
                                </td>
                                <td><Checkbox {...getFieldProps('wg2') }></Checkbox></td>
                            </tr>

                            <tr>
                                <td></td>
                                <td colSpan="3">

                                    本所注册资本或经营资金不到位，出资人（股东）的出资不符合规定
                                </td>
                                <td><Checkbox {...getFieldProps('wg3') }></Checkbox></td>
                            </tr>

                            <tr>
                                <td></td>
                                <td colSpan="3">

                                    本所事项变更存在未按归定和程序办理相关的手续
                                </td>
                                <td><Checkbox {...getFieldProps('wg4') }></Checkbox></td>
                            </tr>

                            <tr>
                                <td></td>
                                <td colSpan="3">

                                    本所办公地点和税务机关在一起
                                </td>
                                <td><Checkbox {...getFieldProps('wg5') }></Checkbox></td>
                            </tr>

                            <tr>
                                <td></td>
                                <td colSpan="3">

                                    本所存在拒绝在规定的时间参加年检
                                </td>
                                <td><Checkbox {...getFieldProps('wg6') }></Checkbox></td>
                            </tr>

                            <tr>
                                <td>
                                    执业质量
                                </td>
                                <td colSpan="3">

                                    本所存在采取强迫、欺诈等不正当的手段招揽业务
                                </td>
                                <td><Checkbox {...getFieldProps('wg7') }> </Checkbox></td>
                            </tr>

                            <tr>
                                <td></td>
                                <td colSpan="3">

                                    本所没有与委托人签订协议书或协议书有不规范的行为
                                </td>
                                <td><Checkbox {...getFieldProps('wg8') }></Checkbox></td>
                            </tr>

                            <tr>
                                <td></td>
                                <td colSpan="3">

                                    本所收到《注册税务师管理暂行办法》第四十三、四十四条所列行政处罚
                                </td>
                                <td><Checkbox {...getFieldProps('wg9') }></Checkbox></td>
                            </tr>

                            <tr>
                                <td></td>
                                <td colSpan="3">

                                    本所存在未按照《注册税务师管理暂行办法》归定承办相关业务
                                </td>
                                <td><Checkbox {...getFieldProps('wg10') }></Checkbox></td>
                            </tr>

                            <tr>
                                <td></td>
                                <td colSpan="3">

                                    本所存在未按协议规定履行义务
                                </td>
                                <td><Checkbox {...getFieldProps('wg11') }></Checkbox></td>
                            </tr>

                            <tr>
                                <td></td>
                                <td colSpan="3">

                                    本所未按照财务会计制度核算，内部管理较不好
                                </td>
                                <td><Checkbox {...getFieldProps('wg12') }></Checkbox></td>
                            </tr>

                            <tr>
                                <td></td>
                                <td colSpan="3">

                                    本所利用职务之便，牟取不正当利益
                                </td>
                                <td><Checkbox {...getFieldProps('wg13') }></Checkbox></td>
                            </tr>

                            <tr>
                                <td></td>
                                <td colSpan="3">

                                    本所有采取夸大宣传、诋毁同行、以低于成本价收费等不正当方式承接业务
                                </td>
                                <td><Checkbox {...getFieldProps('wg14') } ></Checkbox></td>
                            </tr>


                            <tr>
                                <td></td>
                                <td colSpan="3">

                                    本所有允许以本所名义承接相关业务
                                </td>
                                <td><Checkbox {...getFieldProps('wg15') }></Checkbox></td>
                            </tr>

                            <tr>
                                <td></td>
                                <td colSpan="3">

                                    本所有出具虚假涉税文书，造成委托人未缴或少缴税款
                                </td>
                                <td><Checkbox {...getFieldProps('wg16') }></Checkbox></td>
                            </tr>

                            <tr>
                                <td></td>
                                <td colSpan="3">

                                    本所有违反税收法律，行政法规，造成委托人未缴或少缴税款
                                </td>
                                <td><Checkbox {...getFieldProps('wg17') }></Checkbox></td>
                            </tr>

                            <tr>
                                <td></td>
                                <td colSpan="3">

                                    连续两年以上未开展任何业务的
                                </td>
                                <td><Checkbox {...getFieldProps('wg28') }></Checkbox></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td colSpan="3">

                                    未执行全省统一涉税鉴证收费标准的
                                </td>
                                <td><Checkbox {...getFieldProps('wg29') }></Checkbox></td>
                            </tr>
                            <tr>
                                <td>收费管理：</td>
                                <td colSpan="3">
                                    本所财务会计制度不健全，会计核算不符合规定要求
                                </td>
                                <td><Checkbox {...getFieldProps('wg18') }></Checkbox></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td colSpan="3">

                                    本所有隐藏，转移业务收入，虚报经营亏损
                                </td>
                                <td><Checkbox {...getFieldProps('wg19') }></Checkbox></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td colSpan="3">

                                    本所有弄虚作假高额支付租赁房屋，设备等费用
                                </td>
                                <td><Checkbox {...getFieldProps('wg20') }></Checkbox></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td colSpan="3">

                                    本所未按规定进行纳税申报以及缴纳税款
                                </td>
                                <td><Checkbox {...getFieldProps('wg21') }></Checkbox></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td colSpan="3">

                                    本所有偷税行为
                                </td>
                                <td><Checkbox {...getFieldProps('wg22') }></Checkbox></td>
                            </tr>
                            <tr>
                                <td>其他方面：</td>
                                <td colSpan="3">

                                    本所有未经批准自行设立分支机构
                                </td>
                                <td><Checkbox {...getFieldProps('wg23') }></Checkbox></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td colSpan="3">

                                    本所有未经批准自行挂靠或者接受挂靠
                                </td>
                                <td><Checkbox {...getFieldProps('wg24') }></Checkbox></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td colSpan="3">

                                    本所有对分支机构只收管理费
                                </td>
                                <td><Checkbox {...getFieldProps('wg25') }></Checkbox></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td colSpan="3">

                                    本所分支机构执业资质不符合要求
                                </td>
                                <td><Checkbox {...getFieldProps('wg26') }></Checkbox></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td colSpan="3">

                                    本所分支机构一年内有两次以上执业质量问题
                                </td>
                                <td><Checkbox {...getFieldProps('wg27') }></Checkbox></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td colSpan="3">

                                    未按照规定缴纳团体会费
                                </td>
                                <td><Checkbox {...getFieldProps('wg30') }></Checkbox></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td colSpan="3">

                                    未按照规定办理团体会员登记、变更手续
                                </td>
                                <td><Checkbox {...getFieldProps('wg31') }></Checkbox></td>
                            </tr>


                            <tr>
                                <td colSpan="3">原年检总结：</td>
                                <td colSpan="2">年检总结修改：</td>
                            </tr>
                            <tr>

                                <td colSpan="2">{data.ZJ}</td>
                                <td colSpan="3" style={{ width: 900 }}><Input {...getFieldProps('ZJ') } placeholder="可根据实际情况对输入框进行调整（将鼠标放置到输入框右下角即可拉伸）" type="textarea"/></td>
                            </tr>
                            <tr>
                                <td colSpan="2">原事务所负责人意见：</td>
                                <td colSpan="2">事务所负责人意见修改：</td>
                                <td>负责人签名：</td>
                            </tr>
                            <tr>

                                <td colSpan="2">{data.NJZJ}</td>
                                <td colSpan="2" style={{ width: 900 }}><Input {...getFieldProps('NJZJ') } placeholder="可根据实际情况对输入框进行调整（将鼠标放置到输入框右下角即可拉伸）" type="textarea"/></td>
                   <td><Input {...getFieldProps('FZR') }/></td>         
                            </tr>





                        </tbody>

                        <tbody>
                            <tr >
                                <td></td>


                                <td>
                                    <Button type="primary" onClick={this.handleSubmit}> <Icon type="check"/>保存</Button>
                                </td>

                                <td style={{ textAlign: 'center' }}>

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
            result[prop] = { value: props.data[prop] }
        }
        return result;
    }
})(Updatejgnjb);






module.exports = Updatejgnjb