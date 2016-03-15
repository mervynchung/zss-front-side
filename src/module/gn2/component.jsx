import React from 'react'
import {Calendar} from 'antd'

const gn2 = React.createClass({
    onPanelChange(value, mode) {
        console.log(value, mode);
    },
    render(){
        return <Calendar onPanelChange={this.onPanelChange} />
    }
})

module.exports=gn2;