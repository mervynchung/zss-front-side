import React from 'react'
import './style.css'
const panel = React.createClass({
    render(){
        return <div className={'panel'}>
            <div className="panel-title">{this.props.title}</div>
            <div className="panel-body">
                {this.props.children}
            </div>
        </div>
    }
})

module.exports = panel;