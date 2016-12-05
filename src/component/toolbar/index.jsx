import React from 'react'
import './style.css'
const c = React.createClass({
    render(){
        return <div className = "comp-toolbar">
            {this.props.children}
        </div>
    }
});

module.exports = c;