/**
 * 省份下拉选择器
 */
import React from 'react'
import {Select} from 'antd'
import data from './model.js'

const Option = Select.Option;

const selectorDF = React.createClass({
    render(){
        const options = data.map(item=><Option key={item.ID}>{item.MC}</Option>)
        return <Select {...this.props} placeholder="选择地方" allowClear showSearch optionFilterProp='children'>
            {options}
        </Select>
    }
});

module.exports = selectorDF;