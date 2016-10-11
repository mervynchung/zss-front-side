import React from 'react'
import {Form,Row,Col,Input,Button,InputNumber,Select,DatePicker } from 'antd'
import Panel from 'component/compPanel'
import {SelectorISWS,SelectorSB,SelectorYWLX,SelectorHY,SelectorDQ} from 'component/compSelector'
import utils from 'common/utils'

const FormItem = Form.Item;
const createForm = Form.create;
const Option = Select.Option;

//定义纳税方式人性质下拉
const SelectNSRXZ = React.createClass({
    render(){
        return <Select {...this.props} >
            <Option value="0">一般纳税人</Option>
            <Option value="1">小规模纳税人</Option>
            <Option value="2">非增值税纳税人</Option>
        </Select>
    }
});
//定义征收
const SelectZSFS = React.createClass({
    render(){
        return <Select {...this.props} >
            <Option value="0">查账征收</Option>
            <Option value="1">核定征收</Option>
        </Select>
    }
});

//定义委托企业性质
const SelectWTDWXZ = React.createClass({
    render(){
        return <Select {...this.props} >
            <Option value="0">居民企业</Option>
            <Option value="1">非居民企业</Option>
        </Select>
    }
});
//定义签名执业税务师下拉
const SelectZysws = React.createClass({
    render(){
        const list = this.props.data;
        let options = list.map(item=> {
            return <Option key={item.ZYSWS_ID}>{item.XMING}</Option>
        });
        return <Select
          {...this.props}
          placeholder="点击选择"
          multiple
          style={{ width: '100%' }}>
            {options}
        </Select>
    }
});

let stage = React.createClass({
    getInitialState(){
        return {
            isws: 'N'
        }
    },
    handleISWS(value){
        this.setState({isws: value})
    },
    next(){
        this.props.form.validateFields((errors, values) => {
            if (!!errors) {
                return;
            }
            values = utils.transEmpty2Null(values);
            this.props.onSubmit({stage: 2, values: values});
        })
    },
    back(){
        this.props.onStageChange(0)
    },
    checkQmsws(rule, value, callback){
        if (!value || value.length != 2) {
            callback("只能选择两位签名税务师")
        } else {
            callback()
        }
    },
    checkCity(rule, value, callback){
        let isws = this.props.form.getFieldValue('ISWS');
        if (isws == 'Y' && (!value || !value.trim())) {
            callback("必填项");
        } else {
            callback()
        }
    },
    checkDq(rule, value, callback){
        let isws = this.props.form.getFieldValue('ISWS');
        if (isws === 'N' && !value) {
            callback("必填项")
        } else {
            callback()
        }
    },
    render(){

        const { getFieldProps } = this.props.form;
        const ywlx = this.props.ywlx;
        const qmswsProps = getFieldProps('QMSWS', {
            rules: [
                {validator: this.checkQmsws}
            ]
        });
        const dqProps = getFieldProps('DQ', {
            rules: [
                {validator: this.checkDq}
            ]
        });
        const cityProps = getFieldProps('CITY', {
            rules: [
                {validator: this.checkCity}
            ]
        });
        const bgwhProps = getFieldProps('BGWH', {
            rules: [
                {required: true, whitespace: true, message: '必填项'}
            ]
        });
        const bgrqProps = getFieldProps('BGRQ', {
            rules: [
                {required: true, type: 'date', message: '选择报告日期'}
            ]
        });
        const yjfhProps = getFieldProps('YJFH', {
            rules: [
                {required: true, whitespace: true, message: '必填项'}
            ]
        });
        const rjfhProps = getFieldProps('RJFH', {
            rules: [
                {required: true, whitespace: true, message: '必填项'}
            ]
        });
        const sjfhProps = getFieldProps('SJFH', {
            rules: [
                {required: true, whitespace: true, message: '必填项'}
            ]
        });
        const sfjeProps = getFieldProps('SFJE', {
            rules: [
                {required: true, type: 'number', message: '必填项'}
            ]
        });


        const tzValue = {};
        tzValue['2'] = <Row>
            <Col span="24">
                <FormItem
                  labelCol={{span: 4}} wrapperCol={{span: 8}}
                  label="所得税税前扣除项目鉴证金额" required>
                    <InputNumber  min={0} max={9999999999.99} step={0.01} style={{width:'75%'}} {...getFieldProps('TZVALUE1')}/>元
                </FormItem>
            </Col>
        </Row>;
        tzValue['3'] = <Row>
            <Col span="12">
                <FormItem
                  labelCol={{span: 8}} wrapperCol={{span: 12}}
                  label="纳税调整增加额" required>
                    <InputNumber  min={0} max={9999999999.99} step={0.01} style={{width:'75%'}} {...getFieldProps('TZVALUE1')}/>元
                </FormItem>
            </Col>
            <Col span="12">
                <FormItem
                  labelCol={{span: 8}} wrapperCol={{span: 12}}
                  label="纳税调整减少额" required>
                    <InputNumber  min={0} max={9999999999.99} step={0.01} style={{width:'75%'}} {...getFieldProps('TJVALUE2')}/>元
                </FormItem>
            </Col>
        </Row>;
        tzValue['4'] = <Row>
            <Col span="12">
                <FormItem
                  labelCol={{span: 8}} wrapperCol={{span: 12}}
                  label="应补税额" required>
                    <InputNumber min={0} max={9999999999.99} step={0.01} style={{width:'75%'}} {...getFieldProps('TZVALUE1')}/>元
                </FormItem>
            </Col>
            <Col span="12">
                <FormItem
                  labelCol={{span: 8}} wrapperCol={{span: 12}}
                  label="应退税额" required>
                    <InputNumber min={0} max={9999999999.99} step={0.01} style={{width:'75%'}} {...getFieldProps('TJVALUE2')}/>元
                </FormItem>
            </Col>
        </Row>;
        tzValue['5'] = tzValue['4'];
        tzValue['6'] = tzValue['4'];
        tzValue['8'] = tzValue['4'];
        tzValue['9'] = tzValue['4'];
        tzValue['10'] = <Row>
            <Col span="12">
                <FormItem
                  labelCol={{span: 8}} wrapperCol={{span: 12}}
                  label="调增应纳税额" required>
                    <InputNumber min={0} max={9999999999.99} step={0.01} style={{width:'75%'}} {...getFieldProps('TZVALUE1')}/>元
                </FormItem>
            </Col>
            <Col span="12">
                <FormItem
                  labelCol={{span: 8}} wrapperCol={{span: 12}}
                  label="调减应纳税额" required>
                    <InputNumber min={0} max={9999999999.99} step={0.01} style={{width:'75%'}} {...getFieldProps('TJVALUE2')}/>元
                </FormItem>
            </Col>
        </Row>;

        const swjg = {};
        swjg['Y'] = <Col span="9">
            <FormItem style={{width:'90%'}}>
                <Input placeholder="填写业务所属地，如黑龙江省哈尔滨市"  {...cityProps}/>
            </FormItem>
        </Col>;
        swjg['N'] = [];
        swjg['N'].push(<Col span="3" key="1">
            <FormItem style={{width:'90%'}}>
                <SelectorSB  {...getFieldProps('SB_DM', {initialValue: '1'})}/>
            </FormItem>
        </Col>);
        swjg['N'].push(<Col span="5" key="2">
            <FormItem style={{width:'90%'}}>
                <SelectorDQ placeholder="选择地区" {...dqProps}/>
            </FormItem>
        </Col>);
        swjg['N'].push(<Col span="4" key="3">
            <FormItem style={{width:'90%'}}>
                <Input placeholder="主管税务机关名称"  {...getFieldProps('ZGSWJG')}/>
            </FormItem>
        </Col>);


        return <Panel title="填写业务详细资料" className="stage">

            <Form horizontal>
                <Row>
                    <Col span="6">
                        <FormItem
                          labelCol={{span: 16}} wrapperCol={{span:7}}
                          label="主管税务机关">
                            <SelectorISWS {...getFieldProps('ISWS', {
                                initialValue: 'N',
                                onChange:this.handleISWS
                            })} />
                        </FormItem>
                    </Col>
                    {swjg[this.state.isws]}
                </Row>
                <Row>
                    <Col span="12">
                        <FormItem
                          labelCol={{span: 8}} wrapperCol={{span: 12}}
                          label="委托企业行业类型">
                            <SelectorHY  {...getFieldProps('HY_ID', {initialValue: '1'})}/>
                        </FormItem>
                    </Col>
                    <Col span="12">
                        <FormItem
                          labelCol={{span: 8}} wrapperCol={{span: 12}}
                          label="委托企业增值税纳税人类型">
                            <SelectNSRXZ  {...getFieldProps('NSRXZ', {initialValue: '0'})}/>
                        </FormItem>
                    </Col>
                </Row>
                <Row>
                    <Col span="12">
                        <FormItem
                          labelCol={{span: 8}} wrapperCol={{span: 12}}
                          label="委托企业征收方式">
                            <SelectZSFS  {...getFieldProps('ZSFS_DM', {initialValue: '0'})}/>
                        </FormItem>
                    </Col>
                    <Col span="12">
                        <FormItem
                          labelCol={{span: 8}} wrapperCol={{span: 12}}
                          label="委托企业性质">
                            <SelectWTDWXZ  {...getFieldProps('WTDWXZ_DM', {initialValue: '0'})}/>
                        </FormItem>
                    </Col>

                </Row>
                <Row>
                    <Col span="12">
                        <FormItem
                          labelCol={{span: 8}} wrapperCol={{span: 12}}
                          label="报告文号">
                            <Input  {...bgwhProps}/>
                        </FormItem>
                    </Col>
                    <Col span="12">
                        <FormItem
                          labelCol={{span: 8}} wrapperCol={{span: 12}}
                          label="报告日期">
                            <DatePicker  {...bgrqProps}/>
                        </FormItem>
                    </Col>
                </Row>
                <Row>
                    <Col span="24">
                        <FormItem
                          labelCol={{span: 4}} wrapperCol={{span: 10}}
                          label="一级复核" required={true}>
                            <Input style={{width:'60%'}} {...yjfhProps}/> 项目负责人的复核
                        </FormItem>
                    </Col>
                </Row>
                <Row>
                    <Col span="24">
                        <FormItem
                          labelCol={{span: 4}} wrapperCol={{span: 10}}
                          label="二级复核"
                          required>
                            <Input style={{width:'60%'}} {...rjfhProps}/> 部门负责人的复核
                        </FormItem>
                    </Col>
                </Row>
                <Row>
                    <Col span="24">
                        <FormItem
                          labelCol={{span: 4}} wrapperCol={{span: 10}}
                          label="三级复核"
                          required>
                            <Input style={{width:'60%'}} {...sjfhProps}/> 机构负责人的复核
                        </FormItem>
                    </Col>
                </Row>
                <Row>
                    <Col span="24">
                        <FormItem
                          labelCol={{span: 4}} wrapperCol={{span: 6}}
                          label="签名注册税务师" required>
                            <SelectZysws labelInValue data={this.props.zysws} {...qmswsProps}/>
                        </FormItem>
                    </Col>
                </Row>
                <Row>
                    <Col span="24">
                        <FormItem
                          labelCol={{span: 4}} wrapperCol={{span: 8}}
                          label="委托企业营业收入">
                            <InputNumber min={0} max={999999999999.99} step={0.01} style={{width:'75%'}} {...sfjeProps}/>元
                        </FormItem>
                    </Col>
                </Row>
                {tzValue[ywlx]}
                <Row>
                    <Col span="24">
                        <FormItem
                          labelCol={{span: 4}} wrapperCol={{span: 8}}
                          label="具体项目">
                            <Input style={{width:'100%'}} {...getFieldProps('JTXM')}/>
                        </FormItem>
                    </Col>
                </Row>

                <Row>
                    <Col span="10" offset="10">
                        <Button
                          size="large"
                          style={{marginRight:'16px'}}
                          onClick={this.back}>上一步</Button>
                        <Button
                          size="large"
                          onClick={this.next}>下一步</Button>

                    </Col>
                </Row>
            </Form>

        </Panel>
    }
});

stage = createForm({
    mapPropsToFields(props) {
        let result = {};
        for (let prop in props.data) {
            result[prop] = {value: props.data[prop]}
        }
        return result;
    }
})(stage);

module.exports = stage;