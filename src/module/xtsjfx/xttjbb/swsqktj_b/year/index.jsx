/**
 * 年份下拉选择器
 */
import React from 'react'
import {Select} from 'antd'

const Option = Select.Option;

const selectorYear = React.createClass({
    getYearOptions(){
        const year = new Date().getFullYear();
        const options =[];
        for(let i = 0; i<5 ; i++ ){
             let option =  <Option key={year-i}>{year-i}</Option>;
            options.push(option)
        }
        return options;
    },

    render(){
        const options = this.getYearOptions();
        return <Select {...this.props} defaultValue="2016"  placeholder="选择年度">
            {options}
            </Select>
    }
});

module.exports = selectorYear;