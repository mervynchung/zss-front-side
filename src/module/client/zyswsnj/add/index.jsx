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
        for (var key in value) {
            if (!value[key]) {
                value[key] = null;
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

        const { getFieldProps } = this.props.form;
        let obj = [{}];
        if (this.props.data.length != 0) {
            obj = this.props.data;
        };

        return  <div>
        <div className="fix-table table-bordered table-striped" >
            <Form horizontal onSubmit={this.handleSubmit}>
                    <div className="fix-table table-bordered table-striped">

                        <table>
                            <tbody>
<tr>
<td>姓名：</td>
<td>选择</td>
<td>性别：</td>
<td>年度：</td>
<td rowSpan="6">照片</td>
</tr>
<tr>
<td>出生年月：</td>
<td></td>
<td>文化程度：</td>
<td></td>
</tr>
<tr>
<td>身份证号：</td>
<td></td>
<td>所在单位：</td>
<td></td>

</tr>
<tr>
<td>联系电话：</td>
<td></td>
<td>执业注册（备案）编号：</td>
<td></td>
</tr>
<tr>
<td>执业注册日期：</td>
<td></td>
<td>出资比率：%</td>
<td></td>
</tr>
<tr>
<td>资格证书编号：</td>
<td></td>
<td>本年度报备份数：</td>
<td>年度：</td>
</tr>



                                <tr className="add">
                                    <th>自检情况：</th>
                                    <th colSpan="3">违规条款(违规请打勾) </th>
                                    <th>自检<Checkbox></Checkbox></th>
                                </tr>




                                <tr>
                                    <td></td>
                                    <td colSpan="3">允许或默认他人或本人名义作为税务师税务所出资人出资的</td>
                                    <td><Checkbox></Checkbox></td>
                                </tr>

                                <tr>
                                    <td></td>
                                    <td colSpan="3">同时在两个以上税务师事务所出资的</td>
                                    <td><Checkbox></Checkbox></td>
                                </tr>

                                <tr>
                                    <td></td>
                                    <td colSpan="3">允许或默认他人以本人名义接受税务师事务所其他出资人转让股份的</td>
                                    <td><Checkbox></Checkbox></td>
                                </tr>



                                <tr>
                                    <td></td>
                                    <td colSpan="3">同时在两个以上税务师事务所执业又坚持不改正的</td>
                                    <td><Checkbox></Checkbox></td>
                                </tr>


                                <tr>
                                    <td></td>
                                    <td colSpan="3">连续2年有不良职业记录的</td>
                                    <td><Checkbox></Checkbox></td>
                                </tr>

                                <tr>
                                    <td></td>
                                    <td colSpan="3">连续2年未参加年检的</td>
                                    <td><Checkbox></Checkbox></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td colSpan="3">无正当理由拒绝在规定年限内参加年检的</td>
                                    <td><Checkbox></Checkbox></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td colSpan="3">明知委托人对重要涉税事项的处理与国家税收法律、法规及有关规定相抵触，而不予指明</td>
                                    <td><Checkbox></Checkbox></td>
                                </tr>

                                <tr>
                                    <td></td>
                                    <td colSpan="3">明知委托人对重要涉税事项的处理会损害报告使用人或者其他利害关系人的合法权益，而予以隐瞒或者作不实的报告</td>
                                    <td><Checkbox></Checkbox></td>
                                </tr>

                                <tr>
                                    <td></td>
                                    <td colSpan="3">明知委托人对重要涉税事项的处理会导致报告使用人或者其他利害关系人产生重大误解，而不予以指明</td>
                                    <td><Checkbox></Checkbox></td>
                                </tr>


                                <tr>
                                    <td></td>
                                    <td colSpan="3">明知委托人对重要涉税事项有其他不实内容，而不予以证明</td>
                                    <td><Checkbox></Checkbox></td>
                                </tr>

                                <tr>
                                    <td></td>
                                    <td colSpan="3">执业期间，买卖委托人的股票、债券</td>
                                    <td><Checkbox></Checkbox></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td colSpan="3">索取、收受委托合同约定以外的酬金或者其他财务，或者利用执业之便，牟取其他不正当的利益</td>
                                    <td><Checkbox></Checkbox></td>
                                </tr>

                                <tr>
                                    <td></td>
                                    <td colSpan="3">允许他人以本人名义执业</td>
                                    <td><Checkbox></Checkbox></td>
                                </tr>


                                <tr>
                                    <td></td>
                                    <td colSpan="3">向税务机关工作人员行贿或者指使、诱导委托人行贿</td>
                                    <td><Checkbox></Checkbox></td>
                                </tr>


                                <tr>
                                    <td></td>
                                    <td colSpan="3">其他违反法律、行政法规的行为</td>
                                    <td><Checkbox></Checkbox></td>
                                </tr>

                                <tr>
                                    <td></td>
                                    <td colSpan="3">以个人名义承接业务或者收费的</td>
                                    <td><Checkbox></Checkbox></td>
                                </tr>

                                <tr>
                                    <td></td>
                                    <td colSpan="3">泄露委托人商业秘密的</td>
                                    <td><Checkbox></Checkbox></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td colSpan="3">利用职业之便，牟取不正当利益的</td>
                                    <td><Checkbox></Checkbox></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td colSpan="3">出具虚假涉税文书</td>
                                    <td><Checkbox></Checkbox></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td colSpan="3">违反税收法律、行政法规，造成委托人未缴或者少缴税款的</td>
                                    <td><Checkbox></Checkbox></td>
                                </tr>

                                <tr>
                                    <td></td>
                                    <td colSpan="3">未按规定缴纳个人会费</td>
                                    <td><Checkbox></Checkbox></td>
                                </tr>


                                <tr>
                                    <td></td>
                                    <td colSpan="3">未按规定办理个人登记、变更手续</td>
                                    <td><Checkbox></Checkbox></td>
                                </tr>

                                <tr>
                                    <td></td>
                                    <td colSpan="3">未参加继续教育情况</td>
                                    <td><Checkbox></Checkbox></td>
                                </tr>

<tr>
<td>年检总结:</td>
<td colSpan="4"><Input type="textarea"  autosize /></td>
</tr>

<tr>
<td rowSpan="2">事务所负责人意见</td>
<td colSpan="2"><Input type="textarea"  autosize /></td>
<td colSpan="2">时间：<Input/>
负责人签名：<Input/> </td>

</tr>



                                

                            </tbody>
                        </table >
                    </div>
                   
                    <Row>
                        <Col span="4">
                            <Button type="primary" onClick={this.handleSubmit}> <Icon type="check"/>保存</Button>


                        </Col>

                        <Col span="4">
                            <Button type="primary" onClick={this.showModal}> <Icon type="arrow-up"/>提交</Button>
                            <Modal title="你确定要提交吗？" visible={this.state.visible}
                                onOk={this.handleOk} onCancel={this.handleCancel}>
                                <p>提交后就不能修改了！！！</p>


                            </Modal>
                        </Col>

                        <Col span="4">
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
            result[prop] = { value: props.data[prop] }
        }
        return result;
    }
})(Addswsnj);








module.exports = Addswsnj;