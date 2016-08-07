import React from 'react'
import {Select} from 'antd'

const Option = Select.Option;
const zysws = React.createClass({
    render(){
        const list = this.props.data;
        let options = list.map(item=>{
            return  <Option key = {item.ZYSWS_ID}>{item.XMING}</Option>
        });

        return <Select
          multiple
          style={{ width: '100%' }}
          placeholder="请选择执业税务师">
            <Option key="jack">杰克</Option>
            <Option key="lucy">露西</Option>
            <Option key="tom">汤姆</Option>
        </Select>
    }
});

module.exports = zysws;