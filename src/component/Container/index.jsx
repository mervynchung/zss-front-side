/**
 * 空白包裹框组件
 * @props.data {Object} 实体数据集
 */
import React from 'react'
import './style.css'

const c = React.createClass({

    render(){
        return <div className="comp-container">
            {this.props.children}
        </div>
    }
});

module.exports = c;