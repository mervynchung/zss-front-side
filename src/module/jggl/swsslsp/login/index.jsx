import React from 'react'
import {  DatePicker,Modal,Form, Input, Select,Table, Icon,Tabs,Button,Row,Col,message,Checkbox }from 'antd'
import {SelectorCS,SelectorYear} from 'component/compSelector'

const FormItem = Form.Item;
const createForm = Form.create;
const Option = Select.Option;

function noop() {
  return false;
}
let searchForm = React.createClass({
    getDefaultProps(){
        return {
            onSubmit: {}
        }
    },
    handleReset(e) {
        e.preventDefault();
        this.props.form.resetFields();
    },
    handleSubmit(e){
        e.preventDefault();
        let value = this.props.form.getFieldsValue();
        this.props.onSubmit(value);
    },
    userExists(rule, value, callback) {
        if (!value) {
          callback();
        } else {
          setTimeout(() => {
            if (value === 'JasonWood') {
              callback([new Error('抱歉，该用户名已被占用。')]);
            } else {
              callback();
            }
          }, 800);
        }
      },

      checkPass(rule, value, callback) {
        const { validateFields } = this.props.form;
        if (value) {
          validateFields(['rePasswd'], { force: true });
        }
        callback();
      },

      checkPass2(rule, value, callback) {
        const { getFieldValue } = this.props.form;
        if (value && value !== getFieldValue('passwd')) {
          callback('两次输入密码不一致！');
        } else {
          callback();
        }
      },

    render() {
    const { getFieldProps, getFieldError, isFieldValidating } = this.props.form;
    const nameProps = getFieldProps('name', {
      rules: [
        { required: true, min: 5, message: '用户名至少为 5 个字符' },
        { validator: this.userExists },
      ],
    });
    const passwdProps = getFieldProps('passwd', {
      rules: [
        { required: true, whitespace: true,min: 6, message: '密码至少为 6 个字符' },
        { validator: this.checkPass },
      ],
    });
    const rePasswdProps = getFieldProps('rePasswd', {
      rules: [{
        required: true,
        whitespace: true,
        min: 6,
        message: '请再次输入密码',
      }, {
        validator: this.checkPass2,
      }],
    });
    const xmProps = getFieldProps('xm', {
      rules: [
        { required: true, message: '请填写姓名' },
      ],
    });
    const formItemLayout = {
      labelCol: { span: 7 },
      wrapperCol: { span: 12 },
    };
    return (
      <Form horizontal form={this.props.form}>
        <FormItem
          {...formItemLayout}
          label="单位名称"
        >
          <Input {...getFieldProps('dwmc', { rules: [ { required: true, min: 5, message: '名称至少为 5 个字符' }]})}
           placeholder="请输入单位名称" />
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="账号名"
        >
          <Input {...getFieldProps('zhming', { rules: [ { required: true, min: 5, message: '名称至少为 5 个字符' }]})} 
          placeholder="用于登陆系统的账号名称" />
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="用户名"
        >
          <Input {...getFieldProps('yhming', { rules: [ { required: true, min: 5, message: '名称至少为 5 个字符' }]})}  />
        </FormItem>


        <FormItem
          {...formItemLayout}
          label="密码"
          hasFeedback
        >
          <Input {...passwdProps} type="password" autoComplete="off"
            onContextMenu={noop} onPaste={noop} onCopy={noop} onCut={noop}
          />
        </FormItem>

        <FormItem
          {...formItemLayout}
          label="确认密码"
          hasFeedback
        >
          <Input {...rePasswdProps} type="password" autoComplete="off" placeholder="两次输入密码保持一致"
            onContextMenu={noop} onPaste={noop} onCopy={noop} onCut={noop}
          />
        </FormItem>

        <FormItem
          {...formItemLayout}
          label="姓名"
        >
          <Input {...xmProps}  />
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="身份证号"
        >
          <Input {...getFieldProps('sfzh')}  />
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="移动电话"
        >
          <Input {...getFieldProps('yddh',{rules: [{'required': true}]})}  />
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="所在城市"
        >
          <SelectorCS {...getFieldProps('cs',{rules: [{'required': true,type:'number'}]})}  />
        <Checkbox {...getFieldProps('iswdfs', { valuePropName: 'checked',})}>是否外省主所在本省设立分所</Checkbox>
        </FormItem>
        <FormItem wrapperCol={{ span: 12, offset: 7 }}>
          <Button type="primary" onClick={this.handleSubmit}>确定</Button>
          &nbsp;&nbsp;&nbsp;
          <Button type="ghost" onClick={this.handleReset}>重置</Button>
        </FormItem>
      </Form>
    );
  },
});
searchForm = createForm()(searchForm);

module.exports = searchForm;