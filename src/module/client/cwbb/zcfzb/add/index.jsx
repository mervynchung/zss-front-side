import React from 'react'
import {Col, Input, Row, Button, Icon, Form, Modal, DatePicker  } from 'antd'
import {SelectorYear, SelectorXZ} from 'component/compSelector'
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

let Addzcfzb = React.createClass({
    getDefaultProps() {
        return {
            onSubmit: {},

        }
    },
    //点击提交
    handleSubmit(e) {
        e.preventDefault();
        var mp = {};
        let value = this.props.form.getFieldsValue()
        console.log(value);
        value['ldzc_hj_nc'] = value['ldzc_hbzj_nc'] + value['ldzc_dqtz_nc'] + value['ldfz_yfpj_nc'] + value['ldzc_ysgl_nc'] + value['ldzc_yslx_nc'] + value['ldzc_yszk_nc']
            + value['ldzc_qtys_nc'] + value['ldzc_yfzk_nc'] + value['ldzc_ysbt_nc'] + value['ldzc_ch_nc'] + value['ldzc_dtfy_nc'] + value['ldzc_dqzj_nc'] + value['ldzc_qtldzc_nc'];

        //this.props.form.setFieldsValue({ nd: value });


        for (var key in value) {
            if (Object.prototype.toString.call(value[key]) == "[object Undefined]") {
                value[key] = null
            };
            if (!value[key]) {
                value[key] = null;
            }
            if (Object.prototype.toString.call(value[key]) == "[object Date]") {//时间格式化
                var dd = value[key].Format("yyyy-MM-dd");
                value[key] = dd;
            }

        }

        this.props.onSubmit(value);
    },
    //点击重置
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
        let value = this.props.form.getFieldsValue();
        let ldzc_hj_nc=0;
        ldzc_hj_nc=parseFloat(value.ldzc_hbzj_nc) + parseFloat(value.ldzc_dqtz_nc);
        value.ldzc_hj_nc=ldzc_hj_nc;
        // value['ldzc_hj_nc'] = value['ldzc_hbzj_nc'] + value['ldzc_dqtz_nc'] + value['ldfz_yfpj_nc'] + value['ldzc_ysgl_nc'] + value['ldzc_yslx_nc'] + value['ldzc_yszk_nc']
        //     + value['ldzc_qtys_nc'] + value['ldzc_yfzk_nc'] + value['ldzc_ysbt_nc'] + value['ldzc_ch_nc'] + value['ldzc_dtfy_nc'] + value['ldzc_dqzj_nc'] + value['ldzc_qtldzc_nc'];
        for (var key in value) {
            if (Object.prototype.toString.call(value[key]) == "[object Undefined]") {
                value[key] = null
            };
            if (!value[key]) {
                value[key] = null;
            }
            if (Object.prototype.toString.call(value[key]) == "[object Date]") {//时间格式化
                var dd = value[key].Format("yyyy-MM-dd");
                value[key] = dd;
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

handleInputChange(e) {
        let changeField = e.target.id;
        let value = e.target.value;
        let entity = this.props.form.getFieldsValue();
        let ldzc_hbzj_nc = 0;
        let ldzc_hbzj = 0;
        let zgywsj1 = 0;
        let zgwylr1 = 0;
        let zgywsr = 0;
        let zgywcb = 0;
        let zgywsj = 0;
        let zgwylr = 0;

        if (entity.ldzc_hbzj_nc) {
            ldzc_hbzj_nc = entity.ldzc_hbzj_nc;
        }
        if (entity.ldzc_hbzj) {
            ldzc_hbzj = entity.ldzc_hbzj;
        }
        if (entity.zgywsj1) {
            zgywsj1 = entity.zgywsj1;
        }
        if (entity.zgywsr) {
            zgywsr = entity.zgywsr;
        }
        if (entity.zgywcb) {
            zgywcb = entity.zgywcb;
        }
        if (entity.zgywsj) {
            zgywsj = entity.zgywsj;
        }

        if (changeField == "ldzc_hbzj_nc") {
            ldzc_hbzj_nc = value;
            this.props.form.setFieldsValue({ ldzc_hbzj_nc: value });
        } else if (changeField == "ldzc_hbzj") {
            ldzc_hbzj = value;
            this.props.form.setFieldsValue({ ldzc_hbzj: value });
        } else if (changeField == "zgywsj1") {
            zgywsj1 = value;
            this.props.form.setFieldsValue({ zgywsj1: value });
        } else if (changeField == "zgywsr") {
            zgywsr = value;
            this.props.form.setFieldsValue({ zgywsr: value });
        } else if (changeField == "zgywcb") {
            zgywcb = value;
            this.props.form.setFieldsValue({ zgywcb: value });
        } else if (changeField == "zgywsj") {
            zgywsj = value;
            this.props.form.setFieldsValue({ zgywsj: value });
        }

        if (changeField == "zgywsr1" || changeField == "zgywcb1" || changeField == "zgywsj1") {
            zgwylr1 = zgywsr1 - zgywcb1 - zgywsj1;
            this.props.form.setFieldsValue({ zgwylr1: zgwylr1 });
        } else if (changeField == "zgywsr" || changeField == "zgywcb" || changeField == "zgywsj") {
            zgwylr = zgywsr - zgywcb - zgywsj;
            this.props.form.setFieldsValue({ zgwylr: zgwylr });
        }
    },





    render() {
        let nd = new Date().getFullYear();
        let xz = "半年";
        const { getFieldProps } = this.props.form;
        let obj = [{}];
        if (this.props.data.length != 0) {
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
                                <td colSpan="2">单位： {obj[0].DWMC}</td>

                                <td colSpan="3">

                                </td>


                                <td width="11%">  <Col
                                    label="年度：">
                                    <SelectorYear  { ...getFieldProps('nd', { initialValue: nd, }) }/>
                                </Col>
                                </td>

                                <td > <Col>
                                    <SelectorXZ   { ...getFieldProps('timevalue', { initialValue: xz, }) }/>
                                </Col>
                                </td>

                                <td>单位：元</td>
                            </tr>
                            <tr>
                                <td style={{ textAlign: 'center' }} >资产</td>
                                <td>行次</td>
                                <td > 年初数</td>
                                <td > 年末数</td>
                                <td style={{ textAlign: 'center' }} >负债及所有者权益（或股东权益）</td>
                                <td  >行次</td>
                                <td > 年初数</td>
                                <td > 年末数</td>
                            </tr>

                            <tr>
                                <td style={{ textAlign: 'center' }} >流动资产：</td>
                                <td></td>
                                <td > </td>
                                <td > </td>
                                <td style={{ textAlign: 'center' }} >流动负债：</td>
                                <td></td>
                                <td ></td>
                                <td > </td>
                            </tr>

                            <tr>
                                <td style={{ textAlign: 'center' }} >货币资金</td>
                                <td>1</td>
                                <td ><Input id='ldzc_hbzj_nc' type='Number'  {...getFieldProps('ldzc_hbzj_nc') } onChange={this.handleInputChange}/> </td>
                                <td ><Input id='ldzc_hbzj' type='Number' {...getFieldProps('ldzc_hbzj') } onChange={this.handleInputChange}/> </td>
                                <td style={{ textAlign: 'center' }} >短期借款</td>
                                <td>33</td>
                                <td ><Input id='ldfz_dqjk_nc' type='Number'  {...getFieldProps('ldfz_dqjk_nc') }  onChange={this.handleInputChange}/></td>
                                <td ><Input id='ldfz_dqjk'   type='Number'  {...getFieldProps('ldfz_dqjk') }  onChange={this.handleInputChange}/></td>
                            </tr>

                            <tr>
                                <td style={{ textAlign: 'center' }} >短期投资</td>
                                <td>2</td>
                                <td ><Input id='ldzc_dqtz_nc' type='Number'  {...getFieldProps('ldzc_dqtz_nc') } onChange={this.handleInputChange} /> </td>
                                <td ><Input id='ldzc_dqtz' type='Number'  {...getFieldProps('ldzc_dqtz') } onChange={this.handleInputChange}/> </td>
                                <td style={{ textAlign: 'center' }} >应付票据</td>
                                <td>34</td>
                                <td ><Input  id='ldfz_yfpj_nc' type='Number' {...getFieldProps('ldfz_yfpj_nc') } onChange={this.handleInputChange}/></td>
                                <td ><Input id='ldfz_yfpj' type='Number' {...getFieldProps('ldfz_yfpj') } onChange={this.handleInputChange}/></td>
                            </tr>

                            <tr>
                                <td style={{ textAlign: 'center' }} >应收票据</td>
                                <td>3</td>
                                <td ><Input id='ldzc_yspj_nc' type='Number' {...getFieldProps('ldzc_yspj_nc') } onChange={this.handleInputChange}/> </td>
                                <td ><Input id='ldzc_yspj' type='Number'  {...getFieldProps('ldzc_yspj') } onChange={this.handleInputChange}/> </td>
                                <td style={{ textAlign: 'center' }} >应付账款</td>
                                <td>35</td>
                                <td ><Input  id='ldfz_yfzk_nc' type='Number' {...getFieldProps('ldfz_yfzk_nc') } onChange={this.handleInputChange}/></td>
                                <td ><Input  id='ldfz_yfzk' type='Number' {...getFieldProps('ldfz_yfzk') } onChange={this.handleInputChange}/></td>
                            </tr>

                            <tr>
                                <td style={{ textAlign: 'center' }} >应收股利</td>
                                <td>4</td>
                                <td ><Input id='ldzc_ysgl_nc'  type='Number' {...getFieldProps('ldzc_ysgl_nc') } onChange={this.handleInputChange}/> </td>
                                <td ><Input  id='ldzc_ysgl' type='Number' {...getFieldProps('ldzc_ysgl') } onChange={this.handleInputChange}/> </td>
                                <td style={{ textAlign: 'center' }} >预收账款</td>
                                <td>36</td>
                                <td ><Input  id='ldfz_yszk_nc' type='Number' {...getFieldProps('ldfz_yszk_nc') } onChange={this.handleInputChange}/></td>
                                <td ><Input  id='ldfz_yszk' type='Number' {...getFieldProps('ldfz_yszk') } onChange={this.handleInputChange}/></td>
                            </tr>

                            <tr>
                                <td style={{ textAlign: 'center' }} >应收利息</td>
                                <td>5</td>
                                <td ><Input id='ldzc_yslx_nc' type='Number'  {...getFieldProps('ldzc_yslx_nc') } onChange={this.handleInputChange}/> </td>
                                <td ><Input  id='ldzc_yslx' type='Number' {...getFieldProps('ldzc_yslx') } onChange={this.handleInputChange}/> </td>
                                <td style={{ textAlign: 'center' }} >应付工资</td>
                                <td>37</td>
                                <td ><Input  id='ldfz_yfgz_nc' type='Number' {...getFieldProps('ldfz_yfgz_nc') } onChange={this.handleInputChange}/></td>
                                <td ><Input  id='ldfz_yfgz' type='Number' {...getFieldProps('ldfz_yfgz') } onChange={this.handleInputChange}/></td>
                            </tr>

                            <tr>
                                <td style={{ textAlign: 'center' }} >应收账款</td>
                                <td>6</td>
                                <td ><Input  id='ldzc_yszk_nc' type='Number' {...getFieldProps('ldzc_yszk_nc') } onChange={this.handleInputChange}/> </td>
                                <td ><Input id='ldzc_yszk' type='Number' {...getFieldProps('ldzc_yszk') } onChange={this.handleInputChange}/> </td>
                                <td style={{ textAlign: 'center' }} >应付福利费</td>
                                <td>38</td>
                                <td ><Input  id='ldfz_yffl_nc' type='Number' {...getFieldProps('ldfz_yffl_nc') } onChange={this.handleInputChange}/></td>
                                <td ><Input  id='ldfz_yffl' type='Number' {...getFieldProps('ldfz_yffl') } onChange={this.handleInputChange}/></td>
                            </tr>

                            <tr>
                                <td style={{ textAlign: 'center' }} >其他应收款</td>
                                <td>7</td>
                                <td ><Input id='ldzc_qtys_nc' type='Number'  {...getFieldProps('ldzc_qtys_nc') } onChange={this.handleInputChange}/> </td>
                                <td ><Input id='ldzc_qtys' type='Number'  {...getFieldProps('ldzc_qtys') } onChange={this.handleInputChange}/> </td>
                                <td style={{ textAlign: 'center' }} >应付股利</td>
                                <td>39</td>
                                <td ><Input id='ldfz_yfgl_nc' type='Number'  {...getFieldProps('ldfz_yfgl_nc') } onChange={this.handleInputChange}/></td>
                                <td ><Input id='ldfz_yfgl' type='Number'  {...getFieldProps('ldfz_yfgl') } onChange={this.handleInputChange}/></td>
                            </tr>

                            <tr>
                                <td style={{ textAlign: 'center' }} >预付账款</td>
                                <td>8</td>
                                <td ><Input id='ldzc_yfzk_nc' type='Number'  {...getFieldProps('ldzc_yfzk_nc') } onChange={this.handleInputChange}/> </td>
                                <td ><Input  id='ldzc_yfzk' type='Number' {...getFieldProps('ldzc_yfzk') } onChange={this.handleInputChange}/> </td>
                                <td style={{ textAlign: 'center' }} >应交税金</td>
                                <td>40</td>
                                <td ><Input  id='ldfz_yjsj_nc' type='Number' {...getFieldProps('ldfz_yjsj_nc') } onChange={this.handleInputChange}/></td>
                                <td ><Input  id='ldfz_yjsj' type='Number' {...getFieldProps('ldfz_yjsj') } onChange={this.handleInputChange}/></td>
                            </tr>

                            <tr>
                                <td style={{ textAlign: 'center' }} >应收补贴款</td>
                                <td>9</td>
                                <td ><Input id='ldzc_ysbt_nc' type='Number'  {...getFieldProps('ldzc_ysbt_nc') } onChange={this.handleInputChange}/> </td>
                                <td ><Input  id='ldzc_ysbt' type='Number' {...getFieldProps('ldzc_ysbt') } onChange={this.handleInputChange}/> </td>
                                <td style={{ textAlign: 'center' }} >其他应交款</td>
                                <td>41</td>
                                <td ><Input id='ldfz_qtyj_nc' type='Number'  {...getFieldProps('ldfz_qtyj_nc') } onChange={this.handleInputChange}/></td>
                                <td ><Input  id='ldfz_qtyj' type='Number' {...getFieldProps('ldfz_qtyj') } onChange={this.handleInputChange}/></td>
                            </tr>

                            <tr>
                                <td style={{ textAlign: 'center' }} >存货</td>
                                <td>10</td>
                                <td ><Input id='ldzc_ch_nc' type='Number'  {...getFieldProps('ldzc_ch_nc') } onChange={this.handleInputChange}/> </td>
                                <td ><Input id='ldzc_ch' type='Number'  {...getFieldProps('ldzc_ch') } onChange={this.handleInputChange}/> </td>
                                <td style={{ textAlign: 'center' }} >其他应付款</td>
                                <td>42</td>
                                <td ><Input  id='ldfz_qtyf_nc' type='Number' {...getFieldProps('ldfz_qtyf_nc') } onChange={this.handleInputChange}/></td>
                                <td ><Input id='ldfz_qtyf' type='Number'  {...getFieldProps('ldfz_qtyf') } onChange={this.handleInputChange}/></td>
                            </tr>

                            <tr>
                                <td style={{ textAlign: 'center' }} >待摊费用</td>
                                <td>11</td>
                                <td ><Input id='ldzc_dtfy_nc' type='Number'  {...getFieldProps('ldzc_dtfy_nc') } onChange={this.handleInputChange}/> </td>
                                <td ><Input  id='ldzc_dtfy' type='Number' {...getFieldProps('ldzc_dtfy') } onChange={this.handleInputChange}/> </td>
                                <td style={{ textAlign: 'center' }} >预提费用</td>
                                <td>43</td>
                                <td ><Input id='ldfz_ytfy_nc' type='Number'  {...getFieldProps('ldfz_ytfy_nc') } onChange={this.handleInputChange}/></td>
                                <td ><Input id='ldfz_ytfy' type='Number'  {...getFieldProps('ldfz_ytfy') } onChange={this.handleInputChange}/></td>
                            </tr>

                            <tr>
                                <td style={{ textAlign: 'center' }} >一年内到期的长期债券投资</td>
                                <td>12</td>
                                <td ><Input id='ldzc_dqzj_nc' type='Number'  {...getFieldProps('ldzc_dqzj_nc') } onChange={this.handleInputChange}/> </td>
                                <td ><Input id='ldzc_dqzj' type='Number'  {...getFieldProps('ldzc_dqzj') } onChange={this.handleInputChange}/> </td>
                                <td style={{ textAlign: 'center' }} >预计负债</td>
                                <td>44</td>
                                <td ><Input id='ldfz_yjfz_nc' type='Number'  {...getFieldProps('ldfz_yjfz_nc') } onChange={this.handleInputChange}/></td>
                                <td ><Input id='ldfz_yjfz' type='Number'  {...getFieldProps('ldfz_yjfz') } onChange={this.handleInputChange}/></td>
                            </tr>

                            <tr>
                                <td style={{ textAlign: 'center' }} >其他流动资产</td>
                                <td>13</td>
                                <td ><Input  id='ldzc_qtldzc_nc' type='Number' {...getFieldProps('ldzc_qtldzc_nc') } onChange={this.handleInputChange}/> </td>
                                <td ><Input   id='ldzc_qtldzc' type='Number'{...getFieldProps('ldzc_qtldzc') } onChange={this.handleInputChange}/> </td>
                                <td style={{ textAlign: 'center' }} >一年内到期的长期负债</td>
                                <td>45</td>
                                <td ><Input id='ldfz_dqfz_nc' type='Number'  {...getFieldProps('ldfz_dqfz_nc') } onChange={this.handleInputChange}/></td>
                                <td ><Input  id='ldfz_dqfz' type='Number' {...getFieldProps('ldfz_dqfz') } onChange={this.handleInputChange}/></td>
                            </tr>

                            <tr>
                                <td style={{ textAlign: 'center' }} >流动资产合计</td>
                                <td>14</td>
                                <td ><Input  id='ldzc_hj_nc' type='Number' {...getFieldProps('ldzc_hj_nc') }disabled/> </td>
                                <td ><Input  id='ldzc_hj' type='Number' {...getFieldProps('ldzc_hj') }disabled/> </td>
                                <td style={{ textAlign: 'center' }} >其他流动负债</td>
                                <td>46</td>
                                <td ><Input  id='ldfz_qtfz_nc' type='Number' {...getFieldProps('ldfz_qtfz_nc') } onChange={this.handleInputChange}/></td>
                                <td ><Input  id='ldfz_qtfz' type='Number' {...getFieldProps('ldfz_qtfz') } onChange={this.handleInputChange}/></td>
                            </tr>

                            <tr>
                                <td style={{ textAlign: 'center' }} >长期投资: </td>
                                <td colSpan="7"></td>

                            </tr>

                            <tr>
                                <td style={{ textAlign: 'center' }} >长期股权投资</td>
                                <td>15</td>
                                <td ><Input  id='cqtz_gq_nc' type='Number' {...getFieldProps('cqtz_gq_nc') } onChange={this.handleInputChange}/> </td>
                                <td ><Input  id='cqtz_gq' type='Number' {...getFieldProps('cqtz_gq') } onChange={this.handleInputChange}/> </td>
                                <td style={{ textAlign: 'center' }} >流动负债合计</td>
                                <td>47</td>
                                <td ><Input id='ldfz_hj_nc' type='Number'  {...getFieldProps('ldfz_hj_nc') }disabled/></td>
                                <td ><Input  id='ldfz_hj' type='Number' {...getFieldProps('ldfz_hj') }disabled/></td>
                            </tr>

                            <tr>
                                <td style={{ textAlign: 'center' }} >长期债权投资</td>
                                <td>16</td>
                                <td ><Input id='cqtz_zq_nc' type='Number'  {...getFieldProps('cqtz_zq_nc') } onChange={this.handleInputChange}/> </td>
                                <td ><Input  id='cqtz_zq' type='Number' {...getFieldProps('cqtz_zq') } onChange={this.handleInputChange}/> </td>
                                <td style={{ textAlign: 'center' }} >长期负债: </td>
                                <td colSpan="3"></td>

                            </tr>

                            <tr>
                                <td style={{ textAlign: 'center' }} >长期投资合计</td>
                                <td>17</td>
                                <td ><Input id='cqtz_hj_nc' type='Number'  {...getFieldProps('cqtz_hj_nc') }disabled/> </td>
                                <td ><Input  id='cqtz_hj' type='Number' {...getFieldProps('cqtz_hj') }disabled/> </td>
                                <td style={{ textAlign: 'center' }} >长期借款</td>
                                <td>48</td>
                                <td ><Input  id='cqfz_cqjk_nc' type='Number' {...getFieldProps('cqfz_cqjk_nc') } onChange={this.handleInputChange}/></td>
                                <td ><Input  id='cqfz_cqjk' type='Number' {...getFieldProps('cqfz_cqjk') } onChange={this.handleInputChange}/></td>
                            </tr>

                            <tr>
                                <td style={{ textAlign: 'center' }} >固定资产: </td>
                                <td colSpan="3"></td>

                                <td style={{ textAlign: 'center' }} >应付债券</td>
                                <td>49</td>
                                <td ><Input id='cqfz_yfzq_nc' type='Number'  {...getFieldProps('cqfz_yfzq_nc') } onChange={this.handleInputChange}/></td>
                                <td ><Input  id='cqfz_yfzq' type='Number' {...getFieldProps('cqfz_yfzq') } onChange={this.handleInputChange}/></td>
                            </tr>

                            <tr>
                                <td style={{ textAlign: 'center' }} >固定资产原价</td>
                                <td>18</td>
                                <td ><Input  id='gdzc_yj_nc' type='Number' {...getFieldProps('gdzc_yj_nc') } onChange={this.handleInputChange}/> </td>
                                <td ><Input   id='gdzc_yj' type='Number'{...getFieldProps('gdzc_yj') } onChange={this.handleInputChange}/> </td>
                                <td style={{ textAlign: 'center' }} >长期应付款</td>
                                <td>50</td>
                                <td ><Input  id='cqfz_cqyf_nc' type='Number' {...getFieldProps('cqfz_cqyf_nc') } onChange={this.handleInputChange}/></td>
                                <td ><Input  id='cqfz_cqyf' type='Number' {...getFieldProps('cqfz_cqyf') } onChange={this.handleInputChange}/></td>
                            </tr>

                            <tr>
                                <td style={{ textAlign: 'center' }} >减：累计折旧</td>
                                <td>19</td>
                                <td ><Input  id='gdzc_ljzj_nc' type='Number' {...getFieldProps('gdzc_ljzj_nc') } onChange={this.handleInputChange}/> </td>
                                <td ><Input  id='gdzc_ljzj' type='Number' {...getFieldProps('gdzc_ljzj') } onChange={this.handleInputChange}/> </td>
                                <td style={{ textAlign: 'center' }} >专项应付款</td>
                                <td>51</td>
                                <td ><Input  id='cqfz_zxyf_nc' type='Number' {...getFieldProps('cqfz_zxyf_nc') } onChange={this.handleInputChange}/></td>
                                <td ><Input  id='cqfz_zxyf' type='Number' {...getFieldProps('cqfz_zxyf') } onChange={this.handleInputChange}/></td>
                            </tr>

                            <tr>

                                <td colSpan="4"></td>

                                <td style={{ textAlign: 'center' }} >职业风险基金</td>
                                <td>52</td>
                                <td ><Input  id='cqfz_zyfxjj_nc' type='Number' {...getFieldProps('cqfz_zyfxjj_nc') } onChange={this.handleInputChange}/></td>
                                <td ><Input  id='cqfz_zyfxjj' type='Number' {...getFieldProps('cqfz_zyfxjj') } onChange={this.handleInputChange}/></td>
                            </tr>

                            <tr>
                                <td style={{ textAlign: 'center' }} >固定资产净值</td>
                                <td>20</td>
                                <td ><Input  id='gdzc_jz_nc' type='Number' {...getFieldProps('gdzc_jz_nc') }disabled/> </td>
                                <td ><Input  id='gdzc_jz' type='Number' {...getFieldProps('gdzc_jz') }disabled/> </td>
                                <td style={{ textAlign: 'center' }} >其他长期负债</td>
                                <td>53</td>
                                <td ><Input  id='cqfz_qtfz_nc' type='Number' {...getFieldProps('cqfz_qtfz_nc') } onChange={this.handleInputChange}/></td>
                                <td ><Input  id='cqfz_qtfz' type='Number' {...getFieldProps('cqfz_qtfz') } onChange={this.handleInputChange}/></td>
                            </tr>

                            <tr>
                                <td style={{ textAlign: 'center' }} >减：固定资产减值准备</td>
                                <td>21</td>
                                <td ><Input  id='gdzc_jzzb_nc' type='Number' {...getFieldProps('gdzc_jzzb_nc') } onChange={this.handleInputChange}/> </td>
                                <td ><Input  id='gdzc_jzzb' type='Number' {...getFieldProps('gdzc_jzzb') } onChange={this.handleInputChange}/> </td>
                                <td style={{ textAlign: 'center' }} >长期负债合计</td>
                                <td>54</td>
                                <td ><Input  id='cqfz_hj_nc' type='Number' {...getFieldProps('cqfz_hj_nc') }disabled/></td>
                                <td ><Input  id='cqfz_hj' type='Number' {...getFieldProps('cqfz_hj') }disabled/></td>
                            </tr>

                            <tr>
                                <td style={{ textAlign: 'center' }} >固定资产净额</td>
                                <td>22</td>
                                <td ><Input  id='gdzc_je_nc' type='Number' {...getFieldProps('gdzc_je_nc') }disabled/> </td>
                                <td ><Input  id='gdzc_je' type='Number' {...getFieldProps('gdzc_je') }disabled/> </td>
                                <td style={{ textAlign: 'center' }} >递延税项：</td>
                                <td colSpan="3"></td>
                            </tr>

                            <tr>
                                <td style={{ textAlign: 'center' }} >工程物资</td>
                                <td>23</td>
                                <td ><Input  id='gdzc_gcwz_nc' type='Number' {...getFieldProps('gdzc_gcwz_nc') } onChange={this.handleInputChange}/> </td>
                                <td ><Input  id='gdzc_gcwz' type='Number' {...getFieldProps('gdzc_gcwz') } onChange={this.handleInputChange}/> </td>
                                <td style={{ textAlign: 'center' }} >递延税款贷项</td>
                                <td>55</td>
                                <td ><Input  id='dysx_dyskdx_nc' type='Number' {...getFieldProps('dysx_dyskdx_nc') } onChange={this.handleInputChange}/></td>
                                <td ><Input  id='dysx_dyskdx' type='Number' {...getFieldProps('dysx_dyskdx') } onChange={this.handleInputChange}/></td>
                            </tr>

                            <tr>
                                <td style={{ textAlign: 'center' }} >在建工程</td>
                                <td>24</td>
                                <td ><Input id='gdzc_zjgc_nc' type='Number'  {...getFieldProps('gdzc_zjgc_nc') } onChange={this.handleInputChange}/> </td>
                                <td ><Input  id='gdzc_zjgc' type='Number' {...getFieldProps('gdzc_zjgc') } onChange={this.handleInputChange}/> </td>
                                <td style={{ textAlign: 'center' }} >负债合计</td>
                                <td>56</td>
                                <td ><Input  id='dysx_fzhj_nc' type='Number' {...getFieldProps('dysx_fzhj_nc') }disabled/></td>
                                <td ><Input  id='dysx_fzhj' type='Number' {...getFieldProps('dysx_fzhj') }disabled/></td>
                            </tr>

                            <tr>
                                <td style={{ textAlign: 'center' }} >固定资产清理</td>
                                <td>25</td>
                                <td ><Input  id='gdzc_ql_nc' type='Number' {...getFieldProps('gdzc_ql_nc') } onChange={this.handleInputChange}/> </td>
                                <td ><Input  id='gdzc_ql' type='Number' {...getFieldProps('gdzc_ql') } onChange={this.handleInputChange}/> </td>

                                <td colSpan="4"></td>
                            </tr>

                            <tr>
                                <td style={{ textAlign: 'center' }} >固定资产合计</td>
                                <td>26</td>
                                <td ><Input  id='gdzc_hj_nc' type='Number' {...getFieldProps('gdzc_hj_nc') }disabled/> </td>
                                <td ><Input  id='gdzc_hj' type='Number' {...getFieldProps('gdzc_hj') }disabled/> </td>
                                <td style={{ textAlign: 'center' }} >所有者权益（或股东权益）：</td>
                                <td colSpan="3"></td>
                            </tr>

                            <tr>
                                <td style={{ textAlign: 'center' }} >无形资产及其他资产：</td>
                                <td colSpan="3"></td>

                                <td style={{ textAlign: 'center' }} >实收资本（或股本）</td>
                                <td>57</td>
                                <td ><Input  id='syzqy_sszbje_nc' type='Number' {...getFieldProps('syzqy_sszbje_nc') } onChange={this.handleInputChange}/></td>
                                <td ><Input  id='syzqy_sszbje' type='Number' {...getFieldProps('syzqy_sszbje') } onChange={this.handleInputChange}/></td>
                            </tr>

                            <tr>
                                <td style={{ textAlign: 'center' }} >无形资产</td>
                                <td>27</td>
                                <td ><Input  id='wxqt_wxzc_nc' type='Number' {...getFieldProps('wxqt_wxzc_nc') } onChange={this.handleInputChange}/> </td>
                                <td ><Input  id='wxqt_wxzc' type='Number' {...getFieldProps('wxqt_wxzc') } onChange={this.handleInputChange}/> </td>
                                <td style={{ textAlign: 'center' }} >减：已归还投资</td>
                                <td>58</td>
                                <td ><Input  id='syzqy_yhtz_nc' type='Number' {...getFieldProps('syzqy_yhtz_nc') } onChange={this.handleInputChange}/></td>
                                <td ><Input  id='syzqy_yhtz' type='Number' {...getFieldProps('syzqy_yhtz') } onChange={this.handleInputChange}/></td>
                            </tr>

                            <tr>
                                <td style={{ textAlign: 'center' }} >长期待摊费用</td>
                                <td>28</td>
                                <td ><Input  id='wxqt_cqdt_nc' type='Number' {...getFieldProps('wxqt_cqdt_nc') } onChange={this.handleInputChange}/> </td>
                                <td ><Input  id='wxqt_cqdt' type='Number' {...getFieldProps('wxqt_cqdt') } onChange={this.handleInputChange}/> </td>
                                <td style={{ textAlign: 'center' }} >实收资本（股本）净额</td>
                                <td>59</td>
                                <td ><Input id='syzqy_sszb_nc' type='Number'  {...getFieldProps('syzqy_sszb_nc') }disabled/></td>
                                <td ><Input  id='syzqy_sszb' type='Number' {...getFieldProps('syzqy_sszb') }disabled/></td>
                            </tr>

                            <tr>
                                <td style={{ textAlign: 'center' }} >其他长期资产</td>
                                <td>29</td>
                                <td ><Input id='wxqt_qtcq_nc' type='Number'  {...getFieldProps('wxqt_qtcq_nc') } onChange={this.handleInputChange}/> </td>
                                <td ><Input  id='wxqt_qtcq' type='Number' {...getFieldProps('wxqt_qtcq') } onChange={this.handleInputChange}/> </td>
                                <td style={{ textAlign: 'center' }} >资本公积</td>
                                <td>60</td>
                                <td ><Input  id='syzqy_zbgj_nc' type='Number' {...getFieldProps('syzqy_zbgj_nc') } onChange={this.handleInputChange}/></td>
                                <td ><Input  id='syzqy_zbgj' type='Number' {...getFieldProps('syzqy_zbgj') } onChange={this.handleInputChange}/></td>
                            </tr>

                            <tr>
                                <td style={{ textAlign: 'center' }} >无形资产和其他资产合计</td>
                                <td>30</td>
                                <td ><Input  id='wxqt_hj_nc' type='Number' {...getFieldProps('wxqt_hj_nc') }disabled/> </td>
                                <td ><Input  id='wxqt_hj' type='Number' {...getFieldProps('wxqt_hj') }disabled/> </td>
                                <td style={{ textAlign: 'center' }} >盈余公积</td>
                                <td>61</td>
                                <td ><Input  id='syzqy_yygj_nc' type='Number' {...getFieldProps('syzqy_yygj_nc') } onChange={this.handleInputChange}/></td>
                                <td ><Input  id='syzqy_yygj' type='Number' {...getFieldProps('syzqy_yygj') } onChange={this.handleInputChange}/></td>
                            </tr>

                            <tr>
                                <td style={{ textAlign: 'center' }} >递延税项：</td>
                                <td colSpan="3"></td>

                                <td style={{ textAlign: 'center' }} >未分配利润</td>
                                <td>62</td>
                                <td ><Input  id='syzqy_wfplr_nc' type='Number' {...getFieldProps('syzqy_wfplr_nc') } onChange={this.handleInputChange}/></td>
                                <td ><Input   id='syzqy_wfplr' type='Number' {...getFieldProps('syzqy_wfplr') } onChange={this.handleInputChange}/></td>
                            </tr>

                            <tr>
                                <td style={{ textAlign: 'center' }} >递延税款借项</td>
                                <td>31</td>
                                <td ><Input  id='ydsx_skjx_nc' type='Number' {...getFieldProps('ydsx_skjx_nc') } onChange={this.handleInputChange}/> </td>
                                <td ><Input  id='ydsx_skjx' type='Number' {...getFieldProps('ydsx_skjx') } onChange={this.handleInputChange}/> </td>
                                <td style={{ textAlign: 'center' }} >所有者权益(或股东权益) 合计</td>
                                <td>63</td>
                                <td ><Input  id='syzqy_hj_nc' type='Number' {...getFieldProps('syzqy_hj_nc') }disabled/></td>
                                <td ><Input  id='syzqy_hj' type='Number' {...getFieldProps('syzqy_hj') }disabled/></td>
                            </tr>

                            <tr>
                                <td style={{ textAlign: 'center' }} >资产总计</td>
                                <td>32</td>
                                <td ><Input id='zczj_nc' type='Number'  {...getFieldProps('zczj_nc') }disabled/> </td>
                                <td ><Input  id='zczj' type='Number' {...getFieldProps('zczj') }disabled/> </td>
                                <td style={{ textAlign: 'center' }} >负债和所有者权益(或股东权益) 合计</td>
                                <td>64</td>
                                <td ><Input  id='fzsyzqy_hj_nc' type='Number' {...getFieldProps('fzsyzqy_hj_nc') }disabled/></td>
                                <td ><Input  id='fzsyzqy_hj' type='Number' {...getFieldProps('fzsyzqy_hj') }disabled/></td>
                            </tr>

                            <tr>
                                <td></td>
                                <td style={{ textAlign: 'center' }} >所长：</td>
                                <td ><Input   {...getFieldProps('sz') }/> </td>
                                <td style={{ textAlign: 'center' }} >主管会计：</td>
                                <td ><Input   {...getFieldProps('zgkj') }/></td>
                                <td style={{ textAlign: 'center' }} >制表人：</td>
                                <td ><Input   {...getFieldProps('zbr') }/></td>
                                <td></td>
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
Addzcfzb = Form.create({
    mapPropsToFields(props) {
        let result = {};
        for (let prop in props.data) {
            result[prop] = { value: props.data[prop] }
        }
        return result;
    }
})(Addzcfzb);


module.exports = Addzcfzb