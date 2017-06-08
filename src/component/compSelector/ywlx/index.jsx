/**
 * 业务类型下拉选择器
 */
import React from 'react'
import {Select} from 'antd'

const Option = Select.Option;

const selectorYWLX = React.createClass({
    render(){
        return <Select {...this.props} placeholder="选择业务类型" allowClear>
            <Option key="1">企业技术开发费加计扣除报告</Option>
            <Option key="2">企业所得税税前扣除报告</Option>
            <Option key="3">企业所得税汇算清缴报告</Option>
            <Option key="4">土地增值税报告</Option>
            <Option key="5">房地产涉税调整报告</Option>
            <Option key="6">其它报告</Option>
            <Option key="7">高新技术企业认定专项鉴证报告</Option>
            <Option key="8">企业注销税务登记税款清算报告</Option>
            <Option key="9">企业变更税务登记税款清算报告</Option>
            <Option key="10">个人所得税汇算清缴报告</Option>
        </Select>
    }
});

module.exports = selectorYWLX;